import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Users, UserPlus, UserMinus, Briefcase } from 'lucide-react'

export function HRDashboard() {
  const metrics = [
    { title: "Total Employees", value: "1,234", change: 5.2, icon: Users },
    { title: "New Hires", value: "45", change: 12.5, icon: UserPlus },
    { title: "Turnover Rate", value: "3.2%", change: -1.5, icon: UserMinus },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Human Resources and Employee Support</h2>
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
          <CardTitle className="text-white">Employee Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Work-Life Balance</span>
                <span className="text-sm font-medium text-gray-300">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Career Growth</span>
                <span className="text-sm font-medium text-gray-300">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Company Culture</span>
                <span className="text-sm font-medium text-gray-300">82%</span>
              </div>
              <Progress value={82} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

