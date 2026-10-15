"use client"

import React from "react"

export default function FAQ() {
  const faqs = [
    {
      q: "Berapa lama proses pembuatan website hingga online?",
      a: "Rata-rata pengerjaan Paket Terima Beres memerlukan waktu 3 hingga 5 hari kerja setelah materi (foto, teks profil, nomor WA) kami terima lengkap.",
    },
    {
      q: "Apakah saya yang belum paham teknologi bisa mengelolanya?",
      a: "Tentu saja! Kami merancang sistem yang super mudah. Selain itu, kami memberikan pendampingan gratis dan video panduan singkat untuk mengganti harga atau menambah foto produk.",
    },
    {
      q: "Bagaimana perpanjangan domain dan hosting di tahun berikutnya?",
      a: "Biaya perpanjangan tahunan sangat terjangkau (hanya sekitar Rp 400.000 - Rp 500.000/tahun untuk domain .com/.id dan sewa cloud server). Kami akan mengingatkan Anda 30 hari sebelum masa aktif berakhir.",
    },
    {
      q: "Apakah ada garansi jika terjadi error?",
      a: "Pasti! Kami memberikan garansi revisi sampai sesuai dan pendampingan teknis gratis selama 30 hari pertama untuk memastikan website berjalan sempurna tanpa kendala.",
    },
  ]

  return (
    <>
      {/* BEGIN: TestimonialSection */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand font-semibold text-xs tracking-wider uppercase">Apa Kata Mereka?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 mb-12 tracking-tight">
            Cerita sukses dari{" "}
            <span className="font-editorial-italic font-normal text-brand">rekan pengusaha UMKM</span>
          </h2>
          <div className="bg-editorial-surface p-8 sm:p-12 rounded-3xl border border-black/5 relative">
            <div className="text-amber-500 text-base mb-4">★★★★★</div>
            <blockquote className="text-base sm:text-xl text-editorial-black font-medium leading-relaxed mb-6 font-sans">
              &ldquo;Awalnya saya kira bikin website itu ribet dan butuh biaya puluhan juta. Bersama Webtizen, prosesnya
              santai lewat WA, 4 hari kemudian website kopi kami sudah aktif dengan nama domain sendiri. Kredibilitas
              brand langsung naik drastis saat pitching ke investor!&rdquo;
            </blockquote>
            <div>
              <div className="font-bold text-editorial-black text-sm">Dimas Prasetyo</div>
              <div className="text-xs text-editorial-muted">Owner — Kopi Cerita Rasa, Yogyakarta</div>
            </div>
          </div>
        </div>
      </section>
      {/* END: TestimonialSection */}

      {/* BEGIN: FaqSection */}
      <section className="py-24 bg-editorial-surface border-t border-black/5" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand font-semibold text-xs tracking-wider uppercase">Pertanyaan Umum</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-editorial-black mt-2 tracking-tight">
              Semua yang perlu{" "}
              <span className="font-editorial-italic font-normal text-brand">Anda ketahui</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white p-6 rounded-2xl border border-black/5 cursor-pointer"
              >
                <summary className="flex justify-between items-center font-semibold text-sm sm:text-base text-editorial-black list-none">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-brand font-bold text-lg">↓</span>
                </summary>
                <p className="text-xs sm:text-sm text-editorial-muted mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* END: FaqSection */}
    </>
  )
}
