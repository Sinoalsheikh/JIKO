import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, TrendingUp, Server, Cpu, Database, Cloud } from 'lucide-react'

export function ScalabilityResourceUtilization() {
  const metrics = [
    { title: "Server Load", value: "68%", change: -5.2, icon: Server },
    { title: "CPU Usage", value: "72%", change: 3.7, icon: Cpu },
    { title: "Database Queries", value: "1.2K/s", change: 8.5, icon: Database },
    { title: "Cloud Storage", value: "85% used", change: 2.1, icon: Cloud },
  ]

  const resourceAllocation = [
    { name: "Marketing Automation", allocation: 40 },
    { name: "Analytics Processing", allocation: 30 },
    { name: "Content Delivery", allocation: 20 },
    { name: "User Data Management", allocation: 10 },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Scalability and Resource Utilization</h3>
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
                {Math.abs(metric.change)}% from last hour
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Resource Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {resourceAllocation.map((resource) => (
              <div key={resource.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">{resource.name}</span>
                  <span className="text-sm font-medium text-gray-300">{resource.allocation}%</span>
                </div>
                <Progress value={resource.allocation} className="h-2 bg-[#333333]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="w-full">
          <TrendingUp className="w-4 h-4 mr-2" />
          Optimize Resource Allocation
        </Button>
        <Button className="w-full">
          <Server className="w-4 h-4 mr-2" />
          Scale Infrastructure
        </Button>
      </div>
    </div>
  )
}

