"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, Plus } from "lucide-react"

export function TechnicalSkillsForm({
    goNext,
    goBack,
}: {
    goNext: () => void
    goBack: () => void
}) {
    return (
        <div className="bg-white rounded-lg p-6">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-[#333333] mb-6">
                Technical Skills
            </h2>

            <div className="space-y-6">
                {/* Skill Name */}
                <div>
                    <Label htmlFor="skill" className="text-[#333333] font-medium">
                        Skill Name*
                    </Label>
                    <Input
                        id="skill"
                        placeholder="e.g. JavaScript, React, Python"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Proficiency Level */}
                <div>
                    <Label htmlFor="proficiency" className="text-[#333333] font-medium">
                        Proficiency Level*
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]">
                            <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Years of Experience */}
                <div>
                    <Label htmlFor="experience" className="text-[#333333] font-medium">
                        Years of Experience
                    </Label>
                    <Input
                        id="experience"
                        type="number"
                        placeholder="e.g. 2"
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
