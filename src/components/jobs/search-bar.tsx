import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchBar() {
    return (
        <div className="bg-white rounded-full border border-[#c8c8c8] p-2 flex items-center space-x-2 mb-6">
            <div className="flex-1">
                <Input
                    placeholder="Job Title"
                    className="border-0 focus-visible:ring-0 text-[#333333] placeholder:text-[#737791]"
                />
            </div>
            <div className="w-px h-8 bg-[#c8c8c8]"></div>
            <div className="flex-1">
                <Select>
                    <SelectTrigger className="border-0 focus:ring-0 text-[#737791]">
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="copenhagen">Copenhagen, India</SelectItem>
                        <SelectItem value="mumbai">Mumbai, India</SelectItem>
                        <SelectItem value="delhi">Delhi, India</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button className="bg-[#9ac1f9] hover:bg-[#556ffe] text-white rounded-full px-6">
                <Search className="w-4 h-4 mr-2" />
                Search
            </Button>
        </div>
    )
}
