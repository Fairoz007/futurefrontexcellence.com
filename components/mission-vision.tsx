"use client"

import { useLanguage } from "@/lib/language-context"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("missionDesc")}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t("visionTitle")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("visionDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
