import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Webtizen.id — Jasa Pembuatan Website & Solusi Digital UMKM",
  description:
    "Bantu UMKM Naik Kelas Lewat Website Profesional. Jasa pembuatan website cepat, terjangkau, dan tanpa ribet di Indonesia.",
  keywords: [
    "jasa pembuatan website",
    "website UMKM",
    "web developer indonesia",
    "website murah",
    "solusi digital UMKM",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  )
}
