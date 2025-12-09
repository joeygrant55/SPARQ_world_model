# SPARQ Presentation

A React-based pitch deck presentation for SPARQ - The World Model Data Engine for Sports.

## Overview

This is an 8-slide presentation built with React and Vite, featuring:
- Neon-green design theme
- Smooth slide transitions
- Keyboard and touch navigation
- Video integration (Arsenal Sizzle on Slide 5)
- Fully responsive design

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/App.jsx` - Main component with all 8 slides
- `src/App.css` - All presentation styling
- `public/sizzle.mp4` - Video asset (48MB, optimized)
- `dist/` - Production build output

## Slides

1. **Title** - SPARQ branding
2. **Convergence** - Two massive shifts colliding
3. **SPARQ Rating** - Metrics overview
4. **Distribution** - Funnel visualization
5. **World Models** - Building sports AI (includes video)
6. **Partnerships** - Distribution at scale
7. **Why SPARQ** - Competitive advantages
8. **Vision** - Final statement

## Navigation

- **Next**: Right Arrow, Spacebar, or click →
- **Previous**: Left Arrow or click ←
- **Mobile**: Swipe left/right

## Recent Changes

See `CHANGELOG.md` for detailed change history, including:
- Video integration (2025-12-08)
- Slide 6 readability improvements
- Slide 3 Powerball updates

## Deployment

Deployed to Vercel. To deploy:

```bash
npx vercel --prod --yes
```

## For Claude Code

- All changes are documented in `CHANGELOG.md`
- Video is located at `public/sizzle.mp4`
- Video appears only in Slide 5, "Video + Measurements" box
- Component structure: Each slide type has its own component function
- Styling: All styles in `App.css`, uses CSS variables for theming
