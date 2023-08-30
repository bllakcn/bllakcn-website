"use client";

import Image from "next/image";
import profilePic from "@/public/avatar.jpg";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ backgroundSize: "26px 26px" }}
      animate={{ backgroundSize: "30px 30px" }}
      transition={{ duration: 0.8 }}
      className={`relative px-4 py-9 sm:py-36 ${styles.dot}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-stretch py-12 sm:flex-row"
      >
        <span className="-mt-6 flex-1 px-6 text-5xl font-medium sm:mt-0 md:px-0">
          <h3 className="pb-7">Hey, I&apos;m</h3>
          <h2 className="pb-1 font-bold">Ahmet Bilal Akcan</h2>
          <mark className="text-3xl font-bold italic">Web Developer</mark>
        </span>
        <Image
          className="w-1/2 rounded-full shadow-xl sm:w-1/4"
          alt="Avatar"
          src={profilePic}
        />
      </motion.div>
    </motion.section>
  );
}
