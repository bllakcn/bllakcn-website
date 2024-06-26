import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import { Button } from '@nextui-org/button';
import { Chip } from '@nextui-org/chip';
import { Badge } from '@nextui-org/badge';
import { cn } from '@/libs/utils';
import { IoAlertOutline, IoInformationOutline, IoCopyOutline } from 'react-icons/io5';
import FastSvg from './Portfolio/TechStack/Fast';
import PythonSvg from './Portfolio/TechStack/Python';

const components: MDXComponents = {
	WarningComponent,
	InformationComponent,
	CodeTitleComponent,
	ImageComponent,
	a: ({ href, children }) => LinkComponent({ href, children }),
	FastSvg,
	PythonSvg,
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
	return (
		<Link isExternal showAnchorIcon as={NextLink} href={href}>
			{children}
		</Link>
	);
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
	return <Image as={NextImage} src={src} alt={alt} width={width} height={height} {...props} />;
}

function WarningComponent({ content }: { content: string }) {
	return (
		<Badge
			placement='top-left'
			variant='solid'
			className='p-1'
			content={<IoAlertOutline size={15} />}
		>
			<Chip classNames={{ base: 'pl-8 pr-5' }} className='h-auto whitespace-normal' variant='faded'>
				<p className='my-0 py-1'>{content}</p>
			</Chip>
		</Badge>
	);
}

function InformationComponent({ content }: { content: string }) {
	return (
		<Badge
			placement='top-left'
			variant='solid'
			className='p-1'
			content={<IoInformationOutline size={15} />}
		>
			<Chip classNames={{ base: 'pl-8 pr-5' }} className='h-auto whitespace-normal' variant='flat'>
				<p className='my-0 py-1'>{content}</p>
			</Chip>
		</Badge>
	);
}

function CodeTitleComponent({ content }: { content: string }) {
	const index = content.lastIndexOf('/');
	const directory = content.substring(0, index + 1);
	const file = content.substring(index + 1);
	return (
		<div data-rehype-pretty-code-title data-theme='default' className='relative'>
			<div className='absolute left-5 top-1/2 flex -translate-y-1/2 items-center justify-center gap-1'>
				<span className='h-2 w-2 rounded-full bg-red-400'></span>
				<span className='h-2 w-2 rounded-full bg-yellow-400'></span>
				<span className='h-2 w-2 rounded-full bg-green-400'></span>
			</div>
			<p className='my-0 text-center text-default-400 dark:text-default-500'>
				{directory}
				<span className='text-background dark:text-foreground'>{file}</span>
			</p>
		</div>
	);
}
