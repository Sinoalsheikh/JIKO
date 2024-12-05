import { Dashboard } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Globe, TrendingUp, Users, DollarSign, MousePointer, Share2 } from 'lucide-react'

export default function DigitalMarketingPage() {
  const metrics = [
    { title: "Website Traffic", value: "250K", change: 15.3, icon: Globe },
    { title: "Conversion Rate", value: "3.8%", change: 0.5, icon: TrendingUp },
    { title: "Social Media Followers", value: "100K", change: 7.2, icon: Users },
    { title: "Digital Ad Spend", value: "$15,000", change: -2.1, icon: DollarSign },
  ]

  const channels = [
    { name: "Search Engine Optimization", progress: 72, icon: Globe },
    { name: "Pay-Per-Click Advertising", progress: 65, icon: MousePointer },
    { name: "Social Media Marketing", progress: 88, icon: Share2 },
    { name: "Email Marketing", progress: 58, icon: Mail },
    { name: "Content Marketing", progress: 80, icon: FileText },
  ]

  return (
    <Dashboard>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Digital Marketing</h1>
        
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
            <CardTitle className="text-xl font-bold text-white">Digital Marketing Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {channels.map((channel) => (
                <div key={channel.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <channel.icon className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-200">{channel.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-400">{channel.progress}%</span>
                  </div>
                  <Progress value={channel.progress} className="h-2 bg-[#333333]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">Recent Digital Marketing Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="bg-[#2A2A2A] p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Google Ads Campaign Launch</h3>
                <p className="text-sm text-gray-400">Launched a new Google Ads campaign targeting high-intent keywords for our flagship product.</p>
                <p className="text-xs text-gray-500 mt-2">2 days ago</p>
              </li>
              <li className="bg-[#2A2A2A] p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Social Media Content Calendar Update</h3>
                <p className="text-sm text-gray-400">Updated the content calendar for the next month, focusing on upcoming product releases and industry trends.</p>
                <p className="text-xs text-gray-500 mt-2">5 days ago</p>
              </li>
              <li className="bg-[#2A2A2A] p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">SEO Audit Completion</h3>
                <p className="text-sm text-gray-400">Completed a comprehensive SEO audit of our website, identifying key areas for improvement in on-page and technical SEO.</p>
                <p className="text-xs text-gray-500 mt-2">1 week ago</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Dashboard>
  )
}

