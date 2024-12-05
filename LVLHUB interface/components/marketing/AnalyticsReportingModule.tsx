import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, PieChart, Activity } from 'lucide-react'

export function AnalyticsReportingModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Analytics & Reporting Module</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Real-Time Performance Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Impressions</span>
              <span className="text-sm font-bold text-white">1.2M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Clicks</span>
              <span className="text-sm font-bold text-white">250K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Conversions</span>
              <span className="text-sm font-bold text-white">15K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Affiliate Sales</span>
              <span className="text-sm font-bold text-white">$50K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Lead Response Rate</span>
              <span className="text-sm font-bold text-white">22%</span>
            </div>
            <Button className="w-full mt-4">
              <BarChart className="w-4 h-4 mr-2" />
              View Detailed Charts
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Custom Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">
              <PieChart className="w-4 h-4 mr-2" />
              Generate Daily Report
            </Button>
            <Button className="w-full">
              <Activity className="w-4 h-4 mr-2" />
              Generate Weekly Report
            </Button>
            <Button className="w-full">
              <BarChart className="w-4 h-4 mr-2" />
              Generate Monthly Report
            </Button>
            <Button className="w-full">
              Configure Alert Thresholds
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

