import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ArrowLeft, X } from "lucide-react";
import FooterComponent from "@/components/site/Footer/Footer";
import NavbarComponent from "@/components/site/Navbar/Navbar";
import TailwindIndicator from "@/components/TailwindIndicator";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import Providers from "@/providers";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				title: "bllakcn",
			},
			{
				name: "description",
				content:
					"Explore Ahmet Bilal Akcan's web development portfolio. Discover the work of this self-taught developer with a background in architecture.",
			},
		],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function NotFound() {
	return (
		<section className="mt-20 flex h-full flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-3 p-10">
				<span className="flex items-center gap-2">
					<X size={24} />
					<Heading className="pb-0" level="h2">
						Not Found
					</Heading>
				</span>
				<p className="mb-2">Could not find requested resource.</p>
				<Button asChild variant="outline">
					<Link to="/" className="flex items-center gap-2">
						<ArrowLeft />
						Return Home
					</Link>
				</Button>
			</div>
		</section>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<HeadContent />
			</head>
			<body
				className={cn(
					"h-full overflow-y-scroll bg-primary font-sans text-foreground antialiased",
				)}
			>
				<Providers>
					<div className="mx-auto max-w-8xl">
						<div className="page m-3 flex min-h-[calc(100svh-24px)] flex-col rounded-md border bg-background md:mx-9">
							<NavbarComponent />
							<main className="flex-1">{children}</main>
							<FooterComponent />
						</div>
					</div>
					<Toaster />
					<TailwindIndicator />
				</Providers>
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
