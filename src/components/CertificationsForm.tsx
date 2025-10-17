"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ArrowRight, ArrowLeft, Plus } from "lucide-react"

export function CertificationsForm({
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
                Certifications & Achievements
            </h2>

            <div className="space-y-6">
                {/* Certification Name */}
                <div>
                    <Label htmlFor="certification" className="text-[#333333] font-medium">
                        Certification*
                    </Label>
                    <Input
                        id="certification"
                        placeholder="e.g. AWS Certified Solutions Architect"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Certification Link */}
                <div>
                    <Label htmlFor="certification-link" className="text-[#333333] font-medium">
                        Link (Optional)
                    </Label>
                    <Input
                        id="certification-link"
                        placeholder="Paste link to certificate"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="certification-description" className="text-[#333333] font-medium">
                        Description
                    </Label>
                    <Textarea
                        id="certification-description"
                        placeholder="Describe certification details"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5] resize-none"
                    />
                </div>

                {/* Issuing Organization */}
                <div>
                    <Label htmlFor="organization" className="text-[#333333] font-medium">
                        Issuing Organization
                    </Label>
                    <Input
                        id="organization"
                        placeholder="e.g. Amazon Web Services"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5]"
                    />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="from-date" className="text-[#333333] font-medium">
                            From Date*
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
                            To Date*
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

                {/* Add More */}
                <button className="text-[#4679b5] font-medium flex items-center space-x-1 hover:underline">
                    <Plus className="h-4 w-4" />
                    <span>Add More</span>
                </button>

                {/* Awards & Achievements */}
                <div>
                    <Label htmlFor="achievements" className="text-[#333333] font-medium">
                        Awards & Achievements
                    </Label>
                    <Textarea
                        id="achievements"
                        placeholder="List your achievements here"
                        className="mt-2 border-[#cccccc] focus:border-[#4679b5] focus:ring-[#4679b5] resize-none min-h-[100px]"
                    />
                </div>

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
