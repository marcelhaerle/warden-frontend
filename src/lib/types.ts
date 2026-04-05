export interface HardeningBuckets {
  danger: number;
  medium: number;
  secure: number;
}

export interface AttentionHost {
  hostname: string;
  last_score: number;
  last_seen: string;
}

export interface DashboardStats {
  total_hosts: number;
  failed_scans_24h: number;
  buckets: HardeningBuckets;
  needs_attention: AttentionHost[];
}

export interface ScanRunSummary {
  id: number;
  agent_version: string;
  hostname: string;
  reported_at: string;
  success: boolean;
  error?: string;
  result_count: number;
  hardening_index?: number;
  warnings?: number;
  suggestions?: number;
}
