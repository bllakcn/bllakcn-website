import { forwardRef } from 'react';
import FastSvg from './Portfolio/TechStack/Fast';
import PythonSvg from './Portfolio/TechStack/Python';

export const iconMap = {
	FastSvg: FastSvg,
	PythonSvg: PythonSvg,
	// Add more mappings as needed
};

export const iconKeys = Object.keys(iconMap) as [keyof typeof iconMap, ...(keyof typeof iconMap)[]];

type IconComponentProps = {
	iconName: keyof typeof iconMap;
};

const IconComponent = forwardRef<SVGSVGElement, IconComponentProps>(
	({ iconName, ...props }, ref) => {
		const Icon = iconMap[iconName];

		if (!Icon) {
			console.warn(`Icon "${iconName}" not found in iconMap.`);
			return null;
		}

		return <Icon ref={ref} {...props} className='aspect-square h-6 w-auto' />;
	}
);

IconComponent.displayName = 'IconComponent';

export default IconComponent;
