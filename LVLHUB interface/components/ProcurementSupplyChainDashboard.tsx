import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, ShoppingCart, Truck, BarChart, Clock } from 'lucide-react'

export function ProcurementSupplyChainDashboard() {
  const metrics = [
    { title: "Total Procurement Value", value: "$5.2M", change: 7.5, icon: ShoppingCart },
    { title: "On-Time Delivery Rate", value: "94%", change: 2.1, icon: Truck },
    { title: "Supplier Performance", value: "4.2/5", change: 0.3, icon: BarChart },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Procurement and Supply Chain Management</h2>
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
          <CardTitle className="text-white">Procurement Process Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Requisition to PO</span>
                <span className="text-sm font-medium text-gray-300">2.5 days</span>
              </div>
              <Progress value={75} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">PO to Invoice</span>
                <span className="text-sm font-medium text-gray-300">15 days</span>
              </div>
              <Progress value={60} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Invoice to Payment</span>
                <span className="text-sm font-medium text-gray-300">7 days</span>
              </div>
              <Progress value={85} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

