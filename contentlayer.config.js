import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "one-dark-pro",
  defaultLang: "plaintext",
};

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    icon: {
      type: "mdx",
      required: true,
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: Tag,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
