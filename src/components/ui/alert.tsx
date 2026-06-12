import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
	"relative w-full rounded-lg border border-border bg-card/70 p-4",
	{
		variants: {
			variant: {
				default: "text-foreground",
				destructive:
					"border-destructive text-destructive dark:border-destructive",
				secondary: "border-secondary text-secondary dark:border-secondary",
				tertiary: "border-tertiary text-foreground dark:border-tertiary",
				ghost: "border-transparent bg-card/30 hover:border-border/10",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {
	alertIcon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant, children, alertIcon, ...props }, ref) => (
		<div
			ref={ref}
			role="alert"
			className={cn(
				"flex items-center gap-5",
				alertVariants({ variant }),
				className,
			)}
			{...props}
		>
			{alertIcon && (
				<div className={cn("shrink-0 rounded-full")}>{alertIcon}</div>
			)}
			<div className="space-y-2">{children}</div>
		</div>
	),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn("mb-1 font-medium leading-none tracking-tight", className)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm [&_p]:leading-relaxed", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export { Alert, AlertDescription, AlertTitle };
