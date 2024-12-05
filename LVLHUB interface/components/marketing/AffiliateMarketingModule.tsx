import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function AffiliateMarketingModule() {
  const affiliateStats = [
    { platform: "PartnerStack", recruited: 1234, progress: 75 },
    { platform: "Impact", recruited: 987, progress: 60 },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Affiliate Marketing Module</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Affiliate Recruitment Progress</CardTitle>
          </CardHeader>
          <CardContent>
            {affiliateStats.map((stat) => (
              <div key={stat.platform} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">{stat.platform}</span>
                  <span className="text-sm font-medium text-gray-300">{stat.recruited} affiliates</span>
                </div>
                <Progress value={stat.progress} className="h-2 bg-[#333333]" />
              </div>
            ))}
            <Button className="w-full mt-4">Start Bulk Invite Campaign</Button>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Resource Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">Upload Affiliate Resources</Button>
            <Button className="w-full">Download Affiliate Resources</Button>
            <Button className="w-full">Manage Email Templates</Button>
            <Button className="w-full">Update Training Guides</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

