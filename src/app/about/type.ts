import { StaticImageData } from "next/image";

export type TdescriptorData = {
  title: string;
  descriptions: string[];
  list?: string[];
};

export type Tmember = {
  name: string;
  email: string;
  fb_link?: string;
  insta_link?: string;
  linkedin_link?: string;
  image: StaticImageData;
  post: string;
};
