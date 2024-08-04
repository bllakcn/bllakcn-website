import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import GithubSlugger from 'github-slugger';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

/** @type {import('rehype-pretty-code').Options} */
const options = {
	// keepBackground: false,
	theme: 'one-dark-pro',
	defaultLang: 'plaintext',
	tokensMap: {
		fn: 'entity.name.function',
	},
};

const blogs = defineCollection({
	name: 'blogs',
	directory: 'content/blog',
	include: '**/*.mdx',
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		tags: z.array(z.object({ name: z.string(), slug: z.string(), icon: z.string() })),
		author: z.string(),
		toc: z.boolean().optional().default(true),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			// @ts-ignore
			remarkPlugins: [remarkGfm],
			// @ts-ignore
			rehypePlugins: [rehypeSlug, [rehypePrettyCode, options]],
		});
		const regXHeader = /^(#{1,6})\s+(.*)$/gm;

		const slugger = new GithubSlugger();
		const headings = [];
		let match;
		while ((match = regXHeader.exec(document.content)) !== null) {
			const [_, flag, content] = match;
			headings.push({
				level: flag.length,
				text: content,
				slug: slugger.slug(content),
			});
		}
		return {
			...document,
			mdx,
			headers: headings,
		};
	},
});

export default defineConfig({
	collections: [blogs],
});
