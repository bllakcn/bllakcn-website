"use client";

import line from "@/public/line.svg";
import CssSvg from "@/components/TechStack/Css";
import FastSvg from "@/components/TechStack/Fast";
import HtmlSvg from "@/components/TechStack/Html";
import JsSvg from "@/components/TechStack/Js";
import NextSvg from "@/components/TechStack/Next";
import PythonSvg from "@/components/TechStack/Python";
import ReactSvg from "@/components/TechStack/React";
import SassSvg from "@/components/TechStack/Sass";
import TailwindSvg from "@/components/TechStack/Tailwind";
import TsSvg from "@/components/TechStack/Ts";
import { useTheme } from "next-themes";
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

export default function Portfolio() {
  const { theme } = useTheme();
  return (
    <section className="px-4 py-9 sm:py-36">
      <div className="max-w-5xl py-6">
        <h2 className="pb-6 text-5xl font-medium">Portfolio</h2>
        <div className="py-2">
          <h3 className="text-center text-2xl">My Tech Journey</h3>
          <ul
            style={{
              backgroundImage: `url(${line.src})`,
              backgroundSize: "100% 100%",
            }}
            className={`relative mx-auto my-5 flex max-w-xs flex-col overflow-hidden bg-no-repeat px-7`}
          >
            {tools.map((tool, index) => (
              <li className=" flex w-full flex-col even:items-end" key={index}>
                {cloneElement(tool.icon, {
                  stroke: theme === "dark" ? "#fff" : "",
                  className:
                    "h-24 w-24 peer transition-all hover:saturate-100 saturate-0",
                })}
                <span className="-mt-4 w-24 text-center font-medium peer-hover:opacity-100 sm:opacity-0 sm:transition-opacity">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
