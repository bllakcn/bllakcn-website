import { useMDXComponent } from '@content-collections/mdx/react';
import type { MDXComponents } from 'mdx/types';
import { IoAlertOutline, IoInformationOutline } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import { Alert, AlertDescription } from './ui/alert';
import TechIcons from './IconMap';

const components: MDXComponents = {
	WarningComponent,
	InformationComponent,
	CodeTitleComponent,
	ImageComponent,
	a: ({ href, children }) => LinkComponent({ href, children }),
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
	return <Link href={href || ''}>{children}</Link>;
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
	props: React.ComponentProps<typeof Image>;
}) {
	return <Image {...props} src={src} alt={alt} width={width} height={height} />;
}

function WarningComponent({ content }: { content: string }) {
	return (
		<Alert variant='secondary' alertIcon={<IoAlertOutline size={15} />}>
			<AlertDescription>{content}</AlertDescription>
		</Alert>
	);
}

function InformationComponent({ content }: { content: string }) {
	return (
		<Alert variant='tertiary' alertIcon={<IoInformationOutline size={15} />}>
			<AlertDescription>{content}</AlertDescription>
		</Alert>
	);
}

function CodeTitleComponent({ content }: { content: string }) {
	const index = content.lastIndexOf('/');
	const directory = content.substring(0, index + 1);
	const file = content.substring(index + 1);
	return (
		<div
			data-rehype-pretty-code-title
			data-theme='default'
			className='relative rounded-t-lg border-2 border-b-0 border-border bg-[#24282f] p-3 text-sm'
		>
			<div className='absolute left-5 top-1/2 flex -translate-y-1/2 items-center justify-center gap-1'>
				<span className='h-2 w-2 rounded-full bg-red-400'></span>
				<span className='h-2 w-2 rounded-full bg-yellow-400'></span>
				<span className='h-2 w-2 rounded-full bg-green-400'></span>
			</div>
			<p className='my-0 text-center text-background/60'>
				{directory}
				<span className='text-background'>{file}</span>
			</p>
		</div>
	);
}
