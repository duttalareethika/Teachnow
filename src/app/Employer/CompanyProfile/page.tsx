
// "use client"

// import { useState } from "react"
// import {
//   Bell,
//   ChevronDown,
//   Upload,
//   Calendar,
//   Plus,
//   MessageCircle,
//   Edit,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { cn } from "@/lib/utils"

// export default function EmployerBrandingDashboard() {
//   const [activeTab, setActiveTab] = useState("Founding Info")

//   // Users mock data
//   const users = [
//     { id: "01", name: "RAKESH SOLANKI", email: "rakeshsolanki@companyname.com", status: "Open" },
//     { id: "02", name: "ARVIND BHADORIYA", email: "arvindbhadoriya@companyname.com", status: "Closed" },
//     { id: "03", name: "NILESH GAURAV", email: "nileshgaurav@companyname.com", status: "Open" },
//     { id: "04", name: "HARJIT MEHLOTRA", email: "harjitmehlotra@companyname.com", status: "Closed" },
//     { id: "05", name: "DEVANSH KALRA", email: "devanshkalra@companyname.com", status: "Closed" },
//     { id: "06", name: "PRATIK BANODHA", email: "pratikbanodha@companyname.com", status: "Open" },
//     { id: "07", name: "KARTHIK VEMURI", email: "karthikvemuri@companyname.com", status: "Open" },
//     { id: "08", name: "SURYA NATHWANI", email: "suryanathwani@companyname.com", status: "Closed" },
//     { id: "09", name: "RAJAT BENDRE", email: "rajatbendre@companyname.com", status: "Closed" },
//     { id: "10", name: "MANISHVAR PATODI", email: "manishvarpatodi@companyname.com", status: "Open" },
//   ]

//   // Tab options
//   const tabs = [
//     "Profile",
//     "Founding Info",
//     "Users",
//     "Email Notification",
//   ]

//   return (
//     <div className="min-h-screen bg-[#f9fafb]">
//       {/* Top Navbar */}
     
//       <div className="flex">
//         {/* Sidebar */}

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-3xl font-medium text-[#447d9b] mb-8">Employer Branding</h1>

//             {/* Tabs */}
//             <div className="flex space-x-4 mb-8">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={cn(
//                     "px-6 py-3 rounded-full text-sm font-medium transition-colors",
//                     activeTab === tab
//                       ? "bg-[#9bc9ff] text-white"
//                       : "bg-white border border-[#d9d9d9] text-[#737791] hover:bg-[#f9fafb]"
//                   )}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             {activeTab === "Founding Info" && (
//               <FoundingInfoForm />
//             )}

//             {activeTab === "Users" && (
//               <UsersTable users={users} />
//             )}

//             {activeTab === "Profile" && (
//               <div className="bg-white p-6 rounded-lg border border-[#d8d8d8]">
//                 <p className="text-[#333333]">Profile content goes here...</p>
//               </div>
//             )}

//             {activeTab === "Email Notification" && (
//               <div className="bg-white p-6 rounded-lg border border-[#d8d8d8]">
//                 <p className="text-[#333333]">Email Notification settings go here...</p>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

   
//     </div>
//   )
// }
// // /* ---------------- PROFILE ---------------- */
// function ProfileForm() {
//   return (
//     <div className="space-y-8">
//       <Card className="relative h-48 bg-gradient-to-r from-[#9bc9ff]/30 to-[#447d9b]/20 border rounded-lg overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-[#737791] font-medium">Cover Photo</span>
//         </div>
//         <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
//           <Edit2 className="h-4 w-4 text-[#702dff]" />
//         </Button>
//       </Card>
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
// /* ---------------- Founding Info Form ---------------- */
// function FoundingInfoForm() {
//   return (
//     <div className="bg-white rounded-lg p-6 border border-[#d8d8d8]">
//       <h2 className="text-2xl font-semibold text-[#447d9b] mb-8">Founding Info</h2>

//       <div className="space-y-6">
//         {/* License Upload */}
//         <div>
//           <Label className="text-sm font-medium text-[#333333] mb-2 block">Current License:</Label>
//           <div className="border-2 border-dashed border-[#d9d9d9] rounded-lg p-12 text-center">
//             <Upload className="h-12 w-12 text-[#b1b1b1] mx-auto mb-4" />
//             <p className="text-[#737791] font-medium">Add/Update License</p>
//           </div>
//           <p className="text-xs text-[#737791] mt-2">
//             Max file size is 1MB, and suitable files are .jpg, .jpeg & .png
//           </p>
//         </div>

//         {/* Organization Type */}
//         <div>
//           <Label className="text-sm font-medium text-[#333333] mb-2 block">
//             Organization Type<span className="text-[#eb5757]">*</span>
//           </Label>
//           <Select>
//             <SelectTrigger className="w-full bg-white border-[#d9d9d9]">
//               <SelectValue placeholder="Select Organization Type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="corporation">Corporation</SelectItem>
//               <SelectItem value="llc">LLC</SelectItem>
//               <SelectItem value="partnership">Partnership</SelectItem>
//               <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Bottom Row */}
//         <div className="grid grid-cols-3 gap-6">
//           {/* Industry Type */}
//           <div>
//             <Label className="text-sm font-medium text-[#333333] mb-2 block">
//               Industry Type<span className="text-[#eb5757]">*</span>
//             </Label>
//             <Select>
//               <SelectTrigger className="w-full bg-white border-[#d9d9d9]">
//                 <SelectValue placeholder="Select..." />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="education">Education</SelectItem>
//                 <SelectItem value="technology">Technology</SelectItem>
//                 <SelectItem value="healthcare">Healthcare</SelectItem>
//                 <SelectItem value="finance">Finance</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* GST Number */}
//           <div>
//             <Label className="text-sm font-medium text-[#333333] mb-2 block">GST Number</Label>
//             <Input placeholder="Eg: 22AAAAA0000A1Z5" className="bg-white border-[#d9d9d9]" />
//           </div>

//           {/* Est. Since */}
//           <div>
//             <Label className="text-sm font-medium text-[#333333] mb-2 block">
//               Est. Since<span className="text-[#eb5757]">*</span>
//             </Label>
//             <div className="relative">
//               <Input placeholder="dd/mm/yyyy" className="bg-white border-[#d9d9d9] pr-10" />
//               <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#737791]" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="flex justify-between mt-12">
//         <Button
//           variant="outline"
//           className="px-8 py-3 border-[#447d9b] text-[#447d9b] hover:bg-[#447d9b] hover:text-white bg-transparent"
//         >
//           Back
//         </Button>
//         <Button className="px-8 py-3 bg-[#9bc9ff] hover:bg-[#4679b5] text-white">Next</Button>
//       </div>
//     </div>
//   )
// }

// /* ---------------- Users Table ---------------- */
// function UsersTable({ users }: { users: any[] }) {
//   return (
//     <div className="bg-white rounded-lg border border-[#d8d8d8]">
//       <div className="flex items-center justify-between p-6 border-b border-[#d8d8d8]">
//         <h2 className="text-2xl font-medium text-[#333333]">Users</h2>
//         <div className="flex items-center space-x-4">
//           <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white rounded-full px-4 py-2 flex items-center space-x-2">
//             <Plus className="h-4 w-4" />
//             <span>Add User</span>
//           </Button>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="flex items-center space-x-2 border-[#d8d8d8] text-[#737791] bg-transparent"
//               >
//                 <span>10 per page</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuItem>5 per page</DropdownMenuItem>
//               <DropdownMenuItem>10 per page</DropdownMenuItem>
//               <DropdownMenuItem>20 per page</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-[#f9fafb]">
//             <tr>
//               <th className="text-left p-4 text-[#737791] font-medium">S.NO</th>
//               <th className="text-left p-4 text-[#737791] font-medium">NAME</th>
//               <th className="text-left p-4 text-[#737791] font-medium">EMAIL</th>
//               <th className="text-left p-4 text-[#737791] font-medium">STATUS</th>
//               <th className="text-left p-4 text-[#737791] font-medium">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}>
//                 <td className="p-4 text-[#333333]">{user.id}</td>
//                 <td className="p-4 text-[#333333] font-medium">{user.name}</td>
//                 <td className="p-4 text-[#447d9b]">{user.email}</td>
//                 <td className="p-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       user.status === "Open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="p-4">
//                   <div className="flex space-x-2">
//                     <Button size="sm" className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white p-2">
//                       <MessageCircle className="h-4 w-4" />
//                     </Button>
//                     <Button size="sm" className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white p-2">
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
// // function EmailNotificationForm() {
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
//       {/* Pagination */}
//       <div className="flex items-center justify-between p-6 border-t border-[#d8d8d8]">
//         <Button
//           variant="outline"
//           className="flex items-center space-x-2 border-[#d8d8d8] text-[#737791] bg-transparent"
//         >
//           <span>Back</span>
//           <div className="w-6 h-6 bg-[#9bc9ff] rounded-full flex items-center justify-center">
//             <ChevronDown className="h-3 w-3 text-white rotate-90" />
//           </div>
//         </Button>
//         <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white flex items-center space-x-2">
//           <span>Next</span>
//           <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//             <ChevronDown className="h-3 w-3 text-[#9bc9ff] -rotate-90" />
//           </div>
//         </Button>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import {
  ChevronDown,
  Upload,
  Calendar,
  Plus,
  MessageCircle,
  Edit,
  Edit2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export default function EmployerBrandingDashboard() {
  const steps = ["Profile", "Founding Info", "Users", "Email Notification"]
  const [currentStep, setCurrentStep] = useState(0)

  const users = [
    { id: "01", name: "RAKESH SOLANKI", email: "rakeshsolanki@companyname.com", status: "Open" },
    { id: "02", name: "ARVIND BHADORIYA", email: "arvindbhadoriya@companyname.com", status: "Closed" },
    { id: "03", name: "NILESH GAURAV", email: "nileshgaurav@companyname.com", status: "Open" },
    { id: "04", name: "HARJIT MEHLOTRA", email: "harjitmehlotra@companyname.com", status: "Closed" },
    { id: "05", name: "DEVANSH KALRA", email: "devanshkalra@companyname.com", status: "Closed" },
    { id: "06", name: "PRATIK BANODHA", email: "pratikbanodha@companyname.com", status: "Open" },
    { id: "07", name: "KARTHIK VEMURI", email: "karthikvemuri@companyname.com", status: "Open" },
    { id: "08", name: "SURYA NATHWANI", email: "suryanathwani@companyname.com", status: "Closed" },
    { id: "09", name: "RAJAT BENDRE", email: "rajatbendre@companyname.com", status: "Closed" },
    { id: "10", name: "MANISHVAR PATODI", email: "manishvarpatodi@companyname.com", status: "Open" },
  ]

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
    else alert("Save action here!") // Replace with actual save API
  }

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium text-[#447d9b] mb-8">Employer Branding</h1>

        {/* Step Tabs */}
        <div className="flex space-x-4 mb-8">
          {steps.map((step, idx) => (
            <div
              key={step}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-colors",
                currentStep === idx
                  ? "bg-[#9bc9ff] text-white"
                  : "bg-white border border-[#d9d9d9] text-[#737791]"
              )}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 0 && <ProfileForm />}
        {currentStep === 1 && <FoundingInfoForm />}
        {currentStep === 2 && <UsersTable users={users} />}
        {currentStep === 3 && <EmailNotificationForm />}

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={goBack}
            disabled={currentStep === 0}
            className="px-8 py-3 border-[#447d9b] text-[#447d9b] hover:bg-[#447d9b] hover:text-white bg-transparent disabled:opacity-50"
          >
            Back
          </Button>
          <Button
            onClick={goNext}
            className="px-8 py-3 bg-[#9bc9ff] hover:bg-[#4679b5] text-white"
          >
            {currentStep === steps.length - 1 ? "Save" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ---------------- PROFILE ---------------- */
function ProfileForm() {
  return (
    <div className="space-y-8">
      <Card className="relative h-48 bg-gradient-to-r from-[#9bc9ff]/30 to-[#447d9b]/20 border rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#737791] font-medium">Cover Photo</span>
        </div>
        <Button size="icon" variant="ghost" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
          <Edit2 className="h-4 w-4 text-[#702dff]" />
        </Button>
      </Card>
      <div className="flex items-start space-x-6">
        <div className="relative">
          <div className="w-24 h-24 bg-[#3d73ff] rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#3d73ff] rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="absolute -bottom-2 -right-2 bg-white border">
            <Edit2 className="h-3 w-3 text-[#702dff]" />
          </Button>
        </div>
        <div>
          <h3 className="font-semibold text-[#333333] mb-1">Company Logo</h3>
          <p className="text-sm text-[#737791]">Max file size is 1MB, and suitable files are .jpg, .jpeg & .png</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="block text-sm mb-2">Company Name*</Label>
          <Input placeholder="Please Enter Company Name" />
        </div>
        <div>
          <Label className="block text-sm mb-2">Website Link*</Label>
          <Input placeholder="Please Enter Your Link Here" />
        </div>
      </div>
      <div>
        <Label className="block text-sm mb-2">About Company*</Label>
        <Textarea placeholder="Add about your company" rows={4} />
      </div>
    </div>
  )
}

/* ---------------- Founding Info Form ---------------- */
function FoundingInfoForm() {
  return (
    <div className="bg-white rounded-lg p-6 border border-[#d8d8d8]">
      <h2 className="text-2xl font-semibold text-[#447d9b] mb-8">Founding Info</h2>

      <div className="space-y-6">
        {/* License Upload */}
        <div>
          <Label className="text-sm font-medium text-[#333333] mb-2 block">Current License:</Label>
          <div className="border-2 border-dashed border-[#d9d9d9] rounded-lg p-12 text-center">
            <Upload className="h-12 w-12 text-[#b1b1b1] mx-auto mb-4" />
            <p className="text-[#737791] font-medium">Add/Update License</p>
          </div>
          <p className="text-xs text-[#737791] mt-2">
            Max file size is 1MB, and suitable files are .jpg, .jpeg & .png
          </p>
        </div>

        {/* Organization Type */}
        <div>
          <Label className="text-sm font-medium text-[#333333] mb-2 block">
            Organization Type<span className="text-[#eb5757]">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-[#d9d9d9]">
              <SelectValue placeholder="Select Organization Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporation">Corporation</SelectItem>
              <SelectItem value="llc">LLC</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Industry Type */}
          <div>
            <Label className="text-sm font-medium text-[#333333] mb-2 block">
              Industry Type<span className="text-[#eb5757]">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white border-[#d9d9d9]">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* GST Number */}
          <div>
            <Label className="text-sm font-medium text-[#333333] mb-2 block">GST Number</Label>
            <Input placeholder="Eg: 22AAAAA0000A1Z5" className="bg-white border-[#d9d9d9]" />
          </div>

          {/* Est. Since */}
          <div>
            <Label className="text-sm font-medium text-[#333333] mb-2 block">
              Est. Since<span className="text-[#eb5757]">*</span>
            </Label>
            <div className="relative">
              <Input placeholder="dd/mm/yyyy" className="bg-white border-[#d9d9d9] pr-10" />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#737791]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Users Table ---------------- */
function UsersTable({ users }: { users: unknown[] }) {
  return (
    <div className="bg-white rounded-lg border border-[#d8d8d8]">
      <div className="flex items-center justify-between p-6 border-b border-[#d8d8d8]">
        <h2 className="text-2xl font-medium text-[#333333]">Users</h2>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white rounded-full px-4 py-2 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#f9fafb]">
            <tr>
              <th className="text-left p-4 text-[#737791] font-medium">S.NO</th>
              <th className="text-left p-4 text-[#737791] font-medium">NAME</th>
              <th className="text-left p-4 text-[#737791] font-medium">EMAIL</th>
              <th className="text-left p-4 text-[#737791] font-medium">STATUS</th>
              <th className="text-left p-4 text-[#737791] font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}>
                <td className="p-4 text-[#333333]">{user.id}</td>
                <td className="p-4 text-[#333333] font-medium">{user.name}</td>
                <td className="p-4 text-[#447d9b]">{user.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white p-2">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-[#9bc9ff] hover:bg-[#4679b5] text-white p-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ---------------- Email Notification ---------------- */
function EmailNotificationForm() {
  return (
    <div className="bg-white rounded-lg border p-8">
      <h2 className="text-2xl font-semibold text-[#447d9b] mb-8">Email Notification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Allow email for", desc: "Employer Disabled" },
          { title: "Allow email for Job", desc: "Approve" },
          { title: "Allow email for Job", desc: "Reject" },
          { title: "Allow email for", desc: "Rejected Employer" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#447d9b] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <h3 className="font-medium text-[#333333] mb-2">{item.title}</h3>
            <p className="text-[#333333] mb-4">{item.desc}</p>
            <Switch defaultChecked className="data-[state=checked]:bg-[#447d9b]" />
          </div>
        ))}
      </div>
    </div>
  )
}

