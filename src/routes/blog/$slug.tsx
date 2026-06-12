import { createFileRoute, notFound } from "@tanstack/react-router";
import { allBlogs } from "content-collections";
import BlogDisplay from "@/components/blog/post/BlogDisplay";

export const Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const blog = allBlogs.find((item) => item._meta.path === params.slug);

		if (!blog) {
			throw notFound();
		}

		return { blog };
	},
	head: ({ loaderData }) => ({
		meta: loaderData?.blog
			? [
					{ title: loaderData.blog.title },
					{ name: "description", content: loaderData.blog.description },
				]
			: [],
	}),
	component: BlogPostPage,
});

function BlogPostPage() {
	const { blog } = Route.useLoaderData();
	return <BlogDisplay blog={blog} />;
}
