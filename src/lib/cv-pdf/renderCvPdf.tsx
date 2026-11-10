import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderToBuffer } from "@react-pdf/renderer";
import type { CV } from "@/types/cv";
import { CvDocument } from "./CvDocument";
import { registerCvPdfFonts } from "./fonts";
import { type CvLocale, getCvPdfLabels } from "./labels";

const photoPath = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"../../../public/avatar.jpg",
);

/**
 * Renders CV data for a locale into a PDF buffer.
 * Registers fonts on first call; safe to invoke repeatedly.
 */
export async function renderCvPdf(cv: CV, locale: CvLocale): Promise<Buffer> {
	if (!existsSync(photoPath)) {
		throw new Error(`CV photo not found at ${photoPath}`);
	}

	registerCvPdfFonts();
	const labels = getCvPdfLabels(locale);
	const buffer = await renderToBuffer(
		<CvDocument cv={cv} labels={labels} photoPath={photoPath} />,
	);
	return Buffer.from(buffer);
}
