import { Dashboard } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, TrendingUp, BarChart, DollarSign, Users } from 'lucide-react'

export default function BusinessOperationsPage() {
  const metrics = [
    { title: "Overall Efficiency", value: "87%", change: 2.5, icon: TrendingUp },
    { title: "Revenue", value: "$1.2M", change: 8.1, icon: DollarSign },
    { title: "Employee Productivity", value: "92%", change: 3.2, icon: Users },
    { title: "Cost Reduction", value: "15%", change: 5.0, icon: BarChart },
  ]

  return (
    <Dashboard>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Business Operations Dashboard</h1>
        
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

        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Operational Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">Process Optimization</span>
                  <span className="text-sm font-medium text-gray-300">75%</span>
                </div>
                <Progress value={75} className="h-2 bg-[#333333]" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">Resource Allocation</span>
                  <span className="text-sm font-medium text-gray-300">82%</span>
                </div>
                <Progress value={82} className="h-2 bg-[#333333]" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">Quality Management</span>
                  <span className="text-sm font-medium text-gray-300">90%</span>
                </div>
                <Progress value={90} className="h-2 bg-[#333333]" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">Compliance Adherence</span>
                  <span className="text-sm font-medium text-gray-300">95%</span>
                </div>
                <Progress value={95} className="h-2 bg-[#333333]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Dashboard>
  )
}

