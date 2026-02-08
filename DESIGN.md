# Design System: The "New India" Aesthetic

## Philosophy
The **Young Thinkers' Forum** design language is built on the principle of **"Rooted Cosmopolitanism"**. It merges the minimalist precision of modern Swiss design with the deep, earthy tones of Indian heritage.

## 1. Color Strategy: "Signal & Depth"
We avoid the overuse of color. Red is not a background; it is a **signal**.

| Semantic Name | Hex Code | Usage | Meaning |
| :--- | :--- | :--- | :--- |
| **Brand Red (Geru)** | `#B22222` | Buttons, Active Links, Tilak Lines | *Energy, Urgency, Tradition* |
| **Royal Gold** | `#D4AF37` | Accents, Halos, Micro-interactions | *Prosperity, Wisdom* |
| **Warm White** | `#FFFAF0` | Main Backgrounds | *Canvas, Clarity (Not sterile)* |
| **Paper White** | `#FFFFFF` | Cards, Elevated Surfaces | *Depth, Focus* |
| **Charcoal** | `#111111` | Primary Text | *Legibility, Authority* |

### The "White" Strategy
We use varying shades of warm white to create depth without relying on heavy borders.
-   **Page Background**: `#FFFAF0` (Warm/Cream)
-   **Card Surface**: `#FFFFFF` (Pure White) + `shadow-card`

## 2. Indian Minimalism
Instead of heavy illustrations, we use **Hairline Borders** and **Micro-Motifs**.
-   **The "Tilak"**: A 3px vertical red line (`.tilak-heading`) next to section headers. Represents focus and awakening.
-   **Hairline Borders**: 0.5px red opacity lines used to separate sections, inspired by Aipan geometric art.

## 3. Typography
-   **Headings**: *Playfair Display* (Serif). Used for intellectual authority and editorial feel.
-   **Body**: *Inter* (Sans-serif). Clean, readable, and neutral to let the content speak.

## 4. Motion & Interaction
"Dynamic" means "Alive", not "Chaotic".
-   **Hover**: Cards do not just change color; they **lift** (`-5px`) and cast a deeper shadow (`shadow-floating`).
-   **Red Expansion**: On hover, the top border of cards expands from the center (`scale-x-100`).

---

*This document serves as the single source of truth for all design decisions.*
