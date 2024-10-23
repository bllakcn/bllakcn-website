import { allBlogs } from 'content-collections';
import { compareDesc } from 'date-fns';
import BlogListDisplay from './_components/BlogListDisplay';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
	const searchParams = await props.searchParams;

	let blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

	const tag = searchParams?.tag;
	if (tag) {
		blogs = blogs.filter((blog) => blog.tags?.some((t) => t.slug === tag));
	}

	return <BlogListDisplay filterTag={tag} blogs={blogs} />;
}
