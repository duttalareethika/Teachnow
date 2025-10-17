
import { MapPin, GraduationCap, Globe } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
 import Link from "next/link"

interface Candidate {
  name: string
  email: string
  experience: string
  skills: string[]
  education: string
  languages: string[]
  location: string
  avatar: string
}

interface CandidateCardProps {
  candidate: Candidate
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <Card className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
      <CardContent className="p-6">
        {/* Top row: avatar, name/email, experience */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={candidate.avatar || "/placeholder.svg"} alt={candidate.name} />
              <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-[#000000]">{candidate.name}</h3>
              <p className="text-sm text-[#737791]">{candidate.email}</p>
            </div>
          </div>
          <p className="text-sm text-[#737791]">{candidate.experience}</p>
        </div>

        {/* Middle row: skills, education, languages, location */}
        <div className="space-y-2 mb-4">
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-[#f0f6ff] text-[#447d9b] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
<div className="flex justify-around ">
          <div className="flex items-start space-x-2 text-[#447d9b]">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm">Education: {candidate.education}</span>
          </div>

          <div className="flex items-end space-x-2 text-[#447d9b]">
            <Globe className="h-4 w-4" />
            <span className="text-sm">{candidate.languages.join(", ")}</span>
          </div>
</div>
          <div className="flex items-center space-x-2 text-[#737791]">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{candidate.location}</span>
          </div>
        </div>

        {/* Bottom: button aligned right */}
        <div className="flex justify-end">
          <Link href="/Employer/CoinSpend">
  <Button className="bg-[#c3dcfb] text-[#447d9b] hover:bg-[#9bc9ff] text-sm px-4 py-2 rounded-lg">
    View Full Resume – Just 40 Coins
  </Button>
</Link>
        </div>
      </CardContent>
    </Card>
  )
}
