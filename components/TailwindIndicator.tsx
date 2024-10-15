import { isProduction } from '@/env';
export default function TailwindIndicator() {
	if (isProduction) return null;
	return (
		<div className='fixed bottom-1 right-1 z-50 flex size-6 select-none items-center justify-center rounded-full bg-secondary/80 p-3 font-mono text-xs text-secondary-foreground'>
			<span className='block sm:hidden'>xs</span>
			<span className='hidden sm:block md:hidden'>sm</span>
			<span className='hidden md:block lg:hidden'>md</span>
			<span className='hidden lg:block xl:hidden'>lg</span>
			<span className='hidden xl:block 2xl:hidden'>xl</span>
			<span className='hidden 2xl:block'>2xl</span>
		</div>
	);
}
