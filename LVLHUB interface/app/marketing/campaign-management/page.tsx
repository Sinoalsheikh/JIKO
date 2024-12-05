import { Dashboard } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Target, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function CampaignManagementPage() {
  const campaigns = [
    { name: "Summer Sale", status: "Active", progress: 75, roi: 2.5 },
    { name: "Product Launch", status: "Planning", progress: 30, roi: 0 },
    { name: "Holiday Promotion", status: "Scheduled", progress: 0, roi: 0 },
    { name: "Brand Awareness", status: "Active", progress: 50, roi: 1.8 },
  ]

  const metrics = [
    { title: "Active Campaigns", value: "4", change: 33.3, icon: Target },
    { title: "Avg. Conversion Rate", value: "3.2%", change: 0.5, icon: TrendingUp },
    { title: "Total Reach", value: "1.2M", change: 15.7, icon: Users },
    { title: "Campaign Budget", value: "$50,000", change: -5.2, icon: DollarSign },
  ]

  return (
    <Dashboard>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Campaign Management</h1>
        
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
            <CardTitle className="text-xl font-bold text-white">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.name} className="bg-[#2A2A2A] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      campaign.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2 bg-[#333333]" />
                  {campaign.roi > 0 && (
                    <div className="mt-2 text-sm text-green-400">
                      ROI: {campaign.roi.toFixed(1)}x
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Dashboard>
  )
}

