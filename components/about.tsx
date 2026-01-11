"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  // navigation to contact page handled via Link

  const capabilities = [
    t("capability1"),
    t("capability2"),
    t("capability3"),
    t("capability4"),
    t("capability5"),
    t("capability6"),
  ]

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image column */}
            <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[480px] lg:ml-4">
                <div className="w-full rounded-[14px] overflow-hidden shadow-lg">
                  <Image
                    src="/images/team-engineer.jpg"
                    alt="Industrial Control Systems"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 text-center sm:text-left">
                {t("aboutSubtitle")}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center sm:text-left max-w-prose">
                {t("aboutText1")}
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 text-center sm:text-left max-w-prose">
                {t("aboutText2")}
              </p>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t("ourCapabilities")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-6 shadow-md">
                    {t("getInTouch")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
