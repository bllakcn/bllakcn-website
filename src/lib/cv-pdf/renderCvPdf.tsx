import { renderToBuffer } from "@react-pdf/renderer";
import type { CV } from "@/types/cv";
import { CvDocument } from "./CvDocument";
import { registerCvPdfFonts } from "./fonts";
import { type CvLocale, getCvPdfLabels } from "./labels";

/**
 * Renders CV data for a locale into a PDF buffer.
 * Registers fonts on first call; safe to invoke repeatedly.
 */
export async function renderCvPdf(cv: CV, locale: CvLocale): Promise<Buffer> {
	registerCvPdfFonts();
	const labels = getCvPdfLabels(locale);
	const buffer = await renderToBuffer(<CvDocument cv={cv} labels={labels} />);
	return Buffer.from(buffer);
}
