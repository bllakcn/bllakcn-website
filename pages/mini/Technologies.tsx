import Image from "next/image";
import { SlLike } from "react-icons/sl";

const technologies = {
  development: [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "Javascript", icon: "/js.png" },
    { name: "Typescript", icon: "/typescript.png" },
    { name: "React", icon: "/react.png" },
    { name: "Nextjs", icon: "/nextjs.png" },
    { name: "Svelte", icon: "/svelte.png" },
    { name: "Sass", icon: "/sass.png" },
    { name: "Tailwind", icon: "/tailwind.png" },
  ],
  content: [
    { name: "Photoshop", icon: "/ps.png" },
    { name: "Illustrator ", icon: "/ai.png" },
    { name: "Xd", icon: "/xd.png" },
    { name: "Lightroom", icon: "/lr.png" },
    { name: "Spline", icon: "/spline.png" },
  ],
};

export default function Technologies() {
  return (
    <div className="pl-3 w-full">
      <div className="pb-2">
        <div className="flex gap-2 justify-start items-baseline p-2">
          <SlLike className="" />
          <h3 className="tracking-widest">developing with</h3>
        </div>
        <ul className="flex gap-2 px-4 py-2">
          {technologies.development.map((tech) => (
            <li key={tech.name}>
              <Image
                className=""
                src={tech.icon}
                alt={tech.name}
                width={30}
                height={30}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-2">
        <div className="flex gap-2 p-2">
          <SlLike className="" />
          <h3 className="tracking-widest">creating content with</h3>
        </div>
        <ul className="flex gap-2 p-2">
          {technologies.content.map((tech) => (
            <li key={tech.name}>
              <Image
                className="saturate-50"
                src={tech.icon}
                alt={tech.name}
                width={30}
                height={30}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
