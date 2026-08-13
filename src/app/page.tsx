import Header from "@/components/marketing/header";
import HeroSection from "@/components/marketing/hero-section";
import FeaturesSection from "@/components/marketing/features-section";
import PricingSection from "@/components/marketing/pricing-section";
import Footer from "@/components/marketing/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}