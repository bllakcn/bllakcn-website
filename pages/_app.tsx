import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";
import { Layout } from "./components/Layout/Layout";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--quick-sand",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${quickSand.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}
