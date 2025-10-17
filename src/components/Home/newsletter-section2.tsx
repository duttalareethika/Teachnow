import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="bg-gradient-to-r from-[#c3b5ff] to-[#9bc9ff] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Stay Ahead In Your Job Hunt</h2>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white border-0 rounded-full px-6 py-3 text-[#1e2d42] placeholder:text-[#505050]"
          />
          <Button className="bg-[#4679b5] hover:bg-[#3764b9] text-white rounded-full px-8 py-3 whitespace-nowrap">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}
