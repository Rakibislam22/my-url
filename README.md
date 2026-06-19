# ShortIn

ShortIn is a modern URL-shortener landing page built with Next.js App Router.
It includes a polished marketing interface, a client-side demo short-link
generator, formatting and linting checks, type checking, and a hardened GitHub
Actions CI workflow.

## Features

- Responsive URL-shortener homepage
- Client-side URL validation and short-link demo generation
- Configurable public short-link domain
- Tailwind CSS styling
- Lucide icons
- ESLint, Prettier, TypeScript, and production build validation
- Least-privilege CI workflow with pinned GitHub Actions

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- ESLint
- Prettier

## Getting Started

Install dependencies:

```bash
npm ci
```

Create a local environment file:

```bash
NEXT_PUBLIC_SHORT_DOMAIN=https://short.in
```

The app reads `NEXT_PUBLIC_SHORT_DOMAIN` to build generated short URLs. Do not
include a trailing slash.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the app locally with Next.js development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run type-check
```

Runs TypeScript without emitting files.

```bash
npm run format
```

Formats supported source files with Prettier.

```bash
npm run format:check
```

Checks whether supported source files match Prettier formatting.

```bash
npm run validate
```

Runs formatting check, linting, type checking, and production build in sequence.

## Project Structure

```text
src/app/
  globals.css          Global styles and Tailwind imports
  layout.tsx           Root App Router layout and metadata
  page.tsx             Homepage UI
  shortener-form.tsx   Client-side URL input and short-link generation

.github/workflows/
  ci.yml               CI validation workflow
```

## Environment Variables

| Variable                   | Required | Description                                               |
| -------------------------- | -------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SHORT_DOMAIN` | Yes      | Public base domain used when generating demo short links. |

Example:

```bash
NEXT_PUBLIC_SHORT_DOMAIN=https://short.in
```

## CI

The CI workflow runs on pull requests to `dev` and `main`, and pushes to `dev`.
It installs dependencies with `npm ci`, checks formatting, runs linting, runs
TypeScript, and builds the app.

The workflow uses least-privilege repository permissions and pinned GitHub
Actions for reproducibility.

## Notes

The current shortener is a client-side demo. It generates deterministic short
links for display, but it does not persist links or provide redirect handling.
A production shortener would need a backend route, database, and collision-safe
ID allocation strategy.
