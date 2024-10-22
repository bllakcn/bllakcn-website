import { notFound } from 'next/navigation';
import { allBlogs } from 'content-collections';
import { Metadata } from 'next';
import BlogDisplay from './_components/BlogDisplay';

interface BlogProps {
	params: Promise<{
		slug: string[];
	}>;
}

async function getPostFromParams(params: { slug: string[] }) {
	const slug = params?.slug?.join('/');
	const blog = allBlogs.find((blog) => blog._meta.path === slug);

	if (!blog) {
		null;
	}

	return blog;
}

export async function generateMetadata(props: {
	params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
	const params = await props.params;
	const blog = await getPostFromParams(params);

	return blog
		? {
				title: blog.title,
				description: blog.description,
			}
		: {};
}

export async function generateStaticParams() {
	return allBlogs.map((blog) => ({
		slug: blog._meta.filePath.split('/'),
	}));
}

export default async function PostPage(props: BlogProps) {
	const params = await props.params;
	const blog = await getPostFromParams(params);

	if (!blog) {
		notFound();
	}

	return <BlogDisplay blog={blog} />;
}
