# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an Obsidian vault - a personal knowledge management system using markdown files with bidirectional linking capabilities.

## Structure

- **Markdown Files**: All notes are stored as `.md` files in the vault root and subdirectories
- **`.obsidian/`**: Configuration directory containing Obsidian-specific settings
  - `workspace.json`: Layout and open files state
  - `core-plugins.json`: Enabled core plugins
  - `app.json`: Application settings

## Working with Notes

### Obsidian Link Syntax
- Internal links: `[[Note Name]]` or `[[Note Name|Display Text]]`
- Internal links with headings: `[[Note Name#Heading]]`
- Embeds: `![[Note Name]]` to embed another note's content
- Image embeds: `![[image.png]]`

### Frontmatter
Notes can include YAML frontmatter for metadata:
```yaml
---
tags: [tag1, tag2]
created: 2025-12-04
---
```

## Enabled Core Plugins

Based on configuration, the following core plugins are active:
- File explorer, search, graph view
- Backlinks and outgoing links
- Daily notes and templates
- Canvas (infinite whiteboard)
- Sync and bases
- Note composer, bookmarks, outline
- Page preview, word count

## Best Practices

When creating or editing notes:
- Use descriptive filenames without special characters (Obsidian handles spaces)
- Preserve existing link structures when modifying linked notes
- Use tags consistently for organization
- Keep attachments (images, PDFs) organized in a dedicated folder if the vault grows
