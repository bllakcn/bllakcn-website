import { Divider } from "@nextui-org/divider";
import { Mdx } from "@/components/mdx-components";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Blog } from "@/.contentlayer/generated";
import { User } from "@nextui-org/user";
import Avatar from "@/public/avatar.jpg";

type BlogPageProps = {
  blog: Blog;
};

export default function BlogDisplay({ blog }: BlogPageProps) {
  return (
    <article className="px-4 py-9 sm:py-36">
      <div className="space-y-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {blog.title}
          </h2>
          {blog.author && (
            <User
              className="justify-start"
              name={blog.author}
              avatarProps={{ src: Avatar.src, isBordered: true }}
            />
          )}
        </div>
        {blog.description && (
          <p className="text-xl text-slate-700 dark:text-slate-200">
            {blog.description}
          </p>
        )}
        {blog.tags && (
          <div className="flex flex-wrap gap-1">
            {blog.tags.map((tag) => (
              <Button
                as={Link}
                size="sm"
                href={`/blog?tag=${tag.slug}`}
                endContent={
                  <div className="h-auto w-10">
                    <Mdx code={tag.icon.code} />
                  </div>
                }
                key={tag.name}
              >
                {tag.name}
              </Button>
            ))}
          </div>
        )}
      </div>
      <Divider className="my-4" />
      <div className="prose dark:prose-invert">
        <Mdx code={blog.body.code} />
      </div>
    </article>
  );
}
