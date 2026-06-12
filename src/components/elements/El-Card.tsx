import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
export default function ElementCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>
					This is the <strong>description</strong> of the card.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter className="flex justify-end gap-4">
				<Button variant="outline">Outline</Button>
			</CardFooter>
		</Card>
	);
}
