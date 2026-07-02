import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  liveHref: string;
  codeHref: string;
};

const projects: Project[] = [
  {
    id: "proj_01",
    title: "[Điền tên dự án 1]",
    summary:
      "[Điền mô tả ngắn: dự án làm gì, giải quyết vấn đề gì, vai trò của bạn trong dự án]",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    liveHref: "#",
    codeHref: "#",
  },
  {
    id: "proj_02",
    title: "[Điền tên dự án 2]",
    summary:
      "[Điền mô tả ngắn: dự án làm gì, giải quyết vấn đề gì, vai trò của bạn trong dự án]",
    tags: ["React.js", "Java", "SQL Server"],
    liveHref: "#",
    codeHref: "#",
  },
  {
    id: "proj_03",
    title: "[Điền tên dự án 3]",
    summary:
      "[Điền mô tả ngắn: dự án làm gì, giải quyết vấn đề gì, vai trò của bạn trong dự án]",
    tags: ["Next.js", "Java", "MySQL"],
    liveHref: "#",
    codeHref: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="section-label">-- 03 / dự án</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Dự án nổi bật
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink-soft sm:text-base">
          Thay thế nội dung mẫu bên dưới bằng các dự án thật của bạn tại{" "}
          <code className="font-mono text-primary-dark">
            components/Projects.tsx
          </code>
          .
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[0_12px_32px_-20px_rgba(15,42,67,0.25)] transition-transform hover:-translate-y-1"
            >
              <div className="relative flex h-40 items-center justify-center border-b border-line bg-gradient-to-br from-accent-soft to-bg-alt">
                <span className="font-mono text-xs text-ink-faint">
                  [ Ảnh chụp màn hình dự án ]
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                  {p.id}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {p.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-bg-alt px-2.5 py-0.5 font-mono text-[10.5px] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
                  <a
                    href={p.liveHref}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-dark transition-colors hover:text-primary"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a
                    href={p.codeHref}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition-colors hover:text-primary"
                  >
                    <Github size={14} /> Mã nguồn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
