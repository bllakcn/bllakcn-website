import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";

import { Divider } from "@nextui-org/divider";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Link } from "@nextui-org/Link";
import { Button } from "@nextui-org/Button";

interface BlogProps {
  params: {
    slug: string[];
  };
}

export interface Tag {
  title: string;
  slug: string;
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

  return (
    <article className="px-4 py-9 sm:py-36">
      <h2 className="scroll-m-20 pb-4 text-4xl font-bold tracking-tight lg:text-5xl">
        {blog.title}
      </h2>
      {blog.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {blog.description}
        </p>
      )}
      {blog.tags && (
        <div className="mt-4 flex flex-wrap gap-1">
          {blog.tags.map((tag: Tag) => (
            <Button
              as={Link}
              size="sm"
              href={`/blog?tag=${tag.slug}`}
              key={tag.slug}
            >
              {tag.title}
            </Button>
          ))}
        </div>
      )}
      <Divider className="my-4" />
      <div className="prose dark:prose-invert">
        <Mdx code={blog.body.code} />
      </div>
    </article>
  );
}
