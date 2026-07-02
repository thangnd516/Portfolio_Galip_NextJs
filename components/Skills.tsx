type Row = { name: string; level: "Thành thạo" | "Tốt" | "Cơ bản" };

type Table = {
  name: string;
  rows: Row[];
};

const tables: Table[] = [
  {
    name: "frontend_stack",
    rows: [
      { name: "Next.js", level: "Thành thạo" },
      { name: "React.js", level: "Thành thạo" },
      { name: "TypeScript", level: "Tốt" },
      { name: "Tailwind CSS", level: "Tốt" },
    ],
  },
  {
    name: "backend_stack",
    rows: [
      { name: "Java", level: "Thành thạo" },
      { name: "Spring Boot", level: "Tốt" },
      { name: "REST API", level: "Tốt" },
      { name: "Node.js", level: "Cơ bản" },
    ],
  },
  {
    name: "data_layer",
    rows: [
      { name: "SQL Server", level: "Thành thạo" },
      { name: "MySQL", level: "Tốt" },
      { name: "Supabase", level: "Tốt" },
      { name: "Thiết kế CSDL", level: "Tốt" },
    ],
  },
  {
    name: "tooling",
    rows: [
      { name: "Git / GitHub", level: "Thành thạo" },
      { name: "Docker", level: "Cơ bản" },
      { name: "Postman", level: "Tốt" },
      { name: "điền công cụ khác", level: "Cơ bản" },
    ],
  },
];

const levelDot: Record<Row["level"], string> = {
  "Thành thạo": "bg-primary",
  Tốt: "bg-accent",
  "Cơ bản": "bg-line",
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="section-label">-- 02 / kỹ năng</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Kỹ năng kỹ thuật
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink-soft sm:text-base">
          Trình bày như một schema cơ sở dữ liệu — mỗi bảng là một nhóm công
          nghệ mà tôi làm việc hằng ngày.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {tables.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_12px_32px_-20px_rgba(15,42,67,0.25)]"
            >
              <div className="border-b border-line bg-bg-alt px-5 py-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-dark">
                  TABLE {t.name}
                </p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="px-5 py-2 font-mono text-[11px] font-normal uppercase tracking-wide text-ink-faint">
                      technology
                    </th>
                    <th className="px-5 py-2 font-mono text-[11px] font-normal uppercase tracking-wide text-ink-faint">
                      proficiency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map((r, i) => (
                    <tr
                      key={r.name}
                      className={i % 2 === 0 ? "bg-surface" : "bg-bg-alt/50"}
                    >
                      <td className="px-5 py-2.5 text-sm text-ink">
                        {r.name}
                      </td>
                      <td className="px-5 py-2.5">
                        <span className="inline-flex items-center gap-2 text-xs text-ink-soft">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${levelDot[r.level]}`}
                          />
                          {r.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
