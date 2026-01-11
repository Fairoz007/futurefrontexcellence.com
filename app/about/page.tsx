import React from "react"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { MissionVision } from "@/components/mission-vision"
import { Brands } from "@/components/brands"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <About />
        <MissionVision />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
