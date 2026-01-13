import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AudienceSection } from "@/components/audience-section"
import { FeaturesGrid } from "@/components/features-grid"
import { VCTrackingSection } from "@/components/vc-tracking-section"
import { APISection } from "@/components/api-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background test-class-refresh">
      <Header />
      <HeroSection />
      <AudienceSection />
      <FeaturesGrid />
      {/* <VCTrackingSection /> */}
      <APISection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
