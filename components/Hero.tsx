import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import SchemaDiagram from "./SchemaDiagram";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-bg"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(#D7E4EF 1px, transparent 1px), linear-gradient(90deg, #D7E4EF 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="animate-fade-up">
          <p className="section-label">software developer</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Nguyễn Đức Thắng
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            Xây dựng ứng dụng web full-stack từ giao diện đến tầng dữ liệu —
            chắc tay với{" "}
            <span className="font-medium text-primary-dark">Next.js</span>,{" "}
            <span className="font-medium text-primary-dark">React.js</span>,{" "}
            <span className="font-medium text-primary-dark">Java</span> và hệ
            thống cơ sở dữ liệu quan hệ.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Xem dự án
            </a>
            <a
              href="/cv-nguyen-duc-thang.pdf"
              className="rounded-md border border-primary/40 bg-surface px-5 py-2.5 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-soft"
            >
              Tải CV{" "}
              <span className="editable font-mono text-xs">
                điền-link-cv.pdf
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-ink-faint">
            <a
              href="mailto:example@email.com"
              className="transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/"
              className="transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              className="transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <span className="editable font-mono text-xs text-ink-faint">
              điền link mạng xã hội ở components/Hero.tsx
            </span>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <SchemaDiagram />
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-8 flex w-fit items-center gap-2 text-xs text-ink-faint transition-colors hover:text-primary"
      >
        Cuộn xuống <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
