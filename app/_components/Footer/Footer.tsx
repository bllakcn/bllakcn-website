import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const socialMedia = [
	{
		name: 'Linkedin',
		icon: IoLogoLinkedin,
		href: 'https://www.linkedin.com/in/bllakcn/',
	},
	{
		name: 'Github',
		icon: IoLogoGithub,
		href: 'https://github.com/bllakcn',
	},
	{
		name: 'Instagram',
		icon: IoLogoInstagram,
		href: 'https://www.instagram.com/bllakcn',
	},
	{
		name: 'Gmail',
		icon: IoMailOutline,
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
								<Link className='p-1' title={item.name} href={item.href}>
									<item.icon size={20} />
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
