"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import PersonalDetails from "@/components/personal-details-form"
import { ResumePreview } from "@/components/resume-preview"

export default function ResumeFormPage() {
    const searchParams = useSearchParams()
    const templateId = searchParams.get("template")

    // --- centralize active step state here ---
    const [activeIndex, setActiveIndex] = useState(0)
    const totalSteps = 5 // Personal, Education, Experience, Skills, Certifications
    const progress = ((activeIndex + 1) / totalSteps) * 100

    return (
        <div className="flex">
            <main className="flex-1 p-6 flex gap-6">
                <div className="flex-1">
                    <PersonalDetails
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        totalSteps={totalSteps}
                    />
                </div>
                <div className="w-80">
                    <ResumePreview
                        templateId={templateId}
                        progress={progress}
                    />
                </div>
            </main>
        </div>
    )
}
