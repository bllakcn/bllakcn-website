import "./globals.css";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import NavbarComponent from "@/components/Navbar/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "bllakcn",
  description: "Web Dev Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen text-foreground bg-background ${outfit.className}`}
      >
        <Providers>
          <NavbarComponent />
          {/* <ThemeSwitcher /> */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
