/** Smoke tests for CV PDF rendering via extracted text (pdf-parse). */
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFParse } from "pdf-parse";
import { describe, expect, it } from "vitest";
import { renderCvPdf } from "@/lib/cv-pdf/renderCvPdf";
import type { CV } from "@/types/cv";

const root = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"../../..",
);

function loadCv(relativePath: string): CV {
	return JSON.parse(readFileSync(path.join(root, relativePath), "utf8")) as CV;
}

describe("renderCvPdf", () => {
	it("renders English CV PDF with contact and section content", async () => {
		const cv = loadCv("src/routes/resume-assets/cv.json");
		const buffer = await renderCvPdf(cv, "en");
		const parser = new PDFParse({ data: buffer });
		const { text } = await parser.getText();
		await parser.destroy();

		expect(buffer.byteLength).toBeGreaterThan(1000);
		expect(text).toContain("Ahmet Bilal Akcan");
		expect(text).toContain(cv.personal.email);
		expect(text).toContain("WORK EXPERIENCE");
		expect(text).toContain(cv.workExperience[0]?.position);
		expect(text).toContain(cv.languages[0]?.description);
	});

	it("renders Dutch CV PDF with localized section labels", async () => {
		const cv = loadCv("src/routes/resume-assets/cv.nl.json");
		const buffer = await renderCvPdf(cv, "nl");
		const parser = new PDFParse({ data: buffer });
		const { text } = await parser.getText();
		await parser.destroy();

		expect(text).toContain("WERKERVARING");
		expect(text).toContain("OPLEIDING");
		expect(text).toContain(cv.personal.title);
	});
});

describe("CV data contact fields", () => {
	it.each([
		"src/routes/resume-assets/cv.json",
		"src/routes/resume-assets/cv.nl.json",
	])("%s includes contact fields", (relativePath) => {
		const cv = loadCv(relativePath);
		expect(cv.personal.email).toBe("bllakcn35@gmail.com");
		expect(cv.personal.linkedin).toContain("linkedin.com/in/bllakcn");
		expect(cv.personal.github).toContain("github.com/bllakcn");
		expect(cv.personal.portfolio).toBe("https://bllakcn.com/");
	});
});
