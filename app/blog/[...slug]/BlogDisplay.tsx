import { Divider } from "@nextui-org/divider";
import { Mdx } from "@/components/mdx-components";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Blog } from "@/.contentlayer/generated";
import { Tag } from "./page";

type BlogPageProps ={
  blog: Blog
}

export default function BlogDisplay ({ blog }: BlogPageProps) {
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
  )
}