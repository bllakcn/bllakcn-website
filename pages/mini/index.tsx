import Head from "next/head";
import Link from "next/link";
import { dmSans } from "../_app";
import styles from "./index.module.css";
import SocialMedia from "./SocialMedia";
import Technologies from "./Technologies";

export default function Mini() {
  return (
    <main
      className={`${dmSans.variable} font-sans flex flex-col justify-start items-start bg-neutral-800 min-h-screen`}
    >
      <Head>
        <title>bllakcn</title>
      </Head>

      <h1
        className={`${styles.logo} relative flex text-xl items-baseline font-bold px-6 py-2 mb-8 bg-neutral-700 w-full before:bg-primary before:outline-1 before:outline`}
      >
        bllakcn
      </h1>
      <div className="px-1 pt-6 pb-12">
        <h2 className="text-6xl">
          Hi, I&apos;m{" "}
          <span className="font-bold text-primary text-7xl">Bilal</span>
        </h2>
        <p className="font-mono text-xl">{"// I develop user interfaces"}</p>
      </div>
      <div className="border-l pb-24 border-neutral-400 ml-3">
        <h3 className="px-3 pb-4 pt-2 font-bold text-xl">Quick info</h3>
        <Technologies />
        <SocialMedia />
      </div>
      <Link className="ml-3 -mt-3" href={"/"}>
        <h5 className="font-bold text-lg p-3 border text-primary border-neutral-400 shadow-black rounded-lg">
          Go to main website
        </h5>
      </Link>
    </main>
  );
}
