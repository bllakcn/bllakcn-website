import { Link } from "@tanstack/react-router";
import type { Blog } from "content-collections";
import { format, parseISO } from "date-fns";
import TechIcons from "@/components/IconMap";
import { Mdx } from "@/components/mdx-components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import BlogSidebar from "./BlogSidebar";

type BlogPageProps = {
	blog: Blog;
};

export default function BlogDisplay({ blog }: BlogPageProps) {
	return (
		<article className="space-y-3 px-3 pt-9 pb-3 sm:px-10 sm:pt-24 sm:pb-9">
			<div className="space-y-3">
				<span className="">
					<Heading>{blog.title}</Heading>
					{blog.description && (
						<p className="text-muted-foreground">{blog.description}</p>
					)}
				</span>
				<div className="flex justify-between lg:pr-16">
					{blog.tags && (
						<div className="flex flex-wrap gap-1">
							{blog.tags.map((tag) => (
								<Button asChild variant="badge" size="badge" key={tag.name}>
									<Link
										className="flex items-center gap-1"
										to="/blog"
										search={{ tag: tag.slug }}
									>
										{tag.name}
										<TechIcons iconName={tag.icon} />
									</Link>
								</Button>
							))}
						</div>
					)}
					{blog.author && (
						<Link className="inline-flex items-center gap-2" to="/">
							<p className="text-muted-foreground">{blog.author}</p>
							<Avatar className="h-8 w-8">
								<AvatarImage src="/avatar.jpg" alt={blog.author} />
								<AvatarFallback>{blog.author[0]}</AvatarFallback>
							</Avatar>
						</Link>
					)}
				</div>
			</div>
			<Separator />
			<div className="grid grid-cols-1 py-2 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-2">
				<div className="prose-pre:scrollbar-hide prose prose-neutral dark:prose-invert prose-figure:m-0 prose-headings:scroll-mt-20 prose-img:rounded-lg prose-pre:rounded-lg prose-code:font-normal prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
					<Mdx code={blog.mdx} />
				</div>
				{blog.toc && <BlogSidebar headers={blog.headers} />}
			</div>
			<Separator className="my-4" />
			<p className="text-muted-foreground text-xs">
				{format(parseISO(blog.date), "MMMM d, yyyy")}
			</p>
		</article>
	);
}
