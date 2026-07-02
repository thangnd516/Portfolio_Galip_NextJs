type Entry = {
  period: string;
  role: string;
  org: string;
  desc: string;
};

const entries: Entry[] = [
 {
    period: "Tháng 01/2026 — Hiện tại",
    role: "Kỹ thuật viên",
    org: "Công ty Thiện Long Nha Trang",
    desc: "Đóng vai trò chủ chốt trong lộ trình chuyển đổi số của doanh nghiệp. Trực tiếp nghiên cứu và triển khai các giải pháp tích hợp AI nhằm tối ưu hóa quy trình vận hành, nâng cao hiệu suất làm việc và phân tích dữ liệu kinh doanh."
  },
  {
    period: "Tháng 12/2023 — Tháng 12/2025",
    role: "Software Engineer",
    org: "AvePoint",
    desc: "Phát triển và duy trì các hệ thống phần mềm, vận dụng tư duy phản biện (Critical Thinking) để giải quyết các vấn đề kỹ thuật phức tạp trên nền tảng Gitlab."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="section-label">-- 02 / kinh nghiệm</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Quá trình làm việc
        </h2>

        <ol className="mt-12 space-y-10 border-l border-line pl-8">
          {entries.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-surface font-mono text-[11px] font-semibold text-primary-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                {e.period}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                {e.role}
              </h3>
              <p className="text-sm text-ink-faint">{e.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {e.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
