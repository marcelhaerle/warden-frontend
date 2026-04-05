import { AlertTriangle } from "lucide-react";

type DistributionBucket = {
  label: string;
  value: number;
  className: string;
};

type AttentionHost = {
  host: string;
  issue: string;
  risk: string;
};

type SecurityInsightsProps = {
  distribution: DistributionBucket[];
  hosts: AttentionHost[];
};

export function SecurityInsights({ distribution, hosts }: SecurityInsightsProps) {
  return (
    <section
      className="section-band section-band-indigo rise-in px-4 py-5 md:px-6"
      style={{ animationDelay: "260ms" }}
    >
      <div className="mb-5 grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-50">Hardening Distribution</h2>
            <span className="border border-slate-300/15 px-2 py-1 text-xs text-slate-300">
              last 24h
            </span>
          </div>

          <div className="space-y-4">
            {distribution.map((bucket) => (
              <div key={bucket.label}>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                  <span>{bucket.label}</span>
                  <span className="font-mono">{bucket.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200/10">
                  <div
                    className={`h-full rounded-full ${bucket.className}`}
                    style={{ width: `${bucket.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200/10 pt-4 xl:border-l xl:border-t-0 xl:pl-5 xl:pt-0">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle size={17} className="text-violet-200" />
            <h2 className="text-lg font-semibold text-slate-50">Attention Required</h2>
          </div>

          <ul className="space-y-3">
            {hosts.map((item) => (
              <li key={item.host} className="border-b border-slate-200/10 pb-3 last:border-b-0 last:pb-0">
                <p className="font-mono text-sm text-slate-100">{item.host}</p>
                <p className="mt-1 text-xs text-slate-300">{item.issue}</p>
                <p className="mt-1 text-xs text-violet-200">Risk: {item.risk}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
