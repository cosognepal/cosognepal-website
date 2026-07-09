"use client";

import { useState } from "react";
import { sendWelcomeEmail } from "@/app/contact/email";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    message: "",
    website: "", // honeypot field
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    // Honeypot check: if this hidden field has any value, likely a bot
    if (formData.website) {
      console.warn("Honeypot triggered - possible bot submission.");
      return false;
    }

    let valid = true;
    const errors = { email: "", phoneNumber: "", message: "" };

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
      valid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        await sendWelcomeEmail(
          formData.email,
          formData.phoneNumber,
          formData.message
        );

        // Reset form (also reset honeypot)
        setFormData({
          email: "",
          phoneNumber: "",
          message: "",
          website: "",
        });

        alert("Email sent successfully!");
      } catch (error) {
        alert("Failed to send email. Please try again later.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Optional: you can silently ignore honeypot or give generic message
      // alert("Submission blocked.");
    }
  };

  return (
    <>
    <main id="main-content" tabIndex={-1} className="px-standard w-full max-w-content mx-auto space-y-block outline-none">
      <form onSubmit={handleSubmit} className="text-faded space-y-small" noValidate>
        {/* Honeypot field - visually hidden off-screen but present in DOM */}
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <label htmlFor="website">Do not fill</label>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <h1 className="text-mid-title font-bold text-black-mid">
          Send a message
        </h1>
        <div className="emailSection space-y-small">
          <label htmlFor="contact-email" className="text-sub-para">
            Email
          </label>
          <input
            required
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: contact@cosognepal.org"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
          />
          {errors.email && (
            <p id="contact-email-error" className="text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="phoneNumberSection space-y-small">
          <label htmlFor="contact-phone" className="text-sub-para">
            Phone Number
          </label>
          <input
            required
            id="contact-phone"
            name="phoneNumber"
            type="tel"
            inputMode="numeric"
            onChange={handleChange}
            value={formData.phoneNumber}
            placeholder="Ex: 9866776670"
            aria-invalid={Boolean(errors.phoneNumber)}
            aria-describedby={
              errors.phoneNumber ? "contact-phone-error" : undefined
            }
            className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
          />
          {errors.phoneNumber && (
            <p id="contact-phone-error" className="text-red-500" role="alert">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <div className="textAreaSection space-y-small">
          <label htmlFor="contact-message" className="text-sub-para">
            Message
          </label>
          <textarea
            rows={10}
            cols={30}
            required
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className="rounded-md w-full h-44 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
            placeholder="Ex: Hey Cosog Nepal thank you for your work I love what you are doing keep doing the same work..."
          ></textarea>
          {errors.message && (
            <p id="contact-message-error" className="text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div className="btn w-full flex text-para">
          <button
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            className={` h-12 rounded-md w-full md:w-[40%] overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>

      <div className="socialsSection text-faded space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">Our Socials</h2>
        <p className="text-sub-para font-medium text-black-light space-x-[5px]">
          You can connect with us via our&nbsp;
          <a
            href="https://www.facebook.com/cosognepal"
            className="text-blue-blue"
            target="blank"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/cosognepal"
            className=" text-blue-blue"
            target="blank"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/cosognepal/"
            className=" text-blue-blue"
            target="blank"
          >
            Linkedin
          </a>
          &nbsp;and
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com"
            className="text-blue-blue"
            target="_blank"
          >
            Gmail
          </a>
          .
        </p>
      </div>

      <div className="contactSection space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">
          Contact Number
        </h2>
        <p className="text-sub-para font-medium text-black-light">
          You can connect with us via our&nbsp;
          <a
            href="tel:+9779863196247"
            className="text-blue-blue"
            target="blank"
          >
            +977 9863196247
          </a>
          , this contact number is available for contact during office time of
          Nepal.
        </p>
      </div>

      <div className="organizationalMailSection space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">
          Organization Email
        </h2>
        <p className="text-sub-para font-medium text-black-light">
          You can get in touch by mailing us at:
          <a
            href="mailto:contact@cosognepal.org"
            className="text-blue-blue"
            target="blank"
          >
            &nbsp;contact@cosognepal.org
          </a>
        </p>
      </div>
    </main>
    </>
  );
};

export default ContactPage;
