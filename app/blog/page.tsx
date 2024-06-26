import { allBlogs } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';

import BlogListDisplay from './BlogListDisplay';

export default function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	let blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

	const tag = searchParams?.tag;
	if (tag) {
		blogs = blogs.filter((blog) => blog.tags?.some((t) => t.slug === tag));
	}

	return <BlogListDisplay filterTag={tag} blogs={blogs} />;
}
