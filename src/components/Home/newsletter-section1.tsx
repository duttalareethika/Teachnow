import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function NewsletterSection() {
  return (
    <div
      className="py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #8b7dd8 0%, #6b5bb3 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-8">Stay Ahead In Your Job Hunt</h3>
        <div className="flex max-w-md mx-auto">
          <Input
            placeholder="Enter your email address"
            className="flex-1 bg-white border-0 rounded-l-lg px-4 py-3 text-[#505050] placeholder:text-[#949494]"
          />
          <Button className="bg-[#4679b5] hover:bg-[#3764b9] text-white px-6 py-3 rounded-r-lg border-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
