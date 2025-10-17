import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
interface Resource {
  id: number
  title: string
  image: string
  author: string
  authorAvatar: string
}
interface ResourceCardProps {
  resource: Resource
}
export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={resource.image || "/placeholder.svg"} alt={resource.title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-[#1e2d42] mb-3 line-clamp-2 leading-tight">{resource.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={resource.authorAvatar || "/placeholder.svg"} alt={resource.author} />
              <AvatarFallback className="bg-[#c3b5ff] text-[#1e2d42] text-xs">
                {resource.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-[#505050]">{resource.author}</span>
          </div>
         <Link
  href="/Home/TRAbout"
  className="flex items-center space-x-1 text-[#4679b5] hover:text-[#3764b9] transition-colors text-sm font-medium"
>
  <span>View Details</span>
  <ArrowRight className="w-4 h-4" />
</Link>
        </div>
      </CardContent>
    </Card>
  )
}
