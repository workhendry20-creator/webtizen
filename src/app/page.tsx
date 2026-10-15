import AgencyHeroSection from "@/components/ui/hero-01"
import ProcessSteps from "@/components/ui/process-steps"
import ServicePackages from "@/components/ui/service-packages"
import FaqAndFooter from "@/components/ui/faq-and-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AgencyHeroSection />
      <ProcessSteps />
      <ServicePackages />
      <FaqAndFooter />
    </div>
  )
}
