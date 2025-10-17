"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function HomePage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="min-h-screen bg-[#f9fafb] relative">
      {/* Background content - simulating a dashboard */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#151d48] mb-2">Dashboard</h1>
            <p className="text-[#737791]">Welcome to your dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-[#151d48] mb-2">Total Users</h3>
              <p className="text-2xl font-bold text-[#151d48]">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-[#151d48] mb-2">Revenue</h3>
              <p className="text-2xl font-bold text-[#151d48]">$12,345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-[#151d48] mb-2">Growth</h3>
              <p className="text-2xl font-bold text-[#151d48]">+23%</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-medium text-[#151d48] mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-[#333333]">User John Doe registered</span>
                <span className="text-[#737791] text-sm">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-[#333333]">New payment received</span>
                <span className="text-[#737791] text-sm">4 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            {/* Coins Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Three golden coins */}
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#fea832] to-[#fe9923] rounded-full shadow-lg transform rotate-12"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#fea832] to-[#fe9923] rounded-full shadow-lg transform -rotate-6 -ml-2"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#fea832] to-[#fe9923] rounded-full shadow-lg transform rotate-45 -ml-2"></div>
                </div>
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#fecd3d] rounded-full"></div>
                <div className="absolute top-2 -left-2 w-1 h-1 bg-[#fecd3d] rounded-full"></div>
                <div className="absolute -bottom-1 left-1 w-1.5 h-1.5 bg-[#fecd3d] rounded-full"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#151d48] mb-3 leading-tight">
                Spend 40 Coins to View
                <br />
                Full Resume?
              </h2>
              <p className="text-[#737791] text-sm">This action cannot be undone.</p>
            </div>

            {/* Balance Information */}
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-[#333333] font-medium">Current Balance:</span>
                <span className="text-[#151d48] font-semibold">120 Coins</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#447d9b] font-medium">Balance After Unlock:</span>
                <span className="text-[#447d9b] font-semibold">80 Coins</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-[#9bc9ff] hover:bg-[#447d9b] text-[#151d48] hover:text-white font-medium py-3 rounded-full transition-colors"
                onClick={() => setShowModal(false)}
              >
                Confirm Unlock
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-[#9bc9ff] text-[#447d9b] hover:bg-[#9bc9ff] hover:text-[#151d48] font-medium py-3 rounded-full transition-colors bg-transparent"
                onClick={() => setShowModal(false)}
              >
                Cancel
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
