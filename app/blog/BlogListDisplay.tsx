'use client';

import { Blog } from 'content-collections';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { IoClose } from 'react-icons/io5';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type BlogListDisplayProps = {
	blogs: Blog[];
	filterTag?: string | string[] | undefined;
};

export default function BlogListDisplay({ blogs, filterTag }: BlogListDisplayProps) {
	return (
		<section className='mx-auto h-full w-full max-w-5xl p-4'>
			<div className='flex items-baseline gap-14'>
				<Heading level='h2'>Blog Posts</Heading>
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
				>
					{blogs.map((post) => (
						<li key={post._meta.path}>
							<Link
								className='flex flex-col items-baseline justify-between gap-2 sm:flex-row'
								href={`/blog/${post._meta.path}`}
								color='foreground'
							>
								<Card className='group w-full'>
									<CardHeader>
										<CardTitle>{post.title}</CardTitle>
										<CardDescription>{post.description}</CardDescription>
									</CardHeader>
									<CardFooter className='flex justify-between'>
										<time dateTime={post.date} className='text-xs font-light text-muted-foreground'>
											{format(parseISO(post.date), 'MMMM d, yyyy')}
										</time>
										<Button
											className='transition-transform group-hover:translate-x-1'
											size='icon'
											variant='light'
										>
											<MoveRight size={12} strokeWidth={2} />
										</Button>
									</CardFooter>
								</Card>
							</Link>
						</li>
					))}
				</motion.ul>
			) : (
				<p>No blog posts yet!</p>
			)}
		</section>
	);
}
