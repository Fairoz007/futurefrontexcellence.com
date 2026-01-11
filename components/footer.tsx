"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">FF</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-base leading-tight">Future Front Excellence</span>
                  <span className="text-xs text-gray-400">LLC</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{t("footerTagline")}</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">{t("quickLinks")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition-colors">
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">{t("contact")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">{t("email")}:</span>{" "}
                  <a href="mailto:info@futurefrontoman.com" className="hover:text-blue-400 transition-colors">
                    info@futurefrontoman.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">{t("phone")}:</span>{" "}
                  <a href="tel:+96812345678" className="hover:text-blue-400 transition-colors">
                    +968 1234 5678
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">{t("location")}:</span> Oman
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Future Front Excellence LLC. {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
