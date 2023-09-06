"use client";

import { Project } from "@/app/types/Portfolio";
import ProjectShowcase from "./ProjectShowcase";
import { motion } from "framer-motion";
import ColPalImage from "@/public/projects/colpal.jpg";

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
    technologies: ["React", "Javascript", "Sass"],
  },
];

export default function Showcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-center text-2xl sm:text-left">Showcase</h3>
      {projects.map((project) => (
        <ProjectShowcase {...project} key={project.id} />
      ))}
    </motion.div>
  );
}
