"use client"

import PersonalDetailsForm from "./PersonalDetailsForm"
import { EducationForm } from "./EducationForm"
import { ExperienceForm } from "./ExperienceForm"
import { TechnicalSkillsForm } from "./TechnicalSkillsForm"
import { CertificationsForm } from "./CertificationsForm"

const tabs = [
    { name: "Personal Details", component: PersonalDetailsForm },
    { name: "Education", component: EducationForm },
    { name: "Experience", component: ExperienceForm },
    { name: "Technical Skills", component: TechnicalSkillsForm },
    { name: "Certifications", component: CertificationsForm },
]

const PersonalDetails = ({
    activeIndex,
    setActiveIndex,
    totalSteps,
}: {
    activeIndex: number
    setActiveIndex: (index: number) => void
    totalSteps: number
}) => {
    const progress = ((activeIndex + 1) / totalSteps) * 100
    const ActiveComponent = tabs[activeIndex].component

    const goNext = () => {
        if (activeIndex < totalSteps - 1) setActiveIndex(activeIndex + 1)
    }

    const goBack = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1)
    }

    return (
        <div className="bg-white rounded-lg p-6">
            {/* Progress + Tabs */}
            <div className="flex items-center justify-around mb-6">
                <div className="flex space-x-1">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveIndex(index)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === activeIndex
                                ? "bg-[#9bc9ff] text-white"
                                : "bg-[#f9fafb] text-[#737791] hover:bg-[#cccccc]"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

            </div>

            {/* Active Step */}
            <ActiveComponent goNext={goNext} goBack={goBack} />

        </div>
    )
}

export default PersonalDetails
