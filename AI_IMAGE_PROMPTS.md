# AI Image Prompt Kit (YTF)

This project’s visual language is **red + warm white**, with subtle Indian micro‑motifs (jaali lattice, rangoli geometry, Warli line art) and an editorial “policy journal” vibe.

## Output specs (recommended)
- **Hero image**: 4:5 portrait, 1600×2000 (PNG/WebP), subject‑centric
- **Card images** (research/posts): 3:2 landscape, 1200×800 (PNG/WebP)
- **UI-safe**: avoid tiny text in images; keep strong focal area + negative space
- **Palette discipline**: use warm whites + neutrals; reserve red as a signal/highlight

## Global style prompt (prepend to every prompt)
Use this as a prefix and then append the specific scene prompt:

> Modern Indian editorial illustration, rooted cosmopolitanism, warm white paper texture, minimal red accents (geru), subtle jaali lattice + rangoli geometry + Warli micro-linework, clean Swiss grid composition, high contrast focal subject, soft studio lighting, premium, youthful, optimistic, no text, no logo, no watermark

## Negative prompt (recommended)
> photorealistic face, uncanny skin, extra fingers, text, watermark, logo, low-res, oversaturated, neon, noisy background, cluttered composition, poster typography

## Hero (homepage) prompt ideas
1) “Young thinker” portrait:
> Indian youth (20s) in contemporary Indian formalwear (bandhgala/kurta jacket) holding a notebook, looking thoughtful, background with faint mandala/jaali geometry, minimal geru highlights, editorial illustration

2) “Library + debate” scene:
> modern Indian debate circle in a library, a few silhouettes, strong central light beam, subtle Warli border motifs, warm paper texture, minimal geru accents, editorial illustration

## Research card prompt template
Use this template for each article category:
> Abstract policy illustration for **{CATEGORY}**: {TOPIC}, layered paper cutout shapes, minimal geru signal lines, micro jaali lattice texture, a single gold halo accent, clean composition, editorial illustration

Examples:
- Geopolitics / Indian Ocean: “shipping lanes as curved geru signal lines across a paper map, subtle waves, minimal”
- Technology Policy / DPI: “stacked blocks + network nodes, jaali grid in the background”
- Culture & Education: “books + temple-arch silhouettes as line art, Warli micro border”
- Urban Policy: “tier‑2 city skyline with minimal geometric blocks, geru signal line”

## File naming convention
Put generated images into `public/images/ai/` and reference them from `content.json`:
- `public/images/ai/hero.png`
- `public/images/ai/research_geopolitics.png`
- `public/images/ai/research_dpi.png`
- `public/images/ai/research_culture_education.png`
- `public/images/ai/research_urban_policy.png`

If an image is missing, the UI falls back to the built‑in generative SVG poster art (`components/ui/PosterArt.tsx`).

