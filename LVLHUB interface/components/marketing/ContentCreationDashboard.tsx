import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart } from "@/components/ui/chart"
import { ArrowUp, ArrowDown, FileText, Video, Image, Mic } from 'lucide-react'

const contentTypes = [
  { name: "Blog Posts", icon: FileText, count: 25, change: 5 },
  { name: "Videos", icon: Video, count: 10, change: -2 },
  { name: "Images", icon: Image, count: 50, change: 10 },
  { name: "Podcasts", icon: Mic, count: 5, change: 1 },
]

export function ContentCreationDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Content Creation Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentTypes.map((type) => (
          <Card key={type.name} className="bg-[#1A1A1A] border-[#333333]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{type.name}</CardTitle>
              <type.icon className="h-6 w-6 text-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{type.count}</div>
              <p className={`text-xs ${type.change > 0 ? 'text-green-400' : 'text-red-400'} flex items-center font-semibold`}>
                {type.change > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {Math.abs(type.change)} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-[#1A1A1A] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Content Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            config={{
              views: {
                label: "Views",
                color: "hsl(var(--chart-1))",
              },
              engagement: {
                label: "Engagement",
                color: "hsl(var(--chart-2))",
              },
              conversions: {
                label: "Conversions",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          />
        </CardContent>
      </Card>
    </div>
  )
}

