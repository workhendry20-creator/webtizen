import React from "react"

export default function Pricing() {
  return (
    <>
      {/* BEGIN: PricingSection */}
      <section className="py-24 bg-white" id="harga">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand font-semibold text-xs tracking-wider uppercase">Investasi Transparan</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 tracking-tight">
              Pilihan paket website{" "}
              <span className="font-editorial-italic font-normal text-brand">tanpa biaya tersembunyi</span>
            </h2>
            <p className="text-editorial-muted text-sm mt-3">
              Cocok untuk UMKM rintisan hingga bisnis yang ingin scale up secara profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Dev Only */}
            <div className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-editorial-muted">
                    Paket Starter
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-black/5 rounded-full text-editorial-charcoal font-medium">
                    Bawa Hosting Sendiri
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-sm font-semibold text-editorial-muted align-top">Rp</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-editorial-black tracking-tight">
                    799.000
                  </span>
                  <span className="text-xs text-editorial-muted block mt-1">
                    Biaya satu kali bayar (Development Only)
                  </span>
                </div>
                <ul className="space-y-3.5 text-sm text-editorial-charcoal border-t border-black/5 pt-6 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-brand text-sm font-bold">✓</span>
                    <span>Landing Page Responsif (1 Halaman Lengkap)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand text-sm font-bold">✓</span>
                    <span>Integrasi WhatsApp Chat Button</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand text-sm font-bold">✓</span>
                    <span>Integrasi Lokasi Google Maps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand text-sm font-bold">✓</span>
                    <span>Mobile Friendly 100%</span>
                  </li>
                  <li className="flex items-center gap-3 text-editorial-muted">
                    <span className="text-neutral-400">✕</span>
                    <span>Domain &amp; Hosting disiapkan klien</span>
                  </li>
                </ul>
              </div>
              <a
                className="w-full text-center py-3.5 px-6 rounded-full border border-editorial-black hover:bg-editorial-black hover:text-white transition font-medium text-sm"
                href="https://wa.me/6281234567890?text=Halo%20Webtizen,%20saya%20tertarik%20dengan%20Paket%20Starter"
              >
                Pilih Paket Starter
              </a>
            </div>

            {/* Card 2: Terima Beres (Featured) */}
            <div className="p-8 sm:p-10 rounded-3xl border-2 border-brand bg-brand-light/30 flex flex-col justify-between relative shadow-lg">
              {/* Top Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                ★ Paling Populer &amp; Praktis
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand">Paket Terima Beres</span>
                  <span className="text-xs px-2.5 py-1 bg-brand/10 text-brand font-medium rounded-full">All-in-One</span>
                </div>
                <div className="mb-6">
                  <span className="text-sm font-semibold text-editorial-muted align-top">Rp</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-editorial-black tracking-tight">
                    1.499.000
                  </span>
                  <span className="text-xs text-editorial-muted block mt-1">
                    Lengkap tinggal terima jadi &amp; siap pakai
                  </span>
                </div>
                <ul className="space-y-3.5 text-sm text-editorial-charcoal border-t border-brand/20 pt-6 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-brand font-bold">✓</span>
                    <strong className="font-medium">Gratis Domain .com / .id (1 Tahun)</strong>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand font-bold">✓</span>
                    <strong className="font-medium">High Speed Cloud Hosting SSD/NVMe (1 Tahun)</strong>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand font-bold">✓</span>
                    <span>Landing Page Modern + Form WhatsApp Otomatis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand font-bold">✓</span>
                    <span>Gratis SSL Security Certificate (HTTPS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand font-bold">✓</span>
                    <span>Input hingga 15 Produk / Layanan Pertama</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand font-bold">✓</span>
                    <span>Garansi Teknis &amp; Maintenance 30 Hari Penuh</span>
                  </li>
                </ul>
              </div>
              <a
                className="w-full text-center py-3.5 px-6 rounded-full bg-editorial-black hover:bg-brand text-white transition font-medium text-sm shadow-md"
                href="https://wa.me/6281234567890?text=Halo%20Webtizen,%20saya%20ingin%20ambil%20Paket%20Terima%20Beres%20Rp1.499.000"
              >
                Ambil Paket Terima Beres ↗
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-editorial-muted mt-8">
            Butuh kustomisasi e-commerce berskala besar atau fitur khusus?{" "}
            <a className="text-brand underline font-medium" href="https://wa.me/6281234567890">
              Konsultasikan kebutuhan kustom Anda di sini
            </a>
            .
          </p>
        </div>
      </section>
      {/* END: PricingSection */}

      {/* BEGIN: ShowcasePortofolio */}
      <section className="py-24 bg-editorial-surface border-t border-black/5" id="portofolio">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-brand font-semibold text-xs tracking-wider uppercase">Hasil Karya Nyata</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 tracking-tight">
              Etalase website{" "}
              <span className="font-editorial-italic font-normal text-brand">klien Webtizen.id</span>
            </h2>
            <p className="text-editorial-muted text-sm mt-3">
              Tampilan profesional yang membuat calon customer makin yakin bertransaksi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs group">
              <div className="h-48 bg-gradient-to-tr from-amber-50 to-amber-100 flex items-center justify-center p-6 border-b border-black/5">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">☕</span>
                  <span className="font-bold text-stone-800 text-lg">Kopi Cerita Rasa</span>
                  <span className="text-xs text-stone-500 block">Katalog Menu &amp; Delivery</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand tracking-wider uppercase">
                  F&amp;B / Coffee Roastery
                </span>
                <h3 className="font-bold text-base text-editorial-black mt-1">Website Pemesanan Kopi &amp; Reservasi</h3>
                <p className="text-editorial-muted text-xs mt-2 leading-relaxed">
                  Kenaikan pesanan take-away via WhatsApp mencapai 65% dalam 2 bulan pertama setelah peluncuran.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs group">
              <div className="h-48 bg-gradient-to-tr from-emerald-50 to-teal-100 flex items-center justify-center p-6 border-b border-black/5">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">🌿</span>
                  <span className="font-bold text-stone-800 text-lg">Sekar Arum Batik</span>
                  <span className="text-xs text-stone-500 block">Lookbook &amp; WhatsApp Order</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand tracking-wider uppercase">Fashion UMKM</span>
                <h3 className="font-bold text-base text-editorial-black mt-1">Galeri Motif &amp; Katalog Produk Kain</h3>
                <p className="text-editorial-muted text-xs mt-2 leading-relaxed">
                  Tampil percaya diri saat menjangkau reseller luar pulau dengan profil bisnis yang rapi dan kredibel.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs group">
              <div className="h-48 bg-gradient-to-tr from-slate-100 to-zinc-200 flex items-center justify-center p-6 border-b border-black/5">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">🚘</span>
                  <span className="font-bold text-stone-800 text-lg">AutoMitra Service</span>
                  <span className="text-xs text-stone-500 block">Booking Jadwal Servis</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand tracking-wider uppercase">Jasa &amp; Servis</span>
                <h3 className="font-bold text-base text-editorial-black mt-1">Sistem Booking Servis Mobil Ringkas</h3>
                <p className="text-editorial-muted text-xs mt-2 leading-relaxed">
                  Antrean bengkel lebih teratur dengan fitur booking hari dan integrasi rute Google Maps instan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: ShowcasePortofolio */}
    </>
  )
}
