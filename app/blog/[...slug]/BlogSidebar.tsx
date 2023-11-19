"use client";

import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

type BlogSidebarProps = {
  headers: {
    level: number;
    text: string;
    slug: string;
  }[];
};

export default function BlogSidebar({ headers }: BlogSidebarProps) {
  return (
    <ScrollShadow className="sticky top-32 hidden h-1/3 text-foreground-500 lg:block">
      <h3 className="mb-4 text-xl">Table of contents</h3>
      <ul className="space-y-2">
        {headers &&
          headers.map((header) => (
            <li key={`#${header.slug}`}>
              <Link
                className="text-foreground-500"
                as={NextLink}
                href={`#${header.slug}`}
              >
                {header.text}
              </Link>
            </li>
          ))}
      </ul>
    </ScrollShadow>
  );
}
