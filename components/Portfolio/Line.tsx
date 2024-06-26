import { SVGProps } from 'react';

const CssSvg = ({ stroke, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			id='Layer_1'
			data-name='Layer 1'
			viewBox='0 0 100.71 1020.9'
			{...props}
		>
			<path
				d='M36.92 1c.68 1.55 1.6 3.34 2.73 5.34'
				style={{
					fill: 'none',
					stroke: '#8f8e8e',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeWidth: 2,
				}}
			/>
			<path
				d='M45.84 16.72c13.3 21.57 34.91 55.19 35.02 84.65.15 38.3-40.58 68.93-39.83 107.97.75 39.03 31.03 94.14 44.32 126.23C111.65 399.09 1.25 555.61 1 452.03c-.3-123.38 113 54.76 97.2 131.99C85 648.5 40.06 632.56 36.92 671.6c-1.72 21.43 24.19 52.71 38.55 80.11 13.3 25.37 15.06 48.29-5.76 68.2-14.44 13.81-33.87 38.3-34.32 69.4-.95 65.19 59.35 47.55 43.37 114.63'
				style={{
					strokeDasharray: '0 0 12.09 12.09',
					fill: 'none',
					stroke: '#8f8e8e',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeWidth: 2,
				}}
			/>
			<path
				d='M77.23 1009.79c-.52 1.85-1.1 3.77-1.74 5.74'
				style={{
					fill: 'none',
					stroke: '#8f8e8e',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeWidth: 2,
				}}
			/>
			<path
				d='m72.75 1002.33 2-.1.66 13.08 7.9-10.45 1.6 1.21-11.22 14.83-.94-18.57z'
				style={{
					fill: '#8f8e8e',
				}}
			/>
		</svg>
	);
};

export default CssSvg;
