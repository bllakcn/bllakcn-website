"use client";

import { Blog } from "@/.contentlayer/generated";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { format, parseISO } from "date-fns";
import { IoClose } from "react-icons/io5";

type BlogListDisplayProps = {
  blogs: Blog[];
  filterTag?: string | string[] | undefined;
};

export default function BlogListDisplay({
  blogs,
  filterTag,
}: BlogListDisplayProps) {
  return (
    <section className="min-h-screen px-4 py-9 sm:py-36">
      <div className="flex items-baseline gap-14">
        <h2 className="scroll-m-20 pb-4 text-4xl font-bold tracking-tight lg:text-5xl">
          Blog Posts
        </h2>
        {filterTag ? (
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Filter:</span>
            <Chip>{filterTag}</Chip>
            <Link as={NextLink} href="/blog" size="sm">
              <IoClose />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
      {blogs.length ? (
        <motion.ul
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {blogs.map((post, index) => (
            <li key={post._id}>
              <Link
                className="flex items-baseline justify-between gap-2"
                href={post.slug}
                color="foreground"
                as={NextLink}
              >
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {post.title}
                </h3>
                <time dateTime={post.date} className="text-xs text-primary">
                  {format(parseISO(post.date), "MMMM d, yyyy")}
                </time>
              </Link>
              <p className="p-1">{post.description}</p>
              {index !== blogs.length - 1 && <Divider />}
            </li>
          ))}
        </motion.ul>
      ) : (
        <p>No blog posts yet!</p>
      )}
    </section>
  );
}
