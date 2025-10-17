"use client"

import { Header } from "@/components/Home/Header"
import { HomeContent } from "@/components/First/HomeContent"
import { BenefitsSection } from "@/components/First/BenefitsSection"
import {CarrierSection} from "@/components/First/CarrierSection"
import  {NewsletterSection} from "@/components/Home/newsletter-section"
import { Footer } from "@/components/Home/footer"
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeContent />
        <BenefitsSection/>
        <CarrierSection/>
        <NewsletterSection/>
        <Footer/>
      </main>
    </div>
  )
}
