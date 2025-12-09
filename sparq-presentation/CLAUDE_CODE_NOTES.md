# Notes for Claude Code

This file helps Claude Code understand the current state and recent changes to the SPARQ presentation.

## Current State (2025-12-08 - Latest)

### Comprehensive Mobile Responsiveness - COMPLETED
- **Complete Responsive Overhaul**: All slides now fully responsive across all screen sizes
- **Breakpoints**: 7 comprehensive breakpoints covering all device sizes
  - 1399px: Large Desktop
  - 1199px: Desktop
  - 1023px: Tablet Portrait
  - 767px: Mobile Landscape / Small Tablet
  - 599px: Mobile Portrait
  - 479px: Small Mobile
  - 319px: Extra Small Mobile
- **Fluid Typography**: All text uses `clamp()` for smooth scaling
- **Landscape Support**: Special handling for landscape orientation on mobile
- **Touch Optimization**: All interactive elements have adequate touch targets (min 32px)
- **Responsive Spacing**: Gaps, margins, and padding scale with viewport
- **Viewport Meta**: Enhanced for better mobile experience

### Instagram Embed on Slide 6 - COMPLETED
- **Location**: Instagram post embedded in U.S. Marines Contract box on Slide 6 (Distribution at Scale)
- **Post**: https://www.instagram.com/p/DQC-Tnxjy1x/
- **Implementation**:
  - Instagram blockquote embed using official embed.js script
  - Script loads dynamically via useEffect hook
  - Conditionally renders only in U.S. Marines Contract box
  - Styled with neon-green border matching presentation theme
  - Responsive design for mobile breakpoints

### YouTube Embed on Slide 6 - COMPLETED
- **Location**: YouTube video embedded in USOPC Partnership box on Slide 6 (Distribution at Scale)
- **Video**: https://www.youtube.com/watch?v=huwEZdLH8mA
- **Implementation**:
  - YouTube iframe embed with responsive 16:9 aspect ratio
  - Conditionally renders only in USOPC Partnership box
  - Styled with neon-green border matching presentation theme
  - Muted by default, but user controls available

## Current State (2025-12-08 - Updated)

### Slide 5 Redesign - COMPLETED
- **Layout Change**: Video moved from inside model box to full-width showcase below all 4 boxes
- **Reason**: Original placement made slide top-heavy on the right side
- **New Structure**:
  1. Heading: "Building Sports World Models"
  2. 4 model boxes in 2x2 grid (all equal size, no video)
  3. Full-width video showcase below with label
  4. Callout at bottom
- **File**: `public/sizzle.mp4` (48MB, web-optimized)
- **Implementation**: 
  - Video in dedicated `.video-showcase` section
  - Has its own label with title "Video + Measurements" and description
  - Auto-plays, loops, muted, with `playsInline` for mobile
  - Enhanced styling with better shadows and borders

### Code Changes Summary (Latest - Instagram Embed)

**`src/App.jsx`**:
- `PartnershipsSlide` component updated
- Added useEffect hook to load Instagram embed.js script dynamically
- Added Instagram blockquote embed conditionally in U.S. Marines Contract box
- Instagram embed uses: `data-instgrm-permalink` attribute with post URL
- Script loads once and processes embeds when component mounts

**`src/App.css`**:
- Added `.instagram-embed-container` for wrapper styling
- Styled `.instagram-media` blockquote with neon-green border
- Border radius and shadow to match presentation theme
- Responsive adjustments for mobile breakpoints (min-width adjustments)

### Code Changes Summary (Previous - YouTube Embed)

**`src/App.jsx`**:
- `PartnershipsSlide` component updated
- Added YouTube iframe embed conditionally in USOPC Partnership box
- YouTube embed URL: `https://www.youtube.com/embed/huwEZdLH8mA`
- Embed parameters: muted, controls enabled, no related videos

**`src/App.css`**:
- Added `.youtube-embed-container` with responsive 16:9 aspect ratio
- Added `.youtube-embed` for iframe styling
- Border and shadow styling to match presentation theme
- Responsive adjustments for mobile breakpoints

### Code Changes Summary (Previous - Slide 5 Redesign)

**`src/App.jsx`**:
- `ModelGridSlide` component redesigned
- Removed video from inside model box mapping
- Added `.video-showcase` section below model grid
- Video showcase includes label (title + description) and full-width video container
- Video path: `/sizzle.mp4` (served from public folder)

**`src/App.css`**:
- Added `.video-showcase` container (full-width section)
- Added `.video-showcase-label` for title/description above video
- Added `.video-container-full` for full-width video wrapper
- Added `.sparq-video-full` class for video styling
- Enhanced shadows and neon-green borders for video showcase
- Added responsive styles for video showcase at 1024px and 768px breakpoints

### File Locations
- Video: `sparq-presentation/public/sizzle.mp4`
- Main component: `sparq-presentation/src/App.jsx`
- Styles: `sparq-presentation/src/App.css`

## Previous Changes (from earlier Claude Code session)

1. **Slide 6 Readability**: Changed from bright neon-green background to dark background with neon-green accents
2. **Slide 3 Powerball**: Removed highlighting, simplified description

## Working with This Project

### To Modify Video
- Video file is in `public/` folder (Vite serves this at root)
- To replace: Put new video in `public/` and update filename in `App.jsx` if needed
- Current video: 48MB, H.264 codec, optimized for web

### To Add Video to Other Slides
1. Find the slide component (e.g., `TitleSlide`, `PartnershipsSlide`)
2. Add video element similar to `ModelGridSlide`
3. Add corresponding CSS if needed

### Slide Structure
- Slides are defined in `slides` array at top of `App.jsx`
- Each slide has: `id`, `type`, `content`
- Slide components are rendered in `Slide` component via switch statement
- Slide index 0 = Slide 1 (title), index 4 = Slide 5 (World Models with video)

## Deployment Status
- Currently deployed to Vercel
- Dev server runs on port 5173
- Production build in `dist/` folder

## Important Notes
- Video is 48MB - consider further optimization if needed for slower connections
- Video auto-plays and loops - no user controls currently
- All styling uses CSS variables defined in `:root` (see `App.css`)
- Navigation works via keyboard, mouse, and touch

