import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#9bc9ff] to-[#4679b5] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#ffffff] mb-4">Find Jobs</h1>
        <div className="text-[#ffffff] mb-8">
          <span>Home</span> • <span>Find Jobs</span>
        </div>

        <div className="bg-[#ffffff] rounded-full p-2 flex items-center max-w-2xl mx-auto shadow-lg">
          <Input placeholder="Job Title" className="border-none bg-transparent flex-1 px-4" />
          <div className="w-px h-8 bg-[#d9d9d9] mx-2" />
          <Select>
            <SelectTrigger className="border-none bg-transparent w-40">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-[#000000] hover:text-[#ffffff] rounded-full px-6 ml-2">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
