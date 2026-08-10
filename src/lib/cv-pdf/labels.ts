/** Locales supported by CV PDF generation. */
export type CvLocale = "en" | "nl";

/** Localized section headings rendered by {@link CvDocument}. */
export type CvPdfLabels = {
	bio: string;
	work: string;
	education: string;
	voluntary: string;
	languages: string;
};

const labelsByLocale: Record<CvLocale, CvPdfLabels> = {
	en: {
		bio: "Bio",
		work: "Work Experience",
		education: "Education",
		voluntary: "Voluntary Experience",
		languages: "Languages",
	},
	nl: {
		bio: "Bio",
		work: "Werkervaring",
		education: "Opleiding",
		voluntary: "Vrijwilligerswerk",
		languages: "Talen",
	},
};

/** Returns section headings for the given PDF locale. */
export function getCvPdfLabels(locale: CvLocale): CvPdfLabels {
	return labelsByLocale[locale];
}
