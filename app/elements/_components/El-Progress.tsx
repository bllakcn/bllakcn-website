'use client';

import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

export default function ElementProgress() {
	const [value, setValue] = useState(65);

	return <Progress onClick={() => setValue(Math.floor(Math.random() * 100))} value={value} />;
}
