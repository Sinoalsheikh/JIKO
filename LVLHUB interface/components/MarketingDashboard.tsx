import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Megaphone, TrendingUp, Eye, Share2 } from 'lucide-react'

export function MarketingDashboard() {
  const metrics = [
    { title: "Campaign ROI", value: "215%", change: 12.5, icon: Megaphone },
    { title: "Website Traffic", value: "45,678", change: 8.3, icon: TrendingUp },
    { title: "Social Media Engagement", value: "22.4K", change: 15.7, icon: Share2 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Marketing and Advertising</h2>
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
          <CardTitle className="text-white">Channel Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Social Media</span>
                <span className="text-sm font-medium text-gray-300">35%</span>
              </div>
              <Progress value={35} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Email Marketing</span>
                <span className="text-sm font-medium text-gray-300">28%</span>
              </div>
              <Progress value={28} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Content Marketing</span>
                <span className="text-sm font-medium text-gray-300">22%</span>
              </div>
              <Progress value={22} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Paid Advertising</span>
                <span className="text-sm font-medium text-gray-300">15%</span>
              </div>
              <Progress value={15} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

