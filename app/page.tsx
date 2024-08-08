'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Home() {
	return (
		<motion.section
			className='mx-auto w-full max-w-5xl space-y-5 p-4'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='w-full space-y-2'>
				<p>
					Hi, I&apos;m <span className='font-semibold'>Bilal</span>. I&apos;m a web developer based in
					the Netherlands. I love creating UI that sparks joy. I&apos;m currently working on a next-gen
					social media app,{' '}
					<Link href='https://www.anonimal.me' className='inline-flex items-center	gap-1 font-semibold'>
						Anonimal <ExternalLink size={12} strokeWidth={2} />
					</Link>
				</p>
			</div>
		</motion.section>
	);
}
