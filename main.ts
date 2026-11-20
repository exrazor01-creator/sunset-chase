// Sunset Chase — program penyerahan entri gta6-01 (Node 22, standard library only).
// Tugasnya sederhana: salin game/ dan screenshots/ dari repo ini ke direktori
// output, lalu tulis dossier.json memakai buildDossier dari pustaka vendor
// make.fun. Di luar container grader, MAKEFUN_OUTPUT_DIR menggantikan /output.
//
// Jalankan:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Siapkan direktori output, lalu salin game dan screenshot apa adanya.
mkdirSync(outputDir, { recursive: true });
cpSync(join(repoRoot, 'game'), join(outputDir, 'game'), { recursive: true });
mkdirSync(join(outputDir, 'screenshots'), { recursive: true });
if (existsSync(join(repoRoot, 'screenshots'))) {
  cpSync(join(repoRoot, 'screenshots'), join(outputDir, 'screenshots'), { recursive: true });
}

// Tulis dossier.json dengan batas yang sama seperti gate scorer:
// teks dossier maksimal 160 KiB, maksimal 4 screenshot @ 256 KiB,
// game/ maksimal 993 file dan 48 MiB, tiap path maksimal 1000 byte.
writeFileSync(
  join(outputDir, 'dossier.json'),
  buildDossier(outputDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
