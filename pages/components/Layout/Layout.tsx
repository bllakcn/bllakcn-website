import React from "react";
// import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Navbar />
      <main className="pt-28 max-w-7xl mx-auto px-2 lg:px-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
