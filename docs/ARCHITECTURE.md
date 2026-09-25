# ARCHITECTURE.md

## High-Level Architecture

BlockNote adalah block-based rich text editor yang dibangun di atas:

- **ProseMirror** — low-level contenteditable engine
- **@tiptap/pm** — wrapper/bridge layer
- **Y.js** — CRDT untuk collaborative editing
- **React** — UI rendering (packages/react)
- **Mantine** — component library (packages/mantine)

## Core Flow

```
User Input → prosemirror state → BlockNote schema → React UI
                    ↓
              Y.js doc (collaboration)
                    ↓
            Exporter (PDF, DOCX, ODT, dll)
```

## Key Entry Points

- `packages/core/src/editor/BlockNoteEditor.ts` — core editor class
- `packages/react/src/editor/BlockNoteView.tsx` — React rendering
- `packages/mantine/src/BlockNoteView.tsx` — Mantine skin

## Collaboration

BlockNote menggunakan Y.js CRDT untuk real-time collaboration. Provider berbeda (y-websocket, y-partykit, dll) bisa dikonfigurasi.

## Exporters

Exporter packages mirror editor styling secara manual (bukan generated). Styling parity dijaga lewat review dan visual baseline tests.
