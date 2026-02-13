"use client";

import { useMemo } from "react";

function hashString(input: string) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function makeRng(seed: number) {
  let state = seed || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
}

export function PosterArt({
  seed,
  className,
}: {
  seed: string;
  className?: string;
}) {
  const shapes = useMemo(() => {
    const rand = makeRng(hashString(seed));

    const rings = Array.from({ length: 4 }, () => ({
      cx: 300 + (rand() - 0.5) * 40,
      cy: 200 + (rand() - 0.5) * 40,
      r: 80 + rand() * 150,
      o: 0.06 + rand() * 0.08,
      w: 1 + rand() * 2,
    }));

    const petals = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 6 + rand() * 0.25;
      const x = 300 + Math.cos(angle) * (70 + rand() * 30);
      const y = 200 + Math.sin(angle) * (55 + rand() * 25);
      const rx = 18 + rand() * 18;
      const ry = 30 + rand() * 26;
      return { x, y, rx, ry, rot: (angle * 180) / Math.PI };
    });

    const warli = Array.from({ length: 10 }, () => ({
      x: 40 + rand() * 520,
      y: 60 + rand() * 280,
      s: 8 + rand() * 14,
      o: 0.05 + rand() * 0.07,
    }));

    const dots = Array.from({ length: 34 }, () => ({
      x: rand() * 600,
      y: rand() * 400,
      r: 0.6 + rand() * 1.6,
      o: 0.04 + rand() * 0.06,
    }));

    return { rings, petals, warli, dots };
  }, [seed]);

  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label=""
    >
      <defs>
        <radialGradient id="ytfPosterGlow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
          <stop offset="55%" stopColor="var(--primary)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>

        <pattern id="ytfJaali" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="var(--primary)" opacity="0.10" />
        </pattern>
      </defs>

      <rect width="600" height="400" fill="var(--background)" />
      <rect width="600" height="400" fill="url(#ytfPosterGlow)" />
      <rect width="600" height="400" fill="url(#ytfJaali)" opacity="0.9" />

      {shapes.rings.map((c, i) => (
        <circle
          key={`r-${i}`}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill="none"
          stroke="var(--primary)"
          strokeOpacity={c.o}
          strokeWidth={c.w}
        />
      ))}

      {/* Lotus-like rosette */}
      <g opacity="0.9">
        {shapes.petals.map((p, i) => (
          <ellipse
            key={`p-${i}`}
            cx={p.x}
            cy={p.y}
            rx={p.rx}
            ry={p.ry}
            fill="var(--primary)"
            fillOpacity="0.08"
            transform={`rotate(${p.rot} ${p.x} ${p.y})`}
          />
        ))}
        <circle cx="300" cy="200" r="14" fill="var(--accent)" fillOpacity="0.12" />
        <circle cx="300" cy="200" r="6" fill="var(--primary)" fillOpacity="0.18" />
      </g>

      {/* Warli-style tiny figures (hourglass triangles) */}
      {shapes.warli.map((t, i) => (
        <g key={`w-${i}`} opacity={t.o} fill="var(--primary)">
          <path d={`M ${t.x} ${t.y} l ${t.s} ${t.s * 1.2} l ${-t.s * 2} 0 Z`} />
          <path d={`M ${t.x} ${t.y + t.s * 2.4} l ${t.s} ${-t.s * 1.2} l ${-t.s * 2} 0 Z`} />
          <circle cx={t.x} cy={t.y - t.s * 0.45} r={t.s * 0.35} />
        </g>
      ))}

      {/* Dust dots */}
      {shapes.dots.map((d, i) => (
        <circle
          key={`d-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill="var(--primary)"
          opacity={d.o}
        />
      ))}
    </svg>
  );
}

