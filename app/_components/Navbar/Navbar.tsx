'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [{ name: 'blog', href: '/blog' }];

export default function NavbarComponent() {
	return (
		<header className='flex w-full items-center justify-between p-4 md:px-10'>
			<Link href='/'>
				<h1 className='text-xl font-bold'>bllakcn.</h1>
			</Link>
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
	);
}
