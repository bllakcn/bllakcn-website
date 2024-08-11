'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWindowScroll } from '@uidotdev/usehooks';
import { cn } from '@/lib/utils';

const navLinks = [
	{ name: 'blog', href: '/blog' },
	{ name: 'elements', href: '/elements' },
];

export default function NavbarComponent() {
	const [{ y }] = useWindowScroll();

	return (
		<>
			<div className={cn('sticky top-0 z-10', y && y > 40 && 'border-b bg-background/95')}>
				<header
					className={cn(
						'mx-auto flex w-full max-w-5xl items-center justify-between py-4 transition-all duration-300 max-xl:px-3',
						y && y > 40 && 'max-w-6xl py-2'
					)}
				>
					<Button variant='ghost' asChild>
						<Link href='/'>
							<h1 className='text-xl font-bold'>bllakcn.</h1>
						</Link>
					</Button>
					<nav>
						<ul className='flex items-center gap-4'>
							{navLinks.map((item) => (
								<li key={item.name}>
									<Button variant='link' className='flex gap-1' asChild>
										<Link href={item.href}>
											{item.name}
											<MoveRight size={12} strokeWidth={2} />
										</Link>
									</Button>
								</li>
							))}
						</ul>
					</nav>
				</header>
			</div>
		</>
	);
}
