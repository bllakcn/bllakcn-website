import { allBlogs } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export default function BlogPage() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <section className="px-4 py-36">
      <h2 className="text-5xl font-medium">Blog Posts</h2>
      <div className="prose dark:prose-invert">
        {blogs.map((post) => (
          <article key={post._id}>
            <Link href={post.slug} as={NextLink}>
              <h2>{post.title}</h2>
            </Link>
            <time
              dateTime={post.date}
              className="mb-2 block text-xs text-content dark:text-content4-dark"
            >
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
