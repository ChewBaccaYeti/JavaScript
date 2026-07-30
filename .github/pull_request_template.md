# Pull request

## What changed

<!-- One or two sentences. What does this PR add, fix, or document? -->

## Where

<!-- Tick every area this PR touches. -->

-   [ ] `js_practices/` — language reference / topic files
-   [ ] `js_practices/apps/` — demo app
-   [ ] `algorithms/` — algorithm pair (JS + Python)
-   [ ] `nested_projects/` — larger Node/tooling project
-   [ ] `tasks/` — front-end task exercise
-   [ ] Tooling / CI / docs

## Checklist

-   [ ] New reference examples follow the house style: one named function per
        concept, immediate call, RU/EN comments.
-   [ ] New algorithm added in **both** JavaScript and Python, with Big-O noted
        in the header comment and a row in `algorithms/README.md`.
-   [ ] `npm test` passes locally.
-   [ ] `pytest algorithms/tests/python -q` passes (if Python files changed).
-   [ ] `npm run format` run on the files this PR touches.
-   [ ] No secrets, credentials, `.env` values, or personal data in the diff.
-   [ ] Mermaid diagrams (`.mmd` or fenced blocks) render — checked in the
        GitHub preview.

## Notes for the reviewer

<!-- Anything non-obvious: trade-offs, known gaps, follow-up work. -->
