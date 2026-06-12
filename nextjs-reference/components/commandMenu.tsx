import { useCallback, useEffect, useState } from 'react';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from './ui/command';
import { Button } from './ui/button';
import { docsConfig } from '@/config/docs';
import { useRouter } from 'next/navigation';

export function CommandMenu() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	const runCommand = useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<Button onClick={() => setOpen(true)} variant='outline' size='sm'>
				⌘ K
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Search...' />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='Pages'>
						{docsConfig.NavbarLinks.map((item) => (
							<CommandItem
								key={item.href}
								value={item.title}
								onSelect={() => runCommand(() => router.push(item.href as string))}
							>
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading='Blogs'>
						{docsConfig.Blogs.map((item) => (
							<CommandItem
								key={item.title}
								value={item.title}
								onSelect={() => runCommand(() => router.push(`/blog/${item.slug}`))}
							>
								{item.title}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
