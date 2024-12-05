import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function LeadGenerationModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Lead Generation & Outreach Module</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Lead Scraping Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Total Leads Scraped</span>
                <span className="text-sm font-medium text-gray-300">175M / 225M</span>
              </div>
              <Progress value={77.8} className="h-2 bg-[#333333]" />
            </div>
            <div className="space-y-2">
              <Button className="w-full">Connect Hunter.io</Button>
              <Button className="w-full">Connect ZoomInfo</Button>
              <Button className="w-full">Connect LinkedIn Sales Navigator</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Outreach Campaigns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">View Email Campaign Stats</Button>
            <Button className="w-full">Manage Call Follow-ups</Button>
            <Button className="w-full">Auto-schedule Meetings</Button>
            <Button className="w-full">Sync with CRM</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

