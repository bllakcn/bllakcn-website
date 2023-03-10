"use client";

import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      className="flex sm:hidden items-center"
      onClick={() => setIsActive(!isActive)}
    >
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
  );
}
