import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft } from "lucide-react"



const SocialTab = () => {
    return (
        <main className="flex-1 p-8">
            <div className="max-w-4xl">
                {/* Tab Navigation */}


                {/* Main Form */}
                <div className="bg-white rounded-lg p-8 border border-[#f3f3f4]">
                    <h2 className="text-2xl font-semibold text-[#4679b5] mb-8">Job Preferences and Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-[#333333] mb-3">Select Social Media</label>
                            <Select>
                                <SelectTrigger className="w-full h-12 border-[#f3f3f4] bg-white">
                                    <SelectValue placeholder="Select Social Options" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                                    <SelectItem value="twitter">Twitter</SelectItem>
                                    <SelectItem value="facebook">Facebook</SelectItem>
                                    <SelectItem value="instagram">Instagram</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#333333] mb-3">Give Link</label>
                            <Input placeholder="Give Your Link Here" className="h-12 border-[#f3f3f4] bg-white" />
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-12">
                        <Button
                            variant="outline"
                            className="px-8 py-3 border-[#4679b5] text-[#4679b5] hover:bg-[#4679b5] hover:text-white bg-transparent"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                        </Button>

                        <Button className="px-8 py-3 bg-[#9bc9ff] hover:bg-[#4679b5] text-white">
                            NEXT
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default SocialTab