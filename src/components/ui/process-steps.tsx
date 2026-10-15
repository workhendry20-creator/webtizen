"use client"

import * as React from "react"
import { MessageSquare, FolderUp, Code2, Rocket } from "lucide-react"

const STEPS = [
  {
    step: "01",
    title: "Konsultasi via WA",
    description:
      "Diskusikan kebutuhan, referensi tampilan, dan paket yang cocok untuk bisnis Anda.",
    icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
  },
  {
    step: "02",
    title: "Kirim Bahan & Konten",
    description:
      "Kirimkan logo, foto produk, katalog, atau informasi profil bisnis yang ingin ditampilkan.",
    icon: <FolderUp className="h-6 w-6 text-emerald-600" />,
  },
  {
    step: "03",
    title: "Pengerjaan & Revisi",
    description:
      "Tim Webtizen merakit website Anda dalam 3-5 hari kerja dengan kesempatan revisi.",
    icon: <Code2 className="h-6 w-6 text-emerald-600" />,
  },
  {
    step: "04",
    title: "Website Launching",
    description:
      "Website resmi online dengan domain Anda, terhubung ke WhatsApp, dan siap mendatangkan pelanggan.",
    icon: <Rocket className="h-6 w-6 text-emerald-600" />,
  },
]

export default function ProcessSteps() {
  return (
    <section id="layanan" className="py-20 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
            Alur Pengerjaan Praktis
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            4 Langkah Mudah Memiliki Website Profesional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tanpa pusing coding dan setup teknis. Kami kerjakan dari awal hingga website Anda siap online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 transition-all hover:bg-white hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/80">
                  {item.icon}
                </div>
                <span className="text-2xl font-black text-slate-300">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
