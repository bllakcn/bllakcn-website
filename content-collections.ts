import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import GithubSlugger from 'github-slugger';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { iconKeys } from './components/IconMap';
import { type Options } from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';

export const preProcess = () => (tree: any) => {
	visit(tree, (node) => {
		if (node?.type === 'element' && node?.tagName === 'pre') {
			const [codeEl] = node.children;

			if (codeEl.tagName !== 'code') return;

			node.raw = codeEl.children?.[0].value;
		}
	});
};

export const postProcess = () => (tree: any) => {
	visit(tree, (node) => {
		if (node?.type === 'element' && node?.tagName === 'div') {
			if (!('data-rehype-pretty-code-fragment' in node.properties)) {
				return;
			}

			node.properties['style'] = 'position: relative';

			for (const child of node.children) {
				if (child.tagName === 'pre') {
					child.properties['raw'] = node.raw;
				}
			}
		}
	});
};

const options: Options = {
	keepBackground: false,
	theme: 'vesper',
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
		tags: z.array(z.object({ name: z.string(), slug: z.string(), icon: z.enum(iconKeys) })),
		author: z.string(),
		toc: z.boolean().optional().default(true),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			// @ts-ignore
			remarkPlugins: [remarkGfm],
			// @ts-ignore
			rehypePlugins: [preProcess, rehypeSlug, [rehypePrettyCode, options], postProcess],
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
