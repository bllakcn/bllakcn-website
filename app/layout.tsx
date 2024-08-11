import './globals.css';
import { Outfit } from 'next/font/google';
import NavbarComponent from '@/app/_components/Navbar/Navbar';
import FooterComponent from '@/app/_components/Footer/Footer';
import Providers from './providers';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
	title: 'bllakcn',
	description:
		"Explore Ahmet Bilal Akcan's web development portfolio. Discover the work of this self-taught developer with a background in architecture.",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={cn('bg-primary text-foreground antialiased', outfit.className)}>
				<Providers>
					<div className='mx-auto max-w-8xl'>
						<div className='page m-3 flex min-h-[calc(100svh-24px)] flex-col rounded-md border bg-background md:mx-9'>
							<NavbarComponent />
							<main className='flex-1'>{children}</main>
							<FooterComponent />
						</div>
					</div>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
