import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialMedia = [
	{
		name: "Linkedin",
		iconSrc: "/brands/LinkedIn.svg",
		href: "https://www.linkedin.com/in/bllakcn/",
	},
	{
		name: "Github",
		iconSrc: "/brands/GitHub.svg",
		href: "https://github.com/bllakcn",
	},
	{
		name: "Instagram",
		iconSrc: "/brands/Instagram.svg",
		href: "https://www.instagram.com/bllakcn",
	},
	{
		name: "Gmail",
		icon: Mail,
		href: "mailto:bllakcn35@gmail.com",
	},
] as const;

export default function FooterComponent() {
	return (
		<footer className="relative px-4 pt-12">
			<div className="mx-auto flex max-w-3xl flex-col items-center justify-center py-12">
				<ul className="flex gap-3">
					{socialMedia.map((item) => (
						<li className="flex items-center" key={item.name}>
							<Button asChild size="icon" variant="outline">
								<a
									className="p-1"
									title={item.name}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{"iconSrc" in item ? (
										<img
											src={item.iconSrc}
											alt=""
											className="size-4"
											aria-hidden
										/>
									) : (
										<item.icon className="size-4" />
									)}
								</a>
							</Button>
						</li>
					))}
				</ul>
				<p className="mt-4 text-center text-sm">
					© {new Date().getFullYear()} Ahmet Bilal Akcan
				</p>
			</div>
		</footer>
	);
}
