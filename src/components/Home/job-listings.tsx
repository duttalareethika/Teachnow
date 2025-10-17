import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign } from "lucide-react"

const jobListings = [
  {
    id: 1,
    company: "ABC Tech Innovators",
    location: "Copenhagen, India",
    title: "Senior Accountant Tally & GST",
    experience: "3 - 5 years",
    salary: "50k to 60k INR",
    type: "Full-Time",
    openings: 14,
    logo: "/orange-tech-logo.png",
  },
  {
    id: 2,
    company: "ABC Tech Innovators",
    location: "Copenhagen, India",
    title: "Senior Accountant Tally & GST",
    experience: "3 - 5 years",
    salary: "50k to 60k INR",
    type: "Full-Time",
    openings: 14,
    logo: "/purple-tech-logo.png",
  },
  {
    id: 3,
    company: "ABC Tech Innovators",
    location: "Copenhagen, India",
    title: "Senior Accountant Tally & GST",
    experience: "3 - 5 years",
    salary: "50k to 60k INR",
    type: "Full-Time",
    openings: 14,
    logo: "/tech-company-logo-blue.png",
  },
  {
    id: 4,
    company: "ABC Tech Innovators",
    location: "Copenhagen, India",
    title: "Senior Accountant Tally & GST",
    experience: "3 - 5 years",
    salary: "50k to 60k INR",
    type: "Full-Time",
    openings: 14,
    logo: "/tech-company-logo-blue.png",
  },
  {
    id: 5,
    company: "N-Labs AI Research and ...",
    location: "Hyderabad, Telangana",
    title: "Biology Teache",
    experience: "3 - 5 years",
    salary: "Salary Not Disclosed",
    type: "Full-Time",
    openings: 11,
    logo: "/ai-research-company-logo-orange.jpg",
  },
  {
    id: 6,
    company: "ABC Tech Innovators",
    location: "Copenhagen, India",
    title: "Senior Accountant Tally & GST",
    experience: "3 - 5 years",
    salary: "50k to 60k INR",
    type: "Full-Time",
    openings: 14,
    logo: "/orange-tech-logo.png",
  },
]

export function JobListings() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-[#888888]">Showing 1-10 of 184 jobs</p>
        <div className="flex gap-4">
          <Select defaultValue="default">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="10">
            <SelectTrigger className="w-32">
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
        {jobListings.map((job) => (
          <div key={job.id} className="bg-[#ffffff] p-6 rounded-lg shadow-sm border border-[#d9d9d9]">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-12 h-12 rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#000000]">{job.company}</h3>
                    <span className="bg-[#dae9ff] text-[#4679b5] px-2 py-1 rounded text-xs">
                      Openings: {job.openings}
                    </span>
                    <span className="bg-[#4679b5] text-[#ffffff] px-2 py-1 rounded text-xs">{job.type}</span>
                  </div>
                  <p className="text-[#888888] text-sm mb-2">{job.location}</p>
                  <h4 className="text-lg font-semibold text-[#000000] mb-3">{job.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-[#888888]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
              </div>
             
               <Link href="/Home/About" passHref>
      <Button className="bg-[#4679b5] hover:bg-[#2864b4] text-white px-6 py-2 rounded-full">
        Apply Now ✏️
      </Button>
    </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-[#888888]">
          1
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-[#888888]">
          2
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-[#888888]">
          3
        </Button>
        <Button size="sm" className="w-8 h-8 p-0 bg-[#4679b5] text-[#ffffff]">
          4
        </Button>
      </div>
    </div>
  )
}
