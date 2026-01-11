"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const capabilities = [
    t("capability1"),
    t("capability2"),
    t("capability3"),
    t("capability4"),
    t("capability5"),
    t("capability6"),
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center mb-12 lg:mb-16">
            <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000">
              <div className="relative">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-gray-200">
                  <Image
                    src="/images/team-engineer.jpg"
                    alt="Industrial Control Systems"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-xl ring-2 ring-white hidden sm:block">
                  <Image
                    src="/images/manufacturing-floor.jpg"
                    alt="Manufacturing Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-1000">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full border border-blue-100">
                <span className="text-blue-700 text-xs sm:text-sm font-bold tracking-wide">
                  {t("about").toUpperCase()}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-tight">
                {t("aboutSubtitle")}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">{t("aboutText1")}</p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">{t("aboutText2")}</p>

              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{t("ourCapabilities")}</h3>
                <div className="space-y-2.5 sm:space-y-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="h-11 sm:h-12 px-6 sm:px-8 shadow-md text-base w-full sm:w-auto"
              >
                {t("getInTouch")}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 text-white overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-bold mb-2">30+</div>
                <div className="text-sm sm:text-base text-blue-100">{t("yearsExperience")}</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-6 text-white overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-300">{t("projectsCompleted")}</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-6 text-white overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-bold mb-2">12+</div>
                <div className="text-sm sm:text-base text-blue-100">{t("brandPartners")}</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl p-6 text-white overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm sm:text-base text-gray-300">{t("technicalSupport")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
