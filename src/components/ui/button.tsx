import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md border border-border font-medium text-sm ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				destructiveOutline:
					"bg-background hover:bg-destructive hover:text-destructive-foreground",
				outline: "bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary/80",
				light: "border-none hover:bg-accent hover:text-accent-foreground",
				link: "border-none text-primary underline-offset-4 hover:underline",
				badge:
					"rounded-full border-none bg-primary font-semibold text-primary-foreground text-xs hover:bg-primary/80",
				ghost: "border-transparent",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
				badge: "px-2.5 py-0.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, type ButtonProps, buttonVariants };
