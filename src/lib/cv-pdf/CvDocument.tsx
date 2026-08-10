/**
 * @react-pdf layout for CV export — single A4 page, monospace ATS-friendly styling.
 */
import {
	Document,
	Link,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";
import type { CV } from "@/types/cv";
import type { CvPdfLabels } from "./labels";

const styles = StyleSheet.create({
	page: {
		fontFamily: "JetBrains Mono",
		fontSize: 9,
		lineHeight: 1.45,
		color: "#111111",
		paddingTop: 36,
		paddingBottom: 36,
		paddingHorizontal: 40,
	},
	name: {
		fontSize: 16,
		fontWeight: 700,
		letterSpacing: 0.4,
		marginBottom: 2,
	},
	title: {
		fontSize: 10,
		marginTop: 3,
		marginBottom: 6,
		color: "#333333",
	},
	contactRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 4,
		marginBottom: 4,
		fontSize: 8,
		color: "#333333",
	},
	contactLink: {
		color: "#111111",
		textDecoration: "none",
	},
	address: {
		fontSize: 8,
		color: "#555555",
		marginBottom: 14,
	},
	section: {
		marginBottom: 12,
	},
	sectionTitle: {
		fontSize: 9,
		fontWeight: 700,
		textTransform: "uppercase",
		marginBottom: 4,
		paddingBottom: 3,
		borderBottomWidth: 0.75,
		borderBottomColor: "#111111",
	},
	body: {
		fontSize: 9,
		color: "#222222",
	},
	entry: {
		marginBottom: 8,
	},
	entryHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 12,
		marginBottom: 1,
	},
	entryTitle: {
		fontSize: 9,
		fontWeight: 700,
		flexGrow: 1,
		flexShrink: 1,
	},
	entryDate: {
		fontSize: 8,
		color: "#555555",
		flexShrink: 0,
	},
	entryMeta: {
		fontSize: 8,
		color: "#555555",
		marginBottom: 2,
	},
	languageRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 3,
	},
});

/** Shortens URLs for inline contact display (scheme and trailing slash removed). */
function displayUrl(url: string): string {
	return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

type CvDocumentProps = {
	cv: CV;
	labels: CvPdfLabels;
};

/** Maps {@link CV} data and localized section labels into a printable PDF document. */
export function CvDocument({ cv, labels }: CvDocumentProps) {
	const { personal } = cv;
	const name = personal.name;

	return (
		<Document
			title={`${name} — CV`}
			author={name}
			subject={personal.title}
			creator="bllakcn-website"
		>
			<Page size="A4" style={styles.page}>
				<View>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.title}>{personal.title}</Text>
					<View style={styles.contactRow}>
						<Link src={`mailto:${personal.email}`} style={styles.contactLink}>
							{personal.email}
						</Link>
						<Text>·</Text>
						<Link src={personal.linkedin} style={styles.contactLink}>
							{displayUrl(personal.linkedin)}
						</Link>
						<Text>·</Text>
						<Link src={personal.github} style={styles.contactLink}>
							{displayUrl(personal.github)}
						</Link>
						<Text>·</Text>
						<Link src={personal.portfolio} style={styles.contactLink}>
							{displayUrl(personal.portfolio)}
						</Link>
					</View>
					<Text style={styles.address}>{personal.address}</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{labels.bio}</Text>
					{cv.bio.split("\n").map((paragraph) => (
						<Text key={paragraph.slice(0, 24)} style={styles.body}>
							{paragraph}
							{"\n"}
						</Text>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{labels.work}</Text>
					{cv.workExperience.map((work) => (
						// Prevent page breaks mid-entry (react-pdf wrap default).
						<View key={work.id} style={styles.entry} wrap={false}>
							<View style={styles.entryHeader}>
								<Text style={styles.entryTitle}>{work.position}</Text>
								<Text style={styles.entryDate}>{work.date}</Text>
							</View>
							<Text style={styles.entryMeta}>
								{work.company}, {work.city}
							</Text>
							<Text style={styles.body}>{work.description}</Text>
						</View>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{labels.education}</Text>
					{cv.education.map((school) => (
						<View key={school.id} style={styles.entry} wrap={false}>
							<View style={styles.entryHeader}>
								<Text style={styles.entryTitle}>{school.name}</Text>
								<Text style={styles.entryDate}>{school.date}</Text>
							</View>
							<Text style={styles.entryMeta}>{school.city}</Text>
							<Text style={styles.body}>{school.description}</Text>
						</View>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{labels.voluntary}</Text>
					{cv.VoluntaryExperience.map((experience) => (
						<View key={experience.id} style={styles.entry} wrap={false}>
							<View style={styles.entryHeader}>
								<Text style={styles.entryTitle}>{experience.position}</Text>
								<Text style={styles.entryDate}>{experience.date}</Text>
							</View>
							<Text style={styles.entryMeta}>
								{[experience.company, experience.city]
									.filter(Boolean)
									.join(", ")}
							</Text>
							<Text style={styles.body}>{experience.description}</Text>
						</View>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{labels.languages}</Text>
					{cv.languages.map((language) => (
						<View key={language.title} style={styles.languageRow}>
							<Text style={styles.body}>{language.title}</Text>
							<Text style={styles.entryMeta}>{language.description}</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
}
