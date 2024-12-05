import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, AlertTriangle } from 'lucide-react'

export function OverviewSection() {
  const metrics = [
    { title: "Total Content Generated", value: "1,234", change: 15.3, progress: 65 },
    { title: "Leads Scraped", value: "175M", change: 7.2, progress: 78 },
    { title: "Affiliates Recruited", value: "5,678", change: 12.5, progress: 82 },
    { title: "Referrals Made", value: "10,234", change: 9.8, progress: 70 },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-[#1A1A1A] border-[#333333]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <p className={`text-xs ${metric.change > 0 ? 'text-green-400' : 'text-red-400'} flex items-center font-semibold`}>
                {metric.change > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {Math.abs(metric.change)}% from last month
              </p>
              <Progress value={metric.progress} className="h-2 mt-2 bg-[#333333]" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
            Real-Time Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-400">Email open rates dropped below 5%</p>
        </CardContent>
      </Card>
      <div className="flex space-x-2">
        <Button>Start Campaign</Button>
        <Button variant="outline">Stop Campaign</Button>
        <Button variant="secondary">Adjust Batch Processing</Button>
      </div>
    </div>
  )
}

