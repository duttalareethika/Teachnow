import { Bell, ChevronDown, Edit, FileText, Briefcase, User, Video, BookOpen, LogOut, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  const appliedJobs = [
    { id: 1, date: "20/07/2025", company: "Lorem Company", location: "Noida" },
    { id: 2, date: "20/07/2025", company: "Lorem Company", location: "Chennai" },
    { id: 3, date: "20/07/2025", company: "Lorem Company", location: "Hyderabad" },
    { id: 4, date: "20/07/2025", company: "Lorem Company", location: "Kolkata" },
    { id: 5, date: "20/07/2025", company: "Lorem Company", location: "Bangalore" },
    { id: 6, date: "20/07/2025", company: "Lorem Company", location: "Kerala" },
    { id: 7, date: "20/07/2025", company: "Lorem Company", location: "Kochi" },
  ]
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}

      <div className="flex">
        {/* Sidebar */}
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-[#000000] mb-2">
                  Welcome Back <span className="text-[#447d9b]">Dipanjan</span>
                </h1>
                <p className="text-[#737791] mb-4">
                  Profile Last Updated: <span className="font-medium text-[#000000]">July 28, 2025 at 11:37 AM</span>
                </p>
                <Button className="bg-[#9bc9ff] hover:bg-[#447d9b] text-white px-6 py-2 rounded-lg">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit your Profile
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/people-working-with-charts-and-analytics-dashboard.jpg"
                  alt="Dashboard illustration"
                  className="w-80 h-48 object-contain"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#9bc9ff] to-[#447d9b] rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">100</div>
                <div className="text-white/90">Job Alerts</div>
              </div>

              <div className="bg-gradient-to-br from-[#68c396] to-[#008c47] rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">15</div>
                <div className="text-white/90">Saved Jobs</div>
              </div>

              <div className="bg-gradient-to-br from-[#ffa412] to-[#e47825] rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-white/90">Profile Views</div>
              </div>

              <div className="bg-gradient-to-br from-[#c3b5ff] to-[#7b5bff] rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">10</div>
                <div className="text-white/90">Applied Jobs</div>
              </div>
            </div>

            {/* Applied Jobs Table */}
            <div className="bg-white rounded-2xl border border-[#e8e8e8] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-[#e8e8e8]">
                <h2 className="text-xl font-semibold text-[#447d9b]">Applied Jobs</h2>
                <Button className="bg-[#c3b5ff] hover:bg-[#7b5bff] text-white px-4 py-2 rounded-lg text-sm">
                  See All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f9fafb]">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#737791] uppercase tracking-wider">
                        S.NO
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#737791] uppercase tracking-wider">
                        DATE
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#737791] uppercase tracking-wider">
                        COMPANY
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-[#737791] uppercase tracking-wider">
                        LOCATION JOB TITLE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8e8e8]">
                    {appliedJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-[#f9fafb]">
                        <td className="py-4 px-6 text-sm text-[#000000]">{job.id}</td>
                        <td className="py-4 px-6 text-sm text-[#737791]">{job.date}</td>
                        <td className="py-4 px-6 text-sm text-[#737791]">{job.company}</td>
                        <td className="py-4 px-6 text-sm text-[#737791]">{job.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          
          </div>
        </main>
      </div>
    </div>
  )
}
