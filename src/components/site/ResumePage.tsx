import { Download } from "lucide-react";
import { useMemo, useState } from "react";
import TechIcons from "@/components/IconMap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import cv from "@/routes/resume-assets/cv.json";
import cvDutch from "@/routes/resume-assets/cv.nl.json";
import type { CV } from "@/types/cv";
import { Separator } from "../ui/separator";

/** Pre-generated PDF assets; paths must match `scripts/generate-cv.ts` output. */
const pdfByLanguage = {
	english: {
		href: "/cv.pdf",
		download: "Ahmet_Bilal_Akcan_CV.pdf",
	},
	dutch: {
		href: "/cv.nl.pdf",
		download: "Ahmet_Bilal_Akcan_CV_NL.pdf",
	},
} as const;

export default function ResumePage() {
	const [cvLanguage, setCvLanguage] =
		useState<keyof typeof pdfByLanguage>("english");
	const cvData = useMemo((): CV => {
		if (cvLanguage === "dutch") {
			return cvDutch as CV;
		}
		return cv as CV;
	}, [cvLanguage]);
	const pdf = pdfByLanguage[cvLanguage];
	const { personal } = cvData;

	return (
		<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-10">
			<section className="flex w-full items-start gap-3 md:col-span-2">
				<img
					src="/avatar.jpg"
					alt={personal.name}
					className="aspect-square w-24 rounded-full border border-border opacity-90 transition-opacity hover:opacity-100"
				/>
				<span className="min-w-0 flex-1">
					<Heading level="h2" className="pb-0">
						{personal.name}
					</Heading>
					<p className="text-secondary">{personal.title}</p>

					<Separator className="my-2 block text-muted-foreground md:hidden" />
					<ul className="mt-2 flex flex-wrap gap-2 font-light text-xs">
						<li>
							<a
								className="underline-offset-2 hover:underline"
								href={`mailto:${personal.email}`}
							>
								{personal.email}
							</a>
						</li>
						<li>
							<a
								className="underline-offset-2 hover:underline"
								href={personal.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								className="underline-offset-2 hover:underline"
								href={personal.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								className="underline-offset-2 hover:underline"
								href={personal.portfolio}
								target="_blank"
								rel="noopener noreferrer"
							>
								bllakcn.com
							</a>
						</li>
					</ul>
					<address className="mt-2 font-light text-xs not-italic">
						{personal.address}
					</address>
					<div className="mt-2 flex w-full gap-3">
						<ToggleGroup
							variant="outline"
							onValueChange={(value: string) => {
								if (value === "english" || value === "dutch") {
									setCvLanguage(value);
								}
							}}
							value={cvLanguage}
							type="single"
							size="sm"
						>
							<ToggleGroupItem
								value="english"
								aria-label="Toggle English"
								className="h-6 min-w-6 px-2 text-xs"
							>
								EN
							</ToggleGroupItem>
							<ToggleGroupItem
								value="dutch"
								aria-label="Toggle Dutch"
								className="h-6 min-w-6 px-2 text-xs"
							>
								NL
							</ToggleGroupItem>
						</ToggleGroup>
						<Button
							asChild
							variant="outline"
							size="sm"
							className="h-6 gap-1.5 px-2.5 text-xs"
						>
							<a href={pdf.href} download={pdf.download}>
								<Download className="size-3.5" aria-hidden />
								Download PDF
							</a>
						</Button>
					</div>
				</span>
			</section>
			<section className="space-y-4">
				<div>
					<Heading level="h4">Work Experience</Heading>
					<ul className="space-y-2">
						{cvData.workExperience.map((work) => (
							<li
								className="group ml-5 list-disc marker:text-secondary"
								key={work.id}
							>
								<div className="group-hover:text-primary/80">
									<p>{work.position}</p>
									<p className="pb-1 text-sm">
										{work.company},{" "}
										<span className="font-light text-sm italic">
											{work.city}
										</span>
									</p>
									<p className="font-light text-sm">{work.description}</p>
									<p className="font-extralight text-xs">{work.date}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Heading level="h4">Education</Heading>
					<ul className="space-y-2">
						{cvData.education.map((school) => (
							<li
								className="group ml-5 list-disc marker:text-secondary"
								key={school.id}
							>
								<div className="group-hover:text-primary/80">
									<p className="pb-1">
										{school.name},{" "}
										<span className="font-light text-sm italic">
											{school.city}
										</span>
									</p>
									<p className="font-light text-sm">{school.description}</p>
									<p className="font-extralight text-xs">{school.date}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Heading level="h4">Voluntary Experience</Heading>
					<ul className="space-y-2">
						{cvData.VoluntaryExperience.map((experience) => (
							<li
								className="group ml-5 list-disc marker:text-secondary"
								key={experience.id}
							>
								<div className="group-hover:text-primary/80">
									<p>{experience.position}</p>
									<p className="pb-1 text-sm">
										{experience.company ? `${experience.company}, ` : ""}
										<span className="font-light text-sm italic">
											{experience.city}
										</span>
									</p>
									<p className="font-light text-sm">{experience.description}</p>
									<p className="font-extralight text-xs">{experience.date}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="row-start-2 space-y-4 md:row-start-auto">
				<Card>
					<CardHeader>
						<CardTitle level="h4">Bio</CardTitle>
					</CardHeader>
					<CardContent>
						{cvData.bio.split("\n").map((line) => (
							<p key={line} className="text-pretty font-light text-sm">
								{line}
							</p>
						))}
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle level="h4">Technical Skills</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex flex-wrap gap-2">
							{cvData.skills.map((skill) => (
								<Badge className="gap-1" key={skill}>
									{skill}
									<TechIcons iconName={skill} />
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle level="h4">Languages</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							{cvData.languages.map((language) => (
								<li className="group space-y-1" key={language.title}>
									<p className="text-sm">
										{language.title}{" "}
										<span className="font-light italic opacity-0 transition-opacity group-hover:opacity-100">
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
		</div>
	);
}
