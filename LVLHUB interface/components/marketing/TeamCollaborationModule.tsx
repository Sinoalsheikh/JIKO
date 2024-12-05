import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, MessageSquare, FileText, Calendar } from 'lucide-react'

export function TeamCollaborationModule() {
  const collaborationMetrics = [
    { title: "Active Team Members", value: 12, icon: Users },
    { title: "Ongoing Discussions", value: 8, icon: MessageSquare },
    { title: "Shared Documents", value: 45, icon: FileText },
    { title: "Upcoming Meetings", value: 3, icon: Calendar },
  ]

  const projectProgress = [
    { name: "Q4 Marketing Campaign", progress: 75 },
    { name: "Website Redesign", progress: 60 },
    { name: "Product Launch", progress: 40 },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Team Collaboration Module</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Collaboration Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {collaborationMetrics.map((metric) => (
                <div key={metric.title} className="flex items-center space-x-2">
                  <metric.icon className="w-8 h-8 text-gray-300" />
                  <div>
                    <p className="text-sm text-gray-300">{metric.title}</p>
                    <p className="text-xl font-bold text-white">{metric.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectProgress.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-300">{project.name}</span>
                    <span className="text-sm text-gray-300">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2 bg-[#333333]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="w-full">
          <MessageSquare className="w-4 h-4 mr-2" />
          Start Team Discussion
        </Button>
        <Button className="w-full">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Team Meeting
        </Button>
      </div>
    </div>
  )
}

