import { JobFilters } from "@/components/Home/job-filters"
import { JobListings } from "@/components/Home/job-listings"

export function JobSearchSection() {
  return (
    <section className="py-8 px-6 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <aside className="w-80 flex-shrink-0">
            <JobFilters />
          </aside>
          <main className="flex-1">
            <JobListings />
          </main>
        </div>
      </div>
    </section>
  )
}
