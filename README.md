# Kacper Sikora – Full Stack Developer & AI Engineer

A modern, fully responsive portfolio website with 3D effects, animations, and a cyberpunk/futuristic/minimalist design.

## Features

- Built with **React** (Vite)
- **Tailwind CSS** for styling and dark mode
- **Three.js** (via react-three-fiber) for 3D effects
- **Framer Motion** for smooth animations
- Sticky, glassy navbar with hover effects
- Animated sections: About, Projects, Tech Stack, Contact
- Ready for deployment on GitHub Pages or Vercel

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Troubleshooting

If you see an error like:

```
Error: Cannot find module '@vitejs/plugin-react'
```

Install the missing dependency:

```bash
npm install @vitejs/plugin-react --save-dev
```

If you see a warning about the CJS build of Vite's Node API being deprecated, make sure you are using the latest version of Vite and run your scripts using `vite` (not `node vite.config.js`).

## Deploy

- GitHub Pages: Use `gh-pages` branch and `vite.config.js` base config.
- Vercel: Connect repo and deploy.

---
