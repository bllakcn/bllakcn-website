import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  technologies: string[];
  github: string;
  date: string;
};
