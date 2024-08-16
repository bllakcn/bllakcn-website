import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';
import styles from './About.module.css';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import TechIcons, { iconMap } from '@/components/IconMap';
import { Badge } from '@/components/ui/badge';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type TimelineItem = {
	title: string;
	description: string;
	additional?: React.ReactNode;
	technologies?: (keyof typeof iconMap)[];
	date: Date;
};

const timelineItems: TimelineItem[] = [
	{
		title: 'Renewed my website',
		description: 'Deployed a fresh look and feel to my website.',
		date: new Date('2024-08-01'),
	},
	{
		title: 'Anonimal',
		description:
			'Completed the MVP for the side project, Anonimal. A social media where you get to type what you want to talk about and find a match around that topic. ',
		date: new Date('2024-06-01'),
		additional: (
			<Link
				href='https://www.anonimal.me'
				className='group flex w-fit items-start gap-1 text-5xl font-black text-[#F3B773] hover:text-[#F3B773]/80'
			>
				Anonimal
				<ExternalLink
					size={16}
					className='inline-block opacity-0 transition-opacity group-hover:opacity-100'
				/>
			</Link>
		),
		technologies: ['Fast', 'Python', 'Nextjs', 'TypeScript', 'Redis', 'Supabase', 'TailwindCSS'],
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
				className={cn(
					'relative flex flex-col gap-2 pb-7 pt-3',
					'before:absolute before:left-3 before:top-2.5 before:h-[12px] before:w-0.5 before:rounded-lg before:bg-secondary/70'
				)}
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
			className={cn(
				'group relative max-w-3xl transition-colors',
				styles.timelineItem,
				'before:absolute before:left-3 before:top-9 before:h-[calc(100%-18px)] before:w-0.5 before:rounded-lg before:bg-secondary/70 before:hover:bg-secondary'
			)}
		>
			<div
				className={cn(
					'mb-0.5 ml-[1px] h-2 w-2 rounded-full bg-secondary/70 transition-colors group-hover:bg-secondary',
					styles.timelineItemIcon
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
				<div className='text-xs text-muted-foreground'>
					{date.toLocaleDateString('eng-UK', {
						month: 'short',
						year: 'numeric',
					})}
				</div>
			</div>
		</motion.div>
	);
}
