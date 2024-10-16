import Image from 'next/image';
import ProfilePhoto from '@/public/avatar.jpg';
import { Heading } from '@/components/ui/heading';
import cv from './cv.json';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
export default function Cv() {
	return (
		<div className='mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 space-y-5 p-4 md:grid-cols-2 md:gap-10'>
			<section className='flex w-full items-end gap-3 md:col-span-2'>
				<Image
					priority
					quality={45}
					src={ProfilePhoto}
					alt='Profile Photo'
					className='aspect-square w-24 rounded-full'
				/>
				<span className=''>
					<Heading level='h2' className='pb-0'>
						Ahmet Bilal Akcan
					</Heading>
					<span className='flex justify-between'>
						<p className='text-xs'>{cv.personal.title}</p>
						<address className='text-right text-xs font-light'>{cv.personal.address}</address>
					</span>
				</span>
			</section>
			<section className='space-y-4'>
				<Card>
					<CardHeader>
						<CardTitle level='h4'>Bio</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-pretty text-sm font-light'>
							Architectural visionary turned self-taught web developer. <br />I am motivated by results and
							a team player who thrives on challenges.
							<br />I am also passionate about photography, videography, and coffee making.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle level='h4'>Languages</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className='space-y-2'>
							{cv.languages.map((language) => (
								<li className='group space-y-1' key={language.title}>
									<p className='text-sm'>
										{language.title}{' '}
										<span className='font-light italic opacity-0 transition-opacity group-hover:opacity-100'>
											({language.description})
										</span>
									</p>
									<Progress value={language.progress} />
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</section>
			<section className='space-y-4'>
				<div>
					<Heading level='h4'>Work Experience</Heading>
					<ul className='space-y-2'>
						{cv.workExperience.map((work) => (
							<li className='group ml-5 list-disc marker:text-secondary' key={work.id}>
								<div className='group-hover:text-primary/80'>
									<p>{work.position}</p>
									<p className='pb-1 text-sm'>
										{work.company}, <span className='text-sm font-light italic'>{work.city}</span>
									</p>
									<p className='text-sm font-light'>{work.description}</p>
									<p className='text-xs font-extralight'>{work.date}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Heading level='h4'>Education</Heading>
					<ul className='space-y-2'>
						{cv.education.map((school) => (
							<li className='group ml-5 list-disc marker:text-secondary' key={school.id}>
								<div className='group-hover:text-primary/80'>
									<p className='pb-1'>
										{school.name}, <span className='text-sm font-light italic'>{school.city}</span>
									</p>
									<p className='text-sm font-light'>{school.description}</p>
									<p className='text-xs font-extralight'>{school.date}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Heading level='h4'>Voluntary Experience</Heading>
					<ul className='space-y-2'>
						{cv.VoluntaryExperience.map((experience) => (
							<li className='group ml-5 list-disc marker:text-secondary' key={experience.id}>
								<div className='group-hover:text-primary/80'>
									<p>{experience.position}</p>
									<p className='pb-1 text-sm'>
										{experience.company ? `${experience.company}, ` : ``}
										<span className='text-sm font-light italic'>{experience.city}</span>
									</p>
									<p className='text-sm font-light'>{experience.description}</p>
									<p className='text-xs font-extralight'>{experience.date}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}
