'use client';

import { IoArrowForward } from 'react-icons/io5';
import ReactSvg from '../Portfolio/TechStack/React';
import PythonSvg from '../Portfolio/TechStack/Python';
import NextSvg from '../Portfolio/TechStack/Next';
import TailwindSvg from '../Portfolio/TechStack/Tailwind';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tools = [
	{ name: 'Tailwindcss', icon: TailwindSvg },
	{ name: 'React', icon: ReactSvg },
	{ name: 'Next.js', icon: NextSvg },
	{ name: 'Python', icon: PythonSvg },
];

export default function QuickBio() {
	return (
		<motion.section
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			viewport={{ once: true, amount: 0.6 }}
			className='flex flex-col items-center justify-around px-4 pb-8 pt-0 sm:py-36 sm:pb-36 sm:pt-16 lg:flex-row'
		>
			<div className='max-w-3xl py-12'>
				<h2 className='pb-2 text-5xl font-medium'>Quick Bio</h2>
				<h4 className='text-foreground-600 pb-6 text-lg italic'>
					&quot;Architectural visionary turned self-taught web developer.&quot;
				</h4>
				<p className='pb-2 text-lg'>
					I love creating beautiful and functional websites that seemlessly enfolder accessibility. I am
					driven by motivation and results. I am a team player who thrives on challenges. I am always
					looking for new ways to learn and grow. I am excited to continue my journey as a full-stack
					developer.
					<br />
					<br />I enjoy photography, videography and coffee making in spare time.
				</p>
				<Link href='/portfolio'>
					<p>Get to know more</p>
					<IoArrowForward size='16' className='pt-1' strokeWidth='2' />
				</Link>
			</div>
			<div className='flex flex-col items-center px-12 lg:flex-row'>
				<div className='flex gap-3 px-2 lg:flex-col'>
					{tools.map((tool, index) => (
						<tool.icon key={index} className='h-auto w-10 saturate-0 transition-all hover:saturate-50' />
					))}
				</div>
				<h4 className='text-lg italic'>My go-to stack</h4>
			</div>
		</motion.section>
	);
}
