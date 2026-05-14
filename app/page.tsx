import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValueProposition } from "@/components/value-proposition"
import { CommoditiesSection } from "@/components/commodities-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ValueProposition />
        <CommoditiesSection />
        <ServicesSection />
        <ClientsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
