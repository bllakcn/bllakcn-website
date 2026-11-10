/**
 * @react-pdf layout for CV export — single A4 page, monospace ATS-friendly styling.
 */
import {
	Document,
	Image,
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
		fontSize: 8.5,
		lineHeight: 1.3,
		color: "#111111",
		paddingTop: 28,
		paddingBottom: 28,
		paddingHorizontal: 36,
	},
	header: {
		flexDirection: "row",
		gap: 12,
		marginBottom: 8,
		alignItems: "flex-start",
	},
	photo: {
		width: 52,
		height: 52,
		borderRadius: 26,
		objectFit: "cover",
	},
	headerText: {
		flexGrow: 1,
		flexShrink: 1,
	},
	name: {
		fontSize: 14,
		fontWeight: 700,
		letterSpacing: 0.3,
		marginBottom: 1,
	},
	title: {
		fontSize: 9,
		marginTop: 1,
		marginBottom: 3,
		color: "#2d51d2",
	},
	contactRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 3,
		marginBottom: 2,
		fontSize: 7.5,
		color: "#333333",
	},
	contactLink: {
		color: "#111111",
		textDecoration: "none",
	},
	address: {
		fontSize: 7.5,
		color: "#555555",
	},
	section: {
		marginBottom: 7,
	},
	sectionTitle: {
		fontSize: 8,
		fontWeight: 700,
		textTransform: "uppercase",
		marginBottom: 3,
		paddingBottom: 2,
		borderBottomWidth: 0.75,
		borderBottomColor: "#111111",
	},
	body: {
		fontSize: 8,
		color: "#222222",
	},
	skillsBody: {
		fontSize: 7.5,
		color: "#222222",
		lineHeight: 1.35,
	},
	entry: {
		marginBottom: 5,
	},
	entryHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
		marginBottom: 1,
	},
	entryTitle: {
		fontSize: 8,
		fontWeight: 700,
		flexGrow: 1,
		flexShrink: 1,
	},
	entryDate: {
		fontSize: 7.5,
		color: "#555555",
		flexShrink: 0,
	},
	entryMeta: {
		fontSize: 7.5,
		color: "#555555",
		marginBottom: 1,
	},
	languageRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 2,
	},
});

/** Shortens URLs for inline contact display (scheme and trailing slash removed). */
function displayUrl(url: string): string {
	return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

type CvDocumentProps = {
	cv: CV;
	labels: CvPdfLabels;
	/** Absolute filesystem path to headshot JPEG for Node `renderToBuffer`. */
	photoPath: string;
};

/** Maps {@link CV} data and localized section labels into a printable PDF document. */
export function CvDocument({ cv, labels, photoPath }: CvDocumentProps) {
	const { personal } = cv;
	const name = personal.name;
	const phoneHref = `tel:${personal.phone.replace(/\s+/g, "")}`;

	return (
		<Document
			title={`${name} — CV`}
			author={name}
			subject={personal.title}
			creator="bllakcn-website"
		>
			<Page size="A4" style={styles.page}>
				<View style={styles.header}>
					<Image src={photoPath} style={styles.photo} />
					<View style={styles.headerText}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.title}>{personal.title}</Text>
						<View style={styles.contactRow}>
							<Link src={`mailto:${personal.email}`} style={styles.contactLink}>
								{personal.email}
							</Link>
							<Text>·</Text>
							<Link src={phoneHref} style={styles.contactLink}>
								{personal.phone}
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

				{cv.skills.length > 0 ? (
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>{labels.skills}</Text>
						<Text style={styles.skillsBody}>{cv.skills.join(" · ")}</Text>
					</View>
				) : null}

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
