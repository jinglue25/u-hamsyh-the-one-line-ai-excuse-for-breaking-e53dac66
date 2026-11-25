import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "In my defense, the button was labeled 'Do Not Press' in a font I was never trained on.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputFile, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write entry from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 180) {
  throw new Error(
    `Entry must contain 1–180 characters after trimming; found ${characterCount} in ${outputFile}.`,
  );
}
