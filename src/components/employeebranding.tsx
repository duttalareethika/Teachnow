
// // // "use client"

// // // import { useState } from "react"
// // // import { Edit2, ArrowRight } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { Input } from "@/components/ui/input"
// // // import { Textarea } from "@/components/ui/textarea"
// // // import { Card } from "@/components/ui/card"

// // // const tabs = ["Profile", "Founding Info", "Users", "Email Notification"]

// // // export function EmployerBranding() {
// // //   const [activeTab, setActiveTab] = useState(0)

// // //   return (
// // //     <div className="max-w-6xl">
// // //       <h1 className="text-3xl font-semibold text-[#447d9b] mb-8">Employer Branding</h1>

// // //       {/* Tabs */}
// // //       <div className="flex space-x-4 mb-8">
// // //         {tabs.map((tab, index) => (
// // //           <Button
// // //             key={index}
// // //             variant={activeTab === index ? "default" : "outline"}
// // //             className={
// // //               activeTab === index
// // //                 ? "bg-[#9bc9ff] hover:bg-[#447d9b] text-white border-0 rounded-full px-6"
// // //                 : "border-[#b1b1b1] text-[#737791] hover:text-[#333333] rounded-full px-6"
// // //             }
// // //             onClick={() => setActiveTab(index)}
// // //           >
// // //             {tab}
// // //           </Button>
// // //         ))}
// // //       </div>

// // //       <div className="space-y-8">
// // //         {/* Cover Photo */}
// // //         <Card className="relative h-48 bg-gradient-to-r from-[#9bc9ff]/30 to-[#447d9b]/20 border border-[#b1b1b1]/20 rounded-lg overflow-hidden">
// // //           <div className="absolute inset-0 flex items-center justify-center">
// // //             <span className="text-[#737791] font-medium">Cover Photo</span>
// // //           </div>
// // //           <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
// // //             <Edit2 className="h-4 w-4 text-[#702dff]" />
// // //           </Button>
// // //         </Card>

// // //         {/* Company Logo */}
// // //         <div className="flex items-start space-x-6">
// // //           <div className="relative">
// // //             <div className="w-24 h-24 bg-[#3d73ff] rounded-lg flex items-center justify-center">
// // //               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
// // //                 <div className="w-4 h-4 bg-[#3d73ff] rounded-full relative">
// // //                   <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <Button
// // //               size="icon"
// // //               variant="ghost"
// // //               className="absolute -bottom-2 -right-2 bg-white border border-[#b1b1b1]/20 hover:bg-[#f9fafb]"
// // //             >
// // //               <Edit2 className="h-3 w-3 text-[#702dff]" />
// // //             </Button>
// // //           </div>
// // //           <div>
// // //             <h3 className="font-semibold text-[#333333] mb-1">Company Logo</h3>
// // //             <p className="text-sm text-[#737791]">
// // //               Max file size is 1MB, and suitable
// // //               <br />
// // //               files are .jpg, .jpeg & .png
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Form Fields */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           <div>
// // //             <label className="block text-sm font-medium text-[#333333] mb-2">Company Name*</label>
// // //             <Input placeholder="Please Enter Company Name" className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b]" />
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-[#333333] mb-2">Website Link*</label>
// // //             <Input placeholder="Please Enter Your Link Here" className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b]" />
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <label className="block text-sm font-medium text-[#333333] mb-2">About Company*</label>
// // //           <Textarea placeholder="Add about your company" rows={4} className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b] resize-none" />
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           <div>
// // //             <label className="block text-sm font-medium text-[#333333] mb-2">Areas Of Expertise*</label>
// // //             <Input placeholder="Please Enter Company Name" className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b]" />
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-[#333333] mb-2">Add Social Links</label>
// // //             <Input placeholder="Please Enter Your Link Here" className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b]" />
// // //           </div>
// // //         </div>

// // //         {/* Next Button */}
// // //         <div className="flex justify-end pt-6">
// // //           <Button className="bg-[#9bc9ff] hover:bg-[#447d9b] text-white px-8 py-2 rounded-lg flex items-center space-x-2">
// // //             <span>Next</span>
// // //             <ArrowRight className="h-4 w-4" />
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // "use client"

// // import { useState } from "react"
// // import { Edit2, ArrowRight, Calendar, Upload } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Label } from "@/components/ui/label"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { Card } from "@/components/ui/card"
// // import { cn } from "@/lib/utils"

// // export function EmployerBrandingForm() {
// //   const tabs = ["Profile", "Founding Info", "Users", "Email Notification"]
// //   const [activeTab, setActiveTab] = useState(0)

// //   const nextTab = () => {
// //     if (activeTab < tabs.length - 1) setActiveTab(activeTab + 1)
// //   }

// //   const prevTab = () => {
// //     if (activeTab > 0) setActiveTab(activeTab - 1)
// //   }

// //   return (
// //     <div className="bg-white rounded-lg max-w-6xl mx-auto p-6">
// //       <h1 className="text-3xl font-semibold text-[#447d9b] mb-8">Employer Branding</h1>

// //       {/* Tabs */}
// //       <div className="flex space-x-4 mb-8">
// //         {tabs.map((tab, index) => (
// //           <button
// //             key={tab}
// //             onClick={() => setActiveTab(index)}
// //             className={cn(
// //               "px-6 py-3 rounded-full text-sm font-medium transition-colors",
// //               index === activeTab
// //                 ? "bg-[#9bc9ff] text-white"
// //                 : "bg-white border border-[#d9d9d9] text-[#737791] hover:bg-[#f9fafb]"
// //             )}
// //           >
// //             {tab}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Form Content */}
// //       <div className="space-y-6">
// //         {activeTab === 0 && <ProfileForm />}
// //         {activeTab === 1 && <FoundingInfoForm />}
// //         {activeTab === 2 && <div className="text-center text-gray-500 py-12">Users Form Placeholder</div>}
// //         {activeTab === 3 && <div className="text-center text-gray-500 py-12">Email Notification Placeholder</div>}
// //       </div>

// //       {/* Navigation Buttons */}
// //       <div className="flex justify-between mt-12">
// //         <Button
// //           variant="outline"
// //           onClick={prevTab}
// //           disabled={activeTab === 0}
// //           className="px-8 py-3 border-[#447d9b] text-[#447d9b] hover:bg-[#447d9b] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
// //         >
// //           Back
// //         </Button>
// //         <Button
// //           onClick={nextTab}
// //           className="px-8 py-3 bg-[#9bc9ff] hover:bg-[#4679b5] text-white"
// //         >
// //           {activeTab === tabs.length - 1 ? "Submit" : "Next"}
// //         </Button>
// //       </div>
// //     </div>
// //   )
// // }

// // /* ------------------- PROFILE FORM ------------------- */
// // function ProfileForm() {
// //   return (
// //     <div className="space-y-8">
// //       {/* Cover Photo */}
// //       <Card className="relative h-48 bg-gradient-to-r from-[#9bc9ff]/30 to-[#447d9b]/20 border border-[#b1b1b1]/20 rounded-lg overflow-hidden">
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <span className="text-[#737791] font-medium">Cover Photo</span>
// //         </div>
// //         <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
// //           <Edit2 className="h-4 w-4 text-[#702dff]" />
// //         </Button>
// //       </Card>

// //       {/* Company Logo */}
// //       <div className="flex items-start space-x-6">
// //         <div className="relative">
// //           <div className="w-24 h-24 bg-[#3d73ff] rounded-lg flex items-center justify-center">
// //             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
// //               <div className="w-4 h-4 bg-[#3d73ff] rounded-full relative">
// //                 <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
// //               </div>
// //             </div>
// //           </div>
// //           <Button
// //             size="icon"
// //             variant="ghost"
// //             className="absolute -bottom-2 -right-2 bg-white border border-[#b1b1b1]/20 hover:bg-[#f9fafb]"
// //           >
// //             <Edit2 className="h-3 w-3 text-[#702dff]" />
// //           </Button>
// //         </div>
// //         <div>
// //           <h3 className="font-semibold text-[#333333] mb-1">Company Logo</h3>
// //           <p className="text-sm text-[#737791]">
// //             Max file size is 1MB, and suitable files are .jpg, .jpeg & .png
// //           </p>
// //         </div>
// //       </div>

// //       {/* Form Fields */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <div>
// //           <Label className="text-sm font-medium text-[#333333] mb-2 block">Company Name*</Label>
// //           <Input placeholder="Please Enter Company Name" className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b]" />
// //         </div>
// //         <div>
// //           <Label className="text-sm font-medium text-[#333333] mb-2 block">Website Link*</Label>
// //           <Input placeholder="Please Enter Your Link Here" className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b]" />
// //         </div>
// //       </div>

// //       <div>
// //         <Label className="text-sm font-medium text-[#333333] mb-2 block">About Company*</Label>
// //         <Textarea placeholder="Add about your company" rows={4} className="border-[#b1b1b1]/30 focus:border-[#447d9b] focus:ring-[#447d9b] resize-none" />
// //       </div>
// //     </div>
// //   )
// // }

// // /* ------------------- FOUNDING INFO FORM ------------------- */
// // function FoundingInfoForm() {
// //   return (
// //     <div className="space-y-6">
// //       {/* License Upload */}
// //       <div>
// //         <Label className="text-sm font-medium text-[#333333] mb-2 block">Current License:</Label>
// //         <div className="border-2 border-dashed border-[#d9d9d9] rounded-lg p-12 text-center">
// //           <Upload className="h-12 w-12 text-[#b1b1b1] mx-auto mb-4" />
// //           <p className="text-[#737791] font-medium">Add/Update License</p>
// //         </div>
// //         <p className="text-xs text-[#737791] mt-2">
// //           Max file size is 1MB, and suitable files are .jpg, .jpeg & .png
// //         </p>
// //       </div>

// //       {/* Organization Type */}
// //       <div>
// //         <Label className="text-sm font-medium text-[#333333] mb-2 block">
// //           Organization Type<span className="text-[#eb5757]">*</span>
// //         </Label>
// //         <Select>
// //           <SelectTrigger className="w-full bg-white border-[#d9d9d9]">
// //             <SelectValue placeholder="Select Organization Type" />
// //           </SelectTrigger>
// //           <SelectContent>
// //             <SelectItem value="corporation">Corporation</SelectItem>
// //             <SelectItem value="llc">LLC</SelectItem>
// //             <SelectItem value="partnership">Partnership</SelectItem>
// //             <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
// //           </SelectContent>
// //         </Select>
// //       </div>

// //       {/* Bottom Row */}
// //       <div className="grid grid-cols-3 gap-6">
// //         <div>
// //           <Label className="text-sm font-medium text-[#333333] mb-2 block">
// //             Industry Type<span className="text-[#eb5757]">*</span>
// //           </Label>
// //           <Select>
// //             <SelectTrigger className="w-full bg-white border-[#d9d9d9]">
// //               <SelectValue placeholder="Select..." />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="education">Education</SelectItem>
// //               <SelectItem value="technology">Technology</SelectItem>
// //               <SelectItem value="healthcare">Healthcare</SelectItem>
// //               <SelectItem value="finance">Finance</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         <div>
// //           <Label className="text-sm font-medium text-[#333333] mb-2 block">GST Number</Label>
// //           <Input placeholder="Eg: 22AAAAA0000A1Z5" className="bg-white border-[#d9d9d9]" />
// //         </div>

// //         <div>
// //           <Label className="text-sm font-medium text-[#333333] mb-2 block">
// //             Est. Since<span className="text-[#eb5757]">*</span>
// //           </Label>
// //           <div className="relative">
// //             <Input placeholder="dd/mm/yyyy" className="bg-white border-[#d9d9d9] pr-10" />
// //             <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#737791]" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// "use client"

// import { useState } from "react"
// import {
//   Bell,
//   ChevronDown,
//   ArrowRight,
//   ArrowLeft,
//   Building2,
//   User,
//   Briefcase,
//   FileText,
//   Search,
//   CreditCard,
//   LogOut,
//   BarChart3,
//   Settings,
//   Edit2,
//   Calendar,
//   Upload,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

// export default function TeachnowDashboard() {
//   const tabs = ["Profile", "Founding Info", "Users", "Email Notification"]
//   const [activeTab, setActiveTab] = useState(0)

//   return (
//     <div className="min-h-screen bg-[#f9fafb] flex flex-col">
//       {/* Top Navbar */}
//       <header className="bg-white border-b border-[#e5e5e5] px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-8">
//             <h1 className="text-2xl font-bold text-[#1e2d42]">Teachnow</h1>
//             <nav className="flex items-center space-x-6">
//               {["Find Jobs", "Free Resume Builder", "Teaching Resources", "Pricing"].map((item) => (
//                 <a key={item} href="#" className="text-[#333333] hover:text-[#447d9b] font-medium">
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Bell className="w-6 h-6 text-[#737791]" />
//               <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ffa412] rounded-full" />
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="flex items-center space-x-2 p-2">
//                   <Avatar className="w-8 h-8">
//                     <AvatarImage src="/professional-man.png" />
//                     <AvatarFallback>D</AvatarFallback>
//                   </Avatar>
//                   <div className="text-left">
//                     <div className="text-sm font-medium text-[#1e2d42]">Dipanjan</div>
//                     <div className="text-xs text-[#737791]">Admin</div>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-[#737791]" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem>Logout</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white border-r border-[#e5e5e5] min-h-screen">
//           <div className="p-6">
//             <nav className="space-y-2">
//               {[
//                 { label: "Dashboard", icon: BarChart3 },
//                 { label: "Company Profile", icon: Building2 },
//                 { label: "My Plan", icon: User },
//                 { label: "Post a New Job", icon: Briefcase },
//                 { label: "Bulk Jobs posting", icon: FileText },
//                 { label: "Manage Jobs", icon: Settings },
//                 { label: "Resume DB search", icon: Search },
//                 { label: "Purchase History", icon: CreditCard },
//                 { label: "Logout", icon: LogOut },
//               ].map(({ label, icon: Icon }, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className={cn(
//                     "flex items-center space-x-3 px-3 py-2 rounded-lg",
//                     label === "Company Profile"
//                       ? "bg-[#447d9b] text-white"
//                       : "text-[#737791] hover:bg-[#f2f2f2]"
//                   )}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span>{label}</span>
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </aside>

//         {/* Main */}
//         <main className="flex-1 p-8">
//           <div className="max-w-6xl mx-auto">
//             <h1 className="text-3xl font-semibold text-[#447d9b] mb-8">Employer Branding</h1>

//             {/* Tabs */}
//             <div className="flex space-x-4 mb-8">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(index)}
//                   className={cn(
//                     "px-6 py-2 rounded-full text-sm font-medium transition-colors",
//                     index === activeTab
//                       ? "bg-[#9bc9ff] text-white"
//                       : "border border-[#d9d9d9] text-[#737791] hover:bg-[#f2f2f2]"
//                   )}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Content */}
//             {activeTab === 0 && <ProfileForm />}
//             {activeTab === 1 && <FoundingInfoForm />}
//             {activeTab === 2 && <div className="text-center text-gray-500 py-12">Users Form Placeholder</div>}
//             {activeTab === 3 && <EmailNotificationForm />}

//             {/* Navigation */}
//             <div className="flex justify-between mt-12">
//               <Button
//                 variant="outline"
//                 onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
//                 disabled={activeTab === 0}
//                 className="px-8 py-2 border-[#447d9b] text-[#447d9b] hover:bg-[#447d9b] hover:text-white disabled:opacity-50"
//               >
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back
//               </Button>
//               <Button
//                 onClick={() => setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1))}
//                 className="px-8 py-2 bg-[#9bc9ff] hover:bg-[#447d9b] text-white"
//               >
//                 {activeTab === tabs.length - 1 ? "Submit" : "Next"}
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t border-[#e5e5e5] py-4 text-center">
//         <p className="text-[#737791] text-sm">Copyright © 2025. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

// /* ---------------- PROFILE ---------------- */
// function ProfileForm() {
//   return (
//     <div className="space-y-8">
//       {/* Cover Photo */}
//       <Card className="relative h-48 bg-gradient-to-r from-[#9bc9ff]/30 to-[#447d9b]/20 border rounded-lg overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-[#737791] font-medium">Cover Photo</span>
//         </div>
//         <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
//           <Edit2 className="h-4 w-4 text-[#702dff]" />
//         </Button>
//       </Card>

//       {/* Company Logo */}
//       <div className="flex items-start space-x-6">
//         <div className="relative">
//           <div className="w-24 h-24 bg-[#3d73ff] rounded-lg flex items-center justify-center">
//             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//               <div className="w-4 h-4 bg-[#3d73ff] rounded-full relative">
//                 <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
//               </div>
//             </div>
//           </div>
//           <Button size="icon" variant="ghost" className="absolute -bottom-2 -right-2 bg-white border">
//             <Edit2 className="h-3 w-3 text-[#702dff]" />
//           </Button>
//         </div>
//         <div>
//           <h3 className="font-semibold text-[#333333] mb-1">Company Logo</h3>
//           <p className="text-sm text-[#737791]">Max file size is 1MB, and suitable files are .jpg, .jpeg & .png</p>
//         </div>
//       </div>

//       {/* Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <Label className="block text-sm mb-2">Company Name*</Label>
//           <Input placeholder="Please Enter Company Name" />
//         </div>
//         <div>
//           <Label className="block text-sm mb-2">Website Link*</Label>
//           <Input placeholder="Please Enter Your Link Here" />
//         </div>
//       </div>
//       <div>
//         <Label className="block text-sm mb-2">About Company*</Label>
//         <Textarea placeholder="Add about your company" rows={4} />
//       </div>
//     </div>
//   )
// }

// /* ---------------- FOUNDING INFO ---------------- */
// function FoundingInfoForm() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <Label className="block text-sm mb-2">Current License:</Label>
//         <div className="border-2 border-dashed rounded-lg p-12 text-center">
//           <Upload className="h-12 w-12 text-[#b1b1b1] mx-auto mb-4" />
//           <p className="text-[#737791]">Add/Update License</p>
//         </div>
//       </div>
//       <div>
//         <Label className="block text-sm mb-2">Organization Type*</Label>
//         <Select>
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Select Organization Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="corporation">Corporation</SelectItem>
//             <SelectItem value="llc">LLC</SelectItem>
//             <SelectItem value="partnership">Partnership</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   )
// }

// /* ---------------- EMAIL NOTIFICATION ---------------- */
// function EmailNotificationForm() {
//   return (
//     <div className="bg-white rounded-lg border p-8">
//       <h2 className="text-2xl font-semibold text-[#447d9b] mb-8">Email Notification</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {[
//           { title: "Allow email for", desc: "Employer Disabled" },
//           { title: "Allow email for Job", desc: "Approve" },
//           { title: "Allow email for Job", desc: "Reject" },
//           { title: "Allow email for", desc: "Rejected Employer" },
//         ].map((item, i) => (
//           <div key={i} className="text-center">
//             <div className="flex justify-center mb-4">
//               <div className="w-12 h-12 bg-[#447d9b] rounded-full flex items-center justify-center">
//                 <div className="w-3 h-3 bg-white rounded-full"></div>
//               </div>
//             </div>
//             <h3 className="font-medium text-[#333333] mb-2">{item.title}</h3>
//             <p className="text-[#333333] mb-4">{item.desc}</p>
//             <Switch defaultChecked className="data-[state=checked]:bg-[#447d9b]" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
