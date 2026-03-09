import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  LayoutTemplate,
  Settings,
  Moon,
  Plus,
  CheckCircle,
  Clock,
  BarChart3,
  ArrowRight,
} from "lucide-react";

// -------------------------------------------------------------------
// AppScreenshot – a purely decorative, hardcoded mockup of the Befaro
// dashboard. No data-fetching, no auth, no interactivity.
// -------------------------------------------------------------------

function SidebarNavItem({
  icon: Icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[11px] font-medium transition-none ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-transparent"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="truncate">{label}</span>
      {badge && (
        <span className="ml-auto rounded-full bg-gray-100 px-1.5 py-0.5 text-[9px] font-medium text-gray-500">
          {badge}
        </span>
      )}
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconBg,
  children,
}: {
  title: string;
  value?: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-[10px] font-medium text-gray-500">{title}</p>
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon className="h-3.5 w-3.5 text-white" />
        </div>
      </div>
      {value && (
        <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
          {value}
        </p>
      )}
      {children}
      <p className="mt-1 text-[9px] text-gray-400">{description}</p>
    </div>
  );
}

function TGBadge({ tg, count }: { tg: string; count: number }) {
  const colors: Record<string, string> = {
    TG0: "bg-emerald-100 text-emerald-700",
    TG1: "bg-green-100 text-green-700",
    TG2: "bg-amber-100 text-amber-700",
    TG3: "bg-red-100 text-red-700",
    TGIU: "bg-slate-100 text-slate-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded px-1 py-0.5 text-[8px] font-semibold ${colors[tg] ?? "bg-gray-100 text-gray-600"}`}
    >
      {tg}({count})
    </span>
  );
}

function StatusBadge({
  status,
}: {
  status: "Ferdig" | "Under arbeid" | "Utkast";
}) {
  const styles: Record<string, string> = {
    Ferdig: "bg-green-100 text-green-700",
    "Under arbeid": "bg-amber-100 text-amber-700",
    Utkast: "bg-gray-100 text-gray-500",
  };
  return (
    <span
      className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[8px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex h-5 w-7 items-center justify-center rounded bg-blue-100 text-[9px] font-bold text-blue-700">
      {type}
    </span>
  );
}

// Mini bar chart for TG distribution
function TGDistributionChart() {
  const bars = [
    { label: "TG0", height: "30%", color: "bg-emerald-500" },
    { label: "TG1", height: "65%", color: "bg-green-500" },
    { label: "TG2", height: "45%", color: "bg-amber-500" },
    { label: "TG3", height: "20%", color: "bg-red-500" },
    { label: "TGIU", height: "10%", color: "bg-slate-400" },
  ];
  return (
    <div className="mt-2 flex items-end gap-1.5" style={{ height: 40 }}>
      {bars.map((bar) => (
        <div key={bar.label} className="flex flex-1 flex-col items-center gap-0.5">
          <div className="relative w-full" style={{ height: 32 }}>
            <div
              className={`absolute bottom-0 w-full rounded-sm ${bar.color}`}
              style={{ height: bar.height }}
            />
          </div>
          <span className="text-[7px] text-gray-400">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

const reports = [
  {
    type: "TL",
    address: "Storgata 15B",
    city: "Oslo",
    date: "04.03.2026",
    tgs: [
      { tg: "TG1", count: 3 },
      { tg: "TG2", count: 1 },
    ],
    status: "Ferdig" as const,
  },
  {
    type: "VT",
    address: "Bjørkveien 8",
    city: "Bergen",
    date: "02.03.2026",
    tgs: [
      { tg: "TG0", count: 2 },
      { tg: "TG1", count: 4 },
    ],
    status: "Ferdig" as const,
  },
  {
    type: "TL",
    address: "Industriveien 42",
    city: "Trondheim",
    date: "28.02.2026",
    tgs: [
      { tg: "TG1", count: 2 },
      { tg: "TG2", count: 2 },
      { tg: "TG3", count: 1 },
    ],
    status: "Under arbeid" as const,
  },
  {
    type: "FT",
    address: "Havnepromenaden 3",
    city: "Stavanger",
    date: "25.02.2026",
    tgs: [{ tg: "TG1", count: 5 }],
    status: "Utkast" as const,
  },
];

export default function AppScreenshot() {
  return (
    <div className="mx-auto w-full max-w-5xl select-none pointer-events-none">
      {/* Responsive scale wrapper */}
      <div className="origin-top [transform:scale(1)] sm:[transform:scale(1)] md:[transform:scale(1)]">
        {/* Browser chrome */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-sm text-gray-400">Befaro</span>
          </div>

          {/* App body */}
          <div className="flex" style={{ height: 520 }}>
            {/* ---- Sidebar ---- */}
            <aside className="flex w-[200px] shrink-0 flex-col border-r border-gray-200 bg-white">
              {/* Logo */}
              <div className="flex items-center gap-2.5 px-4 pt-4 pb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-[10px] font-bold text-white">
                  BE
                </div>
                <span className="text-[13px] font-semibold text-gray-900">
                  Befaro
                </span>
              </div>

              {/* Nav items */}
              <nav className="mt-1 flex flex-col gap-0.5 px-2">
                <SidebarNavItem
                  icon={LayoutDashboard}
                  label="Dashboard"
                  active
                />
                <SidebarNavItem icon={FileText} label="Rapporter" />
                <SidebarNavItem icon={ClipboardList} label="Befaring" />
                <SidebarNavItem
                  icon={LayoutTemplate}
                  label="Maler"
                  badge="Kommer"
                />
                <SidebarNavItem icon={Settings} label="Innstillinger" />
              </nav>

              <div className="mt-auto">
                {/* Theme toggle */}
                <div className="flex items-center gap-2 px-5 py-2 text-[10px] text-gray-400">
                  <Moon className="h-3.5 w-3.5" />
                  <span>Mørkt tema</span>
                </div>

                {/* User */}
                <div className="flex items-center gap-2.5 border-t border-gray-100 px-4 py-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-700">
                    EJ
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-medium text-gray-900">
                      Erik Johnsen
                    </p>
                    <p className="truncate text-[8px] text-gray-400">
                      erik@takst.no
                    </p>
                  </div>
                </div>

                {/* Branding */}
                <p className="px-4 pb-2 text-center text-[7px] text-gray-300">
                  Laget av attentio
                </p>
              </div>
            </aside>

            {/* ---- Main area ---- */}
            <div className="flex flex-1 flex-col overflow-hidden bg-gray-50/80">
              {/* Header bar */}
              <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
                <h2 className="text-sm font-semibold text-gray-900">
                  Dashboard
                </h2>
                <button className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white">
                  <Plus className="h-3 w-3" />
                  Ny rapport
                </button>
              </header>

              {/* Scrollable content */}
              <div className="flex-1 overflow-hidden px-5 py-4">
                {/* Welcome */}
                <h1 className="text-lg font-bold text-gray-900">God dag</h1>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Her er en oversikt over dine rapporter og aktivitet.
                </p>

                {/* Stats row */}
                <div className="mt-4 grid grid-cols-4 gap-3">
                  <StatCard
                    title="Totalt rapporter"
                    value="24"
                    description="Alle tid"
                    icon={FileText}
                    iconBg="bg-blue-500"
                  />
                  <StatCard
                    title="Ferdigstilt denne måneden"
                    value="8"
                    description="Mars 2026"
                    icon={CheckCircle}
                    iconBg="bg-green-500"
                  />
                  <StatCard
                    title="Under arbeid"
                    value="3"
                    description="Aktive rapporter"
                    icon={Clock}
                    iconBg="bg-amber-500"
                  />
                  <StatCard
                    title="TG-fordeling"
                    description=""
                    icon={BarChart3}
                    iconBg="bg-violet-500"
                  >
                    <TGDistributionChart />
                  </StatCard>
                </div>

                {/* Two-column grid */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {/* Recent reports — 2/3 */}
                  <div className="col-span-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[11px] font-semibold text-gray-900">
                        Siste rapporter
                      </h3>
                      <span className="flex items-center gap-0.5 text-[9px] font-medium text-blue-600">
                        Se alle <ArrowRight className="h-2.5 w-2.5" />
                      </span>
                    </div>

                    <div className="mt-3 flex flex-col divide-y divide-gray-100">
                      {reports.map((r, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 py-2 first:pt-0 last:pb-0"
                        >
                          <TypeBadge type={r.type} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[10px] font-medium text-gray-900">
                              {r.address}
                            </p>
                            <p className="text-[8px] text-gray-400">
                              {r.city} &middot; {r.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {r.tgs.map((t) => (
                              <TGBadge key={t.tg} tg={t.tg} count={t.count} />
                            ))}
                          </div>
                          <StatusBadge status={r.status} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick actions — 1/3 */}
                  <div className="col-span-1 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <h3 className="text-[11px] font-semibold text-gray-900">
                      Hurtighandlinger
                    </h3>
                    <div className="mt-3 flex flex-col gap-2">
                      <div className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-[10px] font-semibold text-white">
                        Ny rapport
                      </div>
                      <div className="flex w-full items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-[10px] font-medium text-gray-700">
                        Fortsett utkast – Industriveien 42
                      </div>
                      <div className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-[10px] font-medium text-gray-500">
                        Se alle rapporter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
