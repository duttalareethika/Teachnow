import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pagination() {
    return (
        <div className="flex items-center justify-center space-x-2 mt-8">
            <Button variant="ghost" size="icon" className="text-[#737791]">
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {[1, 2, 3, 4].map((page) => (
                <Button
                    key={page}
                    variant={page === 4 ? "default" : "ghost"}
                    size="icon"
                    className={page === 4 ? "bg-[#556ffe] text-white" : "text-[#737791]"}
                >
                    {page}
                </Button>
            ))}

            <Button variant="ghost" size="icon" className="text-[#737791]">
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    )
}
