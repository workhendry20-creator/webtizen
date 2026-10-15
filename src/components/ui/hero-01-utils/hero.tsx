"use client"

import * as React from "react"
import { Instrument_Serif } from "next/font/google"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

export type AvatarList = {
  image: string
}

type HeroSectionProps = {
  avatarList: AvatarList[]
}

const WHATSAPP_URL =
  "https://wa.me/628XXXXXXXXX?text=Halo%20Webtizen,%20saya%20mau%20konsultasi%20pembuatan%20website"

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section id="hero">
      <div className="w-full h-full relative">
        <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-8xl md:text-7xl text-5xl font-medium leading-14 md:leading-20 lg:leading-24 tracking-tight text-foreground"
                >
                  Bantu UMKM Naik Kelas Lewat{" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight font-normal text-emerald-700 dark:text-emerald-400`}
                  >
                    Website Profesional
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-base font-normal max-w-2xl text-muted-foreground"
                >
                  Jasa pembuatan website cepat, terjangkau, dan tanpa ribet.
                  Tingkatkan jangkauan bisnis dan kredibilitas usaha Anda hari
                  ini.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center flex-col md:flex-row justify-center gap-8"
              >
                <Button
                  asChild
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      Konsultasi Gratis via WA
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 shadow-xs">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Button>
                <div className="flex items-center sm:gap-7 gap-3">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (
                      <li key={index} className="-mr-2 z-1">
                        <img
                          src={avatar.image}
                          alt={`Avatar ${index + 1}`}
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white object-cover h-10 w-10 shadow-xs"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="gap-1 flex flex-col items-start text-left">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                          alt="star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                    <p className="sm:text-sm text-xs font-normal text-muted-foreground">
                      Dipercaya oleh 50+ UMKM di Indonesia
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
