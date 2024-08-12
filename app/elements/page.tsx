import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import ElementsButtons from './_components/El-Buttons';
import ElementBadges from './_components/El-Badges';
import ElementColors from './_components/El-Colors';
import ElementAlert from './_components/El-Alert';
import ElementCard from './_components/El-Card';

export default function Elements() {
	return (
		<div className='mx-auto w-full max-w-5xl space-y-5 p-4'>
			<p>Collection of some UI elements.</p>
			<div className='space-y-3'>
				<Heading level='h4'>Color Palette</Heading>
				<ElementColors />
			</div>
			<Separator />
			<div className='space-y-3'>
				<Heading level='h4'>Headings</Heading>
				<ul className='flex flex-wrap items-baseline gap-4'>
					<Heading>Heading 1</Heading>
					<Heading level='h2'>Heading 2</Heading>
					<Heading level='h3'>Heading 3</Heading>
					<Heading level='h4'>Heading 4</Heading>
					<p>Paragraph</p>
				</ul>
			</div>
			<Separator />
			<div className='space-y-3'>
				<Heading level='h4'>Buttons</Heading>
				<ElementsButtons />
			</div>
			<Separator />
			<div className='space-y-3'>
				<Heading level='h4'>Badges</Heading>
				<ElementBadges />
			</div>
			<Separator />
			<div className='space-y-3'>
				<Heading level='h4'>Alerts</Heading>
				<ElementAlert />
			</div>
			<Separator />
			<div className='space-y-3'>
				<Heading level='h4'>Card</Heading>
				<ElementCard />
			</div>
		</div>
	);
}
