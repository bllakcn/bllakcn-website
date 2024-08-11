import { Alert, AlertDescription, AlertProps, AlertTitle } from '@/components/ui/alert';
import { IoInformationOutline, IoAlertOutline } from 'react-icons/io5';

type AlertType = { name: string; variant: AlertProps['variant']; icon: React.ComponentType<any> };
const alerts: AlertType[] = [
	{
		name: 'Default',
		variant: 'default',
		icon: IoInformationOutline,
	},
	{
		name: 'Secondary',
		variant: 'secondary',
		icon: IoInformationOutline,
	},
	{
		name: 'Tertiary',
		variant: 'tertiary',
		icon: IoInformationOutline,
	},
	{
		name: 'Destructive',
		variant: 'destructive',
		icon: IoAlertOutline,
	},
];
export default function ElementAlert() {
	return (
		<ul className='flex flex-wrap items-baseline gap-4'>
			{alerts.map((alert) => (
				<li key={alert.name}>
					<Alert alertIcon={<alert.icon size={15} />} variant={alert.variant}>
						<AlertTitle>{alert.name}</AlertTitle>
						<AlertDescription>
							This is the <strong>description</strong> of the alert.
						</AlertDescription>
					</Alert>
				</li>
			))}
		</ul>
	);
}
