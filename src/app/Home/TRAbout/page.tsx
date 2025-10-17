import { Header } from "@/components/Home/Header"
import HeroSection  from "@/components/Home/hero-section"
import { ResourceCard } from "@/components/Home/resource-card"
import { DescriptionSection } from "@/components/Home/description-section"
import { RelatedResources } from "@/components/Home/related-resources"
import { NewsletterSection } from "@/components/Home/newsletter-section1"
import { Footer } from "@/components/Home/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="bg-[#fdfdff]">
        <ResourceCard />
        <DescriptionSection />
        <RelatedResources />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  )
}
