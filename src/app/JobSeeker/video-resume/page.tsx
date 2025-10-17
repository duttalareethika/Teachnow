import {
    Bell,
    ChevronDown,
    User,
    BarChart3,
    Briefcase,
    FileText,
    FolderOpen,
    Video,
    BookmarkCheck,
    Archive,
    LogOut,
    Plus,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeachnowDashboard() {
    return (
        <div className="min-h-screen bg-[#f9fafb]">


            <div className="flex">

                {/* Main Content */}
                <main className="flex-1 p-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="border-2 border-dashed border-[#d9d9d9] rounded-lg p-16 text-center bg-[#ffffff]">
                            <div className="mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#447d9b] rounded-full mb-6">
                                    <Plus className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-semibold text-[#447d9b] mb-4">Create your Video Resume</h2>
                                <p className="text-[#737791] text-lg max-w-md mx-auto">
                                    We'll need this access to record your video and record your video within 02:30 Min.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </div>
    )
}
