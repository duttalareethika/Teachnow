import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ArrowRight } from "lucide-react"

export function JobFilters() {
  return (
    <div className="space-y-6">
      <div className="bg-[#ffffff] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[#000000] mb-4">Job type</h3>
        <div className="space-y-3">
          {["Full-time", "Part-time", "Contract", "Freelancer", "Internship"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-[#888888] text-sm">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#ffffff] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[#000000] mb-4">Work type</h3>
        <div className="space-y-3">
          {["None", "Hybrid", "In Office", "Remote", "On-Site"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-[#888888] text-sm">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#ffffff] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[#000000] mb-4">Salary Type</h3>
        <div className="space-y-3">
          {["None", "Monthly", "Yearly"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-[#888888] text-sm">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#ffffff] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[#000000] mb-4">Experience (Years)</h3>
        <div className="px-2">
          <Slider defaultValue={[0]} max={10} step={1} className="mb-2" />
          <div className="flex justify-between text-xs text-[#888888]">
            <span>0 Year</span>
            <span>10 Year</span>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[#000000] mb-4">Salary (INR)</h3>
        <div className="px-2">
          <Slider defaultValue={[0]} max={100} step={1} className="mb-2" />
          <div className="flex justify-between text-xs text-[#888888]">
            <span>0 Year</span>
            <span>10 Year</span>
          </div>
        </div>
      </div>

      <div className="bg-[#dae9ff] p-6 rounded-lg">
        <h3 className="font-semibold text-[#000000] mb-2">Recruiting?</h3>
        <p className="text-sm text-[#888888] mb-4">
          Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.
        </p>
        <Button className="bg-[#4679b5] hover:bg-[#2864b4] text-[#ffffff] w-full">
          Start Recruiting Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
