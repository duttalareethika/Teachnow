"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Briefcase, FileText, BookOpen, Video, LogOut, LayoutDashboard } from "lucide-react"

const links = [
    { href: "/JobSeeker", label: "Dashboard", icon: LayoutDashboard },
    { href: "/JobSeeker/profile", label: "My Profile", icon: User },
    { href: "/JobSeeker/jobs", label: "Find Jobs", icon: Briefcase },
    { href: "/JobSeeker/resume", label: "Resume Builder", icon: FileText },
    { href: "/JobSeeker/cv-manager", label: "CV Manager", icon: BookOpen },
    { href: "/JobSeeker/video-resume", label: "Video Resume", icon: Video },
    { href: "/JobSeeker/applied-jobs", label: "Applied Jobs", icon: Briefcase },
    { href: "/JobSeeker/saved-jobs", label: "Saved Jobs", icon: BookOpen },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-white border-r border-[#e8e8e8] min-h-screen p-6">
            <nav className="space-y-2">
                {links.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center w-full px-4 py-3 rounded-lg transition ${active
                                ? "bg-[#9bc9ff] text-white hover:bg-[#447d9b]"
                                : "text-[#737791] hover:text-[#000000] hover:bg-[#f9fafb]"
                                }`}
                        >
                            <Icon className="w-5 h-5 mr-3" />
                            {label}
                        </Link>
                    )
                })}

                <div className="pt-8">
                    <Link
                        href="/logout"
                        className="flex items-center w-full px-4 py-3 rounded-lg text-[#737791] hover:text-[#000000] hover:bg-[#f9fafb]"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Logout
                    </Link>
                </div>
            </nav>
        </aside>
    )
}
