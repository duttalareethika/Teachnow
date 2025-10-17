"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar, ArrowRight, ArrowLeft, Plus } from "lucide-react"

export function EducationForm({
    goNext,
    goBack,
}: {
    goNext: () => void
    goBack: () => void
}) {
    return (
        <div className="bg-white rounded-lg p-6">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-[#333333] mb-6">Education</h2>

            <div className="space-y-6">
                {/* Degree */}
                <div>
                    <Label htmlFor="degree" className="text-[#333333] font-medium">
                        Degree Name*
                    </Label>
                    <Input
                        id="degree"
                        placeholder="Type your degree"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Course */}
                <div>
                    <Label htmlFor="course" className="text-[#333333] font-medium">
                        Course
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]">
                            <SelectValue placeholder="Choose course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="computer-science">
                                Computer Science
                            </SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Institute */}
                <div>
                    <Label htmlFor="institute" className="text-[#333333] font-medium">
                        Institute Name
                    </Label>
                    <Input
                        id="institute"
                        placeholder="Type here"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* University */}
                <div>
                    <Label htmlFor="university" className="text-[#333333] font-medium">
                        University
                    </Label>
                    <Input
                        id="university"
                        placeholder="Type here"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Currently Pursuing */}
                <div className="flex items-center space-x-2">
                    <Checkbox id="currently-pursuing" />
                    <Label htmlFor="currently-pursuing" className="text-[#737791]">
                        Currently Pursuing
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

                {/* Grade Type */}
                <div>
                    <RadioGroup defaultValue="cgpa" className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="cgpa"
                                id="cgpa"
                                className="border-[#4679b5] text-[#4679b5]"
                            />
                            <Label htmlFor="cgpa" className="text-[#333333]">
                                CGPA
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="percentage"
                                id="percentage"
                                className="border-[#737791]"
                            />
                            <Label htmlFor="percentage" className="text-[#333333]">
                                Percentage
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Grade Value */}
                <div>
                    <Label htmlFor="cgpa-value" className="text-[#333333] font-medium">
                        CGPA / Percentage
                    </Label>
                    <Input
                        id="cgpa-value"
                        placeholder="Type value"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
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
