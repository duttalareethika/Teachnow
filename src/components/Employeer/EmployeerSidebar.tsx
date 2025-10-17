// "use client"

// import {
//   BarChart3,
//   Building2,
//   Calendar,
//   FileText,
//   Briefcase,
//   Search,
//   CreditCard,
//   LogOut,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const sidebarItems = [
//   { icon: BarChart3, label: "Dashboard", active: true, href: "/Employer" },
//   { icon: Building2, label: "Company Profile", active: false, href: "/Employer/CompanyProfile" },
//   { icon: Calendar, label: "My Plan", active: false, href: "/Employer/Pricing" },
//   { icon: FileText, label: "Post a New Job", active: false, href: "/Employer/Postjob" },
//   { icon: FileText, label: "Bulk Jobs Posting", active: false, href: "/jobs/bulk" },
//   { icon: Briefcase, label: "Manage Jobs", active: false, href: "/jobs/manage" },
//   { icon: Search, label: "Resume DB Search", active: false, href: "/resume-search" },
//   { icon: CreditCard, label: "Purchase History", active: false, href: "/purchase-history" },
//   { icon: LogOut, label: "Logout", active: false, href: "/logout" },
// ]

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white border-r border-[#e8e8e8] min-h-screen">
//       <div className="p-4">
//         <nav className="space-y-2">
//           {sidebarItems.map((item, index) => (
//             <Button
//               asChild
//               key={index}
//               variant={item.active ? "default" : "ghost"}
//               className={`w-full justify-start ${
//                 item.active
//                   ? "bg-[#9bc9ff] text-white hover:bg-[#256ab8]"
//                   : "text-[#737791] hover:text-[#1e2d42] hover:bg-[#f9fafb]"
//               }`}
//             >
//               <a href={item.href}>
//                 <item.icon className="mr-3 h-4 w-4" />
//                 {item.label}
//               </a>
//             </Button>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   )
// }
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Building2,
  Calendar,
  FileText,
  Briefcase,
  Search,
  CreditCard,
  LogOut,
} from "lucide-react"

const links = [
  { href: "/Employer", label: "Dashboard", icon: BarChart3 },
  { href: "/Employer/CompanyProfile", label: "Company Profile", icon: Building2 },
  { href: "/Employer/Pricing", label: "My Plan", icon: Calendar },
  { href: "/Employer/Postjob", label: "Post a New Job", icon: FileText },
  { href: "/Employer/BulkJobPosting", label: "Bulk Jobs Posting", icon: FileText },
  { href: "/Employer/ManageJob", label: "Manage Jobs", icon: Briefcase },
  { href: "/Employer/ResumeSearch", label: "Resume DB Search", icon: Search },
  { href: "/Employer/PurchaseHistory", label: "Purchase History", icon: CreditCard },
]

export default function EmployerSidebar() {
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
              className={`flex items-center w-full px-4 py-3 rounded-lg transition ${
                active
                  ? "bg-[#9bc9ff] text-white hover:bg-[#447d9b]"
                  : "text-[#737791] hover:text-[#000000] hover:bg-[#f9fafb]"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </Link>
          )
        })}

        {/* Logout at bottom */}
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
