import styles from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav
      className={`bg-neutral-600 fixed w-full h-24 flex items-center justify-center  ${styles.navbar}`}
    >
      <ul className="flex w-full justify-between flex-row max-w-7xl gap-6 px-6 md:px-8 lg:px-10">
        <li className="flex-1">
          <div>
            <NavbarLink
              link="/"
              content={"bllakcn"}
              className={"text-2xl font-extrabold"}
            />
          </div>
        </li>
        <li>
          <NavbarLink link="/blog" content={"Blog"} />
        </li>
        <li>
          <NavbarLink link="/contact" content={"Contact"} />
        </li>
      </ul>
    </nav>
  );
}
