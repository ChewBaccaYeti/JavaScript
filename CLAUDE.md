# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run all tests
npm test

# Format all code
npm run format

# Dev servers (nodemon with auto-reload)
npm run RIG          # CEC/IshimuraDB.js (React/TS app)
npm run mock         # mock/mock.js
npm run transporter  # nodemailer/transporter.js
npm run pipe         # Pipe/Pipeline.js

# TypeScript files run via ts-node (nodemon watches JS/TS changes)
```

## Architecture

Learning/practice monorepo. No single app — collection of independent modules exploring JS/Node concepts.

**Key subdirectories:**

| Dir | What it is |
|-----|-----------|
| `js_trainee/` | Core fundamentals: arrays, closures, classes, prototypes, DOM, events, this-context |
| `Scripts/` | Standalone JS exercises (arrays, loops, math, objects) |
| `CEC/` | React + TypeScript app (`IshimuraDB.tsx`) with styled-components |
| `Pipe/` | Data pipeline with own `package.json` and Jest tests |
| `mongoose/` | Express + MongoDB/Mongoose REST API patterns |
| `JWT_token/` | JWT auth with passport-jwt |
| `WebSockets/` | Socket.io + raw WebSocket implementations |
| `mock/` | Mock data in JS and TS |
| `nodemailer/` | Email via nodemailer + SendGrid + Handlebars templates; own `package.json` |
| `crewings/` | Puppeteer-based web scraping + email filtering |
| `multer/` | File upload examples |
| `jest/` | Standalone Jest examples |
| `UNIX/` | Shell script exercises and Unix command output files |

## Config

- **Prettier**: 4-space tabs, single quotes, trailing commas (`.prettierrc.json`)
- **Babel**: `@babel/preset-env` (`babel.config.json`)
- **TypeScript**: target ES2016, commonjs, JSX react (`tsconfig.json`)
- **nodemon**: watches `Ishimura`, `mock`, `nodemailer`, `Pipe`, `Scripts` dirs; uses `ts-node` for `.ts` files

## Tests

Jest tests exist in:
- `Pipe/Pipeline.test.js`
- `jest/pow.test.js`
- `js_trainee/apps/npm/src/jest/sum.test.js`

Run single test file: `npx jest <path>` or `npx jest --testPathPattern=<pattern>`

`Pipe/` has its own `package.json` with separate Jest config — run `npm test` inside that dir for pipeline-specific tests.
