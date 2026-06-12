import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 pb-3 font-bold tracking-tight", {
	variants: {
		level: {
			h1: "text-3xl md:text-4xl",
			h2: "text-2xl md:text-3xl",
			h3: "pb-1 font-semibold text-xl md:text-2xl",
			h4: "pb-1 font-semibold text-lg md:text-xl",
			h5: "font-medium text-lg",
		},
		color: {
			default: "text-foreground",
			primary: "text-primary",
			secondary: "text-secondary",
			destructive: "text-destructive",
		},
	},
	defaultVariants: {
		level: "h1",
		color: "default",
	},
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

type VariantPropsWithoutLevelAndColor = Omit<
	VariantProps<typeof headingVariants>,
	"level" | "color"
>;

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantPropsWithoutLevelAndColor {
	children: React.ReactNode;
	level?: HeadingLevel;
	color?: "default" | "primary" | "secondary";
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ level = "h1", color = "default", className, children, ...props }, ref) => {
		const Comp = level as HeadingLevel;
		return (
			<Comp
				ref={ref}
				className={cn(headingVariants({ color, level, className }))}
				{...props}
			>
				{children}
			</Comp>
		);
	},
);

Heading.displayName = "Heading";
