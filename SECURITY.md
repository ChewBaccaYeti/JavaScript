# Security policy

## Scope

This is a personal learning sandbox — no production deployment, no live users,
no real data. There is no supported release line and no security SLA.

That said, the repo ships runnable Node servers (`nested_projects/mongoose`,
`nested_projects/JWT_token`, `nested_projects/WebSockets`,
`nested_projects/nodemailer`) that a reader might copy into something real. A
vulnerable pattern in those files is worth reporting even though nothing here is
deployed.

## Supported versions

| Branch | Supported |
| ------ | --------- |
| `main` | ✅        |
| others | ❌        |

## Reporting

Use **GitHub Security Advisories** —
[Report a vulnerability](https://github.com/ChewBaccaYeti/JavaScript/security/advisories/new).
Do not open a public issue for anything exploitable.

Include the file path, the pattern, and a concrete failure scenario. Expect a
reply within a couple of weeks; this is a side project.

## Automated scanning

-   **CodeQL** — `javascript-typescript`, `python`, and `actions` analysed on
    every push and PR to `main`, plus a weekly scheduled run.
-   **Dependabot** — weekly npm updates at the root, monthly for the nested
    projects, `tasks/`, pip, and GitHub Actions.

## Ground rules for contributions

-   No credentials, tokens, connection strings, API keys, or personal data in
    the repo — not in code, comments, commits, or fixtures. `.env` is
    gitignored; keep it that way.
-   Example servers must use parameterised queries and validate input at the
    boundary. Copy-paste-ready code should be copy-paste-safe.
-   Do not disable CI checks or scanners to get a PR green.
