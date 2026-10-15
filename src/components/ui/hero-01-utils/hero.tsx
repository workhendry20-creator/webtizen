"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, MessageCircle, CheckCircle2, ShieldCheck, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export interface AvatarList {
  image: string
}

interface HeroSectionProps {
  avatarList: AvatarList[]
}

const WHATSAPP_URL =
  "https://wa.me/628XXXXXXXXX?text=Halo%20Webtizen,%20saya%20mau%20konsultasi%20pembuatan%20website"

export default function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-24 lg:py-28">
      {/* Background radial highlight glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Trust Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 ring-1 ring-inset ring-slate-900/10 mb-6 sm:mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Solusi Pembuatan Website Terima Beres untuk UMKM</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Bantu UMKM Naik Kelas Lewat{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Website Profesional
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg lg:text-xl leading-relaxed"
        >
          Jasa pembuatan website cepat, terjangkau, dan tanpa ribet. Tingkatkan
          jangkauan bisnis dan kredibilitas usaha Anda hari ini.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-7 py-6 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 rounded-xl"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi Gratis via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Konsultasi Gratis via WA</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-slate-100 font-medium text-base px-6 py-6 rounded-xl"
          >
            <a href="#harga">Lihat Paket & Harga</a>
          </Button>
        </motion.div>

        {/* Value Proposition Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600"
        >
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-emerald-600" />
            Pengerjaan 3-5 Hari
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Garansi Support 30 Hari
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Gratis Domain & Hosting
          </span>
        </motion.div>

        {/* Social Proof: Avatars & Star Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200/60"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2.5 overflow-hidden p-1">
            {avatarList.map((avatar, idx) => (
              <div
                key={idx}
                className="relative inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white shadow-sm overflow-hidden"
              >
                <Image
                  src={avatar.image}
                  alt={`Klien Webtizen ${idx + 1}`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Rating details */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="ml-1.5 text-sm font-bold text-slate-900">
                4.9 / 5.0
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Dipercaya oleh 50+ pemilik UMKM di Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
