import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Clock, CheckCircle, AlertTriangle, Users } from 'lucide-react'

export function ProjectManagementDashboard() {
  const metrics = [
    { title: "Active Projects", value: "24", change: 9.1, icon: Users },
    { title: "On-Time Completion Rate", value: "87%", change: 3.5, icon: CheckCircle },
    { title: "Average Project Duration", value: "3.2 months", change: -5.9, icon: Clock },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Project Management and Coordination</h2>
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
          <CardTitle className="text-white">Project Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">On Track</span>
                <span className="text-sm font-medium text-gray-300">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">At Risk</span>
                <span className="text-sm font-medium text-gray-300">25%</span>
              </div>
              <Progress value={25} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Delayed</span>
                <span className="text-sm font-medium text-gray-300">10%</span>
              </div>
              <Progress value={10} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

