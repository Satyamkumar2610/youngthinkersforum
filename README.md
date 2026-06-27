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

## 🏆 Milestones
| Year | Milestone |
|------|-----------|
| 2018 | Founded in Bhopal with 50 members |
| 2021 | Chapters in 3+ states, 500+ members |
| 2023 | Launched *The Indian Thinker* journal |
| 2024 | National Recognition — Ministry of Education award |
| 2025 | International chapters in UAE & UK; 2,500+ members |
| 2026 | Platform redesign with Next.js 16 & Tailwind v4 |

## 🤝 Contributing
We welcome contributions from the community! Here's how to get started:

1. **Fork** the repository and create a feature branch (`git checkout -b feat/your-feature`)
2. **Make your changes** — follow the existing code style and component patterns
3. **Test** your changes locally with `npm run dev`
4. **Lint** your code with `npm run lint`
5. **Submit a Pull Request** describing your changes clearly

Please ensure all new components are accessible (ARIA labels, keyboard navigation) and follow the "Rooted Cosmopolitanism" design language.

---
*Developed for the Young Thinkers' Forum.* 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
