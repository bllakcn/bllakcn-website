"use client";

import { Project } from "@/app/types/Portfolio";
import ProjectShowcase from "./ProjectShowcase";
import { motion } from "framer-motion";
import ColPalImage from "@/public/projects/colpal.jpg";
import PostitImage from "@/public/projects/postit.jpg";
import ReactSvg from "./TechStack/React";
import SassSvg from "./TechStack/Sass";
import TailwindSvg from "./TechStack/Tailwind";
import TsSvg from "./TechStack/Ts";
import JsSvg from "./TechStack/Js";
import NextSvg from "./TechStack/Next";

const projects: Project[] = [
  {
    id: 1,
    title: "ColPal",
    description:
      "Generate & save cool color palettes on your browser easy and fast.",
    image: ColPalImage,
    link: "https://colpal-generatecolors.netlify.app/",
    date: "January 2023",
    github: "https://github.com/bllakcn/color-palette-generator",
    technologies: [ReactSvg, JsSvg, SassSvg],
  },
  {
    id: 2,
    title: "Postit",
    description: "Post and comment on posts",
    image: PostitImage,
    link: "https://postit-jet.vercel.app/",
    date: "March 2023",
    github: "https://github.com/bllakcn/postit",
    technologies: [NextSvg, TsSvg, TailwindSvg],
  },
];

export default function Showcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Showcase
      </h3>
      <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-3">
        {projects.map((project) => (
          <ProjectShowcase {...project} key={project.id} />
        ))}
      </div>
    </motion.div>
  );
}
