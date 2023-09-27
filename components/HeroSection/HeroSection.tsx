"use client";

import Image from "next/image";
import profilePic from "@/public/avatar.jpg";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

export default function HeroSection() {
  const [isNotationVisible, setIsNotationVisible] = useState(false);

  return (
    <motion.section
      initial={{ backgroundSize: "26px 26px" }}
      animate={{ backgroundSize: "30px 30px" }}
      transition={{ duration: 0.8 }}
      className={`relative flex h-screen items-center px-4 py-9 sm:pb-36 sm:pt-16 ${styles.dot}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setIsNotationVisible(true)}
        className="m-12 mx-auto mb-24 flex max-w-3xl flex-col-reverse items-center justify-stretch sm:flex-row"
      >
        <span className="flex-1 px-6 text-center text-5xl font-medium sm:mt-0 sm:text-left md:px-0">
          <h3 className="pb-7">Hey, I&apos;m</h3>
          <h2 className="pb-1 font-bold">Ahmet Bilal Akcan</h2>
          <RoughNotation
            type="highlight"
            padding={1}
            animationDelay={500}
            color="gold"
            show={isNotationVisible}
          >
            <h3 className="my-5 inline-block bg-clip-text text-3xl font-bold italic text-overlay">
              Web Developer
            </h3>
          </RoughNotation>
        </span>
        <Image
          className="w-1/2 rounded-full shadow-xl sm:w-1/4"
          alt="Avatar"
          src={profilePic}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.section>
  );
}
