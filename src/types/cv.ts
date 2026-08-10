/** Resume content loaded from `src/routes/resume-assets/cv*.json`. */
export interface CV {
	bio: string;
	personal: Personal;
	languages: Language[];
	hobbies: unknown[];
	workExperience: WorkExperience[];
	education: Education[];
	VoluntaryExperience: VoluntaryExperience[];
}

/** Contact and identity block shared by the web resume and PDF export. */
export interface Personal {
	name: string;
	title: string;
	address: string;
	email: string;
	linkedin: string;
	github: string;
	portfolio: string;
}

export interface Language {
	title: string;
	description: string;
	progress: number;
}

export interface WorkExperience {
	id: number;
	position: string;
	company: string;
	city: string;
	date: string;
	description: string;
}

export interface Education {
	id: number;
	name: string;
	city: string;
	date: string;
	description: string;
}

export interface VoluntaryExperience {
	id: number;
	position: string;
	city: string;
	date: string;
	description: string;
	company?: string;
}
