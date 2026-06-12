import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { X, ArrowLeft } from 'lucide-react';
import { Heading } from '@/components/ui/heading';

export default function NotFound() {
	return (
		<section className='mt-20 flex h-full flex-col items-center justify-center'>
			<div className='flex flex-col items-center justify-center gap-3 p-10 '>
				<span className=' flex items-center gap-2'>
					<X size={24} />
					<Heading className='pb-0' level='h2'>
						Not Found
					</Heading>
				</span>
				<p className='mb-2'>Could not find requested resource.</p>
				<Button asChild variant='outline'>
					<Link href='/' className='flex items-center gap-2'>
						<ArrowLeft />
						Return Home
					</Link>
				</Button>
			</div>
		</section>
	);
}
