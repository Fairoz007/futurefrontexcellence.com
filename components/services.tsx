"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Settings, Monitor, Gauge, Network, Battery, Heart, CircuitBoard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Gauge,
      title: t("service1Title"),
      description: t("service1Desc"),
      image: "/images/vfd-control-panel.jpg",
    },
    {
      icon: Settings,
      title: t("service2Title"),
      description: t("service2Desc"),
      image: "/images/servo-drive-system.jpg",
    },
    {
      icon: Network,
      title: t("service3Title"),
      description: t("service3Desc"),
      image: "/images/control-room.jpg",
    },
    {
      icon: Monitor,
      title: t("service4Title"),
      description: t("service4Desc"),
      image: "/images/manufacturing-floor.jpg",
    },
    {
      icon: Cpu,
      title: t("service5Title"),
      description: t("service5Desc"),
      image: "/images/plc-programming.jpg",
    },
    {
      icon: Battery,
      title: t("service6Title"),
      description: t("service6Desc"),
      image: "/images/control-room.jpg",
    },
    {
      icon: Heart,
      title: t("service7Title"),
      description: t("service7Desc"),
      image: "/images/technical-support.jpg",
    },
    {
      icon: CircuitBoard,
      title: t("service8Title"),
      description: t("service8Desc"),
      image: "/images/technical-support.jpg",
    },
  ]

  return (
    <section id="services" className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 text-left px-4">
              {t("servicesTitle")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl text-left px-4">{t("servicesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg sm:text-xl text-gray-900 text-balance leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
