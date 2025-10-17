import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  subtitle: string
  credits: number
  activeDays: number
  usageDays: number
  price: number
  originalPrice?: number
  discount?: string
  isPopular?: boolean
  buttonText?: string
}

export function PricingCard({
  title,
  subtitle,
  credits,
  activeDays,
  usageDays,
  price,
  originalPrice,
  discount,
  isPopular = false,
  buttonText = "Buy Now",
}: PricingCardProps) {
  return (
    <Card
      className={`pricing-card relative p-6 ${isPopular ? "bg-[#c2b3ff] border-[#c2b3ff]" : "bg-white border-[#d9d9d9]"} rounded-2xl shadow-lg`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#9bc9ff] text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? "text-white" : "text-[#1e2d42]"}`}>{title}</h3>
        <p className={`text-sm ${isPopular ? "text-white/90" : "text-[#888888]"}`}>{subtitle}</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center space-x-3">
          <div className={`w-2 h-2 rounded-full ${isPopular ? "bg-white" : "bg-[#4679b5]"}`} />
          <span className={`text-sm ${isPopular ? "text-white" : "text-[#1e2d42]"}`}>{credits} Job credits</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className={`w-2 h-2 rounded-full ${isPopular ? "bg-white" : "bg-[#4679b5]"}`} />
          <span className={`text-sm ${isPopular ? "text-white" : "text-[#1e2d42]"}`}>
            Job will be active for {activeDays} days
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className={`w-2 h-2 rounded-full ${isPopular ? "bg-white" : "bg-[#4679b5]"}`} />
          <span className={`text-sm ${isPopular ? "text-white" : "text-[#1e2d42]"}`}>
            Use these credits in {usageDays} days
          </span>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2">
          <span className={`text-3xl font-bold ${isPopular ? "text-white" : "text-[#1e2d42]"}`}>₹{price}</span>
          {originalPrice && (
            <>
              <span className={`text-lg line-through ${isPopular ? "text-white/70" : "text-[#888888]"}`}>
                ₹{originalPrice}
              </span>
              {discount && (
                <span className="bg-[#9bc9ff] text-white px-2 py-1 rounded text-xs font-medium">{discount}</span>
              )}
            </>
          )}
        </div>
      </div>

      <Button
        className={`w-full rounded-full ${
          isPopular ? "bg-white text-[#c2b3ff] hover:bg-gray-100" : "bg-[#9bc9ff] text-white hover:bg-[#4679b5]"
        }`}
      >
        {buttonText}
      </Button>
    </Card>
  )
}
