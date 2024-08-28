'use client';

import { motion, Variants } from 'framer-motion';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import ElementsButtons from './_components/El-Buttons';
import ElementBadges from './_components/El-Badges';
import ElementColors from './_components/El-Colors';
import ElementAlert from './_components/El-Alert';
import ElementCard from './_components/El-Card';

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
	},
};

export default function Elements() {
	return (
		<motion.div
			className='mx-auto w-full max-w-5xl space-y-5 p-4'
			initial='hidden'
			animate='show'
			variants={containerVariants}
		>
			<motion.p variants={sectionVariants}>Collection of some UI elements.</motion.p>

			<motion.div variants={sectionVariants} className='space-y-3'>
				<Heading level='h4'>Color Palette</Heading>
				<ElementColors />
			</motion.div>

			<Separator />

			<motion.div variants={sectionVariants} className='space-y-3'>
				<Heading level='h4'>Headings</Heading>
				<ul className='flex flex-wrap items-baseline gap-4'>
					<Heading>Heading 1</Heading>
					<Heading level='h2'>Heading 2</Heading>
					<Heading level='h3'>Heading 3</Heading>
					<Heading level='h4'>Heading 4</Heading>
					<p>Paragraph</p>
				</ul>
			</motion.div>

			<Separator />

			<motion.div variants={sectionVariants} className='space-y-3'>
				<Heading level='h4'>Buttons</Heading>
				<ElementsButtons />
			</motion.div>

			<Separator />

			<motion.div variants={sectionVariants} className='space-y-3'>
				<Heading level='h4'>Badges</Heading>
				<ElementBadges />
			</motion.div>

			<Separator />

			<motion.div variants={sectionVariants} className='space-y-3'>
				<Heading level='h4'>Alerts</Heading>
				<ElementAlert />
			</motion.div>

			<Separator />

			<motion.div variants={sectionVariants} className='space-y-3'>
				<Heading level='h4'>Card</Heading>
				<ElementCard />
			</motion.div>
		</motion.div>
	);
}
