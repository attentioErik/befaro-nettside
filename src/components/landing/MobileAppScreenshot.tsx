import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  Settings,
  Plus,
  CheckCircle,
  Clock,
  Battery,
  Signal,
  Wifi,
} from "lucide-react";

// -------------------------------------------------------------------
// MobileAppScreenshot – a purely decorative, hardcoded phone mockup
// of the Befaro mobile dashboard. No data-fetching, no interactivity.
// -------------------------------------------------------------------

function MobileStatCard({
  title,
  value,
  icon: Icon,
  iconBg,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  iconBg: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-medium text-gray-500">{title}</p>
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon className="h-2.5 w-2.5 text-white" />
        </div>
      </div>
      <p className="mt-1 text-lg font-bold tracking-tight text-gray-900">
        {value}
      </p>
    </div>
  );
}

function MobileStatusBadge({
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
      className={`whitespace-nowrap rounded-full px-1.5 py-0.5 text-[7px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function MobileTypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex h-4 w-6 items-center justify-center rounded bg-blue-100 text-[8px] font-bold text-blue-700">
      {type}
    </span>
  );
}

const reports = [
  {
    type: "TL",
    address: "Storgata 15B",
    city: "Oslo",
    date: "04.03.2026",
    status: "Ferdig" as const,
  },
  {
    type: "VT",
    address: "Bjørkveien 8",
    city: "Bergen",
    date: "02.03.2026",
    status: "Ferdig" as const,
  },
  {
    type: "TL",
    address: "Industriveien 42",
    city: "Trondheim",
    date: "28.02.2026",
    status: "Under arbeid" as const,
  },
];

function BottomNavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-0.5">
      <Icon
        className={`h-4 w-4 ${active ? "text-blue-600" : "text-gray-400"}`}
      />
      <span
        className={`text-[7px] font-medium ${active ? "text-blue-600" : "text-gray-400"}`}
      >
        {label}
      </span>
    </div>
  );
}

export default function MobileAppScreenshot() {
  return (
    <div className="mx-auto max-w-[280px] select-none pointer-events-none">
      {/* Phone body */}
      <div className="relative rounded-[2.5rem] border-[3px] border-gray-800 bg-gray-900 p-1.5 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-b-2xl bg-gray-900" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[2rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-5 pt-3 pb-1">
            <span className="text-[10px] font-semibold text-gray-900">
              09:41
            </span>
            <div className="flex items-center gap-1">
              <Signal className="h-3 w-3 text-gray-900" />
              <Wifi className="h-3 w-3 text-gray-900" />
              <Battery className="h-3 w-3 text-gray-900" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-[8px] font-bold text-white">
                BE
              </div>
              <span className="text-[12px] font-semibold text-gray-900">
                Dashboard
              </span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-[8px] font-semibold text-white">
              <Plus className="h-2.5 w-2.5" />
              Ny rapport
            </div>
          </div>

          {/* Content area */}
          <div className="bg-gray-50/80 px-3 py-3" style={{ height: 380 }}>
            {/* Welcome */}
            <h1 className="text-[13px] font-bold text-gray-900">God dag</h1>
            <p className="mt-0.5 text-[8px] text-gray-500">
              Oversikt over dine rapporter og aktivitet.
            </p>

            {/* Stats row — 3 cards in a row */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              <MobileStatCard
                title="Totalt"
                value="24"
                icon={FileText}
                iconBg="bg-blue-500"
              />
              <MobileStatCard
                title="Ferdig"
                value="8"
                icon={CheckCircle}
                iconBg="bg-green-500"
              />
              <MobileStatCard
                title="Aktive"
                value="3"
                icon={Clock}
                iconBg="bg-amber-500"
              />
            </div>

            {/* Recent reports */}
            <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <h3 className="text-[10px] font-semibold text-gray-900">
                Siste rapporter
              </h3>
              <div className="mt-2 flex flex-col divide-y divide-gray-100">
                {reports.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 py-1.5 first:pt-0 last:pb-0"
                  >
                    <MobileTypeBadge type={r.type} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[9px] font-medium text-gray-900">
                        {r.address}
                      </p>
                      <p className="text-[7px] text-gray-400">
                        {r.city} &middot; {r.date}
                      </p>
                    </div>
                    <MobileStatusBadge status={r.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action button */}
            <div className="mt-3 flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2.5 text-[10px] font-semibold text-white shadow-sm">
              <Plus className="mr-1 h-3 w-3" />
              Ny rapport
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center border-t border-gray-200 bg-white px-2 py-2 pb-4">
            <BottomNavItem icon={LayoutDashboard} label="Dashboard" active />
            <BottomNavItem icon={FileText} label="Rapporter" />
            <BottomNavItem icon={ClipboardList} label="Befaring" />
            <BottomNavItem icon={Settings} label="Innstillinger" />
          </div>
        </div>
      </div>
    </div>
  );
}
