'use client';

import { Blog } from 'content-collections';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { IoClose } from 'react-icons/io5';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

type BlogListDisplayProps = {
	blogs: Blog[];
	filterTag?: string | string[] | undefined;
};

export default function BlogListDisplay({ blogs, filterTag }: BlogListDisplayProps) {
	return (
		<section className='min-h-screen px-4 py-9 sm:py-36'>
			<div className='flex items-baseline gap-14'>
				<h2 className='scroll-m-20 pb-4 text-4xl font-bold tracking-tight lg:text-5xl'>Blog Posts</h2>
				{filterTag && (
					<div className='flex items-center gap-2'>
						<span className='text-lg font-semibold'>Filter:</span>
						<Badge>{filterTag}</Badge>
						<Link href='/blog'>
							<IoClose />
						</Link>
					</div>
				)}
			</div>
			{blogs.length ? (
				<motion.ul
					className='flex flex-col gap-5'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{blogs.map((post, index) => (
						<li key={post._meta.path}>
							<Link
								className='flex flex-col items-baseline justify-between gap-2 sm:flex-row'
								href={`/blog/${post._meta.path}`}
								color='foreground'
							>
								<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{post.title}</h3>
								<time dateTime={post.date} className='text-xs text-primary'>
									{format(parseISO(post.date), 'MMMM d, yyyy')}
								</time>
							</Link>
							<p className='text-foreground-600 text-ellipsis p-1'>{post.description}</p>
							{index !== blogs.length - 1 && <Separator />}
						</li>
					))}
				</motion.ul>
			) : (
				<p>No blog posts yet!</p>
			)}
		</section>
	);
}
