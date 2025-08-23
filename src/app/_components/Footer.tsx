import { APP_ROUTES } from "@/lib/routes";
import Link from "next/link";
import Image from "next/image";

// images
import CosogLogo from "@/assets/logo.png";
import InstagramLogo from "@/assets/instagram_logo.svg";
import FacebookLogo from "@/assets/facebook_logo.svg";
import LinkedInLogo from "@/assets/linkedin_logo.svg";
import GmailLogo from "@/assets/gmail_logo.svg";

const Footer = () => {
  const FOOTER_ITEMS = [
    { name: "About us", link: APP_ROUTES.ABOUT.HOME },
    { name: "Our Programs", link: APP_ROUTES.PROGRAMS.HOME },
    { name: "Past Events", link: APP_ROUTES.EVENTS },
    { name: "Blog", link: APP_ROUTES.BLOG },
    { name: "Contact", link: APP_ROUTES.CONTACT },
    { name: "Donate", link: APP_ROUTES.DONATE },
  ];

  return (
    <footer className="mt-section bg-gray-bg w-full py-block brk-1400:px-[calc(((100%-1400px)/2)+50px)] px-standard">
      <main className="flex md:space-x-standard items-center w-full max-w-[1400px] mx-auto flex-col sm:flex-row brk-1400:px-0">
        <Image src={CosogLogo} width={100} height={100} alt="logo:" />
        <div className="navdata flex items-baseline w-full mt-standard flex-col space-y-standard justify-start v-sm:items-center v-sm:justify-between md:w-full md:mt-0 v-sm:flex-row">
          <aside className="space-y-small">
            <h1 className="font-semibold text-lg">
              Coding for Social Good Nepal
            </h1>
            <div className="navlist flex space-x-standard text-faded">
              <ul className="text-sm flex space-y-v-small flex-col">
                {FOOTER_ITEMS.slice(0, 3).map((item, index) => (
                  <Link href={item.link} key={index}>
                    <li>{item.name}</li>
                  </Link>
                ))}
              </ul>
              <ul className="text-sm flex space-y-v-small flex-col">
                {FOOTER_ITEMS.slice(3, 6).map((item, index) => (
                  <Link href={item.link as string} key={index}>
                    <li>{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </aside>

          <aside className="flex flex-col space-y-small">
            <div className="socialmedia h-fit w-fit cursor-pointer flex gap-small items-center">
              <a
                href="https://www.facebook.com/Cosognepal"
                target="blank"
                className="cursor-pointer"
              >
                <Image
                  src={FacebookLogo}
                  width={30}
                  height={30}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/cosognepal" target="blank">
                <Image
                  src={InstagramLogo}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cosognepal/"
                target="blank"
              >
                <Image
                  src={LinkedInLogo}
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com"
                target="blank"
              >
                <Image src={GmailLogo} width={30} height={30} alt="Gmail" />
              </a>
            </div>
            <div className="text_contents">
              <h4 className="text-sm text-faded">contact@cosognepal.org</h4>
              <h4 className="text-sm text-faded">
                ©2025 cosognepal.org <br /> All rights are reserved.
              </h4>
            </div>
          </aside>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
