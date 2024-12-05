import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Plus } from 'lucide-react'

const socialPlatforms = [
  { name: "Facebook", icon: Facebook, color: "text-blue-600" },
  { name: "Twitter", icon: Twitter, color: "text-sky-500" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
]

const SocialMediaAccount = ({ platform }) => {
  return (
    <Card className="bg-[#1A1A1A] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <platform.icon className={`mr-2 ${platform.color}`} />
          {platform.name} Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <BarChart
              config={{
                posts: {
                  label: "Posts",
                  color: "hsl(var(--chart-1))",
                },
                likes: {
                  label: "Likes",
                  color: "hsl(var(--chart-2))",
                },
                shares: {
                  label: "Shares",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[200px]"
            />
          </TabsContent>
          <TabsContent value="engagement">
            <LineChart
              config={{
                engagement: {
                  label: "Engagement Rate",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[200px]"
            />
          </TabsContent>
          <TabsContent value="followers">
            <PieChart
              config={{
                newFollowers: {
                  label: "New Followers",
                  color: "hsl(var(--chart-1))",
                },
                totalFollowers: {
                  label: "Total Followers",
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

export function SocialMediaDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Social Media Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialPlatforms.map((platform) => (
          <SocialMediaAccount key={platform.name} platform={platform} />
        ))}
      </div>
      <Button className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add Social Media Account
      </Button>
    </div>
  )
}

