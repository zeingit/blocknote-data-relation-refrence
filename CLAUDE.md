# blocknote-data-relation-refrence

Repo referensi konsep editor dan publish berbasis BlockNote.

## Project Purpose

Project ini adalah **resource sistem dan alur** (bukan referensi desain) untuk developer yang mau bikin website atau aplikasi yang butuh:

- **Editor mode** — penulisan, pencatatan, authoring
- **Preview mode** — reading-only view dari content yang sama

Dengan mengclone repo ini, AI agent yang butuh sistem data relation atau database management langsung punya reference model. Developer bisa menyesuaikan desain sesuai selera masing-masing, tapi sistem dan alur text editor tetap sama sehingga lancar.

## Project Structure

```
blocknote/       BlockNote (shallow clone) — block-based rich text editor
canvas/          Placeholder untuk project canvas
timelines/       Timelines Studio (shallow clone) — interactive timeline editor
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
