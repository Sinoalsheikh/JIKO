import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart } from "recharts"
import { ArrowUp, ArrowDown, Users, ThumbsUp, Clock, MessageSquare } from 'lucide-react'

export function CustomerSuccessDashboard() {
  const metrics = [
    { title: "Active Customers", value: "1,234", change: 5.2, icon: Users },
    { title: "Customer Satisfaction", value: "4.8/5", change: 0.3, icon: ThumbsUp },
    { title: "Avg. Response Time", value: "2.5 hrs", change: -15.3, icon: Clock },
    { title: "Open Tickets", value: "42", change: -8.7, icon: MessageSquare },
  ]

  const customerSatisfactionData = [
    { month: "Jan", score: 4.5 },
    { month: "Feb", score: 4.6 },
    { month: "Mar", score: 4.7 },
    { month: "Apr", score: 4.8 },
  ]

  const ticketResolutionData = [
    { category: "Resolved", value: 75 },
    { category: "In Progress", value: 20 },
    { category: "Pending", value: 5 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Customer Success Dashboard</h2>
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Customer Satisfaction Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Satisfaction Score",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <LineChart accessibilityLayer data={customerSatisfactionData}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="score" stroke="var(--color-score)" strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Ticket Resolution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Percentage",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <BarChart accessibilityLayer data={ticketResolutionData}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-value)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Customer Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Product Usage</span>
                <span className="text-sm font-medium text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Feature Adoption</span>
                <span className="text-sm font-medium text-gray-300">72%</span>
              </div>
              <Progress value={72} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Customer Retention</span>
                <span className="text-sm font-medium text-gray-300">93%</span>
              </div>
              <Progress value={93} className="h-2 bg-[#333333]" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">NPS Score</span>
                <span className="text-sm font-medium text-gray-300">68%</span>
              </div>
              <Progress value={68} className="h-2 bg-[#333333]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

