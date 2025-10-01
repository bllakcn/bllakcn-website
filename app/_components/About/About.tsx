import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';
import styles from './About.module.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'motion/react';
import { Separator } from '@/components/ui/separator';
import TechIcons, { iconMap } from '@/components/IconMap';
import { Badge } from '@/components/ui/badge';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Red_Hat_Display } from 'next/font/google';

export const red = Red_Hat_Display({
	subsets: ['latin'],
	weight: ['900'],
});

type TimelineItem = {
	title: string;
	description: string;
	additional?: React.ReactNode;
	technologies?: (keyof typeof iconMap)[];
	date: Date;
};

const timelineItems: TimelineItem[] = [
	{
		title: 'no-code trading algorithm builder',
		description:
			'Started working on a no-code trading algorithm builder where you can create your own trading algorithm and run it on your own portfolio.',
		date: new Date('2025-09-01'),
		technologies: ['Nextjs', 'TypeScript', 'TailwindCSS', 'Cpp', 'MongoDB'],
	},
	{
		title: 'Dutch language at B2 level',
		description:
			'Around the 3rd anniversary of my arrival in the Netherlands, I obtained a B2-level certificate in Dutch.',
		date: new Date('2025-08-01'),
	},
	{
		title: 'Anonimal',
		description:
			'Completed the MVP for the side project, Anonimal. A social media where you get to type what you want to talk about and find a match around that topic. ',
		date: new Date('2024-09-01'),
		technologies: [
			'Fast',
			'Python',
			'Nextjs',
			'TypeScript',
			'Redis',
			'Supabase',
			'TailwindCSS',
			'Aws',
		],
	},
	{
		title: 'Renewed my website',
		description: 'Deployed a fresh look and feel to my website.',
		date: new Date('2024-08-01'),
	},
	{
		title: 'Became a dad',
		date: new Date('2024-05-01'),
		description: 'Became a dad at the age of 26. I am so grateful for this experience.',
	},
	{
		title: 'Started working with React',
		date: new Date('2022-10-01'),
		description: 'Decided to learn React when I was determined to make a change in my career path.',
	},
	{
		title: 'Traineeship at Graphisoft',
		date: new Date('2022-05-01'),
		description: 'Did a traineeship at Graphisoft as a technical support engineer.',
	},
	{
		title: 'Got a scholarship for architectural engineering program',
		date: new Date('2019-9-01'),
		description: 'Moved to Hungary to study at the Budapest University of Technology and Economics.',
	},
	{
		title: 'Built my first website',
		date: new Date('2017-06-01'),
		description: 'Built my first website using Vue.js.',
	},
	{
		title: 'First step into programming',
		description: 'Started learning programming with Java.',
		date: new Date('2016-09-01'),
	},
];

const containerVariants: Variants = {
	show: {
		transition: {
			staggerChildren: 0.2,
			duration: 0.3,
		},
	},
};
const showButtonVariants: Variants = {
	hidden: { opacity: 0, filter: 'blur(3px)' },
	show: {
		opacity: 1,
		filter: 'blur(0px)',
	},
};

const defaultItemsShown = 3;

export default function About() {
	const [showMore, setShowMore] = useState(false);

	const displayedItems = showMore ? timelineItems : timelineItems.slice(0, defaultItemsShown);

	return (
		<div>
			<Heading className='pb-0' level='h2'>
				about me
			</Heading>
			<p>Here are some milestones</p>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='show'
				className='relative flex flex-col pt-3 pb-7'
			>
				{displayedItems.map((item) => (
					<TimelineItem key={item.title} {...item} />
				))}
			</motion.div>
			{!showMore && timelineItems.length > defaultItemsShown ? (
				<motion.div variants={showButtonVariants} className='flex flex-col items-center gap-2'>
					<Button
						className='w-fit flex-col gap-1 text-xs'
						onClick={() => setShowMore(true)}
						variant='light'
					>
						Show More
						<span className='flex gap-2'>
							<Separator className='h-1 w-1 rounded-lg' />
							<Separator className='h-1 w-1 rounded-lg' />
							<Separator className='h-1 w-1 rounded-lg' />
						</span>
					</Button>
				</motion.div>
			) : (
				<motion.div variants={showButtonVariants} className='flex flex-col items-center gap-2'>
					<Button
						className='w-fit flex-col gap-1 text-xs'
						onClick={() => setShowMore(false)}
						variant='light'
					>
						Show Less
					</Button>
				</motion.div>
			)}
		</div>
	);
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: '20%', filter: 'blur(3px)' },
	show: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
	},
};

function TimelineItem({ title, description, date, additional, technologies }: TimelineItem) {
	return (
		<motion.div
			variants={itemVariants}
			className={cn('group relative max-w-3xl transition-colors', styles.timelineItem)}
		>
			{/* DATE */}
			<div
				className={cn('text-muted-foreground self-center text-right text-xs', styles.timelineItemDate)}
			>
				{date.toLocaleDateString('eng-UK', {
					month: 'short',
					year: 'numeric',
				})}
			</div>
			{/* DOT */}
			<div
				className={cn(
					'bg-secondary/70 group-hover:bg-secondary h-2 w-2 self-center rounded-full transition-colors',
					styles.timelineItemIcon
				)}
			/>
			{/* LINE */}
			<div
				className={cn(
					'bg-secondary/70 group-hover:bg-secondary -mt-1 -mb-4 w-0.5 rounded-lg transition-colors',
					styles.timelineItemLine
				)}
			/>
			<Heading className={cn(styles.timelineItemTitle, '')} level='h4'>
				{title}
			</Heading>
			<div className={cn(styles.timelineItemDescription, 'flex flex-col justify-between gap-2 px-1')}>
				<p>{description}</p>
				{additional}
				{technologies && (
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Stack</AccordionTrigger>
							<AccordionContent>
								<div className='flex flex-wrap gap-2'>
									{technologies.map((tech) => (
										<Badge className='flex items-center gap-1' key={tech}>
											<p>{tech}</p>
											<TechIcons iconName={tech} />
										</Badge>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				)}
			</div>
		</motion.div>
	);
}
