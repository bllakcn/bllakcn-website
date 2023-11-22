import "./globals.css";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import NavbarComponent from "@/components/Navbar/Navbar";
import FooterComponent from "@/components/Footer/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "bllakcn",
  description:
    "Explore Ahmet Bilal Akcan's web development portfolio. Discover the work of this self-taught developer with a background in architecture.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-screen bg-background text-foreground antialiased transition-colors selection:bg-secondary dark:selection:text-background ${outfit.className}`}
      >
        <Providers>
          <NavbarComponent />
          <main className="mx-auto max-w-7xl">{children}</main>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
