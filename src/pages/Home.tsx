import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Brands } from "@/components/sections/Brands"
import { Sales } from "@/components/sections/Sales"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Sales />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
