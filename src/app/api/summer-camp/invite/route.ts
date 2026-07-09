import { NextResponse } from "next/server";

import { buildSummerCampInviteEmail } from "@/lib/emails/summerCampInviteEmail";
import { getFrom, getTransporter, type MailRecipient } from "@/lib/emails/mailer";

type InviteRequestBody = {
  recipients: MailRecipient[];
  /** Defaults to https://summercamp.cosognepal.org */
  programUrl?: string;
  /** Defaults to programUrl */
  applyUrl?: string;
  /** Human readable text used in the email subject/body. */
  deadlineText?: string;
  /** Used to sign the email. */
  senderName?: string;
  /** Optional CC on every sent message (string or list of emails). */
  cc?: string | string[];
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.INVITE_API_KEY;
    if (apiKey) {
      const provided = req.headers.get("x-api-key") || "";
      if (provided !== apiKey) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const body = (await req.json()) as InviteRequestBody;
    const recipients = body.recipients ?? [];

    if (!Array.isArray(recipients) || recipients.length < 1) {
      return NextResponse.json(
        { error: "recipients[] is required" },
        { status: 400 }
      );
    }

    const programUrl = body.programUrl || "https://summercamp.cosognepal.org";
    const applyUrl = body.applyUrl || programUrl;
    const deadlineText = body.deadlineText || "May 20, 2026 (11:59 PM NPT)";
    const senderName = body.senderName || "Cosog Nepal Summer Camp Team";

    const ccRaw = body.cc;
    const cc =
      ccRaw === undefined || ccRaw === null || ccRaw === ""
        ? undefined
        : Array.isArray(ccRaw)
          ? ccRaw.filter(Boolean).join(", ")
          : String(ccRaw).trim() || undefined;

    const invalid = recipients.filter(
      (r) => !r?.email || !isValidEmail(String(r.email))
    );
    if (invalid.length) {
      return NextResponse.json(
        { error: "Invalid recipient emails", invalid },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    const from = getFrom();

    const results = await Promise.all(
      recipients.map(async (recipient) => {
        const { subject, html, text } = buildSummerCampInviteEmail({
          recipient,
          applyUrl,
          deadlineText,
          programUrl,
          senderName,
        });

        const info = await transporter.sendMail({
          from,
          to: `${recipient.name} <${recipient.email}>`,
          ...(cc ? { cc } : {}),
          subject,
          html,
          text,
        });

        return {
          recipient,
          messageId: info.messageId,
          accepted: info.accepted,
          rejected: info.rejected,
          response: info.response,
        };
      })
    );

    return NextResponse.json({ ok: true, results });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

