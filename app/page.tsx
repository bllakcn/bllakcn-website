'use client';

import { motion } from 'framer-motion';

export default function Home() {
	return (
		<motion.section
			className='mx-auto h-full w-full max-w-5xl p-4'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='h-screen w-full'>
				<p>Hi, I&apos;m Bilal. I&apos;m a web developer.</p>
				<p></p>
			</div>
		</motion.section>
	);
}
