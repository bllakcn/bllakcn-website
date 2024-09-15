import { BlogConfigItem } from '@/types/blog';
import { NavBarItem } from '@/types/navbar';
import { allBlogs } from 'content-collections';

export interface DocsConfig {
	NavbarLinks: NavBarItem[];
	Blogs: BlogConfigItem[];
}

export const docsConfig: DocsConfig = {
	NavbarLinks: [
		{ title: 'home', href: '/' },
		{ title: 'elements', href: '/elements' },
		{ title: 'blog', href: '/blog' },
	],
	Blogs: [
		...allBlogs.map((blog) => ({
			title: blog.title,
			slug: blog._meta.path,
		})),
	],
};
