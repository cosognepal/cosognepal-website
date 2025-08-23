"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "./Icon";
import { APP_ROUTES } from "@/lib/routes";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const NAV_ITEMS = [
    {
      name: "Our Programs",
      link: APP_ROUTES.PROGRAMS.HOME,
      hasDropdown: true,
      dropdownItems: [
        { name: "CS Awareness", link: APP_ROUTES.PROGRAMS.CS_AWARENESS },
        {
          name: "Code for Charity",
          link: APP_ROUTES.PROGRAMS.CODE_FOR_CHARITY,
        },
        {
          name: "Skill Development",
          link: APP_ROUTES.PROGRAMS.SKILL_DEVELOPMENT,
        },
        {
          name: "Coding Competitions",
          link: APP_ROUTES.PROGRAMS.CODING_COMPETITIONS,
        },
      ],
    },
    { name: "Past Events", link: APP_ROUTES.EVENTS },
    {
      name: "About us",
      link: APP_ROUTES.ABOUT.HOME,
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Impact", link: APP_ROUTES.ABOUT.OUR_IMPACT },
        { name: "Our Vision", link: APP_ROUTES.ABOUT.OUR_VISION },
        { name: "Our Team", link: APP_ROUTES.ABOUT.OUR_TEAM },
        { name: "Our Story", link: APP_ROUTES.ABOUT.HOME },
      ],
    },

    { name: "Blog", link: APP_ROUTES.BLOG },
    { name: "Contact", link: APP_ROUTES.CONTACT },
    // { name: "Donate", link: APP_ROUTES.DONATE },
  ];

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const handleProgramsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setProgramsDropdownOpen(!programsDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex flex-col items-start">
                <div className="text-lg md:text-xl font-extrabold leading-tight text-primary">
                  Cosog <span className="text-crimson">Nepal</span>
                </div>
              </Link>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button className="text-gray-700 hover:text-primary px-3 py-2 text-md font-medium transition-colors flex items-center gap-1">
                        {item.name}
                        <span className="transition-transform group-hover:rotate-180">
                          <ChevronDown width={18} height={18} />
                        </span>
                      </button>

                      <div className="absolute top-full left-0 mt-1 w-48 font-medium bg-white rounded-sm shadow-lg border border-gray-200 py-1 z-50 opacity-0 invisible translate-y-8 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                        {item.dropdownItems?.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              href={dropdownItem.link}
                              key={dropdownIndex}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.link as string}
                      className="text-gray-700 hover:text-primary px-3 py-2 text-md font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setNavActive(!navActive)}
              className="text-gray-700 hover:text-primary"
            >
              {navActive ? (
                <Icon iconName="close" className="h-6 w-6" />
              ) : (
                <Icon iconName="navopen" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {navActive && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {NAV_ITEMS.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={
                          item.name === "About us"
                            ? handleAboutClick
                            : handleProgramsClick
                        }
                        className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        {item.name}
                        <span
                          className={`transition-transform duration-300 ${
                            (item.name === "About us" && aboutDropdownOpen) ||
                            (item.name === "Our Programs" &&
                              programsDropdownOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          <ChevronDown width={18} height={18} />
                        </span>
                      </button>
                      {((item.name === "About us" && aboutDropdownOpen) ||
                        (item.name === "Our Programs" &&
                          programsDropdownOpen)) && (
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems?.map(
                            (dropdownItem, dropdownIndex) => (
                              <Link
                                href={dropdownItem.link}
                                key={dropdownIndex}
                                className="text-gray-600 hover:text-primary block px-3 py-2 text-sm"
                                onClick={() => {
                                  setAboutDropdownOpen(false);
                                  setProgramsDropdownOpen(false);
                                  setNavActive(false);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link as string}
                      className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                      onClick={() => setNavActive(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
