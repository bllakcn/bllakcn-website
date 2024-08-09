'use client';
import { cn } from '@/lib/utils';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

type colorType = {
	name: string;
	hex: string;
};
const colors: colorType[] = [
	{ name: 'primary', hex: '#2f2f2f' },
	{ name: 'secondary', hex: '#2c51d3' },
	{ name: 'tertiary', hex: '#c0e6de' },
	{ name: 'destructive', hex: '#ef4444' },
	{ name: 'background', hex: '#f8f4f1' },
];

export default function ElementColors() {
	const [copiedText, copyToClipboard] = useCopyToClipboard();
	// TODO: show toast on copy
	return (
		<ul className='flex flex-wrap items-center gap-2'>
			{colors.map((color) => (
				<li key={color.name}>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='default'
								onClick={() => {
									copyToClipboard(color.hex);
									toast(`Copied ${color.hex} to clipboard.`);
								}}
								className={cn(
									'h-10 w-10 rounded-full border border-border',
									`bg-${color.name} hover:bg-${color.name}`
								)}
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p className='text-sm'>{color.hex}</p>
						</TooltipContent>
					</Tooltip>
				</li>
			))}
		</ul>
	);
}
