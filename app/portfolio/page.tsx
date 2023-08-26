"use client";
import { motion } from "framer-motion";
import react from "@/public/icons/react.png";
import next from "@/public/icons/nextjs.png";
import html from "@/public/icons/html.png";
import css from "@/public/icons/css.png";
import js from "@/public/icons/js.png";
import ts from "@/public/icons/typescript.png";
import fast from "@/public/icons/fast.png";
import python from "@/public/icons/python.png";
import tailwind from "@/public/icons/tailwind.png";
import sass from "@/public/icons/sass.png";
import Image from "next/image";
import styles from "./portfolio.module.css";
import line from "@/public/line.svg";

const tools = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Javascript", icon: js },
  { name: "Sass", icon: sass },
  { name: "React", icon: react },
  { name: "Tailwind", icon: tailwind },
  { name: "Typescript", icon: ts },
  { name: "Nextjs", icon: next },
  { name: "Python", icon: python },
  { name: "FastAPI", icon: fast },
];

export default function Portfolio() {
  return (
    <section className="px-4 py-36">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl py-6"
      >
        <h2 className="pb-6 text-5xl font-medium">Portfolio</h2>
        <div className="py-2">
          <h3 className="text-2xl">My Tech Journey</h3>
          <ul
            className={`relative mx-auto flex max-w-xs flex-col overflow-hidden bg-no-repeat px-7 py-3 ${styles.line}`}
          >
            {tools.map((tool) => (
              <li className=" flex w-full even:justify-end" key={tool.name}>
                <Image
                  className="h-14 w-14 saturate-0 transition-all hover:saturate-50"
                  src={tool.icon}
                  alt={tool.name}
                />
              </li>
            ))}
            {/* <Image
              className="absolute inset rotate-90"
              alt="line"
              src={line}
            /> */}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
