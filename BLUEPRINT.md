# Warden Frontend Blueprint (Next.js)

This document serves as a technical reference for the step-by-step development of the Warden Security Dashboard. All features are designed in a modular way.

---

## Technical Base Information

### Data Model (TypeScript)

Identical to the FastAPI Pydantic models:

- **ScanRunSummary**: `id (int), agent_version (string), hostname (string), reported_at (ISO string), success (bool), error (string?), result_count (int), hardening_index (int?), warnings (int?), suggestions (int?)`
- **ScanRunDetail**: Extends Summary with `raw_scan_data (Record<string, any>)` and `received_at (ISO string)`.
- **DashboardStats**: `total_hosts (int), failed_scans_24h (int), buckets (HardeningBuckets), needs_attention (AttentionHost[])`.

### API Endpoints (Base: [http://localhost:8000](http://localhost:8000))

1. `GET /api/dashboard/stats` -> Returns global KPIs.
2. `GET /api/scans?limit=50&offset=0` -> List of all scans (summary).
3. `GET /api/scans/{id}` -> Detailed view of a specific scan.
4. `GET /api/scans/search?json_key=X&json_value=Y` -> Specialized JSONB search.

---

## Feature Roadmap

### Feature #1: Core Layout & Branding

- **Goal**: A consistent dark-theme "security look" foundation.
- **Tasks**:
  - Global dark theme (Slate/Zinc palette).
  - Navigation sidebar/header with "Warden" logo.
  - Responsive container for content areas.
  - Status indicator (live connection dot).

### Feature #2: Dashboard Landing Page

- **Goal**: Visualization of the most important security KPIs.
- **Tasks**:
  - Implement the stats cards (Total Hosts, Failed Scans).
  - "Hardening Distribution" bars (Danger/Medium/Secure).
  - "Attention Required" list: top 10 hosts that need intervention.
  - Data fetching via React Server Components (RSC).

### Feature #3: Scan History Table

- **Goal**: A filterable list of all past scans.
- **Tasks**:
  - Data table with columns: hostname, index, warnings, timestamp.
  - Client-side pagination (limit/offset).
  - Filter UI for hostname and success status.
  - Visual distinction (row highlighting) for failed scans.

### Feature #4: Scan Detail View (Deep Dive)

- **Goal**: Display the complete raw Lynis data of a scan.
- **Tasks**:
  - Dynamic route `scans/[id]`.
  - Header with metadata (scan time, agent version).
  - Searchable JSON viewer or grouped list of `raw_scan_data`.
  - "Export as JSON" button.

### Feature #5: Advanced JSONB Search

- **Goal**: Powerful search across specific Lynis keys.
- **Tasks**:
  - Search form for key-value pairs (e.g. `ssh_root_login = no`).
  - Integration of the `/api/scans/search` endpoint.
  - Display results in the history table.
