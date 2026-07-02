import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "nguyenducthang5601@gmail.com",
    href: "mailto:nguyenducthang5601@gmail.com",
  },
  {
    icon: Phone,
    label: "Điện thoại",
    value: "0382588943",
    href: "tel:+84382588943",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Đà Nẵng, Việt Nam",
    href: undefined,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "thangnd516",
    href: "https://github.com/thangnd516",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nguyenducthang",
    href: "https://www.linkedin.com/in/nguy%E1%BB%85n-th%E1%BA%AFng-85b21533a/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="section-label">-- 05 / liên hệ</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Cùng trao đổi công việc
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink-soft sm:text-base">
          Đang tìm cơ hội hợp tác hoặc có dự án cần trao đổi? Liên hệ theo
          thông tin bên dưới.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <div className="rounded-xl border border-line bg-ink p-6 shadow-[0_16px_40px_-20px_rgba(15,42,67,0.5)] sm:p-8">
            <p className="font-mono text-xs text-accent-soft/70">
              -- query
            </p>
            <pre className="mt-3 overflow-x-auto font-mono text-[13px] leading-relaxed text-accent-soft sm:text-sm">
{`SELECT contact
FROM   nguyen_duc_thang
WHERE  status     = 'sẵn sàng nhận việc'
  AND  interest   = 'hợp tác dài hạn / dự án mới'
ORDER  BY phan_hoi ASC;`}
            </pre>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6 shadow-[0_12px_32px_-20px_rgba(15,42,67,0.25)] sm:p-8">
            <ul className="space-y-4">
              {items.map((it) => {
                const Icon = it.icon;
                const content = (
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-primary-dark">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs text-ink-faint">{it.label}</p>
                      <p className="text-sm font-medium text-ink">
                        {it.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={it.label}>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="block rounded-md transition-colors hover:bg-bg-alt"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
