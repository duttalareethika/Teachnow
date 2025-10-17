import { MapPin, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface JobCardProps {
    company: string
    location: string
    title: string
    experience: string
    salary: string
    openings: number
    logo: string
}

export function JobCard({ company, location, title, experience, salary, openings, logo }: JobCardProps) {
    return (
        <div className="bg-white rounded-lg border border-[#c8c8c8] p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#151d48] rounded-lg flex items-center justify-center">
                        <img src={logo || "/placeholder.svg"} alt={company} className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-[#000000]">{company}</h3>
                        <p className="text-sm text-[#737791]">{location}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#737791]">Openings:</span>
                    <Badge variant="secondary" className="bg-[#dae9ff] text-[#151d48]">
                        {openings}
                    </Badge>
                    <Badge className="bg-[#556ffe] text-white">Full-Time</Badge>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-[#000000] mb-4">{title}</h2>

            <div className="flex items-center space-x-6 text-sm text-[#737791] mb-4">
                <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{salary}</span>
                </div>
            </div>

            <Button className="bg-[#9ac1f9] hover:bg-[#556ffe] text-white">Apply Now</Button>
        </div>
    )
}
