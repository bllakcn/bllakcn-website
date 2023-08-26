import { Link } from "@nextui-org/link";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMailOutline,
} from "react-icons/io5";
import NextLink from "next/link";
import styles from "./Footer.module.css";

const socialMedia = [
  {
    name: "Linkedin",
    icon: <IoLogoLinkedin size={26} />,
    href: "https://www.linkedin.com/in/bllakcn/",
  },
  {
    name: "Github",
    icon: <IoLogoGithub size={26} />,
    href: "https://github.com/bllakcn",
  },
  {
    name: "Instagram",
    icon: <IoLogoInstagram size={26} />,
    href: "https://www.instagram.com/bllakcn",
  },
  {
    name: "Gmail",
    icon: <IoMailOutline size={26} />,
    href: "mailto:bllakcn35@gmail.com",
  },
];

export default function FooterComponent() {
  return (
    <footer className={`px-4 pt-12 relative ${styles.dot}`}>
      <div className="flex flex-col mx-auto justify-center items-center py-12 max-w-3xl">
        <ul className="flex gap-3">
          {socialMedia.map((item) => (
            <li className="flex items-center" key={item.name}>
              <Link
                className="p-1"
                title={item.name}
                as={NextLink}
                href={item.href}
                isExternal
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-center mt-4">
          © {new Date().getFullYear()} Ahmet Bilal Akcan
        </p>
      </div>
    </footer>
  );
}
