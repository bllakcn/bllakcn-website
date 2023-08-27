"use client";
import react from "@/public/tech/react.svg";
import next from "@/public/tech/next.svg";
import html from "@/public/tech/html.svg";
import css from "@/public/tech/css.svg";
import js from "@/public/tech/js.svg";
import ts from "@/public/tech/ts.svg";
import fast from "@/public/tech/fast.svg";
import python from "@/public/tech/python.svg";
import tailwind from "@/public/tech/tailwind.svg";
import sass from "@/public/tech/sass.svg";
import Image from "next/image";
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
              <li className=" flex w-full even:justify-end" key={index}>
                <Image
                  className="h-24 w-24 saturate-0 transition-all hover:saturate-100"
                  src={tool.icon}
                  alt={tool.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
