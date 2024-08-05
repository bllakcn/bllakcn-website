import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export default function NotFound() {
	return (
		<div className='mx-auto flex min-h-screen items-center justify-center'>
			<div className='flex flex-col items-center justify-center gap-3 p-10 '>
				<h2 className='text-xl font-bold'>Not Found</h2>
				<p className='mb-2'>Could not find requested resource.</p>
				<Button asChild variant='outline'>
					<Link href='/' className='flex items-center gap-2'>
						<IoArrowBack />
						Return Home
					</Link>
				</Button>
			</div>
		</div>
	);
}
