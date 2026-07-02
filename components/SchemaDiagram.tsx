"use client";

type NodeDef = {
  label: string;
  tag: string;
  items: string[];
  style: string; // tailwind position classes
};

const nodes: NodeDef[] = [
  {
    label: "frontend",
    tag: "client",
    items: ["Next.js", "React.js"],
    style: "left-[3%] top-[7%] w-[33%]",
  },
  {
    label: "backend",
    tag: "server",
    items: ["Java"],
    style: "left-[64%] top-[7%] w-[33%]",
  },
  {
    label: "data_layer",
    tag: "storage",
    items: ["SQL Server", "MySQL", "Supabase"],
    style: "left-[34%] top-[76%] w-[33%]",
  },
];

export default function SchemaDiagram() {
  return (
    <div className="relative w-full" style={{ paddingTop: "82.14%" }}>
      <div className="absolute inset-0">
        {/* connecting lines */}
        <svg
          viewBox="0 0 560 460"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M280,222 Q193,150 108,100"
            fill="none"
            stroke="#8FC1E3"
            strokeWidth="2"
          />
          <path
            d="M280,222 Q193,150 108,100"
            fill="none"
            stroke="#2E6BA6"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow"
          />
          <path
            d="M280,222 Q367,150 452,100"
            fill="none"
            stroke="#8FC1E3"
            strokeWidth="2"
          />
          <path
            d="M280,222 Q367,150 452,100"
            fill="none"
            stroke="#2E6BA6"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow"
          />
          <path
            d="M280,222 L280,352"
            fill="none"
            stroke="#8FC1E3"
            strokeWidth="2"
          />
          <path
            d="M280,222 L280,352"
            fill="none"
            stroke="#2E6BA6"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow"
          />

          <circle cx="280" cy="222" r="5" fill="#1F4E7A" />
          <circle
            cx="280"
            cy="222"
            r="4"
            fill="#2E6BA6"
            className="animate-pulse-soft"
          />
          <circle cx="108" cy="100" r="3.5" fill="#2E6BA6" />
          <circle cx="452" cy="100" r="3.5" fill="#2E6BA6" />
          <circle cx="280" cy="352" r="3.5" fill="#2E6BA6" />
        </svg>

        {/* center node */}
        <div className="absolute left-[34%] top-[41%] w-[32%] rounded-lg border border-primary bg-primary-dark px-3 py-2.5 text-center shadow-[0_10px_30px_-12px_rgba(31,78,122,0.55)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-soft">
            full_stack_system
          </p>
          <p className="mt-0.5 font-display text-xs font-semibold text-white sm:text-sm">
            Nguyễn Đức Thắng
          </p>
        </div>

        {/* satellite nodes */}
        {nodes.map((n) => (
          <div
            key={n.label}
            className={`absolute ${n.style} rounded-lg border border-line bg-surface px-3 py-2.5 shadow-[0_8px_24px_-14px_rgba(15,42,67,0.35)]`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {n.tag}::{n.label}
            </p>
            <ul className="mt-1 space-y-0.5">
              {n.items.map((it) => (
                <li
                  key={it}
                  className="font-mono text-[11px] text-ink-soft sm:text-xs"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
