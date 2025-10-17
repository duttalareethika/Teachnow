import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link";
export function Header() {
  return (
    <header className="bg-white border-b border-[#d9d9d9] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-[#1e2d42]">
            Teach<span className="text-[#4679b5]">now</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/Home/FindJob" className="text-[#1e2d42] hover:text-[#4679b5] transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-[#1e2d42] hover:text-[#4679b5] transition-colors">
              Free Resume Builder
            </a>
            <a href="/Home/TeacherResource" className="text-[#1e2d42] hover:text-[#4679b5] transition-colors">
              Teaching Resources
            </a>
            <a href="/Home/Pricing" className="text-[#4679b5] font-medium">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
             <Link href="/JobSeeker" passHref>
        <Button variant="ghost" className="text-[#1e2d42] hover:text-[#4679b5]">
          Login
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </Link>
          <Link href="/Employer" passHref>
        <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white rounded-full px-6">
          Post a Job
        </Button>
      </Link>
        </div>
      </div>
    </header>
  )
}
