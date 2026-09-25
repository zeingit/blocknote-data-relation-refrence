# blocknote-data-relation-refrence

Repo referensi konsep editor dan publish berbasis BlockNote.

## Project Structure

```
blocknote/       BlockNote (shallow clone) — block-based rich text editor
canvas/          Placeholder untuk project canvas
timelines/       Placeholder untuk project timelines
```

## BlockNote (bagian utama)

BlockNote adalah block-based rich text editor dengan tech stack:

- **Runtime:** Node.js
- **Package Manager:** pnpm
- **Build:** Vite
- **Language:** TypeScript
- **Editor Core:** prosemirror + @tiptap/pm
- **UI Framework:** React (packages/react), Mantine (packages/mantine)
- **Testing:** vitest (unit), Playwright (e2e)
- **Documentation:** fumadocs

### Commands (jalankan dari folder `blocknote/`)

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Dev server port 5173 |
| `pnpm run build` | Build project |
| `pnpm run test` | Unit tests (`-u` update snapshots) |
| `pnpm run e2e` | End-to-end tests (Docker) |
| `pnpm run lint` | Lint + type check |
| `pnpm run format` | Format check |

> Gunakan `pnpm` atau `vp` (workspace runner), bukan `npm`/`yarn`.

## Project Rules

- Jangan buat git commit kecuali diminta langsung.
- Jangan modifikasi source code saat setup dokumentasi.
- Gunakan codebase-memory MCP tools (`search_graph`, `trace_path`) sebelum grep manual.
- Dokumentasi: concise, hanya info yang berdampak ke kerja ke depan.
