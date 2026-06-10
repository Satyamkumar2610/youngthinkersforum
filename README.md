# Young Thinkers' Forum Platform

> *Cultivating the next generation of Indian intellectuals.*

A modern, high-performance platform for the Young Thinkers' Forum, built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Production--Ready-green.svg)

## 🎨 Design System: "Rooted Cosmopolitanism"
This project implements a custom **"Geru & Gold"** design language that blends modern minimalism with Indian heritage.

-   **Signal Red (`#B22222`)**: Used strictly for interactive signals and the "Tilak" structural highlights.
-   **Warm White Canvas**: A parchment-like background (`#FFFAF0`) reduces eye strain and provides an editorial feel.
-   **Indian Minimalism**: Usage of **Aipan-inspired hairline borders** (0.5px) and **Warli micro-patterns** instead of heavy imagery.
-   **Physics-Based Motion**: Interactive elements use "floating" physics (lift + shadow deepening) rather than simple color swaps.

👉 **[Read the full Design Documentation](DESIGN.md)**

## 🚀 Quick Start

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Satyamkumar2610/youngthinkersforum.git

# Install dependencies
npm install

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure
```
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with Fonts & Global styles
│   ├── globals.css       # Global CSS Variables & Tailwind utilities
│   └── research/         # Research Page (Server Components)
├── components/           # React Components
│   ├── home/             # Homepage-specific widgets (Hero, EventGrid)
│   ├── layout/           # Shared layout (Header, Footer)
│   └── ui/               # Reusable primitives (Buttons, Cards)
├── public/               # Static assets & Optimized Images
└── content.json          # Dynamic Content Source (CMS-lite)
```

## 🛠 Tech Stack
-   **Framework**: Next.js 16 (App Router)
-   **Styling**: Tailwind CSS v4 + Custom CSS Variables
-   **Icons**: Lucide React
-   **Fonts**: Playfair Display (Headers) + Inter (Body)
-   **Animation**: Native CSS Transitions + Framer Motion

---
*Developed for the Young Thinkers' Forum.* 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
