"use client";

import { allBlogs } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";

export default function BlogPage() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <section className="px-4 py-9 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl py-6"
      >
        <h2 className="pb-6 text-5xl font-medium">Blog Posts</h2>
        <ul className="flex flex-col gap-5">
          {blogs.map((post, index) => (
            <li key={post._id}>
              <Link
                className="flex items-baseline justify-between gap-2"
                href={post.slug}
                color="foreground"
                as={NextLink}
              >
                <h3 className="text-2xl font-medium">{post.title}</h3>
                <time dateTime={post.date} className="text-xs text-primary">
                  {format(parseISO(post.date), "MMMM d, yyyy")}
                </time>
              </Link>
              <p className="p-1">{post.description}</p>
              {index !== blogs.length - 1 && <Divider />}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
