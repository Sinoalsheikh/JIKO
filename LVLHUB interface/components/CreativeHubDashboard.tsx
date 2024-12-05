import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Palette, Zap, TrendingUp, Eye } from 'lucide-react'

export function CreativeHubDashboard() {
  const metrics = [
    { title: "Projects Completed", value: "45", change: 12.5, icon: Palette },
    { title: "Avg. Turnaround Time", value: "3.2 days", change: -8.3, icon: Zap },
    { title: "Client Satisfaction", value: "4.8/5", change: 2.1, icon: TrendingUp },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Creative Hub</h2>
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
          <CardTitle className="text-white">Project Types Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Branding</span>
                <span className="text-sm font-medium text-gray-300">30%</span>
              </div>
              <Progress value={30} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Web Design</span>
                <span className="text-sm font-medium text-gray-300">25%</span>
              </div>
              <Progress value={25} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Print Design</span>
                <span className="text-sm font-medium text-gray-300">20%</span>
              </div>
              <Progress value={20} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">UI/UX Design</span>
                <span className="text-sm font-medium text-gray-300">15%</span>
              </div>
              <Progress value={15} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Video Production</span>
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

