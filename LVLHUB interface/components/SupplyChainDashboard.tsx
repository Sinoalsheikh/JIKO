import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, LineChart } from "@/components/ui/chart"
import { ArrowUp, ArrowDown, Truck, Package, Clock, BarChart2, DollarSign, AlertTriangle } from 'lucide-react'

export function SupplyChainDashboard() {
  const metrics = [
    { title: "On-Time Delivery", value: "94%", change: 2.5, icon: Truck },
    { title: "Inventory Turnover", value: "12.3", change: 1.8, icon: Package },
    { title: "Lead Time", value: "5.2 days", change: -0.8, icon: Clock },
    { title: "Supply Chain Costs", value: "$1.2M", change: -3.2, icon: DollarSign },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Supply Chain Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Inventory Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              config={{
                rawMaterials: {
                  label: "Raw Materials",
                  color: "hsl(var(--chart-1))",
                },
                workInProgress: {
                  label: "Work in Progress",
                  color: "hsl(var(--chart-2))",
                },
                finishedGoods: {
                  label: "Finished Goods",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Supplier Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              config={{
                qualityScore: {
                  label: "Quality Score",
                  color: "hsl(var(--chart-1))",
                },
                deliveryScore: {
                  label: "Delivery Score",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Supply Chain Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Supplier Risk</span>
                <span className="text-sm font-medium text-gray-300">Medium</span>
              </div>
              <Progress value={60} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Transportation Risk</span>
                <span className="text-sm font-medium text-gray-300">Low</span>
              </div>
              <Progress value={30} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Inventory Risk</span>
                <span className="text-sm font-medium text-gray-300">High</span>
              </div>
              <Progress value={80} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Demand Forecasting Risk</span>
                <span className="text-sm font-medium text-gray-300">Medium</span>
              </div>
              <Progress value={50} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

