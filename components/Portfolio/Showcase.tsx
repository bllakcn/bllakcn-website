'use client';

import { Project } from '@/app/types/Portfolio';
import ProjectShowcase from './ProjectShowcase';
import { motion } from 'framer-motion';
import ColPalImage from '@/public/projects/colpal.jpg';
import PostitImage from '@/public/projects/postit.jpg';
import ProjectMan from '@/public/projects/project-management.jpg';
import ReactSvg from './TechStack/React';
import SassSvg from './TechStack/Sass';
import TailwindSvg from './TechStack/Tailwind';
import TsSvg from './TechStack/Ts';
import JsSvg from './TechStack/Js';
import NextSvg from './TechStack/Next';
import CssSvg from './TechStack/Css';

const projects: Project[] = [
	{
		id: 1,
		title: 'Postit',
		description: 'A mini social media app where you can post and comment on them.',
		image: PostitImage,
		link: 'https://postit-jet.vercel.app/',
		date: 'March 2023',
		github: 'https://github.com/bllakcn/postit',
		technologies: [NextSvg, TsSvg, TailwindSvg],
		info: 'The backend is paused for now.',
	},
	{
		id: 2,
		title: 'ColPal',
		description: 'Generate & save cool color palettes on your browser easy and fast.',
		image: ColPalImage,
		link: 'https://colpal-generatecolors.netlify.app/',
		date: 'January 2023',
		github: 'https://github.com/bllakcn/color-palette-generator',
		technologies: [ReactSvg, JsSvg, SassSvg],
	},

	{
		id: 3,
		title: 'Project Management App',
		description: 'A compact project management app where you can create projects and assign tasks.',
		image: ProjectMan,
		link: 'https://project-management-dfe87.web.app//',
		date: 'November 2022',
		github: 'https://github.com/bllakcn/project-management',
		technologies: [ReactSvg, JsSvg, CssSvg],
	},
];

export default function Showcase() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Showcase</h3>
			<div className='grid grid-cols-1 gap-2 py-4 sm:grid-cols-3'>
				{projects.map((project) => (
					<ProjectShowcase {...project} key={project.id} />
				))}
			</div>
		</motion.div>
	);
}
