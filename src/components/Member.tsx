import Image, { StaticImageData } from "next/image";
import LinkedInLogo from "@/assets/linkedin_logo.png";
import FacebookLogo from "@/assets/facebook_logo.png";
import InstagramLogo from "@/assets/instagram_logo.png";

type Tmember = {
  name: string;
  post: string;
  fb_link?: string;
  insta_link?: string;
  linkedin_link?: string;
  image: StaticImageData | string;
};

export default function Member({ data }: { data: Tmember }) {
  const { name, post, fb_link, insta_link, linkedin_link, image } = data;
  return (
    <div className="member member-container h-[350px] max-w-[320px] rounded-[5px] relative overflow-hidden group transition-all duration-100 ease-in-out">
      <Image
        src={image}
        height={350}
        width={320}
        alt={name}
        className="image object-cover min-h-full w-full"
      />
      <div className="description flex flex-col  h-1/2 w-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] group-hover:from-[rgba(0,0,0,0.9)] to-transparent absolute bottom-0 left-0 p-standard">
        <div className=" visible-section-description-members visible transition-all mt-[25%] group-hover:mt-standard duration-300 ease-in-out">
          <div className="title font-bold text-sub-title text-white">
            {name}
          </div>
          <div className="post font-normal text-para text-white-light">
            {post}
          </div>
        </div>
        <div className="socials flex space-x-small mt-[200%] opacity-0 group-hover:mt-small group-hover:opacity-100 transition-all duration-300 ease-in-out">
          {fb_link && fb_link != "#" ? (
            <a href={fb_link} target="blank" className="cursor-pointer">
              <Image
                src={FacebookLogo}
                className="grayscale hover:grayscale-0"
                width={25}
                height={25}
                alt="facebook_logo"
              />
            </a>
          ) : (
            ""
          )}
          {insta_link && insta_link != "#" ? (
            <a href={insta_link} target="blank">
              <Image
                src={InstagramLogo}
                className="grayscale hover:grayscale-0 "
                width={25}
                height={25}
                alt="instagram_logo"
              />
            </a>
          ) : (
            ""
          )}
          {linkedin_link ? (
            <a href={linkedin_link || "#"} target="blank">
              <Image
                src={LinkedInLogo}
                className="grayscale hover:grayscale-0"
                width={25}
                height={25}
                alt="linkedin_logo"
              />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
