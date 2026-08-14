// src/app/page.tsx

import Header from "@/components/marketing/header";
import HeroSection from "@/components/marketing/hero-section";
import FeaturesSection from "@/components/marketing/features-section";
import PricingSection from "@/components/marketing/pricing-section";
import Footer from "@/components/marketing/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative isolate">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-border"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="relative z-10">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
