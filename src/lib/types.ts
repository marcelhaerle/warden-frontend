export interface HardeningBuckets {
  danger: number;
  medium: number;
  secure: number;
}

export interface AttentionHost {
  hostname: string;
  hardening_index: number;
  last_seen: string;
}

export interface DashboardStats {
  total_hosts: number;
  failed_scans_24h: number;
  buckets: HardeningBuckets;
  needs_attention: AttentionHost[];
}
