# AGENTS.md

Rules for AI working on this project.

## Core Rules

- Never make unsupported success claims.
- Reproduce problems before fixing them.
- Use one hypothesis at a time.
- Verify every fix.
- Never repeat a failed approach unless new evidence justifies it.
- Never invent missing information.

## Debugging Protocol

After every **failed** debugging attempt, immediately record in `DEBUG_LOG.md`:
- What was tried
- What evidence was found
- What was eliminated as cause

After a **successful** fix, record in `DEBUG_LOG.md`:
- Root cause
- Final fix applied
- How it was verified

## Investigation Mode

If debugging reaches **3 consecutive failures**, stop making random changes and enter investigation mode.

## Tools

If `codebase-memory-mcp` is available, use `search_graph` / `trace_path` before grepping manually or reading many files.
