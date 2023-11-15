"use client";

import { allBlogs } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Tag } from "./[...slug]/page";
import BlogListDisplay from "./BlogListDisplay";

export default function BlogPage() {
  const [blogs, setBlogs] = useState(
    allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))),
  );
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    if (!tag) return;
    setBlogs(
      blogs.filter((blog) => blog.tags.some((t: Tag) => t.slug === tag)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return (
    <BlogListDisplay blogs={blogs}/>
  );
}
