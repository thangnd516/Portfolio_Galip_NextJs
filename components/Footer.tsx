export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-accent-soft/70 sm:flex-row">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Nguyễn Đức Thắng. All rights
          reserved.
        </p>
        <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
