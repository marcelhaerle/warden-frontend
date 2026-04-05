export function LandingHeader() {
  return (
    <header className="section-band section-band-violet rise-in px-4 py-4 md:px-6 md:py-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.28em] text-indigo-200/70">
            Security Dashboard Preview
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
            Warden Mission Control
          </h1>
        </div>

        <div className="border border-indigo-300/25 bg-indigo-300/10 px-3 py-2 text-sm text-indigo-100">
          <span className="signal-dot mr-2 inline-flex h-2 w-2 rounded-full bg-indigo-300" />
          Live telemetry enabled
        </div>
      </div>
    </header>
  );
}
