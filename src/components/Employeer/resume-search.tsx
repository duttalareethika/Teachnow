import { CandidateCard } from "@/components/Employeer/candidate-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const candidates = [
  {
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    experience: "5 years of experience",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    education: "BCA from WBUT (2019)",
    languages: ["Hindi", "English", "Bengali"],
    location: "Kolkata",
    avatar: "/professional-woman1.png",
  },
  {
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    experience: "5 years of experience",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    education: "BCA from WBUT (2019)",
    languages: ["Hindi", "English", "Bengali"],
    location: "Kolkata",
    avatar: "/professional-woman1.png",
  },
  {
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    experience: "5 years of experience",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    education: "BCA from WBUT (2019)",
    languages: ["Hindi", "English", "Bengali"],
    location: "Kolkata",
    avatar: "/professional-woman1.png",
  },
  {
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    experience: "5 years of experience",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    education: "BCA from WBUT (2019)",
    languages: ["Hindi", "English", "Bengali"],
    location: "Kolkata",
    avatar: "/professional-woman1.png",
  },
  {
    name: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    experience: "5 years of experience",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    education: "BCA from WBUT (2019)",
    languages: ["Hindi", "English", "Bengali"],
    location: "Kolkata",
    avatar: "/professional-woman1.png",
  },
]

export function ResumeSearch() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-[#447d9b]">Resume DB search</h2>
        <Select defaultValue="5">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {candidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} />
        ))}
      </div>

      <div className="flex items-center justify-center space-x-2 pt-6">
        <Button variant="ghost" size="sm" className="text-[#737791]">
          1
        </Button>
        <Button variant="ghost" size="sm" className="text-[#737791]">
          2
        </Button>
        <Button variant="ghost" size="sm" className="text-[#737791]">
          3
        </Button>
        <Button variant="ghost" size="sm" className="text-[#737791]">
          ...
        </Button>
        <Button variant="default" size="sm" className="bg-[#447d9b] text-white">
          4
        </Button>
      </div>

      <div className="text-center text-sm text-[#737791] pt-4">Copyright © 2025. All rights reserved.</div>
    </div>
  )
}
