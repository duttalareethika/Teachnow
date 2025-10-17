"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResumeSearchPage() {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-medium text-[#447d9b] mb-8">Resume DB Search</h1>

        {/* White Box with Inputs */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
          {/* Job Title Input */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#333333] mb-2">Enter Job title*</label>
            <Input
              placeholder="Eg. React Developer, Accountant"
              className="w-full h-12 px-4 border border-[#e5e7eb] rounded-lg text-[#333333] placeholder:text-[#b1b1b1]"
            />
          </div>

          {/* State Select */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#333333] mb-2">Select State</label>
            <Select>
              <SelectTrigger className="w-full h-12 px-4 border border-[#e5e7eb] rounded-lg">
                <SelectValue placeholder="Eg. West Bengal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="west-bengal">West Bengal</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* City Select */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#333333] mb-2">Select City</label>
            <Select>
              <SelectTrigger className="w-full h-12 px-4 border border-[#e5e7eb] rounded-lg">
                <SelectValue placeholder="Eg. Kolkata" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="new-delhi">New Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Search Button Below */}
        <div className="mt-4">
          <Link href="/Employer/resume-results">
            <Button className="bg-[#9BC9FF] hover:bg-[#7FB8F2] text-white rounded-full font-medium flex items-center space-x-2 px-4 py-3">
              <span>Search Resumes</span>
              <div className="bg-[#4679B5] w-8 h-8 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white -rotate-45" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
