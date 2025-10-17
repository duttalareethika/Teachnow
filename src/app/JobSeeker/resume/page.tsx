"use client"
import { Bell, ChevronDown, FileText, User, Briefcase, Video, BookOpen, LogOut, BarChart3, Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function TeachnowDashboard() {
    const router = useRouter()

    const templates = [
        {
            id: 1,
            name: "Template 1",
            image: "/templates/professional.png",
        },
        {
            id: 2,
            name: "Template 2",
            image: "/modern-resume-template-with-photo-and-clean-design.jpg",
        },
        {
            id: 3,
            name: "Template 3",
            image: "/dark-professional-resume-template-with-sidebar.jpg",
        },
        {
            id: 4,
            name: "Template 4",
            image: "/creative-resume-template-with-photo-and-modern-lay.jpg",
        },
        {
            id: 5,
            name: "Template 5",
            image: "/professional-nursing-resume-template.jpg",
        },
        {
            id: 6,
            name: "Template 6",
            image: "/minimalist-resume-template-with-clean-typography.jpg",
        },
    ]
    const handleTemplateClick = (id: number) => {
        router.push(`/JobSeeker/resumeform?template=${id}`)
    }

    return (
        <div className="min-h-screen bg-[#f9fafb]">


            <div className="flex">


                {/* Main Content */}
                <main className="flex-1 p-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-[#447d9b] mb-4">Choose a template layout</h1>
                            <p className="text-[#737791] text-lg mb-8">You can build your own design or select a pre made style</p>

                            <div className="flex items-center justify-center space-x-4">
                                <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-[#1e2d42] px-6 py-3 rounded-lg font-medium">
                                    Continue
                                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>

                                <span className="text-[#737791] font-medium">Or</span>

                                <Button
                                    variant="outline"
                                    className="border-[#9bc9ff] text-[#447d9b] hover:bg-[#9bc9ff] hover:text-[#1e2d42] px-6 py-3 rounded-lg font-medium bg-transparent"
                                >
                                    Upload Your CV
                                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>

                        {/* Templates Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {templates.map((template) => (
                                <div key={template.id} className="group cursor-pointer" onClick={() => handleTemplateClick(template.id)} >
                                    <div className="bg-[#ffffff] rounded-lg shadow-sm border border-[#e5e7eb] overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="aspect-[3/4] bg-[#f9fafb] flex items-center justify-center">
                                            <img
                                                src={template.image || "/placeholder.svg"}
                                                alt={template.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-center mt-4 text-[#333333] font-medium">{template.name}</h3>
                                </div>
                            ))}
                        </div>


                    </div>
                </main>
            </div>
        </div>
    )
}
