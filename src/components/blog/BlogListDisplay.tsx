import { Link } from "@tanstack/react-router";
import type { Blog } from "content-collections";
import { format, parseISO } from "date-fns";
import { MoveRight, X } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

type BlogListDisplayProps = {
	blogs: Blog[];
	filterTag?: string | string[] | undefined;
};

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			duration: 0.3,
		},
	},
};

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: "20%", filter: "blur(3px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function BlogListDisplay({
	blogs,
	filterTag,
}: BlogListDisplayProps) {
	return (
		<motion.div initial="hidden" animate="show" variants={containerVariants}>
			<motion.section
				variants={sectionVariants}
				className="mx-auto h-full w-full max-w-5xl p-4"
			>
				<div className="flex items-baseline gap-14">
					<Heading level="h2">Blog Posts</Heading>
					{filterTag && (
						<div className="flex items-center gap-2">
							<span className="font-semibold text-lg">Filter:</span>
							<Badge>{filterTag}</Badge>
							<Link to="/blog" search={{ tag: undefined }}>
								<X />
							</Link>
						</div>
					)}
				</div>
				{blogs.length ? (
					<ul className="flex flex-col gap-5">
						{blogs.map((post) => (
							<motion.li key={post._meta.path} variants={sectionVariants}>
								<Link
									className="flex flex-col items-baseline justify-between gap-2 sm:flex-row"
									to="/blog/$slug"
									params={{ slug: post._meta.path }}
								>
									<Card className="group w-full">
										<CardHeader>
											<CardTitle>{post.title}</CardTitle>
											<CardDescription>{post.description}</CardDescription>
										</CardHeader>
										<CardFooter className="flex justify-between">
											<time
												dateTime={post.date}
												className="font-light text-muted-foreground text-xs"
											>
												{format(parseISO(post.date), "MMMM d, yyyy")}
											</time>
											<Button
												className="transition-transform group-hover:translate-x-1"
												size="icon"
												variant="light"
											>
												<MoveRight size={12} strokeWidth={2} />
											</Button>
										</CardFooter>
									</Card>
								</Link>
							</motion.li>
						))}
					</ul>
				) : (
					<p>No blog posts yet!</p>
				)}
			</motion.section>
		</motion.div>
	);
}
