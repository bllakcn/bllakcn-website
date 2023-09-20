"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link
          className="text-4xl font-bold text-foreground"
          href="/"
          as={NextLink}
        >
          <h1>bllakcn</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="hidden sm:flex">
        {navLinks.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              color="foreground"
              className="font-bold"
              as={NextLink}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      {isMenuOpen && (
        <NavbarMenu>
          {navLinks.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color="foreground"
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
