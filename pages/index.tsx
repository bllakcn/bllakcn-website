import styles from "./index.module.css";
import Hero from "./components/Hero/Hero";
import Head from "next/head";
import { Layout } from "./components/Layout/Layout";
import { ReactElement } from "react";
import { dmSans, NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className={`${styles.main} snap-y snap-mandatory`}>
      <Head>
        <title>Bllakcn</title>
      </Head>
      <Hero />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout className={`${dmSans.variable} font-sans`}>{page}</Layout>;
};

export default Home;
