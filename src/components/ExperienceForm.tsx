"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ArrowRight, ArrowLeft, Plus } from "lucide-react"

export function ExperienceForm({
    goNext,
    goBack,
}: {
    goNext: () => void
    goBack: () => void
}) {
    return (
        <div className="bg-white rounded-lg p-6">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-[#333333] mb-6">Work Experience</h2>

            <div className="space-y-6">
                {/* Company Name */}
                <div>
                    <Label htmlFor="company" className="text-[#333333] font-medium">
                        Company Name*
                    </Label>
                    <Input
                        id="company"
                        placeholder="Type company name"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Job Title */}
                <div>
                    <Label htmlFor="job-title" className="text-[#333333] font-medium">
                        Job Title*
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]">
                            <SelectValue placeholder="Select job title" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="principal">Principal</SelectItem>
                            <SelectItem value="counselor">Counselor</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Type of Employment */}
                <div>
                    <Label htmlFor="employment-type" className="text-[#333333] font-medium">
                        Type of Employment*
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="full-time">Full Time</SelectItem>
                            <SelectItem value="part-time">Part Time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Current Company */}
                <div className="flex items-center space-x-2">
                    <Checkbox id="current" />
                    <Label htmlFor="current" className="text-[#737791]">
                        Current Company
                    </Label>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="from-date" className="text-[#333333] font-medium">
                            From Date
                        </Label>
                        <div className="relative mt-2">
                            <Input
                                id="from-date"
                                placeholder="Choose Date"
                                className="border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5] pr-10"
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#737791]" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="to-date" className="text-[#333333] font-medium">
                            To Date
                        </Label>
                        <div className="relative mt-2">
                            <Input
                                id="to-date"
                                placeholder="Choose Date"
                                className="border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5] pr-10"
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#737791]" />
                        </div>
                    </div>
                </div>

                {/* Work Description */}
                <div>
                    <Label htmlFor="work-description" className="text-[#333333] font-medium">
                        About the Work Experience*
                    </Label>
                    <Textarea
                        id="work-description"
                        placeholder="Describe your role and responsibilities"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5] resize-none"
                    />
                </div>

                {/* Add More */}
                <button className="text-[#4679b5] font-medium flex items-center space-x-1 hover:underline">
                    <Plus className="h-4 w-4" />
                    <span>Add More</span>
                </button>

                {/* Navigation */}
                <div className="flex justify-between pt-6">
                    <Button
                        variant="outline"
                        onClick={goBack}
                        className="border-[#cccccc] text-[#737791] hover:bg-[#f9fafb] bg-transparent"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                    </Button>
                    <Button
                        onClick={goNext}
                        className="bg-[#4679b5] hover:bg-[#447d9b] text-white"
                    >
                        NEXT
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
