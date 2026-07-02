import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Đức Thắng — Software Developer",
  description:
    "Portfolio của Nguyễn Đức Thắng, Software Developer chuyên Next.js, React, Java và hệ thống dữ liệu (SQL Server, MySQL, Supabase).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
