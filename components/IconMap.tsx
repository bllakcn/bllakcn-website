import FastSvg from './Portfolio/TechStack/Fast';
import PythonSvg from './Portfolio/TechStack/Python';

export const iconMap = {
	FastSvg: FastSvg,
	PythonSvg: PythonSvg,
	// Add more mappings as needed
};

export const iconKeys = Object.keys(iconMap) as [keyof typeof iconMap, ...(keyof typeof iconMap)[]];

const IconComponent = ({ iconName }: { iconName: keyof typeof iconMap }) => {
	const Icon = iconMap[iconName];

	if (!Icon) {
		console.warn(`Icon "${iconName}" not found in iconMap.`);
		return null;
	}

	return <Icon />;
};

export default IconComponent;
