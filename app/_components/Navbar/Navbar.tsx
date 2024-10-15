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
import { Heading } from '@/components/ui/heading';
import { CommandMenu } from '@/components/commandMenu';
import { docsConfig } from '@/config/docs';

const navLinks = docsConfig.NavbarLinks.filter((link) => link.title !== 'home');

export default function NavbarComponent() {
	const [{ y }] = useWindowScroll();

	return (
		<div className={cn('sticky top-0 z-10', y && y > 40 && 'border-b bg-background/95')}>
			<header
				className={cn(
					'mx-auto grid h-full w-full max-w-5xl grid-cols-2 items-center justify-between py-4 transition-all duration-300 max-xl:px-3',
					y && y > 35 && 'max-w-6xl py-2'
				)}
			>
				<Button className='h-auto w-fit hover:no-underline' variant='link' asChild>
					<Link href='/'>
						<Heading className='p-0'>bllakcn.</Heading>
					</Link>
				</Button>
				<nav className='hidden sm:block'>
					<ul className='flex items-baseline justify-end sm:gap-4'>
						{navLinks.map((item) => (
							<li key={item.title}>
								<Button variant='link' className='flex gap-1' asChild>
									<Link href={item.href ?? ''}>
										{item.title}
										<MoveRight size={12} strokeWidth={2} />
									</Link>
								</Button>
							</li>
						))}
						<li>
							<CommandMenu />
						</li>
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
							<DropdownMenuItem asChild key={item.title}>
								<Button variant='link' className='flex justify-start gap-1' asChild>
									<Link href={item.href ?? ''}>
										{item.title}
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
