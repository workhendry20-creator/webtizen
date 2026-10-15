"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, MessageCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface NavigationSection {
  title: string
  href: string
  isActive?: boolean
}

interface HeaderProps {
  navigationData: NavigationSection[]
}

const WHATSAPP_URL =
  "https://wa.me/628XXXXXXXXX?text=Halo%20Webtizen,%20saya%20mau%20konsultasi%20pembuatan%20website"

export default function Header({ navigationData }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-1.5 group">
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
            Webtizen<span className="text-emerald-500">.id</span>
          </span>
          <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Solusi Digital UMKM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigationData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                item.isActive
                  ? "text-emerald-600 bg-emerald-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Header CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi Gratis via WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi WA</span>
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 text-slate-700 border-slate-200"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6">
              <SheetHeader className="text-left pb-4 border-b border-slate-100">
                <SheetTitle className="text-lg font-bold text-slate-900 flex items-center gap-1">
                  Webtizen<span className="text-emerald-500">.id</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 py-6">
                {navigationData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 flex items-center justify-center gap-2 shadow-sm"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Konsultasi Gratis via WA</span>
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
