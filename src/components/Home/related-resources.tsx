import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function RelatedResources() {
  const resources = [
    {
      title: "3 Sounds of ed Worksheets and Sorts Inflectional...",
      author: "Jennifer Findlay",
      image: "/letter-c-worksheets-with-cupcake-clock-carrot-illu.jpg",
    },
    {
      title: "New Years 2026 Writing Resolutions Activities New...",
      author: "Jennifer Findlay",
      image: "/new-year-writing-activities-with-person-and-calend.jpg",
    },
    {
      title: "New Year's 2025 Gallery Walk After Winter Break...",
      author: "Jennifer Findlay",
      image: "/students-writing-in-notebooks-classroom-scene.jpg",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold text-[#1e2d42] text-center mb-12">You May Also Like</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={resource.image || "/placeholder.svg"} alt={resource.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-[#1e2d42] mb-3 line-clamp-2">{resource.title}</h4>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/jennifer-findlay-profile.jpg" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
                <span className="text-[#505050] text-sm">{resource.author}</span>
              </div>
              <Button variant="ghost" className="text-[#4679b5] hover:text-[#3764b9] p-0 h-auto font-medium">
                View Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-8">
        <div className="w-2 h-2 bg-[#4679b5] rounded-full"></div>
        <div className="w-2 h-2 bg-[#d9d9d9] rounded-full"></div>
        <div className="w-2 h-2 bg-[#d9d9d9] rounded-full"></div>
        <div className="w-2 h-2 bg-[#d9d9d9] rounded-full"></div>
      </div>
    </div>
  )
}
