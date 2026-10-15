import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Pricing from "@/components/sections/Pricing"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
