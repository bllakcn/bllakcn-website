import { useActiveHeader } from "@/hooks/useActiveHeader";

type BlogSidebarProps = {
	headers: {
		level: number;
		text: string;
		slug: string;
	}[];
};

import { cn } from "@/lib/utils";

// const headerLevels = ['ml-0', 'ml-4', 'ml-8', 'ml-12', 'ml-16', 'ml-20'];

export default function BlogSidebar({ headers }: BlogSidebarProps) {
	const { activeSlug, activeUpperSlug } = useActiveHeader("h2, h3, h4, h5, h6");
	return (
		<div className="sticky top-32 hidden h-svh justify-self-end px-10 text-muted-foreground/70 lg:block">
			<p className="relative mb-4 font-semibold text-xl">Table of contents</p>
			<ul className={cn("space-y-2 px-1")}>
				{headers.map((header) => (
					<li
						className={cn(
							// headerLevels[header.level - 1],
							"relative px-1",
						)}
						key={`#${header.slug}`}
					>
						<a
							className={cn(
								"flex items-baseline gap-1 transition-colors",
								(header.slug === activeSlug ||
									header.slug === activeUpperSlug) &&
									"text-foreground",
							)}
							href={`#${header.slug}`}
						>
							<span
								className={cn(
									"font-bold text-muted-foreground/20",
									(header.slug === activeSlug ||
										header.slug === activeUpperSlug) &&
										"text-secondary",
								)}
							>
								{"- ".repeat(header.level - 2)}
							</span>
							{header.text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
