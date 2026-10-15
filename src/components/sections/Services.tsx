import React from "react"

export default function Services() {
  return (
    <>
      {/* BEGIN: ValueProposition */}
      <section className="py-24 bg-editorial-surface border-y border-black/5" id="tentang">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand font-semibold text-xs tracking-wider uppercase">Mengapa Webtizen.id?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 tracking-tight">
              Kami urus teknisnya,{" "}
              <span className="font-editorial-italic font-normal text-brand">Anda fokus jualan</span>
            </h2>
            <p className="text-editorial-muted text-sm sm:text-base mt-3">
              Banyak pengusaha ragu bikin website karena takut ribet, mahal, dan tidak paham domain/hosting. Di sini,
              semua serba transparan dan terima beres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xs hover:border-brand/40 transition">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center text-xl mb-6 font-bold">
                ⚡
              </div>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Cepat &amp; Mobile-First</h3>
              <p className="text-editorial-muted text-sm leading-relaxed">
                Website dimuat kilat di smartphone calon pembeli. 90% transaksi UMKM terjadi via ponsel, kami pastikan
                tampilan mulus tanpa lag.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xs hover:border-brand/40 transition">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center text-xl mb-6 font-bold">
                💬
              </div>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Pesan Cepat ke WhatsApp</h3>
              <p className="text-editorial-muted text-sm leading-relaxed">
                Tombol pesan langsung terkoneksi ke WhatsApp admin Anda dengan format template pesan otomatis yang rapi dan
                terukur.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xs hover:border-brand/40 transition">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center text-xl mb-6 font-bold">
                🔒
              </div>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Terima Beres &amp; Bergaransi</h3>
              <p className="text-editorial-muted text-sm leading-relaxed">
                Sudah termasuk gratis domain .com atau .id, hosting berkecepatan tinggi, integrasi Google Maps, serta
                garansi revisi sampai puas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: ValueProposition */}

      {/* BEGIN: IndustrySolutions */}
      <section className="py-24 bg-white" id="layanan">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand font-semibold text-xs tracking-wider uppercase">Spesialisasi Sektor</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 tracking-tight">
                Dibuat sesuai kebutuhan{" "}
                <span className="font-editorial-italic font-normal text-brand">karakter bisnis Anda</span>
              </h2>
            </div>
            <p className="text-editorial-muted text-sm max-w-md">
              Setiap industri memiliki alur penjualan berbeda. Desain kami disesuaikan untuk menghasilkan tingkat closing
              tertinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: F&B */}
            <div className="p-6 rounded-2xl border border-black/5 hover:border-brand/40 bg-editorial-surface/40 hover:bg-brand-light/30 transition">
              <span className="text-3xl block mb-4">🍽️</span>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Kuliner &amp; F&amp;B</h3>
              <p className="text-editorial-muted text-xs leading-relaxed mb-4">
                Menu digital, foto makanan menggugah selera, reservasi meja, dan pemesanan katering online.
              </p>
              <span className="inline-block px-2.5 py-1 rounded bg-black/5 text-[11px] font-medium text-editorial-charcoal">
                Menu + Reservasi
              </span>
            </div>

            {/* Card 2: Fashion & Retail */}
            <div className="p-6 rounded-2xl border border-black/5 hover:border-brand/40 bg-editorial-surface/40 hover:bg-brand-light/30 transition">
              <span className="text-3xl block mb-4">👗</span>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Fashion &amp; Retail</h3>
              <p className="text-editorial-muted text-xs leading-relaxed mb-4">
                Katalog lookbook elegan untuk butik, hijab, distro, dan kerajinan lokal khas nusantara.
              </p>
              <span className="inline-block px-2.5 py-1 rounded bg-black/5 text-[11px] font-medium text-editorial-charcoal">
                Katalog Produk Modern
              </span>
            </div>

            {/* Card 3: Servis & Jasa Lokal */}
            <div className="p-6 rounded-2xl border border-black/5 hover:border-brand/40 bg-editorial-surface/40 hover:bg-brand-light/30 transition">
              <span className="text-3xl block mb-4">🛠️</span>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Jasa &amp; Servis Lokal</h3>
              <p className="text-editorial-muted text-xs leading-relaxed mb-4">
                Bengkel, klinik, salon, interior design, dan kontraktor dengan fitur janji temu serta Google Maps.
              </p>
              <span className="inline-block px-2.5 py-1 rounded bg-black/5 text-[11px] font-medium text-editorial-charcoal">
                Peta + Jadwal Kunjungan
              </span>
            </div>

            {/* Card 4: Toko Online UMKM */}
            <div className="p-6 rounded-2xl border border-black/5 hover:border-brand/40 bg-editorial-surface/40 hover:bg-brand-light/30 transition">
              <span className="text-3xl block mb-4">🛍️</span>
              <h3 className="font-bold text-lg text-editorial-black mb-2">Katalog WhatsApp</h3>
              <p className="text-editorial-muted text-xs leading-relaxed mb-4">
                Calon pembeli memilih varian dan total belanja langsung terkirim rapi ke WhatsApp toko.
              </p>
              <span className="inline-block px-2.5 py-1 rounded bg-black/5 text-[11px] font-medium text-editorial-charcoal">
                Instant Checkout WA
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END: IndustrySolutions */}

      {/* BEGIN: WorkflowSection */}
      <section className="py-24 bg-editorial-surface border-t border-black/5" id="alur-kerja">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand font-semibold text-xs tracking-wider uppercase">Langkah Mudah</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 tracking-tight">
              Website siap tayang dalam{" "}
              <span className="font-editorial-italic font-normal text-brand">4 langkah santai</span>
            </h2>
            <p className="text-editorial-muted text-sm mt-3">
              Tidak perlu keahlian teknis sedikitpun. Kami memandu langkah demi langkah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative bg-white p-6 rounded-2xl border border-black/5">
              <span className="text-4xl font-bold text-brand/20 mb-3 block">01</span>
              <h3 className="font-bold text-base text-editorial-black mb-1">Konsultasi WA</h3>
              <p className="text-editorial-muted text-xs leading-relaxed">
                Diskusikan nama domain yang diinginkan dan tipe bisnis Anda bersama tim Webtizen.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-6 rounded-2xl border border-black/5">
              <span className="text-4xl font-bold text-brand/20 mb-3 block">02</span>
              <h3 className="font-bold text-base text-editorial-black mb-1">Kirim Materi</h3>
              <p className="text-editorial-muted text-xs leading-relaxed">
                Cukup kirimkan logo, foto produk/toko, serta nomor WhatsApp kontak yang ingin dipasang.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-6 rounded-2xl border border-black/5">
              <span className="text-4xl font-bold text-brand/20 mb-3 block">03</span>
              <h3 className="font-bold text-base text-editorial-black mb-1">Desain &amp; Coding</h3>
              <p className="text-editorial-muted text-xs leading-relaxed">
                Tim kami meracik website yang responsif, cepat, dan teroptimasi SEO lokal Google.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white p-6 rounded-2xl border border-black/5">
              <span className="text-4xl font-bold text-brand mb-3 block">04</span>
              <h3 className="font-bold text-base text-editorial-black mb-1">Go Live!</h3>
              <p className="text-editorial-muted text-xs leading-relaxed">
                Website resmi online dengan domain Anda sendiri dan siap dibagikan ke calon pembeli.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: WorkflowSection */}
    </>
  )
}
