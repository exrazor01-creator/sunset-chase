[![make.fun · gta6-01](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)
[![rank](https://make.fun/badge/gta6-01/exrazor01-creator/sunset-chase/rank.svg)](https://make.fun/bounty/gta6-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)
[![reward](https://make.fun/badge/gta6-01/exrazor01-creator/sunset-chase/reward.svg)](https://make.fun/bounty/gta6-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)

# Sunset Chase

A 3D open-world crime game for the [make.fun GTA 6 bounty](https://make.fun/bounty/gta6-01). Golden-hour coastal city, one stolen coupe, four stars of heat, and a police scanner counting down. You are Juno Reyes, a fixer on the run in Halcyon Keys: lose the cops before the scanner window closes, or get busted.

Play it here: https://make.fun/bounty/gta6-01 — built by @exrazoor. My referral: https://make.fun/r/9taf1vak

## The game

- **One file, no dependencies**: `game/index.html` (72,763 bytes) — hand-written raw WebGL2, zero external requests, no libraries, no models, no textures downloaded. Everything is procedural.
- **Chase camera 3D** behind a sleek lofted red sports coupe (spinning wheels, steering front wheels, drift smoke + sparks, headlight halos, taillight trails).
- **Halcyon Keys**: a sun-soaked coastal city — palm-lined streets, neon storefronts and signs, beach + pier + sea to the west, parks, wet-road reflections, puddles, sunset fog.
- **Living streets**: 30 pedestrians who walk the sidewalks and step aside from traffic (hit one and it's a $500 fine + more heat), 5 traffic cars, police cruisers with flashing red/blue light bars, and a police helicopter with a searchlight that orbits you.
- **The job**: every run is a 75-second scanner window. Break line of sight and the heat drains; stay visible and it climbs. Escape clean: **+$5,000**. Get cornered: busted. Wreck the car: wrecked.
- **Combat**: three weapons — Pistol (∞), SMG (120), Rifle (40). `Q` switches, `F` fires.
- **Full cyberpunk HUD**: live minimap, mission briefing with scanner + awareness bars, cash, weapon slots, wanted stars, speedometer + vehicle condition, and Juno's portrait with story dialogue.

## How to play

Run it locally (Node 22, no build step, no network):

```sh
node serve.ts
```

Then open http://localhost:8080 in a desktop browser.

**Controls**: `W A S D` / arrows — drive · `SPACE` — handbrake · `Q` — weapon · `F` — fire · `P` — pause · `M` — mute · `R` — reset car · `ENTER` — start / retry. Touch controls included on mobile.
