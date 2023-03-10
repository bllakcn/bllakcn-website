import styles from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";
import { SlDirection, SlNotebook } from "react-icons/sl";
import Link from "next/link";
import Hamburger from "./Hamburger";

const navigation = [
  { content: "Blog", link: "/blog", icon: SlNotebook, id: 1 },
  { content: "Contact", link: "/contact", icon: SlDirection, id: 2 },
];

export default function Navbar() {
  return (
    <nav
      className={`bg-neutral-600 fixed w-full h-24 flex items-center justify-center ${styles.navbar}`}
    >
      <ul className="flex w-full justify-between items-center flex-row max-w-7xl px-6 md:px-8 lg:px-10">
        <li className="flex-1">
          <Link href="/" className="font-extrabold text-3xl inline-block p-2">
            <h1>bllakcn</h1>
          </Link>
        </li>
        <ul className="hidden sm:flex gap-6">
          {navigation.map(({ link, content, icon, id }) => (
            <li key={id}>
              <NavbarLink link={link} content={content} Icon={icon} />
            </li>
          ))}
        </ul>
        <Hamburger />
      </ul>
    </nav>
  );
}
