import { forwardRef } from 'react';
import Fast from './Portfolio/TechStack/Fast';
import Python from './Portfolio/TechStack/Python';
import Redis from './Portfolio/TechStack/Redis';
import Supabase from './Portfolio/TechStack/Supabase';
import TailwindCSS from './Portfolio/TechStack/Tailwind';
import Nextjs from './Portfolio/TechStack/Next';
import TypeScript from './Portfolio/TechStack/Ts';
import Sass from './Portfolio/TechStack/Sass';

export const iconMap = {
	Fast,
	Python,
	Redis,
	Supabase,
	TailwindCSS,
	Nextjs,
	TypeScript,
	Sass,
};

export const iconKeys = Object.keys(iconMap) as [keyof typeof iconMap, ...(keyof typeof iconMap)[]];

type TechIconsProps = {
	iconName: keyof typeof iconMap;
};

const TechIcons = forwardRef<SVGSVGElement, TechIconsProps>(({ iconName, ...props }, ref) => {
	const Icon = iconMap[iconName];

	if (!Icon) {
		console.warn(`Icon "${iconName}" not found in iconMap.`);
		return null;
	}

	return <Icon ref={ref} {...props} className='aspect-square h-5 w-auto p-0.5' />;
});

TechIcons.displayName = 'TechIcons';

export default TechIcons;
