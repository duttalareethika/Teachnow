import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#c2b3ff] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Stay Ahead In Your Job Hunt</h2>
          <div className="flex max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="rounded-l-full border-none bg-white/90 text-[#1e2d42] placeholder:text-[#888888]"
            />
            <Button className="rounded-r-full bg-[#4679b5] hover:bg-[#3764b9] text-white px-6">→</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
