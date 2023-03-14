import styles from "./index.module.css";
import Hero from "./components/Hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className={`${styles.main} snap-y snap-mandatory`}>
      <Head>
        <title>Bllakcn</title>
      </Head>
      <Hero />
    </div>
  );
}
