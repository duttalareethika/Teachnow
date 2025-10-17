"use client"
import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  Building2,
  CreditCard,
  Plus,
  FileStack,
  Briefcase,
  Search,
  ShoppingCart,
  LogOut,
  FileText,
  CheckCircle,
  XCircle,
  Edit,
  Users,
  ExternalLink,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Header Component
function Header() {
  return (
    <header className="bg-white border-b border-[#e8e8e8] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-[#1e2d42]">Teachnow</h1>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-[#333333] hover:text-[#1e2d42] font-medium">
              Find Jobs
            </a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42] font-medium">
              Free Resume Builder
            </a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42] font-medium">
              Teaching Resources
            </a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42] font-medium">
              Pricing
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-[#737791]" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-[#eb5757] rounded-full"></span>
          </Button>

          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/professional-man-in-glasses-smiling.jpg" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#1e2d42]">Dipanjan</span>
              <span className="text-xs text-[#737791]">Admin</span>
            </div>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </div>
        </div>
      </div>
    </header>
  )
}

// Sidebar Component
function Sidebar() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Building2, label: "Company Profile" },
    { icon: CreditCard, label: "My Plan" },
    { icon: Plus, label: "Post a New Job" },
    { icon: FileStack, label: "Bulk Jobs posting" },
    { icon: Briefcase, label: "Manage Jobs" },
    { icon: Search, label: "Resume DB search" },
    { icon: ShoppingCart, label: "Purchase History" },
    { icon: LogOut, label: "Logout" },
  ]

  return (
    <aside className="w-64 bg-white border-r border-[#e8e8e8] min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                item.active ? "bg-[#9bc9ff] text-[#256ab8]" : "text-[#737791] hover:bg-[#f9fafb] hover:text-[#1e2d42]",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

// Stats Cards Component
function StatsCards() {
  const stats = [
    {
      title: "Posted Jobs",
      value: "100",
      icon: FileText,
      bgColor: "bg-[#4E96EA]",
      textColor: "text-white",
    },
    {
      title: "Active Jobs",
      value: "15",
      icon: CheckCircle,
      bgColor: "bg-[#5AB98A]",
      textColor: "text-white",
    },
    {
      title: "Expired Jobs",
      value: "5",
      icon: XCircle,
      bgColor: "bg-[#FFA763]",
      textColor: "text-white",
    },
    {
      title: "Draft Jobs",
      value: "10",
      icon: Edit,
      bgColor: "bg-[#B09DFF]",
      textColor: "text-white",
    },
    {
      title: "Shortlisted Candidates",
      value: "100",
      icon: Users,
      bgColor: "bg-[#4E96EA]",
      textColor: "text-white",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} ${stat.textColor} p-6 border-0 rounded-2xl`}>
          <div className="flex flex-col items-center text-center space-y-2">
            <stat.icon className="h-8 w-8 opacity-80" />
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.title}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}

// Company Profile Views Component
function CompanyProfileViews() {
  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 25 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 35 },
    { month: "May", value: 28 },
    { month: "Jun", value: 40 },
    { month: "Jul", value: 45 },
    { month: "Aug", value: 80 },
    { month: "Sep", value: 35 },
    { month: "Oct", value: 30 },
    { month: "Nov", value: 25 },
    { month: "Dec", value: 20 },
  ]

  const maxValue = Math.max(...chartData.map((d) => d.value))

  return (
    <Card className="bg-white border-[#e8e8e8] rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[#1e2d42] text-lg font-semibold">Company Profile Views</CardTitle>
        <Button variant="outline" size="sm" className="text-[#737791] border-[#d9d9d9] bg-transparent">
          Last 6th Month <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute top-0 left-0 bg-[#1e2d42] text-white px-2 py-1 rounded text-xs font-medium">35%</div>
          <div className="flex items-end justify-between h-48 mt-8">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div
                  className={`w-8 rounded-t ${index === 7 ? "bg-[#9bc9ff]" : "bg-[#dae9ff]"}`}
                  style={{ height: `${(data.value / maxValue) * 160}px` }}
                ></div>
                <span className="text-xs text-[#737791]">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Unread Notifications Component
function UnreadNotifications() {
  const notifications = [
    {
      name: "Shiva Kumar",
      role: "Applied For React JS Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Bharadwaj",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Shiva Kumar",
      role: "Applied For React JS Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Bharadwaj",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
  ]

  return (
    <Card className="bg-white border-[#e8e8e8] rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[#1e2d42] text-lg font-semibold">Unread Notifications</CardTitle>
        <Button variant="ghost" size="sm" className="text-[#7b5bff] hover:text-[#702dff]">
          See All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={notification.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-[#e3ddff] text-[#7b5bff]">
                {notification.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1e2d42] truncate">{notification.name}</p>
              <p className="text-xs text-[#737791] truncate">{notification.role}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Recent Applicants Component
function RecentApplicants() {
  const applicants = [
    {
      name: "K Prakash",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Shiva Kumar Parimala",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Bharadwaj Amith",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Vaishnavi Duddilla",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "K Prakash",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
    {
      name: "Shiva Kumar Parimala",
      role: "Applied For Laravel Fullstack Developer",
      avatar: "/professional-man-in-glasses-smiling.jpg",
    },
  ]

  return (
    <Card className="bg-white border-[#e8e8e8] rounded-2xl">
      <CardHeader>
        <CardTitle className="text-[#4679b5] text-xl font-semibold">Recent Applicants</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicants.map((applicant, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3 p-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={applicant.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-[#dae9ff] text-[#256ab8] text-lg">
                  {applicant.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-[#1e2d42]">{applicant.name}</h3>
                <p className="text-sm text-[#737791] mt-1">{applicant.role}</p>
              </div>
              <Button className="bg-[#9bc9ff] hover:bg-[#256ab8] text-white rounded-lg">
                View Details <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between bg-white p-6 rounded-md ">
        <div>
          <p className="text-[#737791] text-sm">Welcome Back</p>
          <h2 className="text-2xl font-bold text-[#4679b5]">Dipanjan Saha</h2>
        </div>
        <div className="w-48 h-32">
          <img
            src="/people-working-with-charts-and-analytics-dashboard.jpg"
            alt="Analytics illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts and Notifications Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CompanyProfileViews />
        </div>
        <div>
          <UnreadNotifications />
        </div>
      </div>

      {/* Recent Applicants */}
      <RecentApplicants />
    </div>
  )
}

// Main Dashboard Page
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      
      <div className="flex">
       
        <main className="flex-1 p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}