import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { Blog } from 'content-collections';
import { User } from '@nextui-org/user';
import NextLink from 'next/link';
import Avatar from '@/public/avatar.jpg';
import BlogSidebar from './BlogSidebar';
import { format, parseISO } from 'date-fns';
import { Mdx } from '@/components/mdx-components';

type BlogPageProps = {
	blog: Blog;
};

export default function BlogDisplay({ blog }: BlogPageProps) {
	return (
		<article className='px-4 pb-3 pt-9 sm:pb-9 sm:pt-36'>
			<div className='space-y-3'>
				<div className='flex flex-col gap-2 md:flex-row md:justify-between'>
					<h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl'>{blog.title}</h1>
					{blog.author && (
						<Link as={NextLink} href='/' color='foreground'>
							<User
								className='justify-start'
								name={blog.author}
								avatarProps={{ src: Avatar.src, isBordered: true, size: 'sm' }}
							/>
						</Link>
					)}
				</div>
				{blog.description && (
					<p className='text-xl text-slate-700 dark:text-slate-200'>{blog.description}</p>
				)}
				{blog.tags && (
					<div className='flex flex-wrap gap-1'>
						{blog.tags.map((tag) => (
							<Button
								as={Link}
								size='sm'
								href={`/blog?tag=${tag.slug}`}
								endContent={<div className='h-auto w-10'></div>}
								key={tag.name}
							>
								{tag.name}
							</Button>
						))}
					</div>
				)}
			</div>
			<Divider className='my-4' />
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div className='prose dark:prose-invert prose-headings:scroll-mt-20 prose-code:before:content-none prose-code:after:content-none prose-pre:scrollbar-hide'>
					<Mdx code={blog.mdx} />
				</div>
				{blog.toc && <BlogSidebar headers={blog.headers} />}
			</div>
			<Divider className='my-4' />
			<p className='text-foreground-400'>{format(parseISO(blog.date), 'MMMM d, yyyy')}</p>
		</article>
	);
}
