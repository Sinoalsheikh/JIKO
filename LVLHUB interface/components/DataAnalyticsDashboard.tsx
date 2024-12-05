import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, BarChart2, TrendingUp, Database, PieChart } from 'lucide-react'

export function DataAnalyticsDashboard() {
  const metrics = [
    { title: "Data Processed", value: "1.2 TB", change: 15.3, icon: Database },
    { title: "Insights Generated", value: "2,345", change: 8.7, icon: TrendingUp },
    { title: "Model Accuracy", value: "94.5%", change: 2.1, icon: PieChart },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Data Analytics and Business Intelligence</h2>
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
          <CardTitle className="text-white">Analytics Projects Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Customer Segmentation</span>
                <span className="text-sm font-medium text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Predictive Maintenance</span>
                <span className="text-sm font-medium text-gray-300">72%</span>
              </div>
              <Progress value={72} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Fraud Detection</span>
                <span className="text-sm font-medium text-gray-300">93%</span>
              </div>
              <Progress value={93} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Supply Chain Optimization</span>
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

