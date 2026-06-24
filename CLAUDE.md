# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## What this repo is

Personal **JavaScript sandbox / practice field / reference database**. No single
app — a collection of independent modules exploring the JS language and Node
ecosystem. Focus is the language itself and supporting tooling (no app framework
is the "main" project). The `js_trainee/` topic folders double as a hand-written
reference: each method gets a small named function + immediate call + bilingual
(RU/EN) comments.

Mostly JavaScript, but `algorithms/` contains paired **Python** implementations
of every algorithm alongside the JS version (interview-prep reference).

## Commands

```bash
# Run all Jest tests (root config)
npm test

# Format everything with Prettier
npm run format

# Dev servers (nodemon, auto-reload). NOTE: paths below are stale — see "Known issues".
npm run RIG          # -> CEC/IshimuraDB.js          (actual file: nested_projects/CEC/...)
npm run mock         # -> mock/mock.js               (actual: nested_projects/mock/mock.js)
npm run transporter  # -> nodemailer/transporter.js  (actual: nested_projects/nodemailer/...)
npm run pipe         # -> Pipe/Pipeline.js           (actual: nested_projects/Pipe/Pipeline.js)

# These two work (paths are correct):
npm run exer         # nodemon js_trainee/Scripts/loops/exercises.js
npm run loops        # nodemon js_trainee/Scripts/loops/Loops.js

# Run a single arbitrary file
node js_trainee/Scripts/Arrays.js
npx ts-node nested_projects/Pipe/Pipeline.ts   # .ts via ts-node

# Run an algorithm reference file (JS or Python pair)
node algorithms/sorting/quick.js
python3 algorithms/graph/dijkstra.py

# Run a single test file
npx jest <path>
npx jest --testPathPattern=<pattern>
```

## Repository layout (top level)

| Dir                | What it is                                                                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `js_trainee/`      | Core: the language-reference topic folders + small browser/Node demo apps under `js_trainee/apps/`                                                                                                                                                                                                |
| `nested_projects/` | Larger self-contained Node/tooling projects (Express, Mongoose, JWT, WebSockets, nodemailer, Pipe, React/TS CEC, etc.)                                                                                                                                                                            |
| `algorithms/`      | Classic interview algorithms paired in **JavaScript + Python**. Subdirs: `sorting/`, `searching/`, `math/`, `graph/`, `dp/`, `strings/`, `data_structures/`. Each algo has heavy RU/EN comments, Big-O, edge cases, example run. See `algorithms/README.md` for full complexity tables and index. |
| `tasks/`           | Standalone front-end task exercises (`task_1`..`task_4`); some have own `package.json` + Parcel                                                                                                                                                                                                   |
| `UNIX/`            | Shell-script exercises and Unix command output files                                                                                                                                                                                                                                              |
| `Assembly 6502/`   | 6502 assembly experiments (not JS)                                                                                                                                                                                                                                                                |

### `js_trainee/` — JS language reference (the "database")

These are the curated topic files. **When adding examples, match the existing
style** (named function per concept, immediate call, RU/EN comments, a checklist
of covered methods at the bottom where present):

| Path                                           | Topic                                                                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Scripts/Arrays.js`                            | Array methods catalog (access, mutate, iterate, search, immutable copies, statics)                                                                                  |
| `Scripts/Objects.js`                           | `Object.*` statics, descriptors, prototypes, freeze/seal, clone (shallow vs `structuredClone`)                                                                      |
| `Scripts/DataTypes.js`                         | Primitives, `typeof`, coercion/conversion, `==` vs `===`, falsy, `?.`/`??`, symbols                                                                                 |
| `Scripts/variables.js`                         | `var`/`let`/`const`/`using` — scope, hoisting/TDZ, redeclare, reassign, loop trap, `Symbol.dispose`                                                                 |
| `Scripts/Math.js`                              | `Math.*` (trig/log, rounding, max/min/sqrt/sign/trunc/hypot, constants)                                                                                             |
| `Scripts/Recursion.js`                         | Factorial, fibonacci, memoization, iterative form, tree/nested recursion                                                                                            |
| `Scripts/Callback.js`                          | Callbacks, callback-style async chains (error-first)                                                                                                                |
| `Scripts/Middleware.js`                        | Middleware pattern                                                                                                                                                  |
| `Scripts/functions/`                           | Declarations vs expressions, hoisting, arrow fns, rest/default params, spread, IIFE                                                                                 |
| `Scripts/loops/`                               | for / while / do-while / for-in / for-of / Set+Map iteration / switch / break-continue / labels                                                                     |
| `arrays/array_methods/`                        | Iteration methods in depth (forEach, map, filter, find, every/some, reduce, sort, flat, chaining, lodash)                                                           |
| `arrays/arrays_examples/`                      | Applied array exercises                                                                                                                                             |
| `objects/`                                     | Object creation, methods, iteration, applied examples (friends, cart)                                                                                               |
| `classes/`                                     | class syntax, inheritance (`extends`/`super`/`instanceof`), OOP, `new`, getters/setters, private `#`                                                                |
| `prototypes/`                                  | Prototype chain, constructor functions, `Object.create`, `__proto__`                                                                                                |
| `this/`                                        | `this` binding rules, method vs standalone, `call`/`apply`/`bind`, arrow lexical `this`                                                                             |
| `callback_closures/`                           | Callbacks, closures (factories, private state, currying, counter, var/let loop trap), arrow fns                                                                     |
| `DOM/`, `events/`, `delegation/`, `lazy-load/` | Browser DOM/event exercises (each driven by an `index.html`)                                                                                                        |
| `quests/`                                      | Small algorithm challenges                                                                                                                                          |
| `tutorial-lections/`                           | Lecture-style notes (closures, OOP, DOM, events)                                                                                                                    |
| `projects/task-manager/`                       | Progressive 5-level browser project (vanilla DOM → classes → async → patterns). See its own `README.md` and root-level `TASK_MANAGER_PROJECT.md` for the full spec. |

### `js_trainee/apps/` — small demo apps

Most use **Parcel** and have their own `package.json`: `CRUD` + `async-await`
(json-server backend), `async`, `http-requests`, `localStorage`, `npm`
(Express + Joi), `pagination`, `promises` (Bootstrap), `webpack` (Webpack +
SASS). No build tool: `colorPalette`, `crewings` (email scraping/filtering),
`football-game`.

### `nested_projects/` — larger projects

| Dir                                             | Stack                                                                      |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| `CEC/`                                          | React + TypeScript app (`IshimuraDB`) with styled-components               |
| `Pipe/`                                         | Data pipeline, **own `package.json` + Jest** (`Pipeline.js`/`.ts`)         |
| `mongoose/`                                     | Express + MongoDB/Mongoose REST API (api / controller / service / schemas) |
| `JWT_token/`                                    | JWT auth with passport-jwt                                                 |
| `WebSockets/`                                   | Socket.io + raw WebSocket chat servers                                     |
| `nodemailer/`                                   | Email via nodemailer + SendGrid + Handlebars, **own `package.json`**       |
| `multer/`                                       | File upload example                                                        |
| `mock/`                                         | Mock data generators (JS + TS)                                             |
| `jest/`                                         | Standalone Jest example (`pow`)                                            |
| `scrollLodash/`, `lazyloading/`, `junior-task/` | Small browser experiments                                                  |

## Config

-   **Prettier**: 4-space tabs, single quotes, trailing commas
    (`.prettierrc.json`)
-   **Babel**: `@babel/preset-env` (`babel.config.json`)
-   **TypeScript**: target ES2016, commonjs, JSX react (`tsconfig.json`)
-   **nodemon** (`nodemon.json`): `ts-node` for `.ts`; watch list (`Ishimura/`,
    `mock/`, `nodemailer/`, `Pipe/`, `Scripts/`) is stale after the
    `nested_projects/` move.

## Tests

Jest tests live in:

-   `nested_projects/Pipe/Pipeline.test.js` (Pipe has its own `package.json` /
    Jest config — `npm test` inside that dir)
-   `nested_projects/jest/pow.test.js`
-   `js_trainee/apps/npm/src/jest/sum.test.js`

## Known issues

-   **Stale dev-server paths**: `package.json` scripts
    `RIG`/`mock`/`transporter`/`pipe` and the `nodemon.json` `watch` list still
    point to old top-level locations (`CEC/`, `mock/`, `nodemailer/`, `Pipe/`).
    Those folders now live under `nested_projects/`, so these scripts fail until
    the paths are updated (e.g. `nodemon nested_projects/Pipe/Pipeline.js`).
    </content>

</invoke>
