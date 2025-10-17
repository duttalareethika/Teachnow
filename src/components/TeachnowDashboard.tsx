    "use client";
    import {
    Bell,
    ChevronDown,
    BarChart3,
    FileText,
    Briefcase,
    Search,
    CreditCard,
    LogOut,
    Building2,
    Calendar,
    Eye,
    } from "lucide-react";

    import { Button } from "@/components/ui/button";
    import { Card, CardContent } from "@/components/ui/card";
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
    import { Badge } from "@/components/ui/badge";
    import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";

    export default function TeachnowDashboard() {
    const sidebarItems = [
        { icon: BarChart3, label: "Dashboard", active: true },
        { icon: Building2, label: "Company Profile", active: false },
        { icon: Calendar, label: "My Plan", active: false },
        { icon: FileText, label: "Post a New Job", active: false },
        { icon: FileText, label: "Bulk Jobs posting", active: false },
        { icon: Briefcase, label: "Manage Jobs", active: false },
        { icon: Search, label: "Resume DB search", active: false },
        { icon: CreditCard, label: "Purchase History", active: false },
        { icon: LogOut, label: "Logout", active: false },
    ];

    const statsCards = [
        { number: "100", label: "Posted Jobs", color: "bg-[#9bc9ff]", icon: "📄" },
        { number: "15", label: "Active Jobs", color: "bg-[#68c396]", icon: "✅" },
        { number: "5", label: "Expired Jobs", color: "bg-[#ffd4b3]", icon: "⏰" },
        { number: "10", label: "Draft Jobs", color: "bg-[#e3ddff]", icon: "📝" },
        { number: "100", label: "Shortlisted Candidates", color: "bg-[#9bc9ff]", icon: "👥" },
    ];

    const notifications = [
        { name: "Shiva Kumar", role: "Applied For React JS Developer", avatar: "/indian-male-developer.jpg" },
        { name: "Bharadwaj", role: "Applied For Laravel Fullstack Developer", avatar: "/indian-male-developer.jpg" },
        { name: "Shiva Kumar", role: "Applied For React JS Developer", avatar: "/indian-male-developer.jpg" },
        { name: "Bharadwaj", role: "Applied For Laravel Fullstack Developer", avatar: "/indian-male-developer.jpg" },
    ];

    const applicants = [
        { name: "K Prakash", role: "Applied For Laravel Fullstack Developer", avatar: "/indian-female-developer.jpg" },
        {
        name: "Shiva Kumar Parimala",
        role: "Applied For Laravel Fullstack Developer",
        avatar: "/indian-male-developer.jpg",
        },
        { name: "Bharadwaj Amith", role: "Applied For Laravel Fullstack Developer", avatar: "/indian-male-developer.jpg" },
        {
        name: "Vaishnavi Duddilla",
        role: "Applied For Laravel Fullstack Developer",
        avatar: "/indian-female-developer.jpg",
        },
        { name: "K Prakash", role: "Applied For Laravel Fullstack Developer", avatar: "/indian-male-developer.jpg" },
        {
        name: "Shiva Kumar Parimala",
        role: "Applied For Laravel Fullstack Developer",
        avatar: "/indian-male-developer.jpg",
        },
    ];

    const chartData = [
        { month: "Jan", value: 20 },
        { month: "Feb", value: 25 },
        { month: "Mar", value: 30 },
        { month: "Apr", value: 35 },
        { month: "May", value: 40 },
        { month: "Jun", value: 45 },
        { month: "Jul", value: 50 },
        { month: "Aug", value: 85 },
        { month: "Sep", value: 40 },
        { month: "Oct", value: 35 },
        { month: "Nov", value: 30 },
        { month: "Dec", value: 25 },
    ];

    return (
        <div className="min-h-screen bg-[#f9fafb]">
        {/* Header */}
        <header className="bg-white border-b border-[#e8e8e8] px-6 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-[#1e2d42]">Teachnow</h1>
                <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
                    Find Jobs
                </a>
                <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
                    Free Resume Builder
                </a>
                <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
                    Teaching Resources
                </a>
                <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
                    Pricing
                </a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-[#737791]" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 p-0 bg-[#eb5757]" />
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/indian-male-admin.jpg" />
                        <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                        <div className="text-sm font-medium text-[#1e2d42]">Dipanjan</div>
                        <div className="text-xs text-[#737791]">Admin</div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-[#737791]" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </div>
        </header>

        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-[#e8e8e8] min-h-screen">
            <div className="p-4">
                <nav className="space-y-2">
                {sidebarItems.map((item, index) => (
                    <Button
                    key={index}
                    variant={item.active ? "default" : "ghost"}
                    className={`w-full justify-start ${
                        item.active
                        ? "bg-[#9bc9ff] text-white hover:bg-[#256ab8]"
                        : "text-[#737791] hover:text-[#1e2d42] hover:bg-[#f9fafb]"
                    }`}
                    >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.label}
                    </Button>
                ))}
                </nav>
            </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-[#737791] mb-1">Welcome Back</p>
                    <h2 className="text-3xl font-bold text-[#4679b5]">Dipanjan Saha</h2>
                </div>
                <div className="hidden lg:block">
                    <img
                    src="/business-people-working-with-charts-and-analytics-.jpg"
                    alt="Dashboard illustration"
                    className="h-32"
                    />
                </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {statsCards.map((card, index) => (
                <Card key={index} className={`${card.color} border-0 text-white`}>
                    <CardContent className="p-6">
                    <div className="text-3xl font-bold mb-2">{card.number}</div>
                    <div className="text-sm opacity-90">{card.label}</div>
                    </CardContent>
                </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Company Profile Views Chart */}
                <Card className="lg:col-span-2">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-[#1e2d42]">
                        Company Profile Views
                    </h3>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                            Last 6th Month <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
                        <DropdownMenuItem>Last 6 Months</DropdownMenuItem>
                        <DropdownMenuItem>Last Year</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                    <div className="relative">
                    <div className="absolute top-0 right-0 bg-[#1e2d42] text-white px-2 py-1 rounded text-xs">
                        +35%
                    </div>
                    <div className="flex items-end justify-between h-48 space-x-2">
                        {chartData.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center flex-1"
                        >
                            <div
                            className={`w-full rounded-t ${
                                index === 7 ? "bg-[#256ab8]" : "bg-[#dae9ff]"}
                                mb-2`}
                            style={{ height: `${(data.value / 100) * 100}%` }}
                            />
                            <span className="text-xs text-[#737791]">
                            {data.month}
                            </span>
                        </div>
                        ))}
                    </div>
                    </div>
                </CardContent>
                </Card>

                {/* Unread Notifications */}
                <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#1e2d42]">
                        Unread Notifications
                    </h3>
                    <Button variant="ghost" size="sm" className="text-[#7b5bff]">
                        See All
                    </Button>
                    </div>
                    <div className="space-y-4">
                    {notifications.map((notification, index) => (
                        <div key={index} className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage
                            src={notification.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback className="bg-[#e3ddff] text-[#7b5bff]">
                            {notification.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-[#1e2d42] truncate">
                            {notification.name}
                            </p>
                            <p className="text-xs text-[#737791] truncate">
                            {notification.role}
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </div>

            {/* Recent Applicants */}
            <Card>
                <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#4679b5] mb-6">
                    Recent Applicants
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applicants.map((applicant, index) => (
                    <div key={index} className="text-center">
                        <Avatar className="h-16 w-16 mx-auto mb-3">
                        <AvatarImage
                            src={applicant.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback className="bg-[#e3ddff] text-[#7b5bff] text-lg">
                            {applicant.name.charAt(0)}
                        </AvatarFallback>
                        </Avatar>
                        <h4 className="font-semibold text-[#1e2d42] mb-1">
                        {applicant.name}
                        </h4>
                        <p className="text-sm text-[#737791] mb-3">
                        {applicant.role}
                        </p>
                        <Button className="bg-[#9bc9ff] hover:bg-[#256ab8] text-white">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                        </Button>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>

            {/* Footer */}
            <footer className="mt-8 text-center text-sm text-[#737791]">
                Copyright © 2025. All rights reserved.
            </footer>
            </main>
        </div>
        </div>
    );
    }
