import React from "react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

export default function Footer() {
  return (
    <>
      {/* BEGIN: FinalCta */}
      <section className="py-24 bg-white relative overflow-hidden mesh-aura">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-editorial-black tracking-tight mb-4">
            Siap miliki website yang bikin <br className="hidden sm:inline" />
            <span className="font-editorial-italic font-normal text-brand">bisnis Anda tampil beda?</span>
          </h2>
          <p className="text-editorial-muted text-sm sm:text-base max-w-xl mx-auto mb-8">
            Konsultasikan ide bisnis Anda tanpa dipungut biaya. Kami bantu temukan solusi website yang paling pas dengan
            budget Anda.
          </p>
          <a
            className="inline-flex items-center gap-3 bg-editorial-black hover:bg-brand text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg group"
            href="https://wa.me/6281234567890?text=Halo%20Webtizen,%20saya%20siap%20bikin%20website%20untuk%20usaha%20saya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Chat WhatsApp Sekarang</span>
            <span className="w-6 h-6 rounded-full bg-white text-editorial-black group-hover:bg-brand-light flex items-center justify-center transition-transform group-hover:scale-110">
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </section>
      {/* END: FinalCta */}

      {/* BEGIN: SiteFooter */}
      <footer className="bg-white border-t border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              alt="Webtizen.id"
              className="h-8 w-auto object-contain"
              src="/logo.png"
            />
            <span className="text-xs text-editorial-muted">
              © 2026 Webtizen.id — Partner Pertumbuhan Digital UMKM Indonesia.
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs text-editorial-muted font-medium">
            <a className="hover:text-editorial-black transition" href="#layanan">
              Layanan
            </a>
            <a className="hover:text-editorial-black transition" href="#harga">
              Paket Harga
            </a>
            <a className="hover:text-editorial-black transition" href="#portofolio">
              Portofolio
            </a>
            <a
              className="hover:text-brand font-semibold transition"
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bantuan WhatsApp
            </a>
          </div>
        </div>
      </footer>
      {/* END: SiteFooter */}
    </>
  )
}
