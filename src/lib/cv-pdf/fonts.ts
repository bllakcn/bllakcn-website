/**
 * Loads JetBrains Mono from @fontsource into @react-pdf.
 * Font files are resolved from node_modules at render time.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Font } from "@react-pdf/renderer";

const fontDir = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"../../../node_modules/@fontsource/jetbrains-mono/files",
);

let registered = false;

/** Registers JetBrains Mono for @react-pdf (idempotent). */
export function registerCvPdfFonts(): void {
	if (registered) return;

	Font.register({
		family: "JetBrains Mono",
		fonts: [
			{
				src: path.join(fontDir, "jetbrains-mono-latin-400-normal.woff"),
				fontWeight: 400,
			},
			{
				src: path.join(fontDir, "jetbrains-mono-latin-700-normal.woff"),
				fontWeight: 700,
			},
		],
	});

	registered = true;
}
