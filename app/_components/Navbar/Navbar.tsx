'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWindowScroll } from '@uidotdev/usehooks';
import { cn } from '@/lib/utils';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';

const navLinks = [
	{ name: 'elements', href: '/elements' },
	{ name: 'blog', href: '/blog' },
];

export default function NavbarComponent() {
	const [{ y }] = useWindowScroll();

	return (
		<div className={cn('sticky top-0 z-10', y && y > 40 && 'border-b bg-background/95')}>
			<header
				className={cn(
					'mx-auto grid w-full max-w-5xl grid-cols-2 items-center justify-between py-4 transition-all duration-300 max-xl:px-3',
					y && y > 40 && 'max-w-6xl py-2'
				)}
			>
				<Button variant='ghost' className='w-fit border-none' asChild>
					<Link href='/'>
						<h1 className='text-xl font-bold'>bllakcn.</h1>
					</Link>
				</Button>
				<nav className='hidden sm:block'>
					<ul className='flex flex-wrap items-center justify-end sm:gap-4'>
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
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className='justify-self-end sm:hidden' size='icon' variant='light'>
							<Menu />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='p-2'>
						{navLinks.map((item) => (
							<DropdownMenuItem asChild key={item.name}>
								<Button variant='link' className='flex justify-start gap-1' asChild>
									<Link href={item.href}>
										{item.name}
										<MoveRight size={12} strokeWidth={2} />
									</Link>
								</Button>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
		</div>
	);
}
