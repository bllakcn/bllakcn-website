export interface CV {
	personal: Personal;
	languages: Language[];
	hobbies: any[];
	workExperience: WorkExperience[];
	education: Education[];
	VoluntaryExperience: VoluntaryExperience[];
}

export interface Personal {
	title: string;
	address: string;
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
