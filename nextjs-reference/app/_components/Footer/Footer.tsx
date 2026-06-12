import InstagramLogo from '@/public/brands/Instagram.svg';
import LinkedinLogo from '@/public/brands/LinkedIn.svg';
import GithubLogo from '@/public/brands/GitHub.svg';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const socialMedia = [
	{
		name: 'Linkedin',
		icon: LinkedinLogo,
		href: 'https://www.linkedin.com/in/bllakcn/',
	},
	{
		name: 'Github',
		icon: GithubLogo,
		href: 'https://github.com/bllakcn',
	},
	{
		name: 'Instagram',
		icon: InstagramLogo,
		href: 'https://www.instagram.com/bllakcn',
	},
	{
		name: 'Gmail',
		icon: Mail,
		href: 'mailto:bllakcn35@gmail.com',
	},
];

export default function FooterComponent() {
	return (
		<footer className='relative px-4 pt-12'>
			<div className='mx-auto flex max-w-3xl flex-col items-center justify-center py-12'>
				<ul className='flex gap-3'>
					{socialMedia.map((item) => (
						<li className='flex items-center' key={item.name}>
							<Button asChild size='icon' variant='outline'>
								<Link
									className='p-1'
									title={item.name}
									href={item.href}
									target='_blank'
									rel='noopener noreferrer'
								>
									<item.icon className='size-4' />
								</Link>
							</Button>
						</li>
					))}
				</ul>
				<p className='mt-4 text-center text-sm'>© {new Date().getFullYear()} Ahmet Bilal Akcan</p>
			</div>
		</footer>
	);
}
