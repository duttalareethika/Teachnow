"use client"


import { FilterPanel } from "@/components/Employeer/filter-panel.tsx"
import { ResumeSearch } from "@/components/Employeer/resume-search"

export default function ResumeResultsPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
 

      <div className="flex">
        {/* Filter Panel on the right */}
         <main className="flex-1 p-6">
          <ResumeSearch />
        </main>
        <FilterPanel />

        {/* Resume Search Results */}
       
      </div>
    </div>
  )
}
