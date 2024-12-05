import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Book, Users, TrendingUp, FileText } from 'lucide-react'

export function KnowledgeManagementDashboard() {
  const metrics = [
    { title: "Knowledge Base Articles", value: "1,234", change: 15.2, icon: FileText },
    { title: "Active Users", value: "5,678", change: 8.7, icon: Users },
    { title: "Knowledge Sharing Score", value: "4.6/5", change: 0.3, icon: TrendingUp },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Knowledge Management and Learning</h2>
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
          <CardTitle className="text-white">Knowledge Areas Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Product Knowledge</span>
                <span className="text-sm font-medium text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Process Documentation</span>
                <span className="text-sm font-medium text-gray-300">92%</span>
              </div>
              <Progress value={92} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Best Practices</span>
                <span className="text-sm font-medium text-gray-300">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Training Materials</span>
                <span className="text-sm font-medium text-gray-300">88%</span>
              </div>
              <Progress value={88} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

