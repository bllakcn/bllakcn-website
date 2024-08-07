import { forwardRef } from 'react';
import FastSvg from './Portfolio/TechStack/Fast';
import PythonSvg from './Portfolio/TechStack/Python';

export const iconMap = {
	FastSvg: FastSvg,
	PythonSvg: PythonSvg,
	// Add more mappings as needed
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

	return <Icon ref={ref} {...props} className='aspect-square h-5 w-auto' />;
});

TechIcons.displayName = 'TechIcons';

export default TechIcons;
