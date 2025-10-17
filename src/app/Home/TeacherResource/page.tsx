import { Header } from "@/components/Home/Header"
import { HeroSection } from "@/components/Home/hero-section1"
import { FilterSection } from "@/components/Home/filter-section"
import { ResourcesGrid } from "@/components/Home/resources-grid"
import { NewsletterSection } from "@/components/Home/newsletter-section2"
import { Footer } from "@/components/Home/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <Header />
      <HeroSection />
      <FilterSection />
      <ResourcesGrid />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
