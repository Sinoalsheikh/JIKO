import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Lightbulb, TrendingUp, FileText, Clock } from 'lucide-react'

export function ResearchDevelopmentDashboard() {
  const metrics = [
    { title: "Active Projects", value: "15", change: 25, icon: Lightbulb },
    { title: "R&D Spending", value: "$2.5M", change: 10, icon: TrendingUp },
    { title: "Patents Filed", value: "8", change: 33.3, icon: FileText },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Research and Product Development</h2>
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
          <CardTitle className="text-white">Project Stages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Concept</span>
                <span className="text-sm font-medium text-gray-300">30%</span>
              </div>
              <Progress value={30} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Development</span>
                <span className="text-sm font-medium text-gray-300">45%</span>
              </div>
              <Progress value={45} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Testing</span>
                <span className="text-sm font-medium text-gray-300">15%</span>
              </div>
              <Progress value={15} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Launch Preparation</span>
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

