
import { Upload, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const PersonalDetailsForm = ({
    goNext,
}: {
    goNext: () => void
}) => {
    return (
        <div>
            {/* Form Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-[#4679b5] mb-2">Personal Details</h1>
                <p className="text-[#737791]">Your CV</p>
            </div>

            {/* Profile Photo Section */}
            <div className="flex items-center space-x-4 mb-8">
                <Avatar className="h-20 w-20">
                    <AvatarImage src="/professional-woman-diverse.png" />
                    <AvatarFallback>Photo</AvatarFallback>
                </Avatar>
                <Button
                    variant="outline"
                    className="flex items-center space-x-2 text-[#4679b5] border-[#4679b5] bg-transparent"
                >
                    <span>Choose your file</span>
                    <Upload className="h-4 w-4" />
                </Button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="firstName" className="text-[#333333] font-medium">
                            First Name*
                        </Label>
                        <Input
                            id="firstName"
                            placeholder="Your First Name"
                            className="mt-1 border-[#cccccc] focus:border-[#4679b5]"
                        />
                    </div>
                    <div>
                        <Label htmlFor="lastName" className="text-[#333333] font-medium">
                            Last Name
                        </Label>
                        <Input
                            id="lastName"
                            placeholder="Your Last Name"
                            className="mt-1 border-[#cccccc] focus:border-[#4679b5]"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="phone" className="text-[#333333] font-medium">
                        Phone Number
                    </Label>
                    <Input
                        id="phone"
                        placeholder="Your Phone number here"
                        className="mt-1 border-[#cccccc] focus:border-[#4679b5]"
                    />
                </div>

                <div>
                    <Label htmlFor="email" className="text-[#333333] font-medium">
                        Email
                    </Label>
                    <Input id="email" placeholder="Give Your Email" className="mt-1 border-[#cccccc] focus:border-[#4679b5]" />
                </div>

                <div>
                    <Label htmlFor="jobRole" className="text-[#333333] font-medium">
                        Job Role
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-1 border-[#cccccc] focus:border-[#4679b5]">
                            <SelectValue placeholder="Choose Job Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="designer">Designer</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="industry" className="text-[#333333] font-medium">
                        Industry Name
                    </Label>
                    <Input
                        id="industry"
                        placeholder="Your Industry Name"
                        className="mt-1 border-[#cccccc] focus:border-[#4679b5]"
                    />
                </div>

                <div>
                    <Label htmlFor="experience" className="text-[#333333] font-medium">
                        Experience (Year)
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-1 border-[#cccccc] focus:border-[#4679b5]">
                            <SelectValue placeholder="Choose Your Marital Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="address" className="text-[#333333] font-medium">
                        Address
                    </Label>
                    <Input
                        id="address"
                        placeholder="Your Phone number here"
                        className="mt-1 border-[#cccccc] focus:border-[#4679b5]"
                    />
                </div>

                <div>
                    <Label htmlFor="website" className="text-[#333333] font-medium">
                        Website (Optional)
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-1 border-[#cccccc] focus:border-[#4679b5]">
                            <SelectValue placeholder="Choose Your Marital Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="portfolio">Portfolio</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="github">GitHub</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="language" className="text-[#333333] font-medium">
                        Language (Optional)
                    </Label>
                    <div className="relative">
                        <Select>
                            <SelectTrigger className="mt-1 border-[#cccccc] focus:border-[#4679b5]">
                                <SelectValue placeholder="Choose Your Marital Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4679b5] hover:bg-[#447d9b] h-8 w-8 p-0"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div>
                    <Label htmlFor="summary" className="text-[#333333] font-medium">
                        Your Summary
                    </Label>
                    <Textarea
                        id="summary"
                        placeholder="Choose Your Marital Status"
                        className="mt-1 border-[#cccccc] focus:border-[#4679b5] min-h-[100px]"
                    />
                </div>
            </div>



            <div className="flex justify-end mt-8">
                <Button
                    onClick={goNext}
                    className="bg-[#4679b5] hover:bg-[#447d9b] text-white px-8 py-2 rounded-full"
                >
                    NEXT
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default PersonalDetailsForm