import { CircleAlert, Info } from "lucide-react";
import {
	Alert,
	AlertDescription,
	type AlertProps,
	AlertTitle,
} from "@/components/ui/alert";

type AlertType = {
	name: string;
	variant: AlertProps["variant"];
	icon: React.ComponentType<any>;
};
const alerts: AlertType[] = [
	{
		name: "Default",
		variant: "default",
		icon: Info,
	},
	{
		name: "Secondary",
		variant: "secondary",
		icon: CircleAlert,
	},
	{
		name: "Tertiary",
		variant: "tertiary",
		icon: Info,
	},
	{
		name: "Destructive",
		variant: "destructive",
		icon: CircleAlert,
	},
	{
		name: "Ghost",
		variant: "ghost",
		icon: Info,
	},
];
export default function ElementAlert() {
	return (
		<ul className="flex flex-wrap items-baseline gap-4">
			{alerts.map((alert) => (
				<li key={alert.name}>
					<Alert alertIcon={<alert.icon />} variant={alert.variant}>
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
