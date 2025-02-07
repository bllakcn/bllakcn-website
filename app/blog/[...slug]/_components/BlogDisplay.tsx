import { Blog } from 'content-collections';
import AvatarJPG from '@/public/avatar.jpg';
import BlogSidebar from './BlogSidebar';
import { format, parseISO } from 'date-fns';
import { Mdx } from '@/components/mdx-components';
import TechIcons from '@/components/IconMap';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';

type BlogPageProps = {
	blog: Blog;
};

export default function BlogDisplay({ blog }: BlogPageProps) {
	return (
		<article className='space-y-3 px-3 pt-9 pb-3 sm:px-10 sm:pt-24 sm:pb-9'>
			<div className='space-y-3'>
				<span className=''>
					<Heading>{blog.title}</Heading>
					{blog.description && <p className='text-muted-foreground'>{blog.description}</p>}
				</span>
				<div className='flex justify-between lg:pr-16'>
					{blog.tags && (
						<div className='flex flex-wrap gap-1'>
							{blog.tags.map((tag) => (
								<Button asChild variant='badge' size='badge' key={tag.name}>
									<Link className='flex items-center gap-1' href={`/blog?tag=${tag.slug}`}>
										{tag.name}
										<TechIcons iconName={tag.icon} />
									</Link>
								</Button>
							))}
						</div>
					)}
					{blog.author && (
						<Link className='inline-flex items-center gap-2' href='/'>
							<p className='text-muted-foreground'>{blog.author}</p>
							<Avatar className='h-8 w-8'>
								<AvatarImage src={AvatarJPG.src} alt={blog.author} />
								<AvatarFallback>{blog.author[0]}</AvatarFallback>
							</Avatar>
						</Link>
					)}
				</div>
			</div>
			<Separator />
			<div className='grid grid-cols-1 py-2 lg:grid-cols-2'>
				<div className='prose-pre:scrollbar-hide prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-lg prose-img:rounded-lg'>
					<Mdx code={blog.mdx} />
				</div>
				{blog.toc && <BlogSidebar headers={blog.headers} />}
			</div>
			<Separator className='my-4' />
			<p className='text-muted-foreground text-xs'>{format(parseISO(blog.date), 'MMMM d, yyyy')}</p>
		</article>
	);
}
