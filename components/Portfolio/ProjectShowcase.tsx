import { Project } from '@/types/Portfolio';
import { IoLogoGithub, IoArrowForwardCircleSharp } from 'react-icons/io5';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Tooltip, TooltipTrigger } from '../ui/tooltip';
import { Badge } from '../ui/badge';
import { TooltipContent } from '@radix-ui/react-tooltip';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectShowcase({
	title,
	description,
	image,
	github,
	link,
	technologies,
	info,
}: Project) {
	return (
		<Card>
			<CardHeader className='flex flex-col items-start'>
				<span className='flex w-full items-center justify-between'>
					<h3 className='text-2xl font-bold'>{title}</h3>
					{info ? (
						<>
							<Tooltip>
								<TooltipContent>{info}</TooltipContent>
								<TooltipTrigger>
									<Badge className='select-none'>!</Badge>
								</TooltipTrigger>
							</Tooltip>
						</>
					) : (
						<></>
					)}
				</span>
				<p className='italic'>{description}</p>
			</CardHeader>
			<CardContent className='aspect-square h-full justify-end p-1'>
				<Image
					src={image.src}
					alt={title}
					width={image.width}
					height={image.height}
					className=' object-cover object-center'
				/>
			</CardContent>
			<CardFooter className='justify-between'>
				<Link href={github}>
					<IoLogoGithub size={42} />
				</Link>
				<div className='flex gap-3'>
					{technologies.map((Tech, index) => (
						<Tech
							height={24}
							width={24}
							className='saturate-0 transition-all hover:saturate-100'
							key={index}
						/>
					))}
				</div>
				<Link href={link}>
					<IoArrowForwardCircleSharp size={42} />
				</Link>
			</CardFooter>
		</Card>
	);
}
