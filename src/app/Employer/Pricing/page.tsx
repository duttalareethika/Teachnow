
"use client"

import { useState } from "react"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/employernavbar"
import Sidebar from "@/components/Sidebar"

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"subscription" | "coin">("subscription")

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">

      <div className="flex flex-1">
      

        {/* Main Section */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#447D9B] mb-2">
                  Choose from our
                </h2>
                <h2 className="text-3xl font-semibold text-[#447D9B]">
                  tailored plans.
                </h2>
              </div>
              <Card className="bg-gradient-to-r from-[#6A9CFF] to-[#A18CFB] border-0 p-6 rounded-2xl shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/30 p-3 rounded-lg">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10k</div>
                    <div className="text-white">Balance</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Toggle Buttons */}
            <div className="flex space-x-4 mb-8">
              <Button
                variant={activeTab === "subscription" ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  activeTab === "subscription"
                    ? "bg-[#9BC9FF] text-white hover:bg-[#7fbaff]"
                    : "border-[#9BC9FF] text-[#9BC9FF] bg-transparent"
                }`}
                onClick={() => setActiveTab("subscription")}
              >
                Subscription plan
              </Button>
              <Button
                variant={activeTab === "coin" ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  activeTab === "coin"
                    ? "bg-[#9BC9FF] text-white hover:bg-[#7fbaff]"
                    : "border-[#9BC9FF] text-[#9BC9FF] bg-transparent"
                }`}
                onClick={() => setActiveTab("coin")}
              >
                Coin Packages
              </Button>
            </div>

            {/* Pricing Plans */}
            {activeTab === "subscription" ? <SubscriptionPlans /> : <CoinPackages />}

            {/* Footer */}
            <div className="text-center mt-12">
              <p className="text-[#737791]">Copyright © 2025. All rights reserved.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

/* --- Subscription Plans --- */
function SubscriptionPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Starter Plan */}
      <Card className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
        <h3 className="text-2xl font-bold text-[#1E2D42] mb-6">Starter Plan</h3>
        <div className="space-y-4 mb-8">
          <PlanItem text="3 Job credits" />
          <PlanItem text="Job will be active for 15 days" />
          <PlanItem text="Use these credits in 30 days" />
        </div>
        <PriceTag price="₹500" oldPrice="₹1000" discount="7% OFF" />
        <BuyButton />
      </Card>

      {/* Growth Plan (highlighted) */}
      <Card className="p-6 rounded-2xl relative shadow-lg transform scale-105 
        bg-gradient-to-br from-[#B09DFF] to-[#C8BBFF] 
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
        <div className="absolute top-4 right-4 bg-white/30 px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">Most Popular</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-6">Growth Plan</h3>
        <div className="space-y-4 mb-8">
          <PlanItem text="6 Job credits" white />
          <PlanItem text="Job will be active for 15 days" white />
          <PlanItem text="Use these credits in 90 days" white />
        </div>
        <PriceTag price="₹1001" oldPrice="₹3000" discount="13% OFF" white />
        <Button className="w-full bg-white text-[#9BC9FF] hover:bg-white/90 rounded-full py-3 font-medium">
          Buy Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Card>

      {/* Power Plan */}
      <Card className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm relative 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
        <div className="absolute top-4 right-4 bg-[#9BC9FF] text-white px-3 py-1 rounded-full text-sm">
          22% OFF
        </div>
        <h3 className="text-2xl font-bold text-[#1E2D42] mb-6">Power Plan</h3>
        <div className="space-y-4 mb-8">
          <PlanItem text="13 Job credits" />
          <PlanItem text="Job will be active for 15 days" />
          <PlanItem text="Use these credits in 180 days" />
        </div>
        <PriceTag price="₹3001" oldPrice="₹10,000" discount="22% OFF" />
        <BuyButton />
      </Card>
    </div>
  )
}

/* --- Coin Packages --- */
function CoinPackages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
        <h3 className="text-2xl font-bold text-[#1E2D42] mb-6">Basic Package</h3>
        <div className="space-y-4 mb-8">
          <PlanItem text="100 Coins" />
          <PlanItem text="Validity: 30 days" />
        </div>
        <PriceTag price="₹300" oldPrice="₹600" discount="10% OFF" />
        <BuyButton />
      </Card>

      <Card className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
        <h3 className="text-2xl font-bold text-[#1E2D42] mb-6">Standard Package</h3>
        <div className="space-y-4 mb-8">
          <PlanItem text="300 Coins" />
          <PlanItem text="Validity: 60 days" />
        </div>
        <PriceTag price="₹800" oldPrice="₹1500" discount="15% OFF" />
        <BuyButton />
      </Card>

      <Card className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
        <h3 className="text-2xl font-bold text-[#1E2D42] mb-6">Premium Package</h3>
        <div className="space-y-4 mb-8">
          <PlanItem text="500 Coins" />
          <PlanItem text="Validity: 90 days" />
        </div>
        <PriceTag price="₹1200" oldPrice="₹2500" discount="20% OFF" />
        <BuyButton />
      </Card>
    </div>
  )
}

/* --- Subcomponents --- */
function PlanItem({ text, white }: { text: string; white?: boolean }) {
  return (
    <div className="flex items-center space-x-3">
      <div className={`w-2 h-2 rounded-full ${white ? "bg-white" : "bg-[#447D9B]"}`} />
      <span className={`${white ? "text-white font-medium" : "text-[#333333]"}`}>{text}</span>
    </div>
  )
}

function PriceTag({
  price,
  oldPrice,
  discount,
  white,
}: {
  price: string
  oldPrice: string
  discount: string
  white?: boolean
}) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline space-x-2">
        <span className={`text-3xl font-bold ${white ? "text-white" : "text-[#1E2D42]"}`}>
          {price}
        </span>
        <span className={`text-lg line-through ${white ? "text-white/80" : "text-[#888888]"}`}>
          {oldPrice}
        </span>
        <span
          className={`px-2 py-1 rounded text-sm ${
            white ? "bg-white/30 text-white" : "bg-[#9BC9FF] text-white"
          }`}
        >
          {discount}
        </span>
      </div>
    </div>
  )
}

function BuyButton() {
  return (
    <Button className="w-full bg-[#9BC9FF] hover:bg-[#7fbaff] text-white rounded-full py-3 font-medium">
      Buy Now
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  )
}
