import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, AlertTriangle, Shield, TrendingDown, Activity } from 'lucide-react'

export function RiskManagementDashboard() {
  const metrics = [
    { title: "Risk Incidents", value: "12", change: -25, icon: AlertTriangle },
    { title: "Risk Mitigation Rate", value: "87%", change: 5, icon: Shield },
    { title: "Financial Risk Exposure", value: "$2.3M", change: -15, icon: TrendingDown },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Risk Management and Safety</h2>
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
          <CardTitle className="text-white">Risk Assessment by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Operational Risk</span>
                <span className="text-sm font-medium text-gray-300">High</span>
              </div>
              <Progress value={75} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Financial Risk</span>
                <span className="text-sm font-medium text-gray-300">Medium</span>
              </div>
              <Progress value={50} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Compliance Risk</span>
                <span className="text-sm font-medium text-gray-300">Low</span>
              </div>
              <Progress value={25} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Reputational Risk</span>
                <span className="text-sm font-medium text-gray-300">Medium</span>
              </div>
              <Progress value={40} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

