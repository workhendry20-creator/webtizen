"use client"

import * as React from "react"
import { Check, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = (paket: string) =>
  `https://wa.me/628XXXXXXXXX?text=Halo%20Webtizen,%20saya%20tertarik%20dengan%20${encodeURIComponent(
    paket
  )}`

export default function ServicePackages() {
  return (
    <section id="harga" className="py-20 sm:py-24 bg-slate-50/60 border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            Paket Pilihan UMKM
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Pilihan Paket Transparan, Tanpa Biaya Tersembunyi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Pilih paket yang paling pas untuk skala usaha Anda. Semua paket siap pakai dan mobile-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Paket 1: Development Only */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
                Punya Domain & Hosting Sendiri
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Paket Development Only
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Solusi ekonomis bagi UMKM yang sudah memiliki domain & server hosting sendiri.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Rp 499.000
                </span>
                <span className="text-sm text-slate-500">/ sekali bayar</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Custom Responsive Layout (Mobile-first)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Integrasi Tombol WhatsApp Direct Lead</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Setup Basic SEO & Google Indexing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Serah Terima Source Code & Panduan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Pengerjaan Cepat 3-4 Hari Kerja</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Button
                asChild
                variant="outline"
                className="w-full border-slate-300 text-slate-800 hover:bg-slate-50 py-5 rounded-xl font-medium"
              >
                <a
                  href={WHATSAPP_URL("Paket Development Only")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pilih Paket Development
                </a>
              </Button>
            </div>
          </div>

          {/* Paket 2: All-in Terima Beres (Highlighted) */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-emerald-500 bg-white p-7 sm:p-9 shadow-lg ring-4 ring-emerald-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                <Star className="h-3.5 w-3.5 fill-current" />
                Paling Diminati (Terima Beres)
              </span>
            </div>

            <div>
              <div className="inline-block rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4 mt-1">
                Solusi Lengkap Tanpa Pusing
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Paket All-in Terima Beres
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Cocok untuk pemilik bisnis yang ingin fokus jualan tanpa repot urusan teknis server.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Rp 899.000
                </span>
                <span className="text-sm text-slate-500">/ all-in tahun pertama</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Gratis Domain</strong> (.com / .id) 1 Tahun Penuh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Gratis High-Speed Cloud Hosting</strong> 1 Tahun
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Custom Premium Responsive Web Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Integrasi WhatsApp + Lokasi Google Maps</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Free Maintenance & Bug Fix 30 Hari</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Gratis Setting Email Bisnis (nama@tokomu.com)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <a
                  href={WHATSAPP_URL("Paket All-in Terima Beres")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Konsultasi Paket All-in</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
