# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## What this repo is

Personal **JavaScript sandbox / practice field / reference database**. No single
app — a collection of independent modules exploring the JS language and Node
ecosystem. Focus is the language itself and supporting tooling (no app framework
is the "main" project). The `js_practices/` topic folders double as a
hand-written reference: each method gets a small named function, an immediate
call, and bilingual (RU/EN) comments.

Mostly JavaScript, but `algorithms/` contains paired **Python** implementations
of every algorithm alongside the JS version (interview-prep reference) — 39
algorithms, each written twice.

`README.md` is the user-facing map of the repo. Keep it in sync when structure
changes.

## Commands

```bash
# Run all Jest tests (root config) — 5 suites, 75 tests
npm test
npm run test:watch

# Formatting (Prettier is the formatter of record; .prettierignore scopes it)
npm run format          # --write
npm run format:check    # --check, the CI gate

# Type-check (scoped: nested_projects/Pipe + nested_projects/mock)
npm run typecheck

# Dev servers (nodemon, auto-reload)
npm run mock            # nested_projects/mock/mock.js
npm run transporter     # nested_projects/nodemailer/transporter.js
npm run pipe            # nested_projects/Pipe/Pipeline.js
npm run loop_exer       # js_practices/Scripts/loops/exercises.js
npm run loops           # js_practices/Scripts/loops/Loops.js

# Run a single arbitrary file
node js_practices/Scripts/Arrays.js
python algorithms/graph/dijkstra.py
npx ts-node nested_projects/Pipe/Pipeline.ts   # .ts via ts-node

# Algorithm tests
npm run algo:test       # jest --config algorithms/tests/js/jest.config.js
npm run algo:pytest     # pytest algorithms/tests/python

# Run a single test file
npx jest <path>
npx jest --testPathPattern=<pattern>
```

## Repository layout (top level)

| Dir                | What it is                                                                                                                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `js_practices/`    | Core: the language-reference topic folders + small browser/Node demo apps under `js_practices/apps/`                                                                                                                                                                   |
| `nested_projects/` | Larger self-contained Node/tooling projects (Express, Mongoose, JWT, WebSockets, nodemailer, Pipe, React/TS CEC, etc.)                                                                                                                                                 |
| `algorithms/`      | Classic interview algorithms paired in **JavaScript + Python**. Subdirs: `sorting/`, `searching/`, `math/`, `graph/`, `dp/`, `strings/`, `data_structures/`, plus `visualization/` (D3) and `tests/`. See `algorithms/README.md` for full complexity tables and index. |
| `tasks/`           | Standalone front-end task exercises (`task_1`..`task_4`); `task_3`/`task_4` have own `package.json` + Parcel                                                                                                                                                           |
| `.github/`         | CI (`ci.yml`), CodeQL (`codeql.yml`), `CODEOWNERS`, `dependabot.yml`, PR/issue templates                                                                                                                                                                               |

Root `index.html` + `styles.css` are a leftover freeCodeCamp CatPhotoApp
exercise, not a project entry point.

### `js_practices/` — JS language reference (the "database")

These are the curated topic files. **When adding examples, match the existing
style** (named function per concept, immediate call, RU/EN comments, a checklist
of covered methods at the bottom where present):

| Path                                           | Topic                                                                                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Scripts/Arrays.js`                            | Array methods catalog (access, mutate, iterate, search, immutable copies, statics)                                           |
| `Scripts/Objects.js`                           | `Object.*` statics, descriptors, prototypes, freeze/seal, clone (shallow vs `structuredClone`)                               |
| `Scripts/DataTypes.js`                         | Primitives, `typeof`, coercion/conversion, `==` vs `===`, falsy, `?.`/`??`, symbols                                          |
| `Scripts/variables.js`                         | `var`/`let`/`const`/`using` — scope, hoisting/TDZ, redeclare, reassign, loop trap, `Symbol.dispose`                          |
| `Scripts/Math.js`                              | `Math.*` (trig/log, rounding, max/min/sqrt/sign/trunc/hypot, constants)                                                      |
| `Scripts/Recursion.js`                         | Factorial, fibonacci, memoization, iterative form, tree/nested recursion                                                     |
| `Scripts/Callback.js`                          | Callbacks, callback-style async chains (error-first)                                                                         |
| `Scripts/Middleware.js`                        | Middleware pattern                                                                                                           |
| `Scripts/functions/`                           | Declarations vs expressions, hoisting, arrow fns, rest/default params, spread, IIFE                                          |
| `Scripts/loops/`                               | for / while / do-while / for-in / for-of / Set+Map iteration / switch / break-continue / labels (+ `Loops.mmd`)              |
| `arrays/array_methods/`                        | Iteration methods in depth (forEach, map, filter, find, every/some, reduce, sort, flat, chaining, lodash)                    |
| `arrays/arrays_examples/`                      | Applied array exercises                                                                                                      |
| `objects/`                                     | Object creation, methods, iteration, applied examples (friends, cart)                                                        |
| `classes/`                                     | class syntax, inheritance (`extends`/`super`/`instanceof`, + `02-inheritance.mmd`), OOP, `new`, getters/setters, private `#` |
| `prototypes/`                                  | Prototype chain, constructor functions, `Object.create`, `__proto__`                                                         |
| `this/`                                        | `this` binding rules, method vs standalone, `call`/`apply`/`bind`, arrow lexical `this`                                      |
| `callback_closures/`                           | Callbacks, closures (factories, private state, currying, counter, var/let loop trap), arrow fns                              |
| `DOM/`, `events/`, `delegation/`, `lazy-load/` | Browser DOM/event exercises (each driven by an `index.html`, with `css/` + `js/` siblings)                                   |
| `quests/`                                      | Small algorithm challenges                                                                                                   |
| `tutorial-lections/`                           | Lecture-style notes (closures, OOP, DOM props vs attributes, events, fCC)                                                    |
| `scratch/`                                     | Loose experiments (`roman-numerals.js`, `check_RAM.py`)                                                                      |

### `js_practices/apps/` — small demo apps

Most use **Parcel** and have their own `package.json`: `CRUD` + `async-await`
(json-server backend), `async`, `http-requests`, `localStorage`, `npm`
(Express + Joi), `pagination`, `promises` (Bootstrap), `webpack` (Webpack +
SASS). No build tool: `colorPalette`, `crewings` (email scraping/filtering),
`football-game`.

### `nested_projects/` — larger projects

| Dir                                             | Stack                                                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `CEC/`                                          | React + TypeScript app (`IshimuraDB`) with styled-components — **archived snapshot**, see "Known issues" |
| `Pipe/`                                         | Data pipeline over SWAPI, **own `package.json` + Jest** (`Pipeline.js`/`.ts`)                            |
| `mongoose/`                                     | Express + MongoDB/Mongoose REST API (api / controller / service)                                         |
| `JWT_token/`                                    | JWT auth with passport-jwt                                                                               |
| `WebSockets/`                                   | Socket.io + raw WebSocket + Chat servers                                                                 |
| `nodemailer/`                                   | Email via nodemailer + SendGrid + Handlebars, **own `package.json`**                                     |
| `multer/`                                       | File upload example                                                                                      |
| `mock/`                                         | Mock data generators (JS + TS)                                                                           |
| `jest/`                                         | Standalone Jest example (`pow`)                                                                          |
| `scrollLodash/`, `lazyloading/`, `junior-task/` | Small browser experiments                                                                                |

## Mermaid

The repo uses Mermaid in two places, and both are expected to keep rendering:

-   Standalone `.mmd` files next to the code they explain — six in
    `algorithms/data_structures/` (stack, queue, linked_list, binary_tree, trie,
    union_find), plus `js_practices/classes/02-inheritance.mmd` and
    `js_practices/Scripts/loops/Loops.mmd`.
-   Fenced ` ```mermaid ` blocks in `README.md` (repository map, CI/CD graph).

Use `<br/>` for line breaks inside node labels, not raw newlines — raw newlines
are not reliably parsed. Escape `&` as `&amp;`. Keep subgraph ids distinct from
node ids.

## Config

-   **Prettier** (`.prettierrc.json`): 4-space tabs, single quotes, trailing
    commas, 80 cols, `proseWrap: always`. The whole repo has been formatted, and
    `format:check` is a hard CI gate — run `npm run format` before committing.
    Scope is set by `.prettierignore`, which excludes lockfiles, vendored
    sources, `tasks/`, build output, `.hbs`/`.handlebars` (Prettier throws on
    partial markup inside `{{#each}}`), and `.github/CODEOWNERS` (Prettier
    mangles it as Markdown).
-   **markdownlint** (`.markdownlint.jsonc`): MD007, MD013, MD030, MD033 and
    MD046 are off because they contradict Prettier's Markdown output. Leaving
    them on lets editor auto-fix corrupt files — it has already broken a fenced
    code block in `README.md`. Do not re-enable them without also changing the
    Prettier config.
-   **Babel** (`babel.config.json`): `@babel/preset-env` — this is what
    `babel-jest` uses to transform test files. `@babel/core`,
    `@babel/preset-env`, and `babel-jest` must stay in devDependencies or every
    Jest suite fails to run.
-   **TypeScript**: `tsconfig.json` — target ES2016, commonjs, JSX react,
    `strict: true`. `tsconfig.check.json` is the CI scope (`Pipe/` + `mock/`
    only).
-   **nodemon** (`nodemon.json`): `ts-node` for `.ts`, `python3` for `.py`.
-   **Python** (`pyproject.toml`): pytest paths, ruff (line 100,
    `E,F,W,I,B,UP`), mypy, pyright/basedpyright pinned to `venv311`.

## Tests

Jest runs from the root config and picks up every suite:

-   `algorithms/tests/js/sorting.test.js`
-   `algorithms/tests/js/searching.test.js`
-   `nested_projects/Pipe/Pipeline.test.js`
-   `nested_projects/jest/pow.test.js`
-   `js_practices/apps/npm/src/jest/sum.test.js`

Python tests live in `algorithms/tests/python/`; `conftest.py` puts
`algorithms/` on `sys.path`, so imports read
`from sorting.bubble import bubble_sort`.

New algorithms should be tested against: empty input, single element, sorted
input, reverse order, duplicates, random input. See
`algorithms/tests/README.md`.

## CI / DevOps

-   **`.github/workflows/ci.yml`** — Prettier `format:check`, Jest on Node 20
    and 22, `tsc --noEmit`, and ruff + pytest on Python 3.11.
-   **`.github/workflows/codeql.yml`** — CodeQL matrix over
    `javascript-typescript`, `python`, and `actions`; weekly cron plus push/PR.
-   **`.github/CODEOWNERS`** — `@ChewBaccaYeti` owns everything; CI, manifests,
    and reference dirs are listed explicitly.
-   **`.github/dependabot.yml`** — weekly npm at root (grouped dev-tooling vs
    runtime), monthly for `Pipe`, `nodemailer`, `tasks/task_3`, `tasks/task_4`,
    pip, and GitHub Actions.
-   **`SECURITY.md`** — private advisory reporting and the no-secrets rule.

Do not disable CI checks or scanners to get a PR green. No credentials, tokens,
connection strings, or personal data anywhere in the repo — `.env` is
gitignored.

## Conventions for contributions

-   Reference files: one named function per concept, immediate call so the file
    runs standalone, bilingual RU/EN comments.
-   Algorithms: add the JS **and** Python implementation together, Big-O in the
    header comment, and a row in `algorithms/README.md`.
-   Data structures: add the matching `.mmd` diagram.
-   Run `npm run format` before committing; `format:check` is a CI gate.

## Known issues

-   **`nested_projects/CEC/` is stale.** It is a snapshot of an app that has
    since moved to the sibling `DS_API` repo, and its dependencies
    (`react-router-dom`, `helmet`, the `.jsx` crew components) are not installed
    here. It is excluded from `tsconfig.check.json` for that reason — a plain
    `npx tsc --noEmit` over the repo still fails on it.
-   **`tasks/task_3/.github/workflows/deploy.yml` is dead.** GitHub only reads
    workflows from the root `.github/workflows/`, so this nested one never runs.
    It also pins `actions/checkout@v2.3.1` and
    `JamesIves/github-pages-deploy-action@4.1.0`.
-   **`TASK_MANAGER_PROJECT.md` has no implementation yet.** The spec targets a
    `js_practices/projects/task-manager/` directory that does not exist.
