import { Link } from "@nextui-org/link";
import { IoArrowForward } from "react-icons/io5";
import ReactSvg from "../Portfolio/TechStack/React";
import PythonSvg from "../Portfolio/TechStack/Python";
import NextSvg from "../Portfolio/TechStack/Next";
import TailwindSvg from "../Portfolio/TechStack/Tailwind";

import NextLink from "next/link";
import { Fragment, cloneElement } from "react";
import { randomInt } from "crypto";

const tools = [
  { name: "Tailwindcss", icon: <TailwindSvg /> },
  { name: "React", icon: <ReactSvg /> },
  { name: "Next.js", icon: <NextSvg /> },
  { name: "Python", icon: <PythonSvg /> },
];

export default function QuickBio() {
  return (
    <section className="flex items-center px-4 py-36 pt-0 sm:pt-36">
      <div className="max-w-3xl py-12">
        <h2 className="pb-2 text-5xl font-medium">Quick Bio</h2>
        <h4 className="pb-6 text-lg italic">
          &quot;Architectural visionary turned self-taught web developer.&quot;
        </h4>
        <p className="pb-2 text-lg">
          I love creating beautiful and functional websites that seemlessly
          enfolder accessibility. I am driven by motivation and results. I am a
          team player who thrives on challenges. I am always looking for new
          ways to learn and grow. I am excited to continue my journey as a
          full-stack developer.
          <br />
          <br />I enjoy photography, videography and coffee making in spare
          time.
        </p>
        <Link isBlock href="/portfolio" as={NextLink}>
          <p>Get to know more</p>
          <IoArrowForward size="16" className="pt-1" strokeWidth="2" />
        </Link>
      </div>
      <div className="hidden flex-col px-12 sm:flex">
        {tools.map((tool, index) => (
          <Fragment key={index}>
            {cloneElement(tool.icon, {
              className: `w-16 h-16 saturate-0 hover:saturate-50 transition-all`,
            })}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
