# CURRENT_TASK.md

## Current Problem
We need to modify the newly cloned BlockNote reference implementation for the canvas mindmap and "ll", but we haven't started this process yet. The session was stopped right after cloning and setting up the runner script.

## Goal
Modify the local BlockNote implementation for integration into the canvas mindmap as a rich text editor and other future features.

## Confirmed Facts
- Canvas Phase 1-3 is complete (Split-view, CRUD nodes, React Flow handles, LocalStorage auto-save).
- Appwrite schema is not yet defined (`appwrite.json` is missing/empty). No Appwrite config touched yet.
- BlockNote repository is cloned (shallow clone, `--depth 1`) in the `blocknote/` folder.
- A double-clickable `run-blocknote.command` exists to run it independently on macOS.
- Root `package.json` has an `npm run blocknote` shortcut.

## Current Hypothesis
Modifying the local shallow clone of BlockNote directly will allow us to customize the rich text editor to fit exactly into the mindmap nodes' requirements without breaking the core canvas logic.

## All Failed Approaches
- Using Vite interactive prompt (hung).
- Configuring Tailwind v4 with v3 PostCSS syntax (caused Vite error).
- Relying on default React Flow `Handle` configs without explicit `id`s (caused connections to drop).
- Full git clone of BlockNote (too slow, replaced with shallow clone).
- Providing a `.sh` file for macOS shortcut (user wanted double-clickable `.command`).

## Evidence Discovered
- Tailwind v4 requires `@tailwindcss/vite` plugin rather than traditional PostCSS plugins.
- React Flow's `Handle` components in custom nodes often require explicit `id` and `isConnectable={true}` props to avoid dropping connections silently.
- macOS `.command` files require `cd "$(dirname "$0")"` to execute in the correct directory when double-clicked.

## Last Action
Cloned BlockNote, created `run-blocknote.command`, updated `package.json` scripts, and stopped the session before starting BlockNote modifications.

## Current State
Session paused. Development environment for both Canvas and BlockNote is fully set up and running, but BlockNote modifications are pending.

## Exact Next Step
Begin modifying the BlockNote source code located in the `blocknote/` folder according to the upcoming user requirements.

## Things That Must Not Be Repeated
- Using `.sh` instead of `.command` for Mac executable desktop shortcuts.
- Attempting full clones for large reference repos without using `--depth 1`.
- Forgetting explicit `id` and `isConnectable` for React Flow Handles.
- Mixing Tailwind v3 configs in a Tailwind v4 project.
- Proceeding with DB changes without recording the schema via Appwrite CLI.
- Making unverified success claims.
