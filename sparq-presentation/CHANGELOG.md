# Changelog

This file documents changes made to the SPARQ presentation, especially for Claude Code to understand the current state.

## 2025-12-08 - Aggressive Size Reduction for Better Fit

### Changes Made
- **Major Size Reductions**: Reduced all sizing by 30-40% to ensure content fits on screen
  - **Typography**: Reduced all font sizes (giant-title: 160px → 100px max, h2: 56px → 42px max, etc.)
  - **Spacing**: Reduced padding and margins throughout (slide padding: 80px → 40px max)
  - **Vision Slide**: Reduced from 72px title to 48px max, 36px text to 28px max
  - **Final Statement**: Reduced padding from 60px to 40px max
  - **All Boxes**: Reduced padding by 30-40% (columns: 45px → 30px, model-box: 40px → 25px)
  - **Content Width**: Reduced max-width from 1400px to 1200px
  - **Added Overflow Handling**: Slides now scroll if content exceeds viewport

### Technical Changes
- Switched from viewport width (vw) to viewport height (vh) for better vertical scaling
- Added `overflow-y: auto` to slides and content for scrolling when needed
- Reduced all gaps, margins, and padding using clamp() with smaller max values
- All elements now scale more conservatively to fit within viewport

### Files Modified
- `src/App.css`: Aggressive size reductions across all typography, spacing, and containers

## 2025-12-08 - Comprehensive Mobile Responsiveness Overhaul

### Changes Made
- **Complete Responsive Redesign**: Made all slides fully responsive across all screen sizes
  - Added 7 comprehensive breakpoints: 1399px, 1199px, 1023px, 767px, 599px, 479px, 319px
  - Implemented fluid typography using `clamp()` for smooth scaling
  - Added landscape orientation support for mobile devices
  - Improved touch targets (minimum 32px for buttons)
  - Responsive spacing, gaps, and padding throughout
  - All typography scales smoothly from mobile to desktop
  - Enhanced viewport meta tag for better mobile experience

### Technical Improvements
- **Fluid Typography**: All text uses `clamp(min, preferred, max)` for responsive scaling
- **Responsive Spacing**: Gaps, margins, and padding scale with viewport
- **Touch Optimization**: Navigation buttons have adequate touch targets
- **Content Width**: Uses `min()` function to prevent overflow on small screens
- **Box Sizing**: All elements use `box-sizing: border-box` for consistent sizing

### Files Modified
- `src/App.css`: Complete responsive overhaul with 7 breakpoints and fluid typography
- `index.html`: Enhanced viewport meta tag

## 2025-12-08 - Instagram Embed on Slide 6

### Changes Made
- **Instagram Post Integration**: Added Instagram embed to U.S. Marines Contract section on Slide 6
  - Post URL: https://www.instagram.com/p/DQC-Tnxjy1x/
  - Embedded in the U.S. Marines Contract box
  - Uses Instagram's official embed.js script
  - Styled with neon-green border to match presentation theme
  - Responsive design for mobile devices

### Files Modified
- `src/App.jsx`: Added Instagram blockquote embed to `PartnershipsSlide` component, added useEffect to load Instagram embed script
- `src/App.css`: Added `.instagram-embed-container` styles with responsive adjustments

## 2025-12-08 - YouTube Embed on Slide 6

### Changes Made
- **YouTube Video Integration**: Added YouTube embed to USOPC Partnership section on Slide 6
  - Video URL: https://www.youtube.com/watch?v=huwEZdLH8mA
  - Embedded in the USOPC Partnership box
  - Responsive 16:9 aspect ratio
  - Styled with neon-green border to match presentation theme
  - Video is muted by default but user can unmute and control playback

### Files Modified
- `src/App.jsx`: Added YouTube iframe to `PartnershipsSlide` component
- `src/App.css`: Added `.youtube-embed-container` and `.youtube-embed` styles

## 2025-12-08 - Slide 5 Redesign (Video Layout)

### Changes Made
- **Slide 5 Layout Redesign**: Moved video from inside model box to full-width showcase below
  - **Problem**: Video in "Video + Measurements" box made slide top-heavy on the right
  - **Solution**: Video now spans full width below all 4 model boxes
  - Video has its own labeled section with title and description
  - Better visual balance and video gets more prominence
  - All 4 model boxes now have equal visual weight

## 2025-12-08 - Video Integration (Initial)

### Changes Made
- **Video Integration**: Added Arsenal Sizzle video to Slide 5 (World Models)
  - Video file: `public/sizzle.mp4` (48MB, optimized from original .mov file)
  - Initially placed in the "Video + Measurements" model box
  - Auto-plays, loops, and is muted for seamless presentation experience
  - **Note**: Later redesigned to full-width showcase (see above)

### Files Modified

#### `src/App.jsx` (Latest - Slide 5 Redesign)
- Redesigned `ModelGridSlide` component
- Removed video from inside model box
- Added `.video-showcase` section below model grid
- Video now has dedicated label section with title and description
- Video spans full width for better prominence

#### `src/App.css` (Latest - Slide 5 Redesign)
- Added `.video-showcase` container styles
- Added `.video-showcase-label` for video title/description
- Added `.video-container-full` for full-width video container
- Added `.sparq-video-full` styles for the video element
- Enhanced shadows and borders for video showcase
- Added responsive styles for video showcase at different breakpoints

#### `src/App.jsx` (Initial - Video Integration)
- Updated `ModelGridSlide` component to accept `isActive` prop
- Initially added video element in the "Video + Measurements" model box
- Video uses `/sizzle.mp4` path (served from public folder)
- Video attributes: `autoPlay`, `loop`, `muted`, `playsInline`

#### `src/App.css` (Initial - Video Integration)
- Initially added `.video-container` styles for video wrapper
- Initially added `.sparq-video` styles for the video element
- Updated `.model-box` to include `overflow: hidden` for proper video containment
- **Note**: These styles replaced by video showcase styles in redesign

### Video Source
- Original: `/Users/joey/Desktop/Arsenal Sizzle 16x9.mov` (123MB)
- Converted to: `sparq-presentation/public/sizzle.mp4` (48MB)
- Conversion: ffmpeg with H.264 codec, CRF 28, optimized for web

### Previous Changes (from Claude Code session)

#### Slide 6 Readability Improvements
- Changed partnership boxes from bright neon-green background to dark background
- Text colors updated: titles use neon-green accent, body text is white/light
- Improved contrast and readability

#### Slide 3 Powerball Update
- Removed highlighting from Powerball Throw metric
- Changed description from "The holy grail — Best predictor of athletic potential" to "Upper body power"
- All metrics now have equal visual weight

## Project Structure

```
sparq-presentation/
├── public/
│   ├── sizzle.mp4          # Video asset (48MB)
│   └── vite.svg
├── src/
│   ├── App.jsx             # Main component with all slides
│   ├── App.css             # All styling
│   ├── main.jsx            # Entry point
│   └── index.css           # Base styles
├── dist/                    # Production build
└── package.json            # Dependencies and scripts
```

## Deployment

- **Production URL**: Deployed to Vercel
- **Dev Server**: `npm run dev -- --host` (runs on port 5173)
- **Build**: `npm run build` (outputs to `dist/`)
- **Deploy**: `npx vercel --prod --yes`

## Notes for Claude Code

- Video integration is complete and functional
- Video only appears on Slide 5 in the "Video + Measurements" box
- All slides are numbered 1-8 (0-indexed in code: 0-7)
- Navigation: Arrow keys, Spacebar, or click buttons
- Touch/swipe support for mobile devices

