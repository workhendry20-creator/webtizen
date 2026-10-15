import React from "react"

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden mesh-aura" id="beranda">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Status Tag / Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          Jasa Pembuatan Website Siap Jualan No. #1
        </div>

        {/* Editorial Headline with Serif Italic Accent */}
        <h1 className="hero-heading text-4xl sm:text-6xl md:text-7xl font-bold text-editorial-black max-w-4xl mx-auto mb-7">
          Bantu UMKM naik kelas dengan{" "}
          <span className="font-editorial-italic font-normal text-brand">website profesional</span>
        </h1>

        {/* Subheadline text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-editorial-muted leading-relaxed font-normal mb-10">
          Di Webtizen.id, kami membantu para pelaku usaha &amp; UMKM tampil terpercaya lewat website modern, cepat,
          terima beres, dan langsung siap kebanjiran order via WhatsApp otomatis.
        </p>

        {/* CTA & Social Proof Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Primary Capsule Button */}
          <a
            className="inline-flex items-center gap-3.5 bg-editorial-black hover:bg-brand text-white px-7 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg group"
            href="#harga"
          >
            <span>Mulai Sekarang</span>
            <span className="w-6 h-6 rounded-full bg-white text-editorial-black group-hover:bg-brand-light flex items-center justify-center text-xs font-bold transition">
              ↗
            </span>
          </a>

          {/* Divider on mobile */}
          <div className="hidden sm:block w-px h-8 bg-black/10"></div>

          {/* Customer Avatar Stack + Rating Review */}
          <div className="flex items-center gap-3.5">
            {/* Avatar Stack */}
            <div className="flex -space-x-2.5 overflow-hidden">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-white bg-slate-200 text-xs font-bold text-slate-700">
                AK
              </span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-white bg-emerald-100 text-xs font-bold text-emerald-800">
                SP
              </span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-white bg-amber-100 text-xs font-bold text-amber-800">
                BM
              </span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-white bg-blue-100 text-xs font-bold text-blue-800">
                DR
              </span>
            </div>

            {/* Star Rating & Counter */}
            <div className="text-left">
              <div className="flex items-center text-amber-500 text-sm tracking-tight leading-none mb-1">
                ★★★★★
              </div>
              <p className="text-xs font-medium text-editorial-muted">
                Dipercaya <strong className="text-editorial-black font-semibold">150+ pemilik UMKM</strong> se-Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Client Bar Divider */}
      <div className="mt-20 max-w-6xl mx-auto px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-black/10"></div>
          <span className="flex-shrink mx-4 text-xs tracking-wider uppercase text-editorial-muted/80 font-medium">
            Telah dipercaya oleh berbagai sektor bisnis &amp; UMKM nusantara
          </span>
          <div className="flex-grow border-t border-black/10"></div>
        </div>

        {/* Partner / UMKM Category Ticker Names */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition duration-300 py-4 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-base tracking-tight text-neutral-800">
            <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-xs text-brand font-black">
              ☕
            </span>
            <span>Kopi Cerita Rasa</span>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-base tracking-tight text-neutral-800">
            <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-xs text-brand font-black">
              🌺
            </span>
            <span>Batik Sekar Arum</span>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-base tracking-tight text-neutral-800">
            <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-xs text-brand font-black">
              🔧
            </span>
            <span>Bengkel AutoMitra</span>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-base tracking-tight text-neutral-800">
            <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-xs text-brand font-black">
              ✨
            </span>
            <span>Glow Naturals</span>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-base tracking-tight text-neutral-800 col-span-2 md:col-span-1">
            <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-xs text-brand font-black">
              📦
            </span>
            <span>Toko Berkah Mandiri</span>
          </div>
        </div>
      </div>
    </section>
  )
}
