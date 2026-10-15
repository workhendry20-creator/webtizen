import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Webtizen.id — Solusi Jasa Pembuatan Website Profesional untuk UMKM",
  description:
    "Bantu UMKM naik kelas dengan website profesional. Jasa pembuatan website cepat, terjangkau, terima beres, dan langsung siap kebanjiran order via WhatsApp otomatis.",
  keywords: [
    "jasa pembuatan website",
    "website UMKM",
    "web developer indonesia",
    "website murah",
    "solusi digital UMKM",
    "Webtizen",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="bg-white text-editorial-charcoal font-sans antialiased selection:bg-brand selection:text-white">
        {children}
      </body>
    </html>
  )
}
