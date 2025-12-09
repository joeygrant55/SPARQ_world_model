# Agent Collaboration

This file defines how Claude Code and Cursor work together on this project.

## Claude Code (Terminal) owns:
- **Deployments** - `npx vercel` commands
- **Asset processing** - ffmpeg, video/image optimization
- **Dependencies** - package.json changes, npm install
- **Git operations** - commits, branches, pushes
- **Build/dev server** - npm run dev, npm run build
- **New files in /public** - media assets

## Cursor owns:
- **React components** - src/App.jsx structure and logic
- **Styling** - src/App.css refinements
- **New UI features** - adding slides, animations, interactions
- **Component refactoring** - splitting components, hooks

## Shared (coordinate first):
- Slide content/data changes (the `slides` array in App.jsx)
- index.html modifications
- Adding new dependencies

## Handoff Protocol

1. **Before editing**: Check if the other agent has uncommitted changes
2. **After changes**: Note what you changed below in the Activity Log
3. **Conflicts**: If both need to edit the same file, coordinate via user

## Activity Log

| Time | Agent | Change |
|------|-------|--------|
| Dec 8 | Claude | Initial React setup, Vercel deployment |
| Dec 8 | Claude | Slide 6 readability fix (partnership boxes) |
| Dec 8 | Claude | Removed Powerball highlight on Slide 3 |
| Dec 8 | Claude | Video conversion (Arsenal Sizzle to sizzle.mp4) |
| Dec 8 | Cursor | Video embed in ModelGridSlide + CSS styling |
| Dec 8 | Cursor | Redesigned Slide 5: moved video to full-width showcase below model grid for better balance |
| Dec 8 | Cursor | Added YouTube embed to Slide 6 (USOPC Partnership box) - video ID: huwEZdLH8mA |
| Dec 8 | Cursor | Added Instagram embed to Slide 6 (U.S. Marines Contract box) - post ID: DQC-Tnxjy1x |
| Dec 8 | Cursor | Comprehensive mobile responsiveness overhaul - added 7 breakpoints, fluid typography, improved touch targets |
| Dec 8 | Cursor | Aggressive size reduction - reduced all font sizes, padding, margins by 30-40% to ensure content fits on screen |
| Dec 8 | Cursor | Font size increase - increased all font sizes by 30-50% for better readability based on user feedback |
| Dec 8 | Cursor | Slide scroll fix - changed slides to start at top instead of center, added auto-scroll to top on slide change |

## Current Deployed URL
https://sparq-presentation-cd9mprwwd-joeygrant55s-projects.vercel.app
