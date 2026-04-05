"use client";

import {
  ChevronRight,
  FileJson,
  History,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/",
    icon: <LayoutGrid size={16} />,
    label: "Dashboard",
  },
  {
    href: "/scans",
    icon: <History size={16} />,
    label: "Scan History",
  },
  {
    href: "/search",
    icon: <FileJson size={16} />,
    label: "JSONB Search",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 flex-col border-r bg-slate-900/95 p-5 lg:flex">
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-700/50 text-slate-300">
          <ShieldCheck size={20} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Warden
          </p>
          <p className="text-sm font-semibold text-slate-100">Security Ops</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5 text-sm text-slate-300">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-between rounded-md px-3 py-2 hover:bg-slate-200/5 ${
              pathname === item.href ? "bg-slate-200/5" : ""
            }`}
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.label}
            </span>
            {pathname === item.href && <ChevronRight size={14} />}
          </Link>
        ))}
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
