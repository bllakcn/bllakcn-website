import type { Blog } from "content-collections";

export type BlogConfigItem = Pick<Blog, "title"> &
	Partial<Omit<Blog, "title">> & { slug: string };
