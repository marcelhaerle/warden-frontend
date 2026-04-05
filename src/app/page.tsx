import { LandingHeader } from "@/components/landing/header";
import { OverviewMetrics } from "@/components/landing/overview-metrics";
import { SecurityInsights } from "@/components/landing/security-insights";
import { LandingSidebar } from "@/components/landing/sidebar";

const kpis = [
  { label: "Total Hosts", value: "148", delta: "+12 this week", tone: "ok" },
  {
    label: "Failed Scans (24h)",
    value: "7",
    delta: "-2 vs yesterday",
    tone: "warning",
  },
  {
    label: "Avg. Hardening Index",
    value: "84",
    delta: "+4 this month",
    tone: "ok",
  },
  {
    label: "Action Required",
    value: "11",
    delta: "3 high priority",
    tone: "danger",
  },
];

const dist = [
  { label: "Danger", value: 14, className: "bg-violet-500" },
  { label: "Medium", value: 41, className: "bg-indigo-400" },
  { label: "Secure", value: 93, className: "bg-slate-300" },
];

const attentionHosts = [
  { host: "auth-gateway-01", issue: "Root login exposed", risk: "Critical" },
  { host: "db-cluster-node-03", issue: "Outdated OpenSSH", risk: "High" },
  { host: "edge-vpn-eu-02", issue: "Weak cipher enabled", risk: "Medium" },
  { host: "build-runner-04", issue: "Kernel parameter mismatch", risk: "High" },
];

export default function Home() {
  return (
    <main className="shell-grid min-h-screen px-4 py-5 md:px-7 md:py-7">
      <div className="mx-auto flex w-full max-w-7xl gap-5">
        <LandingSidebar />

        <section className="flex min-w-0 flex-1 flex-col gap-5">
          <LandingHeader />
          <OverviewMetrics items={kpis} />
          <SecurityInsights distribution={dist} hosts={attentionHosts} />
        </section>
      </div>
    </main>
  );
}
