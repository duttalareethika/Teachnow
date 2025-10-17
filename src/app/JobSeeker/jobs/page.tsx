
import { SearchBar } from "@/components/jobs/search-bar"
import { JobFilters } from "@/components/jobs/jobs-filters"
import { JobCard } from "@/components/jobs/job-card"
import { Pagination } from "@/components/jobs/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const jobListings = [
    {
        company: "ABC Tech Innovators",
        location: "Copenhagen, India",
        title: "Senior Accountant Tally & GST",
        experience: "3 - 5 years",
        salary: "50K to 60K INR",
        openings: 1,
        logo: "/purple-tech-logo.png",
    },
    {
        company: "ABC Tech Innovators",
        location: "Copenhagen, India",
        title: "Senior Accountant Tally & GST",
        experience: "3 - 5 years",
        salary: "50K to 60K INR",
        openings: 1,
        logo: "/tech-company-logo-blue.png",
    },
    {
        company: "ABC Tech Innovators",
        location: "Copenhagen, India",
        title: "Senior Accountant Tally & GST",
        experience: "3 - 5 years",
        salary: "50K to 60K INR",
        openings: 1,
        logo: "/tech-company-logo-teal.jpg",
    },
    {
        company: "ABC Tech Innovators",
        location: "Copenhagen, India",
        title: "Senior Accountant Tally & GST",
        experience: "3 - 5 years",
        salary: "50K to 60K INR",
        openings: 1,
        logo: "/orange-tech-logo.png",
    },
]

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f9fafb]">


            <div className="flex">


                <div className="flex flex-1">
                    <JobFilters />

                    <main className="flex-1 p-6">
                        <SearchBar />

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <Select defaultValue="default">
                                    <SelectTrigger className="w-32 bg-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="default">Default</SelectItem>
                                        <SelectItem value="newest">Newest</SelectItem>
                                        <SelectItem value="oldest">Oldest</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select defaultValue="10">
                                    <SelectTrigger className="w-40 bg-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10">10 per page</SelectItem>
                                        <SelectItem value="20">20 per page</SelectItem>
                                        <SelectItem value="50">50 per page</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {jobListings.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>

                        <Pagination />


                    </main>
                </div>
            </div>
        </div>
    )
}
