import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"
import { BookAppointmentSection } from "@/components/book-appointment-section"
import { WorksSection } from "@/components/works-section"
import {PricingSection} from "@/components/PricingSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductSection />
      <WorksSection />
      <ScienceSection />
      <TestimonialsSection />
      <PricingSection />
      <BookAppointmentSection />
      {/* <MissionSection /> */}
      <Footer />
    </main>
  )
}
