"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  UtensilsCrossed,
  Shirt,
  Wrench,
  ShoppingBag,
  Sparkles,
  Store,
  Briefcase,
  Layers,
} from "lucide-react"

export interface BrandList {
  image?: string
  lightimg?: string
  name: string
  subtitle?: string
}

interface BrandSliderProps {
  brandList: BrandList[]
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Kuliner & F&B": <UtensilsCrossed className="h-5 w-5 text-emerald-600" />,
  "Fashion & Retail": <Shirt className="h-5 w-5 text-emerald-600" />,
  "Jasa Lokal & Servis": <Wrench className="h-5 w-5 text-emerald-600" />,
  "Toko Online & E-Commerce": <ShoppingBag className="h-5 w-5 text-emerald-600" />,
  "Kecantikan & Barbershop": <Sparkles className="h-5 w-5 text-emerald-600" />,
  "Distributor & Grosir": <Store className="h-5 w-5 text-emerald-600" />,
  "Konsultan & Bisnis": <Briefcase className="h-5 w-5 text-emerald-600" />,
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  // Duplicate for seamless infinite loop effect
  const marqueeItems = [...brandList, ...brandList]

  return (
    <div className="w-full border-y border-slate-200/70 bg-slate-50/70 py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
          Dipercaya &amp; Cocok untuk Berbagai Bisnis UMKM Indonesia
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          className="flex items-center gap-6 sm:gap-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((brand, index) => {
            if (brand.image) {
              return (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white px-6 py-2 shadow-xs hover:border-emerald-300 transition-colors"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-6 w-auto max-w-[120px] object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              )
            }

            const icon = CATEGORY_ICONS[brand.name] ?? (
              <Layers className="h-5 w-5 text-emerald-600" />
            )

            return (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                  {icon}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                    {brand.name}
                  </p>
                  {brand.subtitle && (
                    <p className="text-[11px] text-slate-500 whitespace-nowrap">
                      {brand.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
