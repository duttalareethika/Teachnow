import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="bg-[#c3b5ff] py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#ffffff] mb-8">Stay Ahead in Your Job Hunt</h2>
        <div className="flex gap-2 max-w-md mx-auto">
          <Input placeholder="Enter your email address" className="bg-[#ffffff] border-none flex-1" />
          <Button className="bg-[#4679b5] hover:bg-[#2864b4] text-[#ffffff] px-6">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
