import { Button, type ButtonProps } from '@/components/ui/button';

type Button = {
	name: string;
	variant?: ButtonProps['variant'];
	size?: ButtonProps['size'];
};

const buttons: Button[] = [
	{
		name: 'Default',
		variant: 'default',
	},
	{
		name: 'Secondary',
		variant: 'secondary',
	},
	{
		name: 'Tertiary',
		variant: 'tertiary',
	},
	{
		name: 'Destructive',
		variant: 'destructive',
	},
	{
		name: 'Outline',
		variant: 'outline',
	},
	{
		name: 'Light',
		variant: 'light',
	},
	{
		name: 'Ghost',
		variant: 'ghost',
	},
	{
		name: 'Link',
		variant: 'link',
	},
	{
		name: 'Badge',
		variant: 'badge',
		size: 'badge',
	},
];
export default function ElementsButtons() {
	return (
		<ul className='flex flex-wrap items-baseline gap-4'>
			{buttons.map((button, index) => (
				<li key={button.name}>
					<Button size={button.size} variant={button.variant}>
						{button.name}
					</Button>
				</li>
			))}
		</ul>
	);
}
