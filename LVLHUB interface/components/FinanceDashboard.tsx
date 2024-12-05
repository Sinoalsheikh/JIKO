import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, DollarSign, TrendingUp, CreditCard, Percent } from 'lucide-react'

export function FinanceDashboard() {
  const metrics = [
    { title: "Revenue", value: "$1,234,567", change: 8.2, icon: DollarSign },
    { title: "Expenses", value: "$876,543", change: -3.5, icon: CreditCard },
    { title: "Profit Margin", value: "28.9%", change: 2.1, icon: Percent },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Finance and Accounting</h2>
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
          <CardTitle className="text-white">Budget Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Operations</span>
                <span className="text-sm font-medium text-gray-300">40%</span>
              </div>
              <Progress value={40} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Marketing</span>
                <span className="text-sm font-medium text-gray-300">25%</span>
              </div>
              <Progress value={25} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">R&D</span>
                <span className="text-sm font-medium text-gray-300">20%</span>
              </div>
              <Progress value={20} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Admin</span>
                <span className="text-sm font-medium text-gray-300">15%</span>
              </div>
              <Progress value={15} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

