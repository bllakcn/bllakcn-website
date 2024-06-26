import { Button } from '@nextui-org/button';
import NextLink from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export default function NotFound() {
	return (
		<div className='mx-auto flex min-h-screen items-center justify-center'>
			<div className='flex flex-col items-center justify-center gap-3 p-10 '>
				<h2 className='text-xl font-bold'>Not Found</h2>
				<p className='mb-2'>Could not find requested resource.</p>
				<Button endContent={<IoArrowBack />} variant='flat' as={NextLink} href='/'>
					Return Home
				</Button>
			</div>
		</div>
	);
}
