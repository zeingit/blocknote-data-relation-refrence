# DECISIONS.md

## ADR-001: Shallow Clone untuk Sub-Projects

**Date:** 2026-09-26

**Context:** Repo ini adalah referensi, bukan deployment. Clone full history tidak diperlukan dan membebani bandwidth.

**Decision:** Gunakan shallow clone (`--depth 1 --single-branch`) untuk sub-project seperti BlockNote.

**Consequences:**
- Pro: Clone cepat dan kecil.
- Con: Tidak ada git history di sub-project.
- Mitigation: Jika history diperlukan, bisa deep-clone sesuai kebutuhan.
