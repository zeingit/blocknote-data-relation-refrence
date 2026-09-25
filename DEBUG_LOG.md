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

