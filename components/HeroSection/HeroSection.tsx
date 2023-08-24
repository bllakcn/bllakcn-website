import Image from "next/image";
import profilePic from "@/public/avatar.jpg";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={`px-4 py-36 relative ${styles.dot}`}>
      <div className="flex mx-auto justify-stretch items-center max-w-3xl">
        <span className="flex-1 font-medium text-5xl">
          <h3 className="pb-6">Hey, I&apos;m</h3>
          <h2 className="font-bold pb-1">Ahmet Bilal Akcan</h2>
          <mark className="text-3xl font-bold italic">Web Developer</mark>
        </span>
        <Image
          className="w-1/4 rounded-full shadow-xl"
          alt="Avatar"
          src={profilePic}
        />
      </div>
    </section>
  );
}
