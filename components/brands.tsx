"use client"

import { useLanguage } from "@/lib/language-context"

const brands = [
  "ABB",
  "Siemens",
  "Schneider Electric",
  "Danfoss",
  "Yaskawa",
  "Allen-Bradley",
  "Mitsubishi",
  "Delta",
  "LS Electric",
  "Omron",
  "Fuji Electric",
  "Hitachi",
]

export function Brands() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 text-center sm:text-start">{t("brandsTitle")}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 text-center sm:text-start">{t("brandsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 flex items-center justify-center hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 min-h-[80px] sm:min-h-[90px]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-700 font-semibold text-center text-xs sm:text-sm leading-tight">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
