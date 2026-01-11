"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/95 backdrop-blur-sm"
      } border-b border-gray-200`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg sm:text-xl">FF</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base leading-tight">
              Future Front Excellence
            </span>
            <span className="text-[10px] sm:text-xs text-gray-600">LLC</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {t("home")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {t("about")}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {t("services")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {t("contact")}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold">{language === "en" ? "العربية" : "EN"}</span>
          </button>
          <Button onClick={() => scrollToSection("contact")} className="shadow-sm">
            {t("getInTouch")}
          </Button>
        </nav>

        <div className="lg:hidden flex items-center gap-1 sm:gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2.5 sm:p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100 active:bg-gray-200"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            className="p-2.5 sm:p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium py-3.5 px-4 rounded-lg"
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium py-3.5 px-4 rounded-lg"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium py-3.5 px-4 rounded-lg"
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium py-3.5 px-4 rounded-lg"
            >
              {t("contact")}
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full mt-2 h-12 text-base shadow-md">
              {t("getInTouch")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
