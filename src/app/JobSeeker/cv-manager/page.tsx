import {
    Bell,
    ChevronDown,
    Upload,
    BarChart3,
    User,
    Briefcase,
    FileText,
    Video,
    BookOpen,
    Bookmark,
    LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeachnowDashboard() {
    return (
        <div className="min-h-screen bg-[#f9fafb]">


            <div className="flex">


                {/* Main Content */}
                <main className="flex-1 p-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg border-2 border-dashed border-[#d9d9d9] p-16">
                            <div className="text-center">
                                <h2 className="text-3xl font-medium text-[#447d9b] mb-4">Select File</h2>
                                <p className="text-[#737791] mb-8">
                                    To upload file size is (Max 4Mb) and allowed file types are ( .docx, .pdf)
                                </p>

                                <Button
                                    variant="outline"
                                    className="bg-white border-[#d9d9d9] text-[#737791] hover:bg-[#f9fafb] px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto"
                                >
                                    <span>Choose your file</span>
                                    <div className="w-8 h-8 bg-[#447d9b] rounded-full flex items-center justify-center ml-4">
                                        <Upload className="w-4 h-4 text-white" />
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </div>
    )
}
