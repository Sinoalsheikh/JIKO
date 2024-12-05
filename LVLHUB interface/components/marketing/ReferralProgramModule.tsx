import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function ReferralProgramModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Referral Program Module</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Referral Campaign Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Total Referrals</span>
                <span className="text-sm font-medium text-gray-300">10,234</span>
              </div>
              <Progress value={70} className="h-2 bg-[#333333]" />
            </div>
            <div className="space-y-2">
              <Button className="w-full">Manage Referral Tiers</Button>
              <Button className="w-full">Update Incentive Programs</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">User Engagement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">View Top Referrers</Button>
            <Button className="w-full">Identify Inactive Users</Button>
            <Button className="w-full">Analyze Incentive Effectiveness</Button>
            <Button className="w-full">Manage Reward Automation</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

