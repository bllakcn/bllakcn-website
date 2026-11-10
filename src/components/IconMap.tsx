import { forwardRef } from "react";
import Aws from "./TechStack/Aws";
import Cloudflare from "./TechStack/Cloudflare";
import Convex from "./TechStack/Convex";
import Cpp from "./TechStack/cpp";
import Fast from "./TechStack/Fast";
import MongoDB from "./TechStack/mongo";
import Nextjs from "./TechStack/Next";
import Python from "./TechStack/Python";
import Redis from "./TechStack/Redis";
import Sass from "./TechStack/Sass";
import Supabase from "./TechStack/Supabase";
import TailwindCSS from "./TechStack/Tailwind";
import TanstackStart from "./TechStack/TanstackStart";
import TypeScript from "./TechStack/Ts";

export const iconMap = {
	"Tanstack Start": TanstackStart,
	Convex,
	Fast,
	Python,
	Redis,
	Supabase,
	TailwindCSS,
	Nextjs,
	TypeScript,
	Sass,
	Aws,
	Cpp,
	MongoDB,
	Cloudflare,
};

/** Canonical skill / tech keys shared by CV JSON and UI icon rendering. */
export type IconMapKey = keyof typeof iconMap;

export const iconKeys = Object.keys(iconMap) as [IconMapKey, ...IconMapKey[]];

type TechIconsProps = {
	iconName: IconMapKey;
};

const TechIcons = forwardRef<SVGSVGElement, TechIconsProps>(
	({ iconName, ...props }, ref) => {
		const Icon = iconMap[iconName];

		if (!Icon) {
			console.warn(`Icon "${iconName}" not found in iconMap.`);
			return null;
		}

		return (
			<Icon ref={ref} {...props} className="aspect-square h-5 w-auto p-0.5" />
		);
	},
);

TechIcons.displayName = "TechIcons";

export default TechIcons;
