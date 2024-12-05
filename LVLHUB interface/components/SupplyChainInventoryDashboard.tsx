import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Package, TrendingUp, Truck, BarChart } from 'lucide-react'

export function SupplyChainInventoryDashboard() {
  const metrics = [
    { title: "Inventory Turnover", value: "12.5", change: 2.3, icon: Package },
    { title: "On-Time Delivery", value: "94%", change: 1.5, icon: Truck },
    { title: "Stock Accuracy", value: "98.7%", change: 0.8, icon: BarChart },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Supply Chain and Inventory Management</h2>
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
                {Math.abs(metric.change)}% from last quarter
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Inventory Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Raw Materials</span>
                <span className="text-sm font-medium text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Work in Progress</span>
                <span className="text-sm font-medium text-gray-300">60%</span>
              </div>
              <Progress value={60} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Finished Goods</span>
                <span className="text-sm font-medium text-gray-300">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Safety Stock</span>
                <span className="text-sm font-medium text-gray-300">100%</span>
              </div>
              <Progress value={100} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

