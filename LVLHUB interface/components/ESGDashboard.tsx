import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Leaf, Recycle, Users, BarChart } from 'lucide-react'

export function ESGDashboard() {
  const metrics = [
    { title: "Carbon Footprint", value: "12,345 tons", change: -8.5, icon: Leaf },
    { title: "Waste Recycled", value: "78%", change: 5.2, icon: Recycle },
    { title: "Employee Diversity", value: "42%", change: 3.7, icon: Users },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Environmental, Social, and Governance (ESG)</h2>
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
                {Math.abs(metric.change)}% from last year
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">ESG Initiatives Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Renewable Energy Adoption</span>
                <span className="text-sm font-medium text-gray-300">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Sustainable Supply Chain</span>
                <span className="text-sm font-medium text-gray-300">72%</span>
              </div>
              <Progress value={72} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Community Engagement</span>
                <span className="text-sm font-medium text-gray-300">88%</span>
              </div>
              <Progress value={88} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Ethical Governance</span>
                <span className="text-sm font-medium text-gray-300">95%</span>
              </div>
              <Progress value={95} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

