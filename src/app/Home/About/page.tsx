import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ChevronDown, MapPin, Calendar, DollarSign, Building, User, Mail, Star, Send } from "lucide-react"

export default function TeachnowJobListing() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="bg-white border-b border-[#d9d9d9] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-[#000000]">
              Teach<span className="text-[#4679b5]">now</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/Home/FindJob" className="text-[#000000] hover:text-[#4679b5]">
                Find Jobs
              </a>
              <a href="#" className="text-[#000000] hover:text-[#4679b5]">
                Free Resume Builder
              </a>
              <a href="/Home/TeacherResource" className="text-[#000000] hover:text-[#4679b5]">
                Teaching Resources
              </a>
              <a href="/Home/Pricing" className="text-[#000000] hover:text-[#4679b5]">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-[#000000] hover:text-[#4679b5]">
              Login <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-[#000000] rounded-full px-6">Post a Job</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold hero-text mb-4">ABC Tech Innovators</h1>
          <div className="hero-breadcrumb text-sm">
            <span>Home</span> <span className="mx-2">›</span>
            <span>Find Jobs</span> <span className="mx-2">›</span>
            <span>ABC Tech Innovators</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Company Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#ff3a55] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">AT</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#000000]">ABC Tech Innovators</h2>
                      <p className="text-[#888888]">Copenhagen, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#888888]">Openings:</span>
                    <Badge variant="secondary" className="bg-[#9bc9ff] text-[#000000]">
                      1
                    </Badge>
                    <Badge className="bg-[#4679b5] text-white">Full-Time</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Title */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-[#000000]">Senior Accountant Tally & GST</h1>
              <Button className="bg-[#9bc9ff] hover:bg-[#4679b5] text-[#000000] rounded-full px-6">
                Login to Apply
              </Button>
            </div>

            {/* Job Meta */}
            <div className="flex items-center space-x-6 mb-8 text-[#888888]">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>3 - 5 years</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Copenhagen, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>50K to 60K INR</span>
              </div>
            </div>

            {/* Job Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Job Description</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#000000] mb-2">Duration:</h4>
                    <p className="text-[#505050]">
                      3 Months (Training Period), with the possibility of full-time employment upon successful
                      completion.
                    </p>
                  </div>

                  <div>
                    <p className="text-[#505050] mb-4">
                      Outright Creators is looking for a highly organized and presentable MBA Fresher to join our team
                      as a Coordinator Intern. We seek someone with excellent communication skills and a desire to grow
                      in a dynamic and creative environment.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#000000] mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-[#505050] space-y-1">
                      <li>Coordinate and manage day-to-day operations and activities within the team.</li>
                      <li>Assist in project planning, scheduling, and execution.</li>
                      <li>Communicate effectively with internal teams and external stakeholders.</li>
                      <li>Prepare reports, presentations, and other documentation as needed.</li>
                      <li>Ensure smooth coordination between different departments to meet project deadlines.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#000000] mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-[#505050] space-y-1">
                      <li>MBA Fresher with a strong academic background.</li>
                      <li>Excellent verbal and written communication skills.</li>
                      <li>Highly presentable and professional demeanor.</li>
                      <li>Strong organizational and multitasking abilities.</li>
                      <li>Eagerness to learn and adapt in a fast-paced environment.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#000000] mb-2">Perks:</h4>
                    <ul className="list-disc list-inside text-[#505050] space-y-1">
                      <li>Comprehensive training over 3 months, with the potential for a full-time position.</li>
                      <li>Exposure to various aspects of project coordination and management.</li>
                      <li>Opportunity to work with a supportive and experienced team.</li>
                      <li>Certificate of internship on successful completion.</li>
                      <li>
                        Kickstart your career with Outright Creators as a Coordinator Intern and pave the way for a
                        full-time role in our growing company!
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Jobs */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">Related Jobs</h3>
              <div className="space-y-4">
                {[1, 2].map((job) => (
                  <Card key={job}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#ff3a55] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">AT</span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-[#888888] text-sm">Openings:</span>
                              <Badge variant="secondary" className="bg-[#9bc9ff] text-[#000000] text-xs">
                                1
                              </Badge>
                              <Badge className="bg-[#4679b5] text-white text-xs">Full-Time</Badge>
                            </div>
                            <h4 className="font-bold text-[#000000]">ABC Tech Innovators</h4>
                            <p className="text-[#888888] text-sm">Copenhagen, India</p>
                          </div>
                        </div>
                        <Button variant="outline" className="rounded-full bg-transparent">
                          Apply Now
                        </Button>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-semibold text-[#000000] mb-2">Senior Accountant Tally & GST</h5>
                        <div className="flex items-center space-x-4 text-[#888888] text-sm">
                          <span>3 - 5 years</span>
                          <span>Copenhagen, India</span>
                          <span>50K to 60K INR</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#000000] mb-4">Job Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Date Posted:</p>
                      <p className="text-[#888888] text-sm">August 23, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Location:</p>
                      <p className="text-[#888888] text-sm">Copenhagen, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Industry:</p>
                      <p className="text-[#888888] text-sm">Information Technology (IT) Industry</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Salary:</p>
                      <p className="text-[#888888] text-sm">₹50000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Job Level:</p>
                      <p className="text-[#888888] text-sm">Fresher</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Contact Email:</p>
                      <p className="text-[#888888] text-sm">N/A</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-[#4679b5] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#000000]">Key Skills:</p>
                      <p className="text-[#888888] text-sm">
                        Operations Management, Project Planning and Scheduling, Communication
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-gradient py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Stay Ahead In Your Job Hunt</h2>
          <div className="flex max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="rounded-l-full border-0 bg-white/90 text-[#000000] placeholder:text-[#888888]"
            />
            <Button className="rounded-r-full bg-[#4679b5] hover:bg-[#3764b9] text-white px-6">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#f6f6f6] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-[#000000] mb-4">
                Teach<span className="text-[#4679b5]">now</span>
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[#4679b5] rounded flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-[#000000] rounded flex items-center justify-center">
                  <span className="text-white text-sm">X</span>
                </div>
                <div className="w-8 h-8 bg-[#4679b5] rounded flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-[#ff3a55] rounded flex items-center justify-center">
                  <span className="text-white text-sm">ig</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#000000] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#888888]">
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#000000] mb-4">For JobSeekers</h4>
              <ul className="space-y-2 text-[#888888]">
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Free Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Teaching Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#000000] mb-4">For Employers</h4>
              <ul className="space-y-2 text-[#888888]">
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Employer Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#000000] mb-4">Legal</h4>
              <ul className="space-y-2 text-[#888888]">
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4679b5]">
                    FAQs
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <h5 className="font-bold text-[#000000] mb-2">Contact Us</h5>
                <p className="text-[#888888] text-sm">support@teachnow.com</p>
                <p className="text-[#888888] text-sm">+91 9874 581 230</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d9d9d9] mt-8 pt-8 flex justify-between items-center text-[#888888] text-sm">
            <p>Copyright © 2025. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#4679b5]">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-[#4679b5]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
