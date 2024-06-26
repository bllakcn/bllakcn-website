import { Link } from '@nextui-org/link';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';
import NextLink from 'next/link';
import styles from './Footer.module.css';

const socialMedia = [
	{
		name: 'Linkedin',
		icon: <IoLogoLinkedin size={26} />,
		href: 'https://www.linkedin.com/in/bllakcn/',
	},
	{
		name: 'Github',
		icon: <IoLogoGithub size={26} />,
		href: 'https://github.com/bllakcn',
	},
	{
		name: 'Instagram',
		icon: <IoLogoInstagram size={26} />,
		href: 'https://www.instagram.com/bllakcn',
	},
	{
		name: 'Gmail',
		icon: <IoMailOutline size={26} />,
		href: 'mailto:bllakcn35@gmail.com',
	},
];

export default function FooterComponent() {
	return (
		<footer className={`relative px-4 pt-12 ${styles.dot}`}>
			<div className='mx-auto flex max-w-3xl flex-col items-center justify-center py-12'>
				<ul className='flex gap-3'>
					{socialMedia.map((item) => (
						<li className='flex items-center' key={item.name}>
							<Link className='p-1' title={item.name} as={NextLink} href={item.href} isExternal>
								{item.icon}
							</Link>
						</li>
					))}
				</ul>
				<p className='mt-4 text-center text-sm'>© {new Date().getFullYear()} Ahmet Bilal Akcan</p>
			</div>
		</footer>
	);
}
