// The Printer Apology — u-eager-stork-81-9647-the-printer-apology-60229153
// The program writes the single line the office printer finally says back
// to the people who keep jamming it, feeding it cheap paper and swearing
// at it: a one-line apology, 1 to 120 characters, with the printer's own
// gripes in it and the punch at the end.
// The line: the printer apologises for jamming on page 47, then turns the
// blame back on the humans — a 40-page report stapled twice — and lands the
// punch on a literal pun: the last straw was, literally, a staple. Fresher
// than the first draft's "choking on it" ending: the joke is printer truth
// (staples, jams) with the twist saved for the very last word.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Sorry I jammed on page 47. Your 40-page report, stapled twice, was the last straw — literally, it was a staple.";

const out = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
