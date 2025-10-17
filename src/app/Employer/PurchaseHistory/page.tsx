import { Bell, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


const transactions = [
  {
    type: "Buy Subscription",
    transactionId: "TN1001XYZ",
    date: "20/07/2025",
    amount: "₹ 1001",
    status: "Completed",
  },
  {
    type: "Spend Coin",
    transactionId: "TN120XYZ",
    date: "20/07/2025",
    amount: "-120 Coins",
    status: "Completed",
  },
  {
    type: "Buy Coin",
    transactionId: "TN100XYZ",
    date: "20/07/2025",
    amount: "₹ 100 (+200 Coins)",
    status: "Pending",
  },
  {
    type: "Spend Coin",
    transactionId: "TN80XYZ",
    date: "20/07/2025",
    amount: "-80 Coins",
    status: "Completed",
  },
  {
    type: "Buy Subscription",
    transactionId: "TN1001XYR",
    date: "20/07/2025",
    amount: "₹ 1001",
    status: "Failed",
  },
  {
    type: "Buy Coin",
    transactionId: "TN300XYZ",
    date: "20/07/2025",
    amount: "₹ 300 (+600 Coins)",
    status: "Pending",
  },
  {
    type: "Buy Coin",
    transactionId: "TN300XYZ",
    date: "20/07/2025",
    amount: "₹ 300 (+600 Coins)",
    status: "Completed",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "Completed":
      return <Badge className="bg-[#5ab98a] text-white hover:bg-[#5ab98a]/90">Completed</Badge>
    case "Pending":
      return <Badge className="bg-[#ffa412] text-white hover:bg-[#ffa412]/90">Pending</Badge>
    case "Failed":
      return <Badge className="bg-[#eb5757] text-white hover:bg-[#eb5757]/90">Failed</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
    

      <div className="flex">
        {/* Sidebar */}
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-semibold text-[#447d9b]">Purchase History</h2>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  className="text-[#447d9b] border-[#447d9b] hover:bg-[#447d9b] hover:text-white bg-transparent"
                >
                  All
                </Button>
                <Button variant="outline" className="text-[#737791] border-[#d8d8d8] hover:bg-[#f9fafb] bg-transparent">
                  Spend Coin
                </Button>
                <Button variant="outline" className="text-[#737791] border-[#d8d8d8] hover:bg-[#f9fafb] bg-transparent">
                  Buy Coin
                </Button>
                <Button variant="outline" className="text-[#737791] border-[#d8d8d8] hover:bg-[#f9fafb] bg-transparent">
                  Buy Subscription
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-[#d8d8d8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f9fafb] border-b border-[#d8d8d8]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#737791] uppercase tracking-wider">
                        TYPE
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#737791] uppercase tracking-wider">
                        TRANSACTION ID
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#737791] uppercase tracking-wider">
                        DATE
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#737791] uppercase tracking-wider">
                        AMOUNT
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#737791] uppercase tracking-wider">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d8d8d8]">
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="hover:bg-[#f9fafb]">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#333333]">{transaction.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#333333]">
                          {transaction.transactionId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#333333]">{transaction.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#333333]">{transaction.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(transaction.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                className="flex items-center space-x-2 text-[#447d9b] border-[#447d9b] hover:bg-[#447d9b] hover:text-white px-6 py-2 bg-transparent"
              >
                <span>Load More</span>
                <div className="bg-[#447d9b] text-white rounded-full p-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#d8d8d8] py-4">
        <div className="text-center text-sm text-[#737791]">Copyright © 2025. All rights reserved.</div>
      </footer>
    </div>
  )
}
