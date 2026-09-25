# CONVENTIONS.md

## TypeScript Conventions

- Leverage type system — mistakes harus surface di compile time, bukan runtime.
- Model states dan outcomes explicitly — discriminated unions di atas boolean flags.
- No `any` atau casts yang hide a case.
- Exhaustive `switch`es over union members.
- Expected failures adalah values, bukan exceptions.
- Exceptions hanya untuk unexpected failures (broken invariants, env problems, programmer errors).
- Prefer `function name() {}` declarations untuk named functions.

## Git Conventions

- Jangan buat commit kecuali diminta langsung.
- Jangan tambah Co-Authored-By lines di commit.
- Shallow clone untuk sub-project dependencies.

## Naming Conventions

- BlockNote internal naming conventions ada di `blocknote/CLAUDE.md`.
