import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Twitter, Linkedin, Instagram, Download } from "lucide-react"

export function ResourceCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Image and thumbnails */}
        <div className="space-y-4">
          {/* Main image wrapper */}
          <div className="w-fit mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/three-wise-men-kings-on-camels-following-star-in-d.jpg"
              alt="Epiphany Activity - Three Wise Men"
              className="max-w-md h-auto rounded-lg object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-3 justify-center">
            <img
              src="/three-wise-men-thumbnail.jpg"
              alt="Thumbnail 1"
              className="w-20 h-20 rounded-lg object-cover border-2 border-[#4679b5]"
            />
            <img
              src="/reading-passage-worksheet.jpg"
              alt="Thumbnail 2"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <img
              src="/yellow-activity-sheet.jpg"
              alt="Thumbnail 3"
              className="w-20 h-20 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1e2d42] mb-4">
              Epiphany Activity - Feast Of The Three Kings Wisemen Reading Passage & Booklets
            </h2>

            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/jennifer-findlay-profile.jpg" />
                <AvatarFallback>JF</AvatarFallback>
              </Avatar>
              <span className="text-[#505050] font-medium">Jennifer Findlay</span>
            </div>

            <p className="text-[#505050] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat enim quis turpis eleifend, nec
              efficitur nunc auctor.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <Button className="bg-[#4679b5] hover:bg-[#3764b9] text-white px-6 py-2 rounded-lg flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Resource</span>
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-[#505050] text-sm">Share</span>
                <div className="flex space-x-2">
                  <Facebook className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
                  <Twitter className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
                  <Linkedin className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
                  <Instagram className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
                </div>
              </div>
            </div>
          </div>

          {/* What's included section */}
          <div className="bg-[#f6f6f6] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e2d42] mb-4">What&apos;s included</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#505050]">Total Pages</span>
                <span className="text-[#1e2d42] font-medium">14 pages</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#505050]">Answer Key</span>
                <span className="text-[#1e2d42] font-medium">Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#505050]">Teaching Duration</span>
                <span className="text-[#1e2d42] font-medium">N/A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
