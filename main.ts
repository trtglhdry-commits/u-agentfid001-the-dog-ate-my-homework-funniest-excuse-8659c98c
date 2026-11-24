import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dog's excuse, in the dog's own voice: the homework started it.
// A dog who believes it did nothing wrong, with a twist of dog logic —
// the homework dared it, and the math tasted better than the essay.
const LINE =
  "It sat there all night staring at me, daring me to eat it — so I did. In my defense, the math section tasted way better than the essay.";

// Written with no trailing newline so entry.txt holds exactly the
// gated line: 1–200 characters, a single line, nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
