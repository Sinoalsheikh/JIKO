import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, ShoppingCart, DollarSign, Users, TrendingUp } from 'lucide-react'

export function SalesHubDashboard() {
  const metrics = [
    { title: "Total Sales", value: "$987,654", change: 7.8, icon: ShoppingCart },
    { title: "Avg. Deal Size", value: "$12,345", change: 3.2, icon: DollarSign },
    { title: "New Customers", value: "123", change: 5.5, icon: Users },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Sales Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-[#1A1A1A] border-[#333333]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{metric.title}</CardTitle>
              <metric.icon className="h-6 w-6 text-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <p className={`text-xs ${metric.change > 0 ? 'text-green-400' : 'text-red-400'} flex items-center font-semibold`}>
                {metric.change > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {Math.abs(metric.change)}% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Sales Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Leads</span>
                <span className="text-sm font-medium text-gray-300">250</span>
              </div>
              <Progress value={70} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Qualified</span>
                <span className="text-sm font-medium text-gray-300">180</span>
              </div>
              <Progress value={50} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Proposal</span>
                <span className="text-sm font-medium text-gray-300">90</span>
              </div>
              <Progress value={25} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Negotiation</span>
                <span className="text-sm font-medium text-gray-300">45</span>
              </div>
              <Progress value={12} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Closed Won</span>
                <span className="text-sm font-medium text-gray-300">30</span>
              </div>
              <Progress value={8} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

