import { createFileRoute } from "@tanstack/react-router";
import { allBlogs } from "content-collections";
import { compareDesc } from "date-fns";
import BlogListDisplay from "@/components/blog/BlogListDisplay";

export const Route = createFileRoute("/blog/")({
	validateSearch: (search: Record<string, unknown>) => ({
		tag: typeof search.tag === "string" ? search.tag : undefined,
	}),
	loaderDeps: ({ search }) => ({ tag: search.tag }),
	loader: ({ deps }) => {
		let blogs = [...allBlogs].sort((a, b) =>
			compareDesc(new Date(a.date), new Date(b.date)),
		);

		if (deps.tag) {
			blogs = blogs.filter((blog) =>
				blog.tags?.some((t) => t.slug === deps.tag),
			);
		}

		return { blogs, filterTag: deps.tag };
	},
	component: BlogPage,
});

function BlogPage() {
	const { blogs, filterTag } = Route.useLoaderData();
	return <BlogListDisplay filterTag={filterTag} blogs={blogs} />;
}
