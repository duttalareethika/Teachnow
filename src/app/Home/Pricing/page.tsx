
import { Header } from "@/components/Home/Header"
import { PricingCard } from "@/components/Home/pricing-card"
import { FAQSection } from "@/components/Home/faq-section"
import { NewsletterSection } from "@/components/Home/newsletter-section"
import { Footer } from "@/components/Home/footer"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <Header />

      {/* Hero Section with Gradient */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #9BC9FF, #4E96EA)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h1>
          <nav className="text-white/90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span className="text-white font-medium">Pricing</span>
          </nav>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1e2d42] mb-16">
            Choose From Our Tailored Plans.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <PricingCard
              title="1 Month"
              subtitle="Ideal for small teams"
              credits={3}
              activeDays={15}
              usageDays={30}
              price={1799}
              originalPrice={1950}
              discount="7% OFF"
            />

            <PricingCard
              title="3 Months"
              subtitle="Perfect for growing businesses"
              credits={8}
              activeDays={15}
              usageDays={30}
              price={3399}
              originalPrice={3900}
              discount="13% OFF"
              isPopular={true}
            />

            <PricingCard
              title="6 Months"
              subtitle="Best fit for larger hiring needs"
              credits={13}
              activeDays={15}
              usageDays={180}
              price={6599}
              originalPrice={8450}
              discount="22% OFF"
            />
          </div>

          <div className="text-center">
            <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white rounded-full px-8 py-3">
              Want a personalized plan?
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
