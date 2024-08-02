import { defineCollection, defineConfig } from '@content-collections/core';

const blogs = defineCollection({
	name: 'blogs',
	directory: 'content/blog',
	include: '**/*.md',
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		tags: z.array(z.object({ name: z.string(), slug: z.string(), icon: z.string() })),
		author: z.string(),
		toc: z.boolean().optional().default(true),
	}),
});

export default defineConfig({
	collections: [blogs],
});
