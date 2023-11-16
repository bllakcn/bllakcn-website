import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import BlogDisplay from "../[...slug]/BlogDisplay";

interface BlogProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogProps["params"]) {
  const slug = params?.slug?.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    null;
  }

  return blog;
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const blog = await getPostFromParams(params);

  return blog
    ? {
        title: blog.title,
        description: blog.description,
      }
    : {};
}

export async function generateStaticParams(): Promise<BlogProps["params"][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: BlogProps) {
  const blog = await getPostFromParams(params);

  if (!blog) {
    notFound();
  }

  return <BlogDisplay blog={blog} />;
}
