# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the backend API for a Calendar application built with Node.js, Express, and TypeScript. It's part of a larger monorepo structure with a separate frontend directory at `../frontend`.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Uses `tsx watch` for hot-reloading during development. Server runs on `http://localhost:5000` (configurable via `PORT` env var).

### Building for Production
```bash
npm run build
```
Compiles TypeScript to JavaScript in the `dist/` directory using `tsc`.

### Running Production Build
```bash
npm start
```
Runs the compiled JavaScript from `dist/index.js`.

### Linting
```bash
npm run lint
```
Runs ESLint with TypeScript support on all `.ts` files.

## Architecture

### Technology Stack
- **Runtime**: Node.js with ES Modules (`"type": "module"` in package.json)
- **Framework**: Express.js with CORS enabled
- **Language**: TypeScript with strict mode enabled
- **Module System**: ESNext modules with Node resolution

### TypeScript Configuration
- Strict mode enabled with additional checks (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- Source maps and declaration files generated for debugging and type checking
- Source directory: `src/`, output directory: `dist/`

### Current API Structure
The application currently has a minimal API with:
- Root endpoint (`/`) - API status check
- Health check endpoint (`/api/health`) - Returns status and timestamp

All logic is currently in `src/index.ts`. As the application grows, routes and middleware should be extracted into separate modules.
