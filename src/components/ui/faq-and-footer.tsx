"use client"

import * as React from "react"
import Link from "next/link"
import { MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const FAQS = [
  {
    q: "Berapa lama waktu pengerjaan website?",
    a: "Estimasi pengerjaan normal adalah 3 sampai 5 hari kerja setelah bahan konten (foto, teks, logo) kami terima lengkap.",
  },
  {
    q: "Apakah saya perlu beli domain dan hosting sendiri?",
    a: "Jika Anda memilih Paket All-in Terima Beres, domain (.com / .id) dan high-speed cloud hosting sudah kami sediakan gratis untuk 1 tahun pertama.",
  },
  {
    q: "Apakah websitenya bisa dibuka dengan rapi di HP/smartphone?",
    a: "Pasti! Kami menerapkan standar desain Mobile-First. Website Anda dijamin responsif, cepat diakses, dan nyaman dibaca di smartphone, tablet, maupun laptop.",
  },
  {
    q: "Bagaimana jika ada error atau kendala setelah website jadi?",
    a: "Kami menyediakan garansi gratis maintenance dan perbaikan bug selama 30 hari kalender setelah website resmi online.",
  },
]

const WHATSAPP_URL =
  "https://wa.me/628XXXXXXXXX?text=Halo%20Webtizen,%20saya%20mau%20konsultasi%20pembuatan%20website"

export default function FaqAndFooter() {
  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
              Tanya Jawab
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Punya pertanyaan lain? Jangan ragu hubungi kami via WhatsApp langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA Box */}
          <div className="mt-14 rounded-3xl bg-slate-900 px-6 py-10 sm:px-12 sm:py-14 text-center text-white relative overflow-hidden shadow-xl">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
              aria-hidden="true"
            />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Siap Bikin Website Usaha Anda Lebih Menjual?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300">
              Konsultasikan ide dan kebutuhan website Anda gratis tanpa komitmen sekarang juga.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat Tim Webtizen via WA</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 text-slate-600 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900">
              Webtizen<span className="text-emerald-500">.id</span>
            </span>
            <span className="text-xs text-slate-400">
              • Solusi Digital UMKM Naik Kelas
            </span>
          </div>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            &copy; 2026 Webtizen.id. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </footer>
    </>
  )
}
