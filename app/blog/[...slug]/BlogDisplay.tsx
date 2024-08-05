import { Blog } from 'content-collections';
import AvatarJPG from '@/public/avatar.jpg';
import BlogSidebar from './BlogSidebar';
import { format, parseISO } from 'date-fns';
import { Mdx } from '@/components/mdx-components';
import IconComponent from '@/components/IconMap';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';

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
						<Link href='/' color='foreground'>
							<Avatar>
								<AvatarImage src={AvatarJPG.src} alt={blog.author} />
								<AvatarFallback>{blog.author[0]}</AvatarFallback>
							</Avatar>
						</Link>
					)}
				</div>
				{blog.description && (
					<p className='text-xl text-slate-700 dark:text-slate-200'>{blog.description}</p>
				)}
				{blog.tags && (
					<div className='flex flex-wrap gap-1'>
						{blog.tags.map((tag) => (
							<Button size='sm' asChild key={tag.name}>
								<Link href={`/blog?tag=${tag.slug}`}>
									{tag.name}
									<IconComponent iconName={tag.icon} />
								</Link>
							</Button>
						))}
					</div>
				)}
			</div>
			<Separator className='my-4' />
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div className='prose-pre:scrollbar-hide prose dark:prose-invert prose-headings:scroll-mt-20 prose-code:before:content-none prose-code:after:content-none'>
					<Mdx code={blog.mdx} />
				</div>
				{blog.toc && <BlogSidebar headers={blog.headers} />}
			</div>
			<Separator className='my-4' />
			<p className='text-foreground-400'>{format(parseISO(blog.date), 'MMMM d, yyyy')}</p>
		</article>
	);
}
