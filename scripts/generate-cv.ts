/**
 * Builds static CV PDFs in `public/` from resume JSON.
 * Run via `pnpm generate-cv` after editing cv.json or cv.nl.json.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CV } from "../src/types/cv";
import { renderCvPdf } from "../src/lib/cv-pdf/renderCvPdf";
import en from "../src/routes/resume-assets/cv.json";
import nl from "../src/routes/resume-assets/cv.nl.json";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const outputs = [
	{ locale: "en" as const, cv: en as CV, file: "cv.pdf" },
	{ locale: "nl" as const, cv: nl as CV, file: "cv.nl.pdf" },
];

async function main() {
	await mkdir(publicDir, { recursive: true });

	for (const { locale, cv, file } of outputs) {
		const buffer = await renderCvPdf(cv, locale);
		const outPath = path.join(publicDir, file);
		await writeFile(outPath, buffer);
		console.log(`Wrote ${path.relative(root, outPath)} (${buffer.byteLength} bytes)`);
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
