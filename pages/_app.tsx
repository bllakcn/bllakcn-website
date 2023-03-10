import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { Layout } from "./components/Layout/Layout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${dmSans.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}
