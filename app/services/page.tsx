import React from "react"
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  )
}
