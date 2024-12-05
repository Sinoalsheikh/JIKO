import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, MessageSquare, Users, TrendingUp, Globe } from 'lucide-react'

export function CorporateCommunicationsDashboard() {
  const metrics = [
    { title: "Internal Comms Engagement", value: "87%", change: 5.2, icon: MessageSquare },
    { title: "External Reach", value: "2.5M", change: 15.7, icon: Globe },
    { title: "Employee Feedback Score", value: "4.2/5", change: 0.3, icon: Users },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Corporate Communications</h2>
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
          <CardTitle className="text-white">Communication Channel Effectiveness</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Company Intranet</span>
                <span className="text-sm font-medium text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Email Newsletters</span>
                <span className="text-sm font-medium text-gray-300">72%</span>
              </div>
              <Progress value={72} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Town Hall Meetings</span>
                <span className="text-sm font-medium text-gray-300">90%</span>
              </div>
              <Progress value={90} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Social Media</span>
                <span className="text-sm font-medium text-gray-300">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
