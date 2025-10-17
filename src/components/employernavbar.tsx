"use client"

import { Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  return (
    <header className="bg-[#ffffff] border-b border-[#d9d9d9] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-[#1e2d42]">Teachnow</h1>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">Find Jobs</a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">Free Resume Builder</a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">Teaching Resources</a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">Pricing</a>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-[#737791]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ffa412] rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/professional-man-avatar.png" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#1e2d42]">Dipanjan</span>
              <span className="text-xs text-[#737791]">Admin</span>
            </div>
            <ChevronDown className="w-4 h-4 text-[#737791]" />
          </div>
        </div>
      </div>
    </header>
  )
}
