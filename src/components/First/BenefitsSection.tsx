// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { FileText, Briefcase, GraduationCap, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
// import { ArrowUpRight } from "lucide-react";

// export function BenefitsSection() {
//   const benefits = [
//     {
//       icon: FileText,
//       title: "AI Resume Builder",
//       description: "Create professional resumes with AI-powered suggestions and templates.",
//     },
//     {
//       icon: Briefcase,
//       title: "Verified Job Listings",
//       description: "Access to verified job opportunities from trusted employers.",
//     },
//     {
//       icon: GraduationCap,
//       title: "Teaching Resources",
//       description: "Free educational content to enhance your professional skills.",
//     },
//   ]

//    const jobs = [
//     {
//       id: 1,
//       company: "ABC School",
//       logo: "/school-logo-green-shield.jpg",
//       position: "Senior Accountant",
//       location: "Tally & GST",
//       experience: "3-5 years",
//       type: "Full-Time",
//       posted: "Yesterday",
//       color: "bg-green-100",
//       openings:4
//     },
//     {
//       id: 2,
//       company: "ABC Institute of Education",
//       logo: "/education-institute-logo-blue-circle.jpg",
//       position: "Senior Accountant",
//       location: "Tally & GST",
//       experience: "3-5 years",
//       type: "Full-Time",
//       posted: "Yesterday",
//       color: "bg-blue-100",
//       openings:2
//     },
//     {
//       id: 3,
//       company: "ABC Tech Institute",
//       logo: "/tech-institute-logo-blue-circle.jpg",
//       position: "Senior Accountant",
//       location: "Tally & GST",
//       experience: "3-5 years",
//       type: "Full-Time",
//       posted: "Yesterday",
//       color: "bg-blue-100",
//       openings:5
//     },
//     {
//       id: 4,
//       company: "ABC Institute of Education",
//       logo: "/education-logo-orange-diamond.jpg",
//       position: "Senior Accountant",
//       location: "Tally & GST",
//       experience: "2-5 years",
//       type: "Full-Time",
//       posted: "Yesterday",
//       color: "bg-orange-100",
//       openings:6
//     },
//     {
//       id: 5,
//       company: "ABC Institute of Education",
//       logo: "/education-institute-logo-blue-circle.jpg",
//       position: "Senior Accountant",
//       location: "Tally & GST",
//       experience: "3-5 years",
//       type: "Full-Time",
//       posted: "Yesterday",
//       color: "bg-blue-100",
//       openings:2
//     },
//     {
//       id: 6,
//       company: "ABC Institute of Education",
//       logo: "/education-logo-green-shield.jpg",
//       position: "Senior Accountant",
//       location: "Tally & GST",
//       experience: "3-5 years",
//       type: "Full-Time",
//       posted: "Yesterday",
//       color: "bg-green-100",
//       openings:1
//     },
//   ]


//   return (
//     <div>

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-50 to-white">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           {/* Hero Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg">
//               <img
//                 src="/professional-woman-in-business-attire-with-arms-cr.jpg"
//                 alt="Professional woman in business attire"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>

//           {/* Hero Content */}
//           <div className="space-y-6 lg:space-y-8">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
//               What You Get As <span className="text-[#4679B5]">A Job Seeker</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-700">
//               Unlock opportunities with tools designed to boost your career and get you noticed by top employers.
//             </p>


//             {/* Benefits Inline */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-5 h-5 text-[#4679B5]" />
//                 <span className="font-medium text-gray-800">AI Resume Builder</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-5 h-5 text-[#4679B5]" />
//                 <span className="font-medium text-gray-800">Verified Job Listings</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-5 h-5 text-[#4679B5]" />
//                 <span className="font-medium text-gray-800">AI Cover Letters</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-5 h-5 text-[#4679B5]" />
//                 <span className="font-medium text-gray-800">Smart Job Alerts</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-5 h-5 text-[#4679B5]" />
//                 <span className="font-medium text-gray-800">AI Interview Prep</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-5 h-5 text-[#4679B5]" />
//                 <span className="font-medium text-gray-800">Free Teaching Resources</span>
//               </div>
//             </div>

//             <p className="mt-4 text-lg font-semibold text-[#4679B5]">100% Free for Jobseekers</p>
//           </div>
//         </div>
//       </section>

//       {/* ================= BENEFITS SECTION ================= */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FC]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow rounded-xl">
//               <CardContent className="p-6 text-center space-y-4">
//                 <div className="w-12 h-12 mx-auto bg-[#4679B5]/10 rounded-lg flex items-center justify-center">
//                   <benefit.icon className="w-6 h-6 text-[#4679B5]" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </div>

//       {/* ================= FEATURED JOBS SECTION ================= */}
  
// <section className="py-16 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-7xl mx-auto">
//     {/* Heading */}
//     <div className="text-center mb-12">
//       <h2 className="text-4xl sm:text-5xl font-bold">
//         Featured <span className="text-[#4679B5]">Jobs</span>
//       </h2>
//     </div>

//     {/* Job Grid */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//       {jobs.map((job) => (
//         <Card
//           key={job.id}
//           className="border border-border hover:shadow-md transition-shadow rounded-2xl"
//         >
//           <CardContent className="p-6 space-y-4">
//             {/* Top: Logo + Details */}
//             <div className="flex items-start gap-4">
//               {/* Logo */}
//               <div
//                 className={`w-30 h-30 rounded-lg ${job.color} flex items-center justify-center flex-shrink-0`}
//               >
//                 <img
//                   src={job.logo || "/placeholder.svg"}
//                   alt={`${job.company} logo`}
//                   className="w-30 h-30"
//                 />
//               </div>

//               {/* Job Info */}
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg text-card-foreground">
//                   {job.company}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">{job.location}</p>
//                 <p className="text-sm text-muted-foreground">{job.position}</p>
//                 <p className="text-sm text-muted-foreground">
//                   {job.type} | Openings: {job.openings}
//                 </p>
//               </div>
//             </div>
//             <hr />

//             {/* Bottom Row */}
//             <div className="flex items-center justify-between pt-2">
//               <span className="px-3 py-1 text-sm rounded-full bg-[#4679B5] text-white font-medium">
//                 {job.experience}
//               </span>
//               <Button
//                 size="sm"
//                 variant="ghost"
//                 className="flex items-center rounded-full text-sm px-4 bg-[#F5F8FC] text-[#4679B5] hover:bg-[#e9f0fa]"
//               >
//                 Apply Now
//                 <ArrowUpRight className="w-4 h-4 ml-2 rotate-45" />
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>

//     {/* View All Jobs Button */}
//     <div className="text-center">
//       <Button className="bg-[#4679B5] hover:bg-[#3764b9] text-white px-6 py-3 rounded-full font-medium text-lg">
//         View All Jobs
//         <ArrowRight className="w-5 h-5 ml-2" />
//       </Button>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Briefcase, GraduationCap, CheckCircle, ArrowUpRight, ArrowRight } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: FileText,
      title: "AI Resume Builder",
      description: "Create professional resumes with AI-powered suggestions and templates.",
    },
    {
      icon: Briefcase,
      title: "Verified Job Listings",
      description: "Access to verified job opportunities from trusted employers.",
    },
    {
      icon: GraduationCap,
      title: "Teaching Resources",
      description: "Free educational content to enhance your professional skills.",
    },
  ]

  const jobs = [
    {
      id: 1,
      company: "ABC School",
      logo: "/school-logo-green-shield.jpg",
      position: "Senior Accountant",
      location: "Tally & GST",
      experience: "3-5 years",
      type: "Full-Time",
      posted: "Yesterday",
      color: "bg-green-100",
      openings: 4,
    },
    {
      id: 2,
      company: "ABC Institute of Education",
      logo: "/education-institute-logo-blue-circle.jpg",
      position: "Senior Accountant",
      location: "Tally & GST",
      experience: "3-5 years",
      type: "Full-Time",
      posted: "Yesterday",
      color: "bg-blue-100",
      openings: 2,
    },
    {
      id: 3,
      company: "ABC Tech Institute",
      logo: "/tech-institute-logo-blue-circle.jpg",
      position: "Senior Accountant",
      location: "Tally & GST",
      experience: "3-5 years",
      type: "Full-Time",
      posted: "Yesterday",
      color: "bg-blue-100",
      openings: 5,
    },
    {
      id: 4,
      company: "ABC Institute of Education",
      logo: "/education-logo-orange-diamond.jpg",
      position: "Senior Accountant",
      location: "Tally & GST",
      experience: "2-5 years",
      type: "Full-Time",
      posted: "Yesterday",
      color: "bg-orange-100",
      openings: 6,
    },
    {
      id: 5,
      company: "ABC Institute of Education",
      logo: "/education-institute-logo-blue-circle.jpg",
      position: "Senior Accountant",
      location: "Tally & GST",
      experience: "3-5 years",
      type: "Full-Time",
      posted: "Yesterday",
      color: "bg-blue-100",
      openings: 2,
    },
    {
      id: 6,
      company: "ABC Institute of Education",
      logo: "/education-logo-green-shield.jpg",
      position: "Senior Accountant",
      location: "Tally & GST",
      experience: "3-5 years",
      type: "Full-Time",
      posted: "Yesterday",
      color: "bg-green-100",
      openings: 1,
    },
  ]

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
<section
  className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Backgroundimage.png')" }}
>
  {/* Light overlay to brighten the background */}
  <div className="absolute inset-0 bg-white/30"></div>

  {/* Content above overlay */}
  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Hero Image */}
    <div className="flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg">
        <img
          src="/professional-woman-in-business-attire-with-arms-cr.jpg"
          alt="Professional woman in business attire"
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Hero Content */}
    <div className="space-y-6 lg:space-y-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        What You Get As <span className="text-[#4679B5]">A Job Seeker</span>
      </h1>

      {/* Benefits Inline */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#4679B5]" />
          <span className="font-medium text-gray-800">AI Resume Builder</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#4679B5]" />
          <span className="font-medium text-gray-800">Verified Job Listings</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#4679B5]" />
          <span className="font-medium text-gray-800">AI Cover Letters</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#4679B5]" />
          <span className="font-medium text-gray-800">Smart Job Alerts</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#4679B5]" />
          <span className="font-medium text-gray-800">AI Interview Prep</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#4679B5]" />
          <span className="font-medium text-gray-800">Free Teaching Resources</span>
        </div>
      </div>

      <p className="mt-4 text-lg font-semibold text-[#4679B5]">100% Free for Jobseekers</p>
    </div>
  </div>
</section>  


      {/* ================= FEATURED JOBS SECTION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Featured <span className="text-[#4679B5]">Jobs</span>
            </h2>
          </div>

          {/* Job Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className="border border-border hover:shadow-md transition-shadow rounded-2xl"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Top: Logo + Details */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-30 h-30 rounded-lg ${job.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        className="w-30 h-30"
                      />
                    </div>

                    {/* Job Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-card-foreground">{job.company}</h3>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                      <p className="text-sm text-muted-foreground">{job.position}</p>
                      <p className="text-sm text-muted-foreground">
                        {job.type} | Openings: {job.openings}
                      </p>
                    </div>
                  </div>
                  <hr />

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#4679B5] text-white font-medium">
                      {job.experience}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex items-center rounded-full text-sm px-4 bg-[#F5F8FC] text-[#4679B5] hover:bg-[#e9f0fa]"
                    >
                      Apply Now
                      <ArrowUpRight className="w-4 h-4 ml-2 rotate-45" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Jobs Button */}
          <div className="text-center">
            <Button className="bg-[#4679B5] hover:bg-[#3764b9] text-white px-6 py-3 rounded-full font-medium text-lg">
              View All Jobs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
