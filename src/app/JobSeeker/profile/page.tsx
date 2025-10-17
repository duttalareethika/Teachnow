"use client"

import { ArrowRight, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProfileInfoTab from "@/components/tabs/ProfileInfoTab"
import Profile from "@/components/tabs/Profile"
import SocialTab from "@/components/tabs/Social"
import Contact from "@/components/tabs/Contact"

export default function TeachnowDashboard() {
    const [activeTab, setActiveTab] = useState("personal")

    const tabs = [
        { key: "personal", label: "Personal Info" },
        { key: "profile", label: "Profile Info" },
        { key: "social", label: "Social Media Profile" },
        { key: "contact", label: "Contact Info" },
        { key: "cv", label: "CV Manager" },
    ]

    const currentIndex = tabs.findIndex((tab) => tab.key === activeTab)
    const isFirstTab = currentIndex === 0
    const isLastTab = currentIndex === tabs.length - 1

    const handleNext = () => {
        if (!isLastTab) {
            setActiveTab(tabs[currentIndex + 1].key)
        }
    }

    const handleBack = () => {
        if (!isFirstTab) {
            setActiveTab(tabs[currentIndex - 1].key)
        }
    }

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            <div className="flex">
                {/* Main Content */}
                <main className="flex-1 p-6">
                    {/* Tab Navigation */}
                    <div className="flex space-x-2 mb-8">
                        {tabs.map((tab) => (
                            <Button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-6 py-2 rounded-full ${activeTab === tab.key
                                    ? "bg-[#9bc9ff] text-[#4679b5] hover:bg-[#4679b5] hover:text-white"
                                    : "border border-[#e5e5e5] text-[#737791] hover:bg-[#f3f3f4] bg-transparent"
                                    }`}
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </div>

                    {/* Profile Section */}
                    <div className="bg-white rounded-lg p-6 mb-6">
                        {activeTab === "personal" && (
                            <ProfileInfoTab
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                tabs={tabs}
                            />
                        )}

                        {activeTab === "profile" && <Profile />}

                        {activeTab === "social" && (
                            <SocialTab />
                        )}

                        {activeTab === "contact" && (
                            <Contact />
                        )}

                        {activeTab === "cv" && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">CV Manager</h3>
                                <p className="text-[#737791]">
                                    Upload and manage your CV here...
                                </p>
                            </div>
                        )}

                    </div>
                </main>
            </div>


        </div>
    )
}
