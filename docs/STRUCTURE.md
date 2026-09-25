# STRUCTURE.md

## Project Overview

Repo referensi konsep editor dan publish berbasis BlockNote.

## Folder Structure

```
blocknote-data-relation-refrence/
├── README.md
├── CLAUDE.md           # Tech stack, install, run, build, test, project rules
├── AGENTS.md           # AI working rules
├── CURRENT_TASK.md     # Current task tracking
├── DEBUG_LOG.md        # Persistent debugging history
├── blocknote/          # Shallow clone BlockNote editor
│   ├── packages/       # Core packages (core, react, mantine, ariakit, shadcn, etc.)
│   ├── examples/       # Contoh penggunaan
│   ├── docs/           # Dokumentasi website
│   ├── playground/     # Playground untuk testing
│   ├── tests/          # Unit & e2e tests
│   ├── scripts/        # Build scripts
│   ├── shared/         # Shared utilities
│   ├── pnpm-workspace.yaml
│   └── CLAUDE.md       # BlockNote internal docs
├── timelines/          # Timelines Studio (shallow clone)
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── utils/        # Utility functions
│   │   ├── hooks/        # React hooks
│   │   ├── styles/       # CSS files
│   │   ├── config/       # Themes, icons
│   │   ├── viewer/       # Web viewer (baca-only)
│   │   └── App.jsx       # Main app
│   ├── electron/         # Electron main process
│   ├── test/             # Tests
│   └── docs/             # Docs
└── canvas/             # Placeholder project canvas
```

## BlockNote Package Structure

```
packages/
├── core/               # Core editor engine (prosemirror-based)
├── react/              # React UI components
├── mantine/            # Mantine UI components
├── ariakit/           # Ariakit UI components
├── shadcn/            # shadcn/ui components
├── prosemirror/       # prosemirror utilities
├── tiptap/            # tiptap integration
└── ...                 # exporters, sync, api, dll
```
