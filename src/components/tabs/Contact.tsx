import {
    Bell,
    ChevronDown,
    User,
    Briefcase,
    FileText,
    Video,
    BookOpen,
    Heart,
    LogOut,
    PieChart,
    Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TeachnowDashboard() {
    return (
        <div className="">


            <div className="flex">
                {/* Left Sidebar */}

                {/* Main Content */}
                <main className="flex-1 p-8">


                    {/* Form Content */}
                    <div className="bg-[#ffffff] rounded-lg p-8">
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-[#333333] mb-2">Country*</label>
                                <Select>
                                    <SelectTrigger className="w-full border-[#f3f3f4] text-[#b1b1b1]">
                                        <SelectValue placeholder="Select your country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#333333] mb-2">State*</label>
                                <Select>
                                    <SelectTrigger className="w-full border-[#f3f3f4] text-[#b1b1b1]">
                                        <SelectValue placeholder="Select your state" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ca">California</SelectItem>
                                        <SelectItem value="ny">New York</SelectItem>
                                        <SelectItem value="tx">Texas</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-[#333333] mb-2">City*</label>
                                <Select>
                                    <SelectTrigger className="w-full border-[#f3f3f4] text-[#b1b1b1]">
                                        <SelectValue placeholder="Select your city" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="la">Los Angeles</SelectItem>
                                        <SelectItem value="sf">San Francisco</SelectItem>
                                        <SelectItem value="sd">San Diego</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#333333] mb-2">Pincode*</label>
                                <Input placeholder="Zip Code" className="border-[#f3f3f4] text-[#b1b1b1] placeholder:text-[#b1b1b1]" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-[#333333] mb-2">Current Address*</label>
                            <Textarea
                                placeholder="Enter your current address"
                                className="border-[#f3f3f4] text-[#b1b1b1] placeholder:text-[#b1b1b1] min-h-[80px]"
                            />
                        </div>

                        <div className="flex items-center space-x-2 mb-6">
                            <Checkbox id="same-address" className="border-[#f3f3f4]" />
                            <label htmlFor="same-address" className="text-sm text-[#737791]">
                                Same as Current Address
                            </label>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-[#333333] mb-2">Permanent Address</label>
                            <Textarea
                                placeholder="Enter your permanent address"
                                className="border-[#f3f3f4] text-[#b1b1b1] placeholder:text-[#b1b1b1] min-h-[80px]"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between">
                            <Button
                                variant="outline"
                                className="px-8 py-2 border-[#4679b5] text-[#4679b5] hover:bg-[#4679b5] hover:text-white bg-transparent"
                            >
                                Back
                            </Button>
                            <Button className="px-8 py-2 bg-[#9bc9ff] hover:bg-[#4679b5] text-white">
                                NEXT
                                <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </main>
            </div>


        </div>
    )
}
