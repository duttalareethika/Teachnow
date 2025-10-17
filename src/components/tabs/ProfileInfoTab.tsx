import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit } from "lucide-react"

type Tab = {
    key: string
    label: string
}

interface PersonalInfoTabProps {
    activeTab: string
    setActiveTab: (tabKey: string) => void
    tabs: Tab[]
}

export default function PersonalInfoTab({ activeTab, setActiveTab, tabs }: PersonalInfoTabProps) {
    const currentIndex = tabs.findIndex((t) => t.key === activeTab)

    const goBack = () => {
        if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1].key)
    }

    const goNext = () => {
        if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1].key)
    }

    return (
        <div className="bg-white rounded-lg p-8">
            {/* Personal Info Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="/professional-woman-dark-hair.png" alt="Alexa Rawles" />
                        <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-semibold text-[#1e2d42]">Alexa Rawles</h2>
                        <p className="text-[#737791]">alexarawles@gmail.com</p>
                    </div>
                </div>
                <Button className="bg-[#9bc9ff] text-[#4679b5] hover:bg-[#4679b5] hover:text-white px-6 py-2 rounded-lg">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                </Button>
            </div>

            {/* Toggle Switches */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                    <span className="text-[#333333]">Hide profile from current employer</span>
                    <Switch className="data-[state=checked]:bg-[#4679b5]" />
                </div>
                <div className="flex items-center space-x-3">
                    <span className="text-[#333333]">Open to Work</span>
                    <Switch className="data-[state=checked]:bg-[#4679b5]" defaultChecked />
                </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="firstName" className="text-[#333333] font-medium">
                        First Name*
                    </Label>
                    <Input id="firstName" placeholder="Your First Name" />
                </div>
                <div>
                    <Label htmlFor="lastName" className="text-[#333333] font-medium">
                        Last Name*
                    </Label>
                    <Input id="lastName" placeholder="Your Last Name" />
                </div>
                <div>
                    <Label htmlFor="phone" className="text-[#333333] font-medium">
                        Phone*
                    </Label>
                    <Input id="phone" placeholder="Your Phone number here" />
                </div>
                <div>
                    <Label htmlFor="email" className="text-[#333333] font-medium">
                        Email*
                    </Label>
                    <Input id="email" placeholder="Your Email Here" />
                </div>
                <div>
                    <Label htmlFor="dob" className="text-[#333333] font-medium">
                        Date of Birth*
                    </Label>
                    <Input id="dob" placeholder="Your Date of Birth" />
                </div>
                <div>
                    <Label htmlFor="gender" className="text-[#333333] font-medium">
                        Gender
                    </Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Your Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="maritalStatus" className="text-[#333333] font-medium">
                        Marital Status
                    </Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose Your Marital Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="married">Married</SelectItem>
                            <SelectItem value="divorced">Divorced</SelectItem>
                            <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="website" className="text-[#333333] font-medium">
                        Website
                    </Label>
                    <Input id="website" placeholder="Your Website Details" />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
                <Button
                    variant="outline"
                    className="px-8 py-2 rounded-full border-[#4679b5] text-[#4679b5] bg-transparent"
                    onClick={goBack}
                    disabled={currentIndex === 0}
                >
                    Back
                </Button>
                <Button
                    className="px-8 py-2 rounded-full bg-[#4679b5] text-white"
                    onClick={goNext}
                    disabled={currentIndex === tabs.length - 1}
                >
                    NEXT
                </Button>
            </div>
        </div>
    )
}
