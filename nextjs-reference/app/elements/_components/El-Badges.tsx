import { Badge, BadgeProps } from '@/components/ui/badge';

type BadgeType = { name: string; variant: BadgeProps['variant'] };
const badges: BadgeType[] = [
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
		name: 'Ghost',
		variant: 'ghost',
	},
];
export default function ElementBadges() {
	return (
		<ul className='flex flex-wrap items-baseline gap-4'>
			{badges.map((badge) => (
				<li key={badge.name}>
					<Badge variant={badge.variant}>{badge.name}</Badge>
				</li>
			))}
		</ul>
	);
}
