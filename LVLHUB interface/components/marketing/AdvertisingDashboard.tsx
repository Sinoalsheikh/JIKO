import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, DollarSign, Target, Eye, MousePointer, Plus } from 'lucide-react'

const adPlatforms = ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Twitter Ads"]

const AdPlatform = ({ platform }) => {
  return (
    <Card className="bg-[#1A1A1A] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">{platform}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
          </TabsList>
          <TabsContent value="performance">
            <BarChart
              config={{
                impressions: {
                  label: "Impressions",
                  color: "hsl(var(--chart-1))",
                },
                clicks: {
                  label: "Clicks",
                  color: "hsl(var(--chart-2))",
                },
                conversions: {
                  label: "Conversions",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[200px]"
            />
          </TabsContent>
          <TabsContent value="budget">
            <LineChart
              config={{
                spend: {
                  label: "Spend",
                  color: "hsl(var(--chart-1))",
                },
                budget: {
                  label: "Budget",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[200px]"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export function AdvertisingDashboard() {
  const metrics = [
    { title: "Total Ad Spend", value: "$10,234", change: 7.5, icon: DollarSign },
    { title: "Avg. CTR", value: "2.4%", change: 0.3, icon: MousePointer },
    { title: "Impressions", value: "1.2M", change: 15.2, icon: Eye },
    { title: "Conversions", value: "3,456", change: 5.1, icon: Target },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Advertising Dashboard</h2>
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
        {adPlatforms.map((platform) => (
          <AdPlatform key={platform} platform={platform} />
        ))}
      </div>
      <Button className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add Advertising Platform
      </Button>
    </div>
  )
}

