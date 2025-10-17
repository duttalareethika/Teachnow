import { Header } from "@/components/Home/Header"
import { HeroSection } from "@/components/Home/hero-section3"
import { JobSearchSection } from "@/components/Home/job-search-section"
import { NewsletterSection } from "@/components/Home/newsletter-section"
import { Footer } from "@/components/Home/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <HeroSection />
      <JobSearchSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
