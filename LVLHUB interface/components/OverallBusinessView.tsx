import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, DollarSign, Users, BarChart, Zap } from 'lucide-react'

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2 bg-gray-700 rounded-full backdrop-blur-sm border border-gray-600">
    {children}
  </div>
)

export function OverallBusinessView() {
  const kpis = [
    { title: "Total Revenue", value: "$1,234,567", change: 8.2, icon: DollarSign },
    { title: "Active Users", value: "12,345", change: 5.1, icon: Users },
    { title: "Conversion Rate", value: "3.2%", change: -0.4, icon: BarChart },
    { title: "Avg. Processing Time", value: "2.5 mins", change: -12.3, icon: Zap },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Overall Business Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="bg-[#1A1A1A] border-[#333333]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
              <IconWrapper>
                <kpi.icon className="h-6 w-6 text-gray-300" />
              </IconWrapper>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{kpi.value}</div>
              <p className={`text-xs ${kpi.change > 0 ? 'text-green-400' : 'text-red-400'} flex items-center font-semibold`}>
                {kpi.change > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {Math.abs(kpi.change)}% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Company-wide Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Overall Efficiency</span>
              <span className="text-sm font-medium text-gray-300">78%</span>
            </div>
            <Progress value={78} className="h-2 bg-[#333333]" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

