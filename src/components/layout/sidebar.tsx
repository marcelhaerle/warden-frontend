import {
  ChartNoAxesColumn,
  ChevronRight,
  CircleDashed,
  Search,
  Server,
  ShieldCheck,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="section-band section-band-navy rise-in hidden w-72 px-5 py-6 lg:block">
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-700/50 text-slate-300">
          <ShieldCheck size={20} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Warden</p>
          <p className="text-sm font-semibold text-slate-100">Security Ops</p>
        </div>
      </div>

      <nav className="space-y-1.5 text-sm text-slate-300">
        <a
          className="flex items-center justify-between rounded-md bg-slate-200/5 px-3 py-2"
          href="#"
        >
          <span className="flex items-center gap-2">
            <ChartNoAxesColumn size={16} />
            Dashboard
          </span>
          <ChevronRight size={14} />
        </a>
        <a
          className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100/5"
          href="#"
        >
          <CircleDashed size={16} />
          Scan History
        </a>
        <a
          className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100/5"
          href="#"
        >
          <Search size={16} />
          JSONB Search
        </a>
        <a
          className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100/5"
          href="#"
        >
          <Server size={16} />
          Hosts
        </a>
      </nav>

      <div className="mt-8 border-t border-slate-700 pt-4 text-xs text-slate-400">
        <p className="mb-2 font-mono text-slate-500">status / live-link</p>
        <div className="flex items-center gap-2">
          <span className="signal-dot h-2 w-2 rounded-full bg-green-500" />
          API connection healthy
        </div>
      </div>
    </aside>
  );
}
