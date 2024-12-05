import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Building, Thermometer, Zap, Droplet } from 'lucide-react'

export function FacilitiesManagementDashboard() {
  const metrics = [
    { title: "Space Utilization", value: "85%", change: 3.2, icon: Building },
    { title: "Energy Efficiency", value: "92%", change: 5.5, icon: Zap },
    { title: "Maintenance Requests", value: "24", change: -15.3, icon: Thermometer },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Facilities and Building Management</h2>
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
          <CardTitle className="text-white">Resource Consumption</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Electricity</span>
                <span className="text-sm font-medium text-gray-300">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Water</span>
                <span className="text-sm font-medium text-gray-300">60%</span>
              </div>
              <Progress value={60} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Heating</span>
                <span className="text-sm font-medium text-gray-300">40%</span>
              </div>
              <Progress value={40} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Cooling</span>
                <span className="text-sm font-medium text-gray-300">55%</span>
              </div>
              <Progress value={55} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

