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
      className={`px-4 py-36 relative ${styles.dot}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse sm:flex-row mx-auto justify-stretch items-center py-12 max-w-3xl"
      >
        <span className="flex-1 px-6 -mt-6 sm:mt-0 md:px-0 font-medium text-5xl">
          <h3 className="pb-7">Hey, I&apos;m</h3>
          <h2 className="font-bold pb-1">Ahmet Bilal Akcan</h2>
          <mark className="text-3xl font-bold italic">Web Developer</mark>
        </span>
        <Image
          className="w-1/2 sm:w-1/4 rounded-full shadow-xl"
          alt="Avatar"
          src={profilePic}
        />
      </motion.div>
    </motion.section>
  );
}
