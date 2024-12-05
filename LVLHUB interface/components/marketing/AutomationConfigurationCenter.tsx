import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Zap, Settings, Mail, Share2, MessageSquare } from 'lucide-react'

export function AutomationConfigurationCenter() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Automation Configuration Center</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Workflow Automation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" />
                <Label htmlFor="email-automation" className="text-sm text-gray-300">Email Automation</Label>
              </div>
              <Switch id="email-automation" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="w-4 h-4 text-gray-300" />
                <Label htmlFor="social-automation" className="text-sm text-gray-300">Social Media Automation</Label>
              </div>
              <Switch id="social-automation" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gray-300" />
                <Label htmlFor="chat-automation" className="text-sm text-gray-300">Chat Bot Automation</Label>
              </div>
              <Switch id="chat-automation" />
            </div>
            <Button className="w-full mt-4">
              <Settings className="w-4 h-4 mr-2" />
              Configure Workflows
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Trigger Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-score-threshold" className="text-sm text-gray-300">Lead Score Threshold</Label>
              <Input id="lead-score-threshold" type="number" placeholder="Enter threshold" className="bg-[#333333] text-white border-[#4D4D4D]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="engagement-trigger" className="text-sm text-gray-300">Engagement Trigger</Label>
              <Input id="engagement-trigger" placeholder="e.g., Email Open, Click" className="bg-[#333333] text-white border-[#4D4D4D]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time-based-trigger" className="text-sm text-gray-300">Time-Based Trigger</Label>
              <Input id="time-based-trigger" type="time" className="bg-[#333333] text-white border-[#4D4D4D]" />
            </div>
            <Button className="w-full mt-4">
              <Zap className="w-4 h-4 mr-2" />
              Set Triggers
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

