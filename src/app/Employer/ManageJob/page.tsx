"use client"

import { Building2, Eye, Edit, Trash2, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"

export default function ManageJobsPage() {
  const jobListings = [
    { id: 1, title: "Digital Marketing Manager", location: "Kolkata", status: "Active", postedDate: "03/09/2025", postedBy: "Admin" },
    { id: 2, title: "Frontend Developer", location: "Delhi", status: "Active", postedDate: "01/09/2025", postedBy: "Admin" },
    { id: 3, title: "Backend Developer", location: "Mumbai", status: "Pending", postedDate: "02/09/2025", postedBy: "Admin" },
    { id: 4, title: "UI/UX Designer", location: "Bangalore", status: "Archived", postedDate: "30/08/2025", postedBy: "Admin" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
    

      <div className="flex flex-1">
        {/* Sidebar */}
       

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">Manage Jobs</h1>

            <div className="space-y-4">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg border border-gray-200 p-6 flex items-start justify-between hover:shadow-md transition-shadow">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>

                    {/* Status and Posted Date in next line */}
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium",
                          job.status === "Active"
                            ? "bg-blue-100 text-blue-800"
                            : job.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        )}
                      >
                        {job.status}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                        Posted: {job.postedDate}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-center ml-6 space-y-2">
                    <div className="flex space-x-2">
                      <ActionButton icon={<Eye className="h-4 w-4" />} />
                      <ActionButton icon={<Edit className="h-4 w-4" />} />
                      <ActionButton icon={<Trash2 className="h-4 w-4" />} />
                    </div>
                    <div className="text-sm mt-1 text-[#447D9B]">Posted By: {job.postedBy}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
    
    </div>
  )
}

/* ---------------- Action Button ---------------- */
function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:bg-[#447D9B]/10 cursor-pointer text-[#447D9B]">
      {icon}
    </div>
  )
}
