"use client";

import styles from "./Navbar.module.css";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { navigation } from "./Navbar";

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="block sm:hidden">
      <li className="items-center" onClick={() => setIsActive(!isActive)}>
        <button
          className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
            isActive ? styles.isActive : ""
          } p-2`}
          type="button"
        >
          <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
          </span>
        </button>
      </li>
      <div
        className={`${isActive ? "block" : "hidden"} ${
          styles.navbarMobile
        } absolute right-0 top-0 pt-24 w-full -z-10 bg-neutral-500`}
      >
        <ul className="flex flex-col items-center">
          {navigation.map(({ link, content, icon, id }) => (
            <li
              key={id}
              className="border-b-2 max-w-sm w-full last-of-type:border-none border-neutral-400"
            >
              <NavbarLink link={link} content={content} Icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
