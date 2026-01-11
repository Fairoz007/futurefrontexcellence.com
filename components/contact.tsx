"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 text-left">
              {t("contactTitle")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 text-left">{t("contactSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Information */}
            <div className="space-y-5 sm:space-y-6">
              <div className="relative h-48 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/control-room.jpg" alt="Contact Us" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{t("readyToStart")}</h3>
                  <p className="text-sm sm:text-base text-white/90">{t("contactPrompt")}</p>
                </div>
              </div>

              <Card className="border-gray-200 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-gray-900 text-lg sm:text-xl">{t("contactInfo")}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("contactInfoDesc")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{t("location")}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">PC: 119, Al Amarat, Muscat, Sultanate of Oman</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{t("email")}</h3>
                      <a href="mailto:sales@futurefrontexcellence.com" className="text-blue-600 hover:underline text-sm sm:text-base break-all">
                        sales@futurefrontexcellence.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{t("phone")}</h3>
                      <a href="tel:+96876373445" className="text-blue-600 hover:underline text-sm sm:text-base">
                        +968 7637 3445
                      </a>
                      <div className="text-sm sm:text-base text-gray-600">|</div>
                      <div className="text-sm sm:text-base">
                        <a href="tel:+96875044677" className="text-blue-600 hover:underline">
                          +968 7504 4677
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-none shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-lg sm:text-xl">{t("whyChooseUs")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base">{t("reason1")}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base">{t("reason2")}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base">{t("reason3")}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base">{t("reason4")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-900 text-lg sm:text-xl">{t("sendMessage")}</CardTitle>
                <CardDescription className="text-gray-600 text-sm sm:text-base">{t("sendMessageDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("name")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("name")}
                      className="h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("email")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("email")}
                      className="h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("phone")}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+968 XXXX XXXX"
                      className="h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("company")}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("company")}
                      className="h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("message")} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("message")}
                      rows={5}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-md h-12 sm:h-13 text-base">
                    {t("sendBtn")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
