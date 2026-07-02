const facts = [
  { k: "vị trí", v: "Đà Nẵng, Việt Nam" },
  { k: "kinh nghiệm", v: "điền số năm kinh nghiệm" },
  { k: "hình thức", v: "Full-time / Freelance" },
  { k: "ngôn ngữ", v: "Tiếng Việt, Tiếng Anh" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-bg-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div>
          <p className="section-label">-- 01 / giới thiệu</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Về tôi
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            <p>
              Tôi là lập trình viên full-stack, tập trung vào việc xây dựng
              sản phẩm hoàn chỉnh: từ giao diện mượt mà trên{" "}
              <strong className="font-medium text-ink">Next.js</strong> /{" "}
              <strong className="font-medium text-ink">React.js</strong>, xử
              lý nghiệp vụ với{" "}
              <strong className="font-medium text-ink">Java</strong> và{" "}
              <strong className="font-medium text-ink">Node.js</strong>, đến
              thiết kế và vận hành cơ sở dữ liệu với{" "}
              <strong className="font-medium text-ink">SQL Server</strong>,{" "}
              <strong className="font-medium text-ink">MySQL</strong> và{" "}
              <strong className="font-medium text-ink">Supabase</strong>.
            </p>
            <p className="editable inline-block font-mono text-sm text-ink-faint">
              [ Điền đoạn giới thiệu chi tiết hơn về hành trình, thế mạnh và
              định hướng nghề nghiệp của bạn tại đây — components/About.tsx ]
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-6 shadow-[0_12px_32px_-20px_rgba(15,42,67,0.25)]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
            profile.json
          </p>
          <dl className="mt-4 divide-y divide-line">
            {facts.map((f) => (
              <div
                key={f.k}
                className="flex items-center justify-between gap-4 py-3"
              >
                <dt className="font-mono text-xs text-ink-faint">"{f.k}"</dt>
                <dd className="text-right text-sm font-medium text-ink">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
