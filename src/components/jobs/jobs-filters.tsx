import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function JobFilters() {
    return (
        <div className="w-80 bg-white p-6 space-y-6">
            <div>
                <h3 className="font-semibold text-[#000000] mb-4">Job type</h3>
                <div className="space-y-3">
                    {["Full-time", "Part-time", "Contract", "Freelancer", "Internship"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={type} />
                            <Label htmlFor={type} className="text-[#333333]">
                                {type}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#000000] mb-4">Work type</h3>
                <RadioGroup defaultValue="none">
                    {["None", "Hybrid", "In Office", "Remote", "On-Site"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type.toLowerCase().replace(" ", "-")} id={type} />
                            <Label htmlFor={type} className="text-[#333333]">
                                {type}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div>
                <h3 className="font-semibold text-[#000000] mb-4">Salary Type</h3>
                <RadioGroup defaultValue="none">
                    {["None", "Monthly", "Yearly"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type.toLowerCase()} id={`salary-${type}`} />
                            <Label htmlFor={`salary-${type}`} className="text-[#333333]">
                                {type}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div>
                <h3 className="font-semibold text-[#000000] mb-4">Experience (Years)</h3>
                <div className="px-2">
                    <Slider defaultValue={[0]} max={15} step={1} className="w-full" />
                    <div className="flex justify-between text-sm text-[#737791] mt-2">
                        <span>0 Year</span>
                        <span>15 Year</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#000000] mb-4">Salary (INR)</h3>
                <div className="px-2">
                    <Slider defaultValue={[0]} max={16} step={1} className="w-full" />
                    <div className="flex justify-between text-sm text-[#737791] mt-2">
                        <span>0 Year</span>
                        <span>16 Year</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
