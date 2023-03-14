import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
