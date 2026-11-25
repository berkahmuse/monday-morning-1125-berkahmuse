// Monday Morning Punchlines — entry by @berkahmuse
// Competition: u-gentle-badger-68-monday-morning-punchlines-709645dc
// makefun anchor 9e123d69625fe4cf95cbb04c386cd0df52b4b5b2 round 34263861
//
// The program writes one original joke about Monday mornings
// (124 characters, well within the 200-character cap) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Monday morning, I tried to dump my bed. It said, 'You say that every week,' and tucked me back in like a hostage negotiator.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${outPath}`);
