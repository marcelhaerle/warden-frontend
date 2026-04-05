"use client";

import { useEffect, useState } from "react";
import { ScanRunSummary } from "@/lib/types";
import { PageHeader } from "@/components/scans/page-header";
import { ScanTable } from "@/components/scans/scan-table";
import { PaginationControls } from "@/components/scans/pagination-controls";

export default function ScansPage() {
  const [scans, setScans] = useState<ScanRunSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(15);
  const [total, setTotal] = useState(0);
  const [hostnameFilter, setHostnameFilter] = useState("");

  useEffect(() => {
    const fetchScans = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/scans?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setScans(data.items);
        setTotal(data.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchScans();
  }, [limit, offset]);

  const handleNextPage = () => {
    if (offset + limit < total) {
      setOffset(offset + limit);
    }
  };

  const handlePreviousPage = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  const filteredScans = scans.filter((scan) =>
    scan.hostname.toLowerCase().includes(hostnameFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader
        hostnameFilter={hostnameFilter}
        onHostnameFilterChange={setHostnameFilter}
      />
      <ScanTable scans={filteredScans} isLoading={isLoading} error={error} />
      <PaginationControls
        offset={offset}
        limit={limit}
        total={total}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}

