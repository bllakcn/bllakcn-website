import { Blog } from '@/.content-collections/generated';

export type BlogConfigItem = Pick<Blog, 'title'> & Partial<Omit<Blog, 'title'>> & { slug: string };
