import { StaticImageData } from "next/image";
import { FC, SVGProps } from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  technologies: FC<SVGProps<SVGSVGElement>>[];
  github: string;
  date: string;
};
