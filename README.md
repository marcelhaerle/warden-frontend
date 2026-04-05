# Warden Frontend

Frontend application for the Warden Security Dashboard, built with Next.js.

## Purpose

This project provides a UI for security scan visibility and operations:

- Dashboard KPIs for overall system health
- Scan history with filtering and pagination
- Detailed scan deep dive including raw Lynis data
- Advanced search across JSONB scan payloads

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Recharts (charts)
- Lucide React (icons)
- clsx + tailwind-merge (class handling)

## Data Model (Frontend Contract)

The frontend mirrors FastAPI Pydantic models:

- **ScanRunSummary**: `id (int), agent_version (string), hostname (string), reported_at (ISO string), success (bool), error (string?), result_count (int), hardening_index (int?), warnings (int?), suggestions (int?)`
- **ScanRunDetail**: extends Summary with `raw_scan_data (Record<string, any>)` and `received_at (ISO string)`
- **DashboardStats**: `total_hosts (int), failed_scans_24h (int), buckets (HardeningBuckets), needs_attention (AttentionHost[])`

## Backend API Contract

Base URL: `http://localhost:8000`

1. `GET /api/dashboard/stats` -> global KPIs
2. `GET /api/scans?limit=50&offset=0` -> scan summaries list
3. `GET /api/scans/{id}` -> scan detail
4. `GET /api/scans/search?json_key=X&json_value=Y` -> JSONB key-value search

## Feature Roadmap

### 1. Core Layout & Branding

Goal: build a consistent dark "security look" foundation.

- Global dark theme (Slate/Zinc)
- Sidebar/header with Warden branding
- Responsive content container
- Live connection status indicator

### 2. Dashboard Landing Page

Goal: show the most important security KPIs.

- KPI cards (Total Hosts, Failed Scans)
- Hardening distribution bars (Danger/Medium/Secure)
- Attention-required list (top 10 hosts)
- Data fetching via React Server Components (RSC)

### 3. Scan History Table

Goal: filterable list of past scans.

- Table columns: hostname, index, warnings, timestamp
- Client-side pagination (limit/offset)
- Filters for hostname and success status
- Row highlighting for failed scans

### 4. Scan Detail View (Deep Dive)

Goal: display full raw Lynis scan data.

- Dynamic route: `scans/[id]`
- Metadata header (scan time, agent version)
- Searchable JSON viewer or grouped raw data list
- Export as JSON action

### 5. Advanced JSONB Search

Goal: powerful search across specific Lynis keys.

- Key-value search form (for example: `ssh_root_login = no`)
- Integration with `/api/scans/search`
- Reuse history table for results

## Development Environment Setup

### Prerequisites

- Node.js 20+
- npm 10+
- A running Warden backend API on `http://localhost:8000`

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Then open `http://localhost:3000`.

### 3) Lint the project

```bash
npm run lint
```

### 4) Build for production

```bash
npm run build
npm run start
```

## Environment Variables

Use a local environment file for runtime configuration:

1. Create `.env.local` in the project root.
2. Add the API base URL used by the frontend.

Example:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

Notes:

- Variables prefixed with `NEXT_PUBLIC_` are exposed to browser code.
- Keep secrets out of `NEXT_PUBLIC_*` variables.
- For local development, `http://localhost:8000` should match the backend API base URL documented in this repository.

## Suggested Development Flow

1. Start backend API (`localhost:8000`).
2. Start frontend with `npm run dev`.
3. Implement roadmap features incrementally.
4. Validate data contracts against backend responses.
5. Run lint/build checks before merging.

## Project Structure (Current)

```text
src/
    app/
        globals.css
        layout.tsx
        page.tsx
```

## Notes

- Keep features modular to match the blueprint.
- Prefer server components for data-heavy views, and client components for interactive filtering/search UIs.
