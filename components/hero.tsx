"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  // navigation now goes to dedicated pages

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-industrial-automation-factory-floor-with-ro.jpg"
          alt="Industrial Automation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/85 to-blue-950/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">Excellence in Automation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-[1.15] sm:leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-10 text-pretty max-w-3xl leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/services">
              <Button size="lg" className="text-base px-6 sm:px-8 h-12 sm:h-14 shadow-lg w-full sm:w-auto">
                {t("viewServices")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-6 sm:px-8 h-12 sm:h-14 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
              >
                {t("contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
