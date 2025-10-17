// "use client"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Badge } from "@/components/ui/badge"
// import { Bell, ChevronDown, ArrowRight, X } from "lucide-react"
// export default function TeachnowJobPostingPage() {
//   const [selectedLocations, setSelectedLocations] = useState(["Kolkata", "Mumbai"])
//   const [selectedBenefits, setSelectedBenefits] = useState([
//     "Office cab/shuttle",
//     "Food allowance",
//     "Annual bonus",
//     "Provident fund",
//   ])
//   const removeBenefit = (benefit: string) => {
//     setSelectedBenefits(prev => prev.filter(b => b !== benefit))
//   }
//   const removeLocation = (location: string) => {
//     setSelectedLocations(prev => prev.filter(l => l !== location))
//   }

//   return (
//     <div className="min-h-screen bg-[#f9fafb]">
     
//       <div className="flex">
    

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl">
//             <h1 className="text-3xl font-medium text-[#447d9b] mb-8">Post a New Job</h1>

//             {/* Progress Tabs */}
//             <div className="flex space-x-4 mb-8">
//               <div className="bg-[#9bc9ff] text-[#ffffff] px-6 py-3 rounded-full text-sm font-medium">
//                 Job details
//               </div>
//               <div className="border border-[#9bc9ff] text-[#9bc9ff] px-6 py-3 rounded-full text-sm font-medium">
//                 Candidate preferences
//               </div>
//               <div className="border border-[#9bc9ff] text-[#9bc9ff] px-6 py-3 rounded-full text-sm font-medium">
//                 Job description
//               </div>
//             </div>

//             {/* Form */}
//             <div className="space-y-6">
//               {/* Job title & location */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-[#333333] mb-2">Job title*</label>
//                   <Input
//                     placeholder="Job Title"
//                     className="bg-[#ffffff] border-[#b1b1b1]/30 text-[#333333] placeholder:text-[#737791]"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-[#333333] mb-2">Job location*</label>
//                   <div className="bg-[#ffffff] border border-[#b1b1b1]/30 rounded-md p-2 min-h-[40px] flex flex-wrap gap-2">
//                     {selectedLocations.map((location) => (
//                       <Badge
//                         key={location}
//                         variant="secondary"
//                         className="bg-[#c3dcfb] text-[#4679b5] hover:bg-[#c3dcfb]/80"
//                       >
//                         {location}
//                         <X
//                           className="w-3 h-3 ml-1 cursor-pointer"
//                           onClick={() => removeLocation(location)}
//                         />
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Work experience & salary */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-[#333333] mb-2">Work experience</label>
//                   <div className="flex items-center space-x-4">
//                     <Select>
//                       <SelectTrigger className="bg-[#ffffff] border-[#b1b1b1]/30">
//                         <SelectValue placeholder="Min exp" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="0">0 years</SelectItem>
//                         <SelectItem value="1">1 year</SelectItem>
//                         <SelectItem value="2">2 years</SelectItem>
//                         <SelectItem value="3">3 years</SelectItem>
//                         <SelectItem value="5">5+ years</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <span className="text-[#737791]">To</span>
//                     <Select>
//                       <SelectTrigger className="bg-[#ffffff] border-[#b1b1b1]/30">
//                         <SelectValue placeholder="Max exp" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="1">1 year</SelectItem>
//                         <SelectItem value="2">2 years</SelectItem>
//                         <SelectItem value="3">3 years</SelectItem>
//                         <SelectItem value="5">5 years</SelectItem>
//                         <SelectItem value="10">10+ years</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#333333] mb-2">Salary per month</label>
//                   <div className="flex items-center space-x-4">
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737791]">₹</span>
//                       <Input placeholder="Min" className="bg-[#ffffff] border-[#b1b1b1]/30 pl-8" />
//                     </div>
//                     <span className="text-[#737791]">To</span>
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737791]">₹</span>
//                       <Input placeholder="Max" className="bg-[#ffffff] border-[#b1b1b1]/30 pl-8" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Benefits */}
//               <div>
//                 <label className="block text-sm font-medium text-[#333333] mb-2">Additional benefits (Optional)</label>
//                 <div className="bg-[#ffffff] border border-[#b1b1b1]/30 rounded-md p-3 min-h-[60px] flex flex-wrap gap-2">
//                   {selectedBenefits.map((benefit) => (
//                     <Badge
//                       key={benefit}
//                       variant="secondary"
//                       className="bg-[#c3dcfb] text-[#4679b5] hover:bg-[#c3dcfb]/80"
//                     >
//                       {benefit}
//                       <X
//                         className="w-3 h-3 ml-1 cursor-pointer"
//                         onClick={() => removeBenefit(benefit)}
//                       />
//                     </Badge>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-[#ffffff] px-8 py-2 rounded-full">
//                   Next
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#ffffff] border-t border-[#b1b1b1]/20 py-4 text-center">
//         <p className="text-[#737791] text-sm">Copyright © 2025. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

export default function TeachnowJobPostingFlow() {
  const [step, setStep] = useState(1)

  // State management
  const [selectedLocations, setSelectedLocations] = useState(["Kolkata", "Mumbai"])
  const [selectedBenefits, setSelectedBenefits] = useState([
    "Office cab/shuttle",
    "Food allowance",
    "Annual bonus",
    "Provident fund",
  ])
  const [departments, setDepartments] = useState(["Software Development", "IT Support"])
  const [skills, setSkills] = useState(["ASP.Net", ".Net", "C#", "Webforms"])
  const [languages, setLanguages] = useState(["English", "Hindi", "Marathi"])

  const removeItem = (list: string[], setList: (val: string[]) => void, value: string) => {
    setList(list.filter((i) => i !== value))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-[#1e2d42]">
          Teach<span className="text-[#447d9b]">now</span> – Post a New Job
        </h1>
      </header>

      {/* Steps */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Tabs */}
          <div className="flex space-x-4 mb-8">
            <div className={`px-6 py-3 rounded-full text-sm font-medium ${step === 1 ? "bg-[#9bc9ff] text-white" : "border border-[#9bc9ff] text-[#447d9b]"}`}>
              Job details
            </div>
            <div className={`px-6 py-3 rounded-full text-sm font-medium ${step === 2 ? "bg-[#9bc9ff] text-white" : "border border-[#9bc9ff] text-[#447d9b]"}`}>
              Candidate preferences
            </div>
            <div className={`px-6 py-3 rounded-full text-sm font-medium ${step === 3 ? "bg-[#9bc9ff] text-white" : "border border-[#9bc9ff] text-[#447d9b]"}`}>
              Job description
            </div>
          </div>

          {/* Step 1: Job Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Job title*</label>
                  <Input placeholder="Job Title" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Job location*</label>
                  <div className="flex flex-wrap gap-2 border p-2 rounded">
                    {selectedLocations.map((loc) => (
                      <Badge key={loc} className="bg-[#c3dcfb] text-[#447d9b]">
                        {loc}
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => removeItem(selectedLocations, setSelectedLocations, loc)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exp & Salary */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Work experience</label>
                  <div className="flex items-center gap-2">
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Min exp" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 yrs</SelectItem>
                        <SelectItem value="1">1 yr</SelectItem>
                        <SelectItem value="3">3 yrs</SelectItem>
                      </SelectContent>
                    </Select>
                    <span>to</span>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Max exp" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 yrs</SelectItem>
                        <SelectItem value="10">10+ yrs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Salary per month</label>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Min ₹" />
                    <span>to</span>
                    <Input placeholder="Max ₹" />
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <label className="block text-sm mb-2">Additional benefits</label>
                <div className="flex flex-wrap gap-2 border p-2 rounded">
                  {selectedBenefits.map((b) => (
                    <Badge key={b} className="bg-[#c3dcfb] text-[#447d9b]">
                      {b}
                      <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => removeItem(selectedBenefits, setSelectedBenefits, b)} />
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Candidate Preferences */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-2">Qualification</h3>
                <div className="flex gap-2">
                  <Button variant="outline">12th pass</Button>
                  <Button variant="outline">Graduate</Button>
                  <Button variant="outline">Post Graduate</Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Gender preference</h3>
                <div className="flex gap-2">
                  <Button variant="outline">Any</Button>
                  <Button variant="outline">Male</Button>
                  <Button variant="outline">Female</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Department</h3>
                  <div className="flex flex-wrap gap-2 border p-2 rounded">
                    {departments.map((d) => (
                      <Badge key={d} className="bg-[#c3dcfb] text-[#447d9b]">
                        {d}
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => removeItem(departments, setDepartments, d)} />
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2 border p-2 rounded">
                    {skills.map((s) => (
                      <Badge key={s} className="bg-[#c3dcfb] text-[#447d9b]">
                        {s}
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => removeItem(skills, setSkills, s)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Languages known</h3>
                <div className="flex flex-wrap gap-2 border p-2 rounded">
                  {languages.map((l) => (
                    <Badge key={l} className="bg-[#c3dcfb] text-[#447d9b]">
                      {l}
                      <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => removeItem(languages, setLanguages, l)} />
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Job Description */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">Job Description</h3>
                <Button className="bg-black text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> JD AI Builder
                </Button>
              </div>
              <div className="border p-4 rounded min-h-[200px] text-sm text-gray-500">
                Start typing your job description here...
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button onClick={prevStep} variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>
            ) : <div />}
            {step < 3 ? (
              <Button onClick={nextStep} className="bg-[#9bc9ff] text-white flex items-center gap-2">
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button className="bg-[#447d9b] text-white">Post Job</Button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center py-4 text-sm text-[#737791]">
        © 2025. All rights reserved.
      </footer>
    </div>
  )
}
