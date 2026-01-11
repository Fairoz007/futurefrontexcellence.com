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

function getInitials(name: string) {
  const parts = name.split(/[\s-]+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase()
  return parts.map((p) => p[0]).slice(0, 3).join("").toUpperCase()
}

const colorPalette = [
  "#0ea5a4",
  "#2563eb",
  "#0f172a",
  "#e11d48",
  "#f59e0b",
  "#7c3aed",
  "#06b6d4",
  "#059669",
  "#b91c1c",
  "#06b6d4",
  "#2563eb",
  "#334155",
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
                <div className="flex flex-col items-center">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label={brand}
                    className="rounded-md shadow-sm"
                  >
                    <rect width="56" height="56" rx="10" fill={colorPalette[index % colorPalette.length]} />
                    <text x="50%" y="50%" fill="#fff" fontSize="14" fontWeight="700" dominantBaseline="middle" textAnchor="middle">
                      {getInitials(brand)}
                    </text>
                  </svg>

                  <span className="sr-only">{brand}</span>
                  <span className="mt-2 text-gray-700 text-xs text-center hidden sm:block">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
