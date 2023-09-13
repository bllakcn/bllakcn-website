"use client";

import Line from "./Line";
import CssSvg from "./TechStack/Css";
import FastSvg from "./TechStack/Fast";
import HtmlSvg from "./TechStack/Html";
import JsSvg from "./TechStack/Js";
import NextSvg from "./TechStack/Next";
import PythonSvg from "./TechStack/Python";
import ReactSvg from "./TechStack/React";
import SassSvg from "./TechStack/Sass";
import TailwindSvg from "./TechStack/Tailwind";
import TsSvg from "./TechStack/Ts";
import { motion } from "framer-motion";
import { cloneElement } from "react";

const tools = [
  { name: "HTML", icon: <HtmlSvg /> },
  { name: "CSS", icon: <CssSvg /> },
  { name: "Javascript", icon: <JsSvg /> },
  { name: "Sass", icon: <SassSvg /> },
  { name: "React", icon: <ReactSvg /> },
  { name: "Tailwindcss", icon: <TailwindSvg /> },
  { name: "Typescript", icon: <TsSvg /> },
  { name: "Next.js", icon: <NextSvg /> },
  { name: "Python", icon: <PythonSvg /> },
  { name: "FastAPI", icon: <FastSvg /> },
];

export default function TechJourney() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        My Tech Journey
      </h3>
      <blockquote className="font-thin italic tracking-wide">
        Technologies I&apos;ve worked with so far
      </blockquote>
      <ul
        className={`relative mx-auto my-5 flex flex-col px-7 sm:flex-row sm:flex-wrap`}
      >
        <li>
          <Line className="absolute left-1/3 top-0 h-full sm:hidden" />
        </li>
        {tools.map((tool, index) => (
          <li
            className="relative flex flex-1 items-center justify-start odd:flex-row-reverse sm:flex-col sm:items-center sm:justify-center sm:odd:flex-col"
            key={index}
          >
            {cloneElement(tool.icon, {
              className:
                "h-24 w-24 sm:w-auto sm:h-auto peer transition-all hover:saturate-100 saturate-0",
            })}
            <span className="text-center font-medium peer-hover:opacity-100 sm:opacity-0 sm:transition-opacity">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
