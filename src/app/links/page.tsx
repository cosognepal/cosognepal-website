"use client";

import React from "react";

interface Link {
  title: string;
  url: string;
}

const links: Link[] = [
  {
    title: "Program Details",
    url: "https://cosognepal.org/programs/code-for-charity",
  },
  {
    title: "Want website/help? (for non-profits)",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScojNFk_uLuQd48KgT8zkCrbRqPjApYeWPGPVeESG19rlxZ3A/viewform",
  },
  {
    title: "Get Involved (Volunteer)",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc2gUJOq5UNuBdoReEn2gPS-BgXt5NajkEgjhyFnQTBbaUjng/viewform",
  },
  {
    title: "Collaborate with us (for companies)",
    url: "forms.gle/nKwtAMG2Q4rL57QW7",
  },
  {
    title: "Read more on our blogs",
    url: "https://blog.cosognepal.org/",
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        {/* Header/Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Code for Charity
          </h1>
          <p className="text-sm md:text-base text-gray-600">Connect with us</p>
        </div>

        {/* Links Container */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-center text-base md:text-lg font-medium text-gray-800 hover:text-gray-900"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
