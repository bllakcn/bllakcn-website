'use client';

import { useActiveHeader } from '@/hooks/useActiveHeader';
type BlogSidebarProps = {
	headers: {
		level: number;
		text: string;
		slug: string;
	}[];
};
import { cn } from '@/lib/utils';
import Link from 'next/link';

const headerLevels = ['ml-0', 'ml-4', 'ml-8', 'ml-12', 'ml-16', 'ml-20'];

export default function BlogSidebar({ headers }: BlogSidebarProps) {
	const { activeSlug, activeUpperSlug } = useActiveHeader('h2, h3, h4, h5, h6');
	return (
		<div className='sticky top-32 hidden h-svh justify-self-end px-10 text-muted-foreground/70 lg:block'>
			<p className='mb-4 text-xl font-semibold'>Table of contents</p>
			<ul className='space-y-2 px-1'>
				{headers.map((header) => (
					<li
						className={cn(
							headerLevels[header.level - 1],
							header.slug === activeSlug ? 'marker:text-primary' : 'marker:text-foreground-200',
							'px-1'
						)}
						key={`#${header.slug}`}
					>
						<Link
							className={cn(
								(header.slug === activeSlug || header.slug === activeUpperSlug) && 'text-foreground'
							)}
							href={`#${header.slug}`}
						>
							{header.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
