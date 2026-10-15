"use client"

import * as React from "react"
import { Marquee } from "@/components/ui/marquee"
import { motion } from "framer-motion"

export interface BrandList {
  image: string
  name: string
  lightimg: string
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-0.5 w-40 bg-gradient-to-l from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
                <p className="text-sm font-normal sm:px-2 px-10 text-muted-foreground text-center">
                  Dipercaya oleh 1000+ brand &amp; UMKM di seluruh Indonesia
                </p>
                <div className="hidden md:block h-0.5 w-40 bg-gradient-to-r from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
              </div>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="[--duration:20s] p-0">
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-36 h-8 mr-6 lg:mr-20 dark:hidden object-contain"
                      />
                      <img
                        src={brand.lightimg}
                        alt={brand.name}
                        className="hidden dark:block w-36 h-8 mr-12 lg:mr-20 object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandSlider
