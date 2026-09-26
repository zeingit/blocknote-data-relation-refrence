# DEBUG_LOG.md

Persistent debugging history. Never delete previous entries. Never invent missing information.

---

## 2026-09-26 — Setup Dokumentasi

### Attempt 1: Clone BlockNote via HTTPS

**Tried:** `git clone https://github.com/TypeCellOS/BlockNote.git resource-mentah`

**Error:** `RPC failed; curl 92 HTTP/2 stream 5 was not closed cleanly: CANCEL (err 8)`, timeout, connection reset.

**Result:** FAILED

### Attempt 2: Shallow clone HTTPS

**Tried:** `git clone --depth 1 https://github.com/TypeCellOS/BlockNote.git resource-mentah`

**Error:** `RPC failed; Recv failure: Connection reset by peer`, early EOF.

**Result:** FAILED

### Attempt 3: Git protocol

**Tried:** `git clone --depth 1 git://github.com/TypeCellOS/BlockNote.git resource-mentah`

**Error:** `Operation timed out` connecting to github.com.

**Result:** FAILED

### Attempt 4: Adjusted git config + shallow clone

**Tried:** `git config http.postBuffer 524288000`, `git config http.timeout 300`, shallow single-branch clone.

**Result:** SUCCESS — clone berhasil, 4427 files, shallow tanpa history.

---

## 2026-09-26 — Canvas Phase 1-3 & Environment Setup

### Attempt 5: Vite Initialization Interactive Prompt
**Tried:** `npx create-vite@latest . --template react`
**Error:** Hung on interactive prompt waiting for user input on linter selection.
**Result:** FAILED (Canceled task).

### Attempt 6: Tailwind CSS v4 Configuration with PostCSS
**Tried:** Initializing Tailwind v4 using standard v3 PostCSS plugin (`tailwindcss`).
**Error:** Vite threw CSS plugin error: `The PostCSS plugin has moved to a separate package`.
**Result:** FAILED. Fixed by installing `@tailwindcss/vite` and updating `vite.config.js`.

### Attempt 7: React Flow Node Deletion UI State
**Tried:** Deleting a node via CustomNode trash icon or keyboard while the right panel was open.
**Error:** Right panel remained open with an empty state.
**Result:** FAILED. Fixed by adding a `useEffect` to monitor `nodes` array and reset `selectedNodeId` to null if the node is undefined.

### Attempt 8: React Flow Edge Connections
**Tried:** Connecting edges between two custom nodes using default `<Handle>` configurations.
**Error:** Edge line appeared during drag but disappeared/dropped upon release on target node.
**Result:** FAILED. Fixed by explicitly defining `id="source"` and `id="target"` on the Handles, and forcing `isConnectable={true}`.

### Attempt 9: BlockNote Full Clone
**Tried:** `git clone https://github.com/TypeCellOS/BlockNote.git blocknote`
**Error:** Download was incredibly slow and taking too many resources for just a reference.
**Result:** FAILED. Canceled and executed a shallow clone (`--depth 1`) instead.

### Attempt 11: BlockNote Dev Server — Missing xl-typst-compiler Alias
**Tried:** Running `npx pnpm dev` in the `blocknote/` workspace.
**Error:** `"Failed to run dependency scan. Skipping dependency pre-bundling."` — Vite couldn't resolve:
  - `@blocknote/xl-typst-compiler/wasm?url` (imported by `playground/src/App.tsx`)
  - `@blocknote/xl-typst-compiler` (imported by `packages/xl-pdf-exporter/src/pdfua/compileTypst.ts`)

**Root Cause:** `playground/vite.config.ts`'s `devAliases` was missing an entry for `@blocknote/xl-typst-compiler`. Vite's pre-bundler fell back to scanning `node_modules/@blocknote/` which only had `xl-pdf-exporter` (empty dir from workspace symlinks not set up), leaving `xl-typst-compiler` unresolved.

**Fix:** Added the missing dev alias in `playground/vite.config.ts`:
```ts
"@blocknote/xl-typst-compiler": resolve(
  __dirname,
  "../packages/xl-typst-compiler/src",
),
```
This points Vite directly at the package source, bypassing the unresolved workspace symlinks.

**Result:** SUCCESS — dev server starts cleanly with no dependency scan errors, `BlockNote Playground` loads on port 5173.

### Attempt 10: macOS Executable Shortcut for BlockNote
**Tried:** Creating `run-blocknote.sh` for user to run the BlockNote environment.
**Error:** User explicitly requested not to use a `.sh` file for macOS shortcuts.
**Result:** FAILED. Replaced with `run-blocknote.command` and `cd "$(dirname "$0")"` trick for double-click execution.
