import { allBlogs } from "content-collections";
import type { BlogConfigItem } from "@/types/blog";
import type { NavBarItem } from "@/types/navbar";

export interface DocsConfig {
	NavbarLinks: NavBarItem[];
	Blogs: BlogConfigItem[];
}

export const docsConfig: DocsConfig = {
	NavbarLinks: [
		{ title: "home", href: "/" },
		{ title: "resume", href: "/resume" },
		{ title: "elements", href: "/elements" },
		{ title: "blog", href: "/blog" },
	],
	Blogs: [
		...allBlogs.map((blog) => ({
			title: blog.title,
			slug: blog._meta.path,
		})),
	],
};
