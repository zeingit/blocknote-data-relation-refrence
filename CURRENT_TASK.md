# CURRENT_TASK.md

## Current Task
Setup and maintain core documentation and system architecture for the React + Appwrite Cloud reference model.

## Current Status
Documentation files (CLAUDE.md, AGENTS.md, CURRENT_TASK.md, DEBUG_LOG.md, and docs/*) are created. Reviewing and updating them to align with the new requirements.

## Current Problem
Need to ensure all documentation perfectly reflects the specific user rules requested (like Appwrite Cloud schema tracking) and accurately captures the current task state.

## Goal
To have a robust documentation foundation that AI agents can strictly follow, acting as a reference model for editor & preview modes with Appwrite integration.

## Confirmed Facts
- Repo ini reference sistem & alur, BUKAN reference desain.
- Target: AI agent / developer yang butuh sistem data relation atau database management.
- Tech Stack: React + Appwrite Cloud.
- Folder `blocknote/` = shallow clone BlockNote (reference implementasi).
- Folder `timelines/` = shallow clone Timelines Studio (interactive timeline editor).
- `appwrite.json` is used for storing the database schema.

## Current Hypothesis
Updating all documentation strictly according to the user's prompt will provide a clean slate for future AI interactions without breaking existing reference implementation details.

## Failed Approaches
None in this specific documentation setup phase. (Historical git clone failures are logged in DEBUG_LOG.md).

## Last Action
Updated AGENTS.md with the CRITICAL APPWRITE RULE and modified CLAUDE.md to include React + Appwrite Cloud in the tech stack.

## Current State
Documentation is almost fully aligned. We are finalizing the CURRENT_TASK.md structure.

## Next Step
Confirm the setup is complete and report back to the user that the environment is refreshed and ready.

## Things That Must Not Be Repeated
- Making unverified success claims.
- Proceeding with DB changes without recording the schema via Appwrite CLI.
- Adding details only relevant for design rather than system/flow.
