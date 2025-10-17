import {
    Bell,
    ChevronDown,
    Clock,
    FileText,
    Search,
    User,
    Video,
    Briefcase,
    Heart,
    LogOut,
    Plus,
    Minus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeachnowDashboard() {
    return (
        <div className="">
            {/* Header */}


            <div className="flex">


                {/* Main Content */}
                <main className="flex-1 p-6">
                    {/* Tab Navigation */}


                    {/* Form Content */}
                    <div className="bg-white rounded-lg p-8">
                        <h1 className="text-2xl font-semibold text-[#4679b5] mb-8">Job Preferences and Details</h1>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Preferred Type Of Employment*</label>
                                    <Input placeholder="Type Of Employment" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Expected Salary (INR)*</label>
                                    <Input placeholder="Give your Expected Salary" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Preferred Job Location</label>
                                    <Input placeholder="Your First Name" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Key Functional Area</label>
                                    <Select>
                                        <SelectTrigger className="w-full border-[#e5e7eb] rounded-lg">
                                            <SelectValue placeholder="Choose Key Functional Area" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="teaching">Teaching</SelectItem>
                                            <SelectItem value="administration">Administration</SelectItem>
                                            <SelectItem value="research">Research</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">
                                        Diversity & Inclusion Preferences
                                    </label>
                                    <Select>
                                        <SelectTrigger className="w-full border-[#e5e7eb] rounded-lg">
                                            <SelectValue placeholder="Choose preference" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="inclusive">Inclusive Environment</SelectItem>
                                            <SelectItem value="diverse">Diverse Workplace</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="not-disclose" />
                                    <label htmlFor="not-disclose" className="text-sm text-[#737791]">
                                        Not Disclose
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Is CTC Negotiable</label>
                                    <Select>
                                        <SelectTrigger className="w-full border-[#e5e7eb] rounded-lg">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Preferred Salary Type*</label>
                                    <Input placeholder="Salary Type" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Preferred Shift*</label>
                                    <Input placeholder="Choose Preferred Shift" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Industry*</label>
                                    <Select>
                                        <SelectTrigger className="w-full border-[#e5e7eb] rounded-lg">
                                            <SelectValue placeholder="Your First Name" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="education">Education</SelectItem>
                                            <SelectItem value="technology">Technology</SelectItem>
                                            <SelectItem value="healthcare">Healthcare</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Preferred Company Type</label>
                                    <Input placeholder="Preferred Company Type" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Expected CTC</label>
                                    <Select>
                                        <SelectTrigger className="w-full border-[#e5e7eb] rounded-lg">
                                            <SelectValue placeholder="Choose preference" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="3-5">3-5 LPA</SelectItem>
                                            <SelectItem value="5-8">5-8 LPA</SelectItem>
                                            <SelectItem value="8-12">8-12 LPA</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1e2d42] mb-2">Languages Known*</label>
                                    <Input placeholder="Languages Known" className="w-full border-[#e5e7eb] rounded-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="mt-8">
                            <label className="block text-sm font-medium text-[#1e2d42] mb-4">Skills*</label>
                            <div className="flex space-x-4 mb-4">
                                <Input placeholder="Type Here" className="flex-1 border-[#e5e7eb] rounded-lg" />
                                <Input placeholder="Type Here" className="flex-1 border-[#e5e7eb] rounded-lg" />
                                <div className="flex space-x-2">
                                    <Button size="sm" className="w-8 h-8 rounded-full bg-[#4679b5] text-white p-0">
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-8 h-8 rounded-full border-[#e5e7eb] p-0 bg-transparent"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-[#1e2d42] mb-2">Description*</label>
                            <Textarea placeholder="Type Here" className="w-full h-24 border-[#e5e7eb] rounded-lg resize-none" />
                        </div>

                        {/* Add Links */}
                        <div className="mt-6 flex space-x-6">
                            <button className="text-[#4679b5] text-sm font-medium">+ Add Education</button>
                            <button className="text-[#4679b5] text-sm font-medium">+ Add Experience</button>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12">
                            <Button
                                variant="outline"
                                className="px-8 py-2 rounded-full border-[#4679b5] text-[#4679b5] bg-transparent"
                            >
                                Back
                            </Button>
                            <Button className="px-8 py-2 rounded-full bg-[#4679b5] text-white">NEXT</Button>
                        </div>
                    </div>
                </main>
            </div>


        </div>
    )
}
