import { useMDXComponent } from "@content-collections/mdx/react";
import { Link } from "@tanstack/react-router";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, CircleAlert, Copy, Info } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, type AlertProps } from "./ui/alert";
import { Button } from "./ui/button";

const components: MDXComponents = {
	AlertComponent,
	CodeTitleComponent,
	ImageComponent,
	a: ({ href, children }) => LinkComponent({ href, children }),
	CopyButton,
	pre: ({ children, raw, ...props }) => (
		<Pre raw={raw} {...props}>
			{children}
		</Pre>
	),
};

export function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code);

	return <Component components={components} />;
}

function LinkComponent({
	href,
	children,
}: {
	href: string | undefined;
	children: React.ReactNode;
}) {
	return <Link to={href || "/"}>{children}</Link>;
}

function ImageComponent({
	src,
	alt,
	width,
	height,
	props,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
	props: React.ImgHTMLAttributes<HTMLImageElement>;
}) {
	return <img {...props} src={src} alt={alt} width={width} height={height} />;
}

function AlertComponent({
	content,
	variant,
}: {
	content: string;
	variant: "warning" | "information";
}) {
	const variantMap: Record<typeof variant, AlertProps["variant"]> = {
		warning: "secondary",
		information: "tertiary",
	};
	const Icon = variant === "warning" ? CircleAlert : Info;
	return (
		<Alert variant={variantMap[variant]} alertIcon={<Icon />}>
			<AlertDescription>{content}</AlertDescription>
		</Alert>
	);
}

function CodeTitleComponent({ content }: { content: string }) {
	const index = content.lastIndexOf("/");
	const directory = content.substring(0, index + 1);
	const file = content.substring(index + 1);
	return (
		<div
			data-rehype-pretty-code-title
			data-theme="default"
			className="relative rounded-t-lg border-2 border-border border-b-0 bg-(--tw-prose-pre-bg) p-3 text-sm"
		>
			<div className="absolute top-1/2 left-5 flex -translate-y-1/2 items-center justify-center gap-1">
				<span className="h-2 w-2 rounded-full bg-red-400" />
				<span className="h-2 w-2 rounded-full bg-yellow-400" />
				<span className="h-2 w-2 rounded-full bg-green-400" />
			</div>
			<p className="my-0 text-center text-background/60">
				{directory}
				<span className="text-background">{file}</span>
			</p>
		</div>
	);
}

function CopyButton({ text, className }: { text: string; className?: string }) {
	const [isCopied, setIsCopied] = useState(false);
	const [_copiedText, copyToClipboard] = useCopyToClipboard();

	const copy = async () => {
		await copyToClipboard(text);
		setIsCopied(true);
		toast("Copied to clipboard.");

		setTimeout(() => {
			setIsCopied(false);
		}, 2500);
	};

	const Icon = isCopied ? Check : Copy;

	return (
		<Button
			className={cn("absolute top-3 right-3", className)}
			variant="light"
			onClick={() => {
				if (!isCopied) {
					copy();
				}
			}}
			size="icon"
		>
			<Icon size={12} />
		</Button>
	);
}

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
	children: React.ReactNode;
	raw: string;
	className?: string;
	"data-language"?: string;
}

function Pre({ children, raw, className, ...props }: PreProps) {
	// const lang = props["data-language"];
	return (
		<pre {...props} className={cn("", className)}>
			<CopyButton text={raw} />
			{children}
		</pre>
	);
}
