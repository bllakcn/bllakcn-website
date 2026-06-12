import { notFound } from 'next/navigation';
import { allBlogs } from 'content-collections';
import { Metadata } from 'next';
import BlogDisplay from './_components/BlogDisplay';

type Params = Promise<{ slug: string[] }>;
interface BlogProps {
	params: Params;
}

async function getPostFromParams(params: { slug: string[] }) {
	const slug = params?.slug.join('/');
	const blog = allBlogs.find((blog) => blog._meta.path === slug);

	if (!blog) {
		return null;
	}

	return blog;
}

export async function generateMetadata({ params }: BlogProps): Promise<Metadata> {
	const resolvedParams = await params;
	const blog = await getPostFromParams(resolvedParams);

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
