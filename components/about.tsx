"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Users, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const capabilities = [
    t("capability1"),
    t("capability2"),
    t("capability3"),
    t("capability4"),
    t("capability5"),
    t("capability6"),
  ]

  const stats = [
    { label: t("yearsExperience"), value: "30+", icon: Award },
    { label: t("projectsCompleted"), value: "500+", icon: Zap },
    { label: t("brandPartners"), value: "50+", icon: Users },
    { label: t("technicalSupport"), value: "24/7", icon: Shield },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image column */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/images/team-engineer.jpg"
                  alt="Industrial Control Systems"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-200 rounded-2xl -z-10 hidden sm:block" />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-xl shadow-xl z-20 border border-blue-50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-none">30+</p>
                    <p className="text-sm text-gray-600">{t("yearsExperience")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full">
                {t("aboutTitle")}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-center sm:text-start">
                {t("aboutSubtitle")}
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg text-gray-700 leading-relaxed text-center sm:text-start">
                  {t("aboutText1")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-center sm:text-start">
                  {t("aboutText2")}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-start">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  {t("ourCapabilities")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg shadow-lg shadow-blue-200 bg-blue-600 hover:bg-blue-700">
                    {t("getInTouch")}
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 font-medium italic">
                  {t("contactPrompt")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
