// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Clock, ArrowRight, Megaphone } from "lucide-react"

// const articles = [
//   {
//     id: 1,
//     title: "How to Answer: Tell Me About Yourself",
//     readTime: "20 min",
//     year: "2025",
//     image: "/professional-interview-scene-with-person-at-desk.jpg",
//     description: "Master the most common interview question with proven strategies and examples.",
//   },
//   {
//     id: 2,
//     title: "Top Resume Mistakes to Avoid in 2025",
//     readTime: "20 min",
//     year: "2025",
//     image: "/modern-resume-review-with-laptop-and-documents.jpg",
//     description: "Learn what hiring managers look for and common pitfalls to avoid.",
//   },
//   {
//     id: 3,
//     title: "Remote Work Trends You Should Know",
//     readTime: "20 min",
//     year: "2025",
//     image: "/remote-work-setup-with-professional-video-call.jpg",
//     description: "Stay ahead of the curve with the latest remote work insights and trends.",
//   },
// ]

// export function CarrierSection() {
//   return (
//     <div>
//       {/* HERO SECTION */}
//       {/* <section className="relative overflow-hidden bg-primary px-6 py-16 md:py-24">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
//                 Hire The Right Talent, Faster
//               </h1>
//               <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
//                 Post jobs, screen candidates, and fill positions with ease.
//               </p>
//               <Button
//                 size="lg"
//                 className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full"
//               >
//                 Post a Job Now
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </div>

//             <div className="flex-1 flex justify-center">
//               <div className="relative">
//                 <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-foreground/10 rounded-full flex items-center justify-center">
//                   <div className="w-48 h-48 md:w-64 md:h-64 bg-primary-foreground/20 rounded-full flex items-center justify-center">
//                     <Megaphone className="w-24 h-24 md:w-32 md:h-32 text-primary-foreground" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//   <section className="relative overflow-hidden bg-[#4679b5] px-6 py-16 md:py-24">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
//                 Hire The Right Talent, Faster
//               </h1>
//               <p className="mb-8 text-lg text-white/90 md:text-xl">
//                 Post jobs, screen candidates, and fill positions with ease. Our platform helps you find the perfect match for your company.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg" className="bg-white text-[#4679b5] hover:bg-white/90 font-semibold px-8 py-3 rounded-full">
//                   Post a Job Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full">
//                   Browse Candidates
//                 </Button>
//               </div>
              
//               <div className="mt-10 flex flex-wrap gap-6">
//                 <div className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-white mr-2" />
//                   <span className="text-white/90">No credit card required</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-white mr-2" />
//                   <span className="text-white/90">Free 14-day trial</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-white mr-2" />
//                   <span className="text-white/90">Set up in minutes</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right side - matching the footer layout */}
//             <div className="flex-1">
//               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//                 <h3 className="text-xl font-semibold text-white mb-6 text-center">Trusted by top companies</h3>
                
//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center h-20">
//                     <Building className="h-8 w-8 text-white" />
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center h-20">
//                     <Users className="h-8 w-8 text-white" />
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center h-20">
//                     <Search className="h-8 w-8 text-white" />
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center h-20">
//                     <Mail className="h-8 w-8 text-white" />
//                   </div>
//                 </div>
                
//                 <div className="bg-white rounded-2xl p-6">
//                   <div className="flex items-start mb-4">
//                     <div className="bg-[#c2b3ff] rounded-full p-2 mr-4">
//                       <Megaphone className="h-6 w-6 text-[#1e2d42]" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-[#1e2d42]">Get matched instantly</h4>
//                       <p className="text-sm text-gray-600">Our AI matches you with perfect candidates</p>
//                     </div>
//                   </div>
                  
//                   <div className="bg-gray-100 rounded-lg p-4 mb-4">
//                     <p className="text-sm text-gray-700">"Found 3 perfect candidates in just 2 days. This platform saved us weeks of work!"</p>
//                     <p className="text-xs text-gray-500 mt-2">- Sarah, Hiring Manager</p>
//                   </div>
                  
//                   <Button className="w-full bg-[#4679b5] hover:bg-[#3764b9] text-white rounded-full">
//                     See How It Works
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* CAREER RESOURCES SECTION */}
//       <section className="px-6 py-16 md:py-24">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Career <span className="text-primary">Resources & Tips</span>
//             </h2>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {articles.map((article) => (
//               <Card
//                 key={article.id}
//                 className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//               >
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <img
//                     src={article.image || "/placeholder.svg"}
//                     alt={article.title}
//                     className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute bottom-3 left-3 flex items-center gap-2">
//                     <Badge variant="secondary" className="bg-foreground text-background font-medium">
//                       <Clock className="w-3 h-3 mr-1" />
//                       {article.readTime}
//                     </Badge>
//                     <Badge variant="secondary" className="bg-foreground text-background font-medium">
//                       {article.year}
//                     </Badge>
//                   </div>
//                 </div>
//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
//                     {article.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-0">
//                   <p className="text-muted-foreground mb-4 leading-relaxed">{article.description}</p>
//                   <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
//                     Read Details
//                     <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Clock,
  ArrowRight,
  Megaphone,
  CheckCircle,
  Building,
  Users,
  Search,
  Mail,
} from "lucide-react"

const articles = [
  {
    id: 1,
    title: "How to Answer: Tell Me About Yourself",
    readTime: "20 min",
    year: "2025",
    image: "/professional-interview-scene-with-person-at-desk.jpg",
    description: "Master the most common interview question with proven strategies and examples.",
  },
  {
    id: 2,
    title: "Top Resume Mistakes to Avoid in 2025",
    readTime: "20 min",
    year: "2025",
    image: "/modern-resume-review-with-laptop-and-documents.jpg",
    description: "Learn what hiring managers look for and common pitfalls to avoid.",
  },
  {
    id: 3,
    title: "Remote Work Trends You Should Know",
    readTime: "20 min",
    year: "2025",
    image: "/remote-work-setup-with-professional-video-call.jpg",
    description: "Stay ahead of the curve with the latest remote work insights and trends.",
  },
]

export function CarrierSection() {
  return (
    <div>
      {/* HERO SECTION */}
 <section className="px-4 py-12">
  <div
    className="h-64 max-w-6xl mx-auto rounded-2xl px-6 py-6 md:px-24 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
    style={{
      background: "linear-gradient(135deg, #8b7dd8 0%, #6b5bb3 100%)",
    }}
  >
    {/* Left Side - Text + Input */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Hire The Right Talent, Faster
      </h1>
      <p className="text-base md:text-lg text-white/90 mb-6">
        Post jobs, screen candidates, and fill positions with ease.
      </p>

      
    </div>

    {/* Right Side - Image + Button (side by side) */}
    <div className="flex-1 flex items-center justify-center md:justify-end gap-4">
      <img
        src="/megaphone-guy.png"
        alt="Hire Talent"
        className="max-h-44 md:max-h-52 object-contain rounded-xl"
      />

      <Button className="bg-white text-[#4679B5] px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-gray-100">
        Post a Job
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4679B5]">
          <ArrowRight className="w-3 h-3 text-white -rotate-45" />
        </span>
      </Button>
    </div>
  </div>
</section>


      
      {/* CAREER RESOURCES SECTION */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career <span className="text-primary">Resources & Tips</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-foreground text-background font-medium">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </Badge>
                    <Badge variant="secondary" className="bg-foreground text-background font-medium">
                      {article.year}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read Details
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
