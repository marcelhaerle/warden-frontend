"use client";

import { useEffect, useState } from "react";
import { AttentionRequired } from "@/components/dashboard/attention-required";
import { HardeningDistribution } from "@/components/dashboard/hardening-distribution";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { DashboardStats } from "@/lib/types";

export default function Home() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getDashboardStats() {
      try {
        setLoading(true);
        const res = await fetch("/api/dashboard/stats");

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }

        const data: DashboardStats = await res.json();
        setStats(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    getDashboardStats();
  }, []);

  if (loading && !stats) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-muted-foreground">Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!stats) {
    return null; // Or a 'no data' message
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <StatsCards
        totalHosts={stats.total_hosts}
        failedScans={stats.failed_scans_24h}
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <HardeningDistribution buckets={stats.buckets} />
        <AttentionRequired hosts={stats.needs_attention} />
      </div>
    </div>
  );
}

