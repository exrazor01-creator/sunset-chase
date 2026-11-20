# Sunset Chase

[![make.fun](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01)
[![rank](https://make.fun/badge/gta6-01/exrazor01-creator/sunset-chase/rank.svg)](https://make.fun/bounty/gta6-01)
[![reward](https://make.fun/badge/gta6-01/exrazor01-creator/sunset-chase/reward.svg)](https://make.fun/bounty/gta6-01)

**Sunset Chase** adalah game balapan 3D open-world di kota pesisir saat matahari terbenam, dibuat untuk kompetisi [make.fun gta6-01](https://make.fun/bounty/gta6-01) — "Make GTA 6".

## Cara main

Kendarai mobilmu melewati **8 checkpoint bercahaya** dalam **75 detik** dan raih **+$5.000**. Kota pesisirnya hidup: gedung dengan jendela bercahaya hangat, pohon palem, lampu jalan, lalu lintas yang melaju, dan laut yang berombak memantulkan warna senja.

- **W / ↑** — gas
- **S / ↓** — rem / mundur
- **A D / ← →** — belok
- **R** — reset ke garis start

## Teknologi

- WebGL2 mentah — semua shader ditulis sendiri, tanpa three.js atau library luar
- Tanpa aset eksternal, tanpa request jaringan: semua CSS + JS inline dalam satu file `game/index.html`
- Jalan aspal gelap yang dipecah jadi segmen ~110 unit supaya fog per-vertex tidak me-wash aspal jadi pink
- HUD lengkap: kecepatan (km/jam), timer, uang, checkpoint, kompas arah, dan minimap

## Menjalankan

Buka `game/index.html` di desktop Chrome, atau jalankan server statis dari folder `game/`.

Lisensi: MIT.
