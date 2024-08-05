'use client';

import Link from 'next/link';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Portfolio', href: '/portfolio' },
	{ name: 'Blog', href: '/blog' },
];

export default function NavbarComponent() {
	// TODO: Create a custom Navbar component
	return (
		<header>
			<h1>Hello, world!</h1>
			<nav>
				<ul>
					{navLinks.map((item) => (
						<li key={item.name}>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
