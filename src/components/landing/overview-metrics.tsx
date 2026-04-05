type KpiTone = "ok" | "warning" | "danger";

type Kpi = {
  label: string;
  value: string;
  delta: string;
  tone: KpiTone;
};

const toneClassMap: Record<KpiTone, string> = {
  danger: "text-violet-300",
  warning: "text-indigo-200",
  ok: "text-slate-300",
};

type OverviewMetricsProps = {
  items: Kpi[];
};

export function OverviewMetrics({ items }: OverviewMetricsProps) {
  return (
    <section
      className="section-band section-band-navy rise-in px-4 py-5 md:px-6"
      style={{ animationDelay: "120ms" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-50">Overview</h2>
        <span className="border border-slate-300/15 px-2 py-1 text-xs text-slate-300">
          synced just now
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, idx) => (
          <div
            key={item.label}
            className="border-l border-slate-200/10 pl-3 first:border-l-0 first:pl-0 xl:min-h-[88px]"
            style={{ animationDelay: `${180 + idx * 70}ms` }}
          >
            <p className="text-sm text-slate-300">{item.label}</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-50">{item.value}</p>
            <p className={`mt-1 text-xs ${toneClassMap[item.tone]}`}>{item.delta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
