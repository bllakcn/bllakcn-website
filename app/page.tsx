'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import About from './_components/About/About';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			duration: 0.3,
		},
	},
};

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: '20%', filter: 'blur(3px)' },
	show: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Home() {
	return (
		<motion.div initial='hidden' animate='show' variants={containerVariants}>
			<motion.section variants={sectionVariants} className='mx-auto w-full max-w-5xl space-y-5 p-4'>
				<div className='w-full space-y-2'>
					<p className='leading-relaxed'>
						Hi, I&apos;m Bilal. I&apos;m a web developer based in the Netherlands. I love crafting UI that
						sparks joy. I work comfortably in full-stack environments. <br /> I&apos;m currently working
						on a next-gen social media app that is aiming to let you find the person you are looking for
						out in the world. It is called{' '}
						<Link href='https://www.anonimal.me' className='inline-flex items-center	gap-1 font-semibold'>
							Anonimal. <ExternalLink size={12} strokeWidth={2} />
						</Link>
					</p>
				</div>
			</motion.section>
			<motion.section variants={sectionVariants} className='mx-auto w-full max-w-5xl space-y-5 p-4'>
				<About />
			</motion.section>
		</motion.div>
	);
}
