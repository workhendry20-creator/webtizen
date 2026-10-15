"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("#beranda")

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Alur Kerja", href: "#alur-kerja" },
    { label: "Paket Harga", href: "#harga" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "FAQ", href: "#faq" },
  ]

  // Optional ScrollSpy to highlight corresponding nav link when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href) as HTMLElement | null
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(navLinks[i].href)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-all border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo Webtizen */}
        <a aria-label="Webtizen.id Beranda" className="flex items-center gap-2" href="#">
          <img
            alt="Webtizen.id Logo"
            className="h-9 w-auto object-contain"
            src="/logo.png"
          />
        </a>

        {/* Floating Pill Navigation with Animated Sliding Active Pill */}
        <nav className="hidden md:flex items-center bg-[#f3f4f6]/90 p-1.5 rounded-full border border-black/5 text-sm font-medium text-editorial-muted shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeNav === link.href

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveNav(link.href)}
                className={`relative px-4 py-1.5 text-sm transition-colors duration-200 ${isActive
                  ? "text-editorial-black font-medium"
                  : "text-editorial-muted hover:text-editorial-black"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          })}
        </nav>

        {/* CTA Button Kapsul Hitam */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-editorial-black text-white hover:bg-brand transition-colors text-sm font-medium tracking-tight shadow-sm group"
            href="https://wa.me/6281234567890?text=Halo%20Webtizen,%20saya%20ingin%20konsultasi%20pembuatan%20website"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Konsultasi WA</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#f3f4f6] text-editorial-charcoal hover:bg-neutral-200 transition focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/5 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveNav(link.href)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${isActive
                    ? "bg-brand/10 text-brand font-semibold"
                    : "text-editorial-charcoal hover:bg-neutral-100"
                    }`}
                >
                  {link.label}
                </a>
              )
            })}
            <div className="pt-2">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Webtizen,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-editorial-black text-white hover:bg-brand text-sm font-medium transition group"
              >
                <span>Konsultasi</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <WhatsAppIcon className="w-3 h-3" />
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
