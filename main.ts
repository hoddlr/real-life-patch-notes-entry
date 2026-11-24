import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "v2.3.1: fixed bug where the brain replays your most embarrassing moment from 2012 every night at 3 a.m. instead of sleeping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
