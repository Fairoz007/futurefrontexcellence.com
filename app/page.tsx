import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Brands } from "@/components/brands"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Brands />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
