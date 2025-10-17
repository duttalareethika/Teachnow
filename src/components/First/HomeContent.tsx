// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Search,
//   GraduationCap,
//   Users,
//   Wrench,
//   Heart,
//   Target,
//   Palette,
//   BookOpen,
//   UserCheck,
//   Send,
//   Zap,
// } from "lucide-react"

// export function HomeContent() {
//   const categories = [
//     { icon: GraduationCap, title: "School Teachers", color: "bg-blue-50 text-blue-600" },
//     { icon: Users, title: "College & University Faculty", color: "bg-green-50 text-green-600" },
//     { icon: Wrench, title: "Engineering & Polytechnic", color: "bg-orange-50 text-orange-600" },
//     { icon: Heart, title: "Medical & Paramedical", color: "bg-red-50 text-red-600" },
//     { icon: Target, title: "Coaching & Test Prep", color: "bg-purple-50 text-purple-600" },
//     { icon: Palette, title: "Sports & Arts Trainers", color: "bg-pink-50 text-pink-600" },
//     { icon: BookOpen, title: "Curriculum & Consulting", color: "bg-indigo-50 text-indigo-600" },
//     { icon: UserCheck, title: "HR & Admin Roles", color: "bg-teal-50 text-teal-600" },
//   ]

//   return (
//     <div>
//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div>
//               <h1 className="text-5xl font-bold leading-tight mb-6">
//                 <span className="text-black">Explore</span>{" "}
//                 <span className="text-[#447D9B]">Top Job</span>{" "}
//                 <span className="text-black">Opportunities In</span>{" "}
//                 <span className="text-[#447D9B]">Education</span>
//               </h1>
//               <p className="text-lg text-gray-600 mb-8">
//                 Your one-stop job portal for teaching, training & education
//               </p>

//               {/* Search Bar */}
//               <div className="bg-white rounded-full border border-gray-200 p-2 flex items-center gap-2 mb-6 shadow-sm">
//                 <Input placeholder="Job Title" className="border-0 bg-transparent flex-1 focus-visible:ring-0" />
//                 <div className="w-px h-8 bg-gray-200"></div>
//                 <Select>
//                   <SelectTrigger className="border-0 bg-transparent w-32 focus:ring-0">
//                     <SelectValue placeholder="Location" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="anywhere">Anywhere</SelectItem>
//                     <SelectItem value="remote">Remote</SelectItem>
//                     <SelectItem value="onsite">On-site</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
//                   <Search className="w-4 h-4 mr-2" />
//                   Search
//                 </Button>
//               </div>

//               <p className="text-sm text-gray-500">
//                 Popular Search: Teacher, Clerks, Accountants, Principals
//               </p>
//             </div>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-2 gap-5">
//               <Card className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-0">
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="font-semibold text-lg">AI Resume Builder</h3>
//                     <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
//                       <Zap className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <p className="text-blue-100 text-sm">Create professional resumes in minutes</p>
//                 </CardContent>
//               </Card>

//               <Card className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-0">
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="font-semibold text-lg">AI Cover Letters</h3>
//                     <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
//                       <Send className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <p className="text-emerald-100 text-sm">Personalized letters for each application</p>
//                 </CardContent>
//               </Card>

//               <Card className="bg-gradient-to-br from-amber-500 to-amber-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-0">
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="font-semibold text-lg">Mock Interviews</h3>
//                     <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
//                       <Target className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <p className="text-amber-100 text-sm">Practice with AI-powered interviews</p>
//                 </CardContent>
//               </Card>

//               <Card className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-0">
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="font-semibold text-lg">Teaching Resources</h3>
//                     <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
//                       <BookOpen className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <p className="text-purple-100 text-sm">Free lesson plans & curriculum guides</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= JOB CATEGORIES ================= */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//             Most <span className="text-blue-600">Popular Job</span> Categories
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((category, index) => {
//               const Icon = category.icon
//               return (
//                 <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white">
//                   <CardContent className="p-6 text-center">
//                     <div
//                       className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-4`}
//                     >
//                       <Icon className="w-6 h-6" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= TOP EMPLOYERS ================= */}
//       <section className="bg-gradient-to-r from-purple-400 to-purple-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-4xl font-bold text-white">Top Employers</h2>
//             <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
//               View All
//             </Button>
//           </div>

//           <div className="flex items-center justify-between space-x-8 overflow-x-auto">
//             {[1, 2, 3, 4, 5, 6].map((index) => (
//               <div key={index} className="flex-shrink-0">
//                 <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-semibold text-sm">Logoipsum</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // "use client"

// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select"
// // import { Card, CardContent } from "@/components/ui/card"
// // import {
// //   Search,
// //   GraduationCap,
// //   Users,
// //   Wrench,
// //   Heart,
// //   Target,
// //   Palette,
// //   BookOpen,
// //   UserCheck,
// //   Send,
// //   Zap,
// // } from "lucide-react"

// // export function HomeContent() {
// //   const categories = [
// //     { icon: GraduationCap, title: "School Teachers", color: "bg-blue-50 text-blue-600" },
// //     { icon: Users, title: "College & University Faculty", color: "bg-green-50 text-green-600" },
// //     { icon: Wrench, title: "Engineering & Polytechnic", color: "bg-orange-50 text-orange-600" },
// //     { icon: Heart, title: "Medical & Paramedical", color: "bg-red-50 text-red-600" },
// //     { icon: Target, title: "Coaching & Test Prep", color: "bg-purple-50 text-purple-600" },
// //     { icon: Palette, title: "Sports & Arts Trainers", color: "bg-pink-50 text-pink-600" },
// //     { icon: BookOpen, title: "Curriculum & Consulting", color: "bg-indigo-50 text-indigo-600" },
// //     { icon: UserCheck, title: "HR & Admin Roles", color: "bg-teal-50 text-teal-600" },
// //   ]

// //   return (
// //     <div>
// //       {/* ================= HERO SECTION ================= */}
// //       <section
// //         className="py-20"
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div>
// //             <h1 className="text-5xl font-bold text-white leading-tight mb-6">
// //               Explore <span className="text-yellow-200">Top Job Opportunities</span> in{" "}
// //               <span className="text-yellow-200">Education</span>
// //             </h1>
// //             <p className="text-lg text-white/90 mb-8">
// //               Your one-stop job portal for teaching, training & education
// //             </p>

// //             {/* Search Bar */}
// //             <div className="bg-white rounded-full border border-gray-200 p-2 flex items-center gap-2 mb-6 shadow-sm">
// //               <Input
// //                 placeholder="Job Title"
// //                 className="border-0 bg-transparent flex-1 focus-visible:ring-0"
// //               />
// //               <div className="w-px h-8 bg-gray-200"></div>
// //               <Select>
// //                 <SelectTrigger className="border-0 bg-transparent w-32 focus:ring-0">
// //                   <SelectValue placeholder="Location" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="anywhere">Anywhere</SelectItem>
// //                   <SelectItem value="remote">Remote</SelectItem>
// //                   <SelectItem value="onsite">On-site</SelectItem>
// //                 </SelectContent>
// //               </Select>
// //               <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
// //                 <Search className="w-4 h-4 mr-2" />
// //                 Search
// //               </Button>
// //             </div>

// //             <p className="text-sm text-white/80">
// //               Popular Search: Teacher, Clerks, Accountants, Principals
// //             </p>
// //           </div>

// //           {/* Right Features */}
// //           <div className="grid grid-cols-2 gap-5">
// //             <Card className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <CardContent className="p-0">
// //                 <div className="flex items-start justify-between mb-4">
// //                   <h3 className="font-semibold text-lg">AI Resume Builder</h3>
// //                   <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
// //                     <Zap className="w-5 h-5" />
// //                   </div>
// //                 </div>
// //                 <p className="text-blue-100 text-sm">Create professional resumes in minutes</p>
// //               </CardContent>
// //             </Card>

// //             <Card className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <CardContent className="p-0">
// //                 <div className="flex items-start justify-between mb-4">
// //                   <h3 className="font-semibold text-lg">AI Cover Letters</h3>
// //                   <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
// //                     <Send className="w-5 h-5" />
// //                   </div>
// //                 </div>
// //                 <p className="text-emerald-100 text-sm">
// //                   Personalized letters for each application
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card className="bg-gradient-to-br from-amber-500 to-amber-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <CardContent className="p-0">
// //                 <div className="flex items-start justify-between mb-4">
// //                   <h3 className="font-semibold text-lg">Mock Interviews</h3>
// //                   <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
// //                     <Target className="w-5 h-5" />
// //                   </div>
// //                 </div>
// //                 <p className="text-amber-100 text-sm">Practice with AI-powered interviews</p>
// //               </CardContent>
// //             </Card>

// //             <Card className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <CardContent className="p-0">
// //                 <div className="flex items-start justify-between mb-4">
// //                   <h3 className="font-semibold text-lg">Teaching Resources</h3>
// //                   <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
// //                     <BookOpen className="w-5 h-5" />
// //                   </div>
// //                 </div>
// //                 <p className="text-purple-100 text-sm">
// //                   Free lesson plans & curriculum guides
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= JOB CATEGORIES ================= */}
// //       <section className="bg-gray-50 py-16">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
// //             Most <span className="text-blue-600">Popular Job</span> Categories
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {categories.map((category, index) => {
// //               const Icon = category.icon
// //               return (
// //                 <Card
// //                   key={index}
// //                   className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white rounded-xl"
// //                 >
// //                   <CardContent className="p-6 text-center">
// //                     <div
// //                       className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-4`}
// //                     >
// //                       <Icon className="w-6 h-6" />
// //                     </div>
// //                     <h3 className="font-semibold text-gray-900 text-sm">
// //                       {category.title}
// //                     </h3>
// //                   </CardContent>
// //                 </Card>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= TOP EMPLOYERS ================= */}
// //       <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-4xl font-bold text-white">Top Employers</h2>
// //             <Button
// //               variant="outline"
// //               className="bg-white/20 border-white/30 text-white hover:bg-white/30"
// //             >
// //               View All
// //             </Button>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
// //             {["EduTech", "BrightFuture", "SmartLearn", "SkillHub", "Global School", "NextGen"].map(
// //               (employer, index) => (
// //                 <div
// //                   key={index}
// //                   className="bg-white/20 backdrop-blur-md text-white rounded-lg p-6 flex items-center justify-center font-semibold hover:bg-white/30 transition"
// //                 >
// //                   {employer}
// //                 </div>
// //               )
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  GraduationCap,
  Users,
  Cog,
  Heart,
  Target,
  Palette,
  BookOpen,
  UserCheck,
  Send,
  Zap,
} from "lucide-react"

export function HomeContent() {
  const categories = [
    {
      title: "School Teachers",
      icon: GraduationCap,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "College & University Faculty",
      icon: Users,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Engineering & Polytechnic",
      icon: Cog,
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
    },
    {
      title: "Medical & Paramedical",
      icon: Heart,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Coaching & Test Prep",
      icon: Target,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Sports & Arts Trainers",
      icon: Palette,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Curriculum & Consulting",
      icon: BookOpen,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "HR & Admin Roles",
      icon: UserCheck,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ]

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                <span className="text-black">Explore</span>{" "}
                <span className="text-[#447D9B]">Top Job</span>{" "}
                <span className="text-black">Opportunities In</span>{" "}
                <span className="text-[#447D9B]">Education</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your one-stop job portal for teaching, training & education
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-full border border-gray-200 p-2 flex items-center gap-2 mb-6 shadow-sm">
                <Input placeholder="Job Title" className="border-0 bg-transparent flex-1 focus-visible:ring-0" />
                <div className="w-px h-8 bg-gray-200"></div>
                <Select>
                  <SelectTrigger className="border-0 bg-transparent w-32 focus:ring-0">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anywhere">Anywhere</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Popular Search: Teacher, Clerks, Accountants, Principals
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-5">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg">AI Resume Builder</h3>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm">Create professional resumes in minutes</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg">AI Cover Letters</h3>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Send className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-emerald-100 text-sm">Personalized letters for each application</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500 to-amber-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg">Mock Interviews</h3>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-amber-100 text-sm">Practice with AI-powered interviews</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg">Teaching Resources</h3>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm">Free lesson plans & curriculum guides</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOB CATEGORIES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Most <span className="text-blue-600">Popular Job</span> Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className={`p-6 ${category.bgColor} border border-border hover:shadow-lg transition-all cursor-pointer hover:scale-105`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-white">
                      <Icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">{category.title}</h3>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= TOP EMPLOYERS ================= */}
      <section className="bg-gradient-to-r from-purple-400 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-white">Top Employers</h2>
            <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              View All
            </Button>
          </div>

          <div className="flex items-center justify-between space-x-8 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">Logoipsum</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
