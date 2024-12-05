import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function ContentCreationModule() {
  const tasks = [
    { name: "Blog Posts", completion: 75, languages: 5, platforms: 3 },
    { name: "Social Media Posts", completion: 60, languages: 3, platforms: 4 },
    { name: "Videos", completion: 40, languages: 2, platforms: 2 },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">Content Creation Module</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">Task Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {tasks.map((task) => (
              <div key={task.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">{task.name}</span>
                  <span className="text-sm font-medium text-gray-300">{task.completion}%</span>
                </div>
                <Progress value={task.completion} className="h-2 bg-[#333333]" />
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>Languages: {task.languages}</span>
                  <span>Platforms: {task.platforms}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-white">AI Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">Connect Jasper</Button>
            <Button className="w-full">Connect ChatGPT</Button>
            <Button className="w-full">Connect Canva</Button>
            <Button className="w-full">Connect Lumen5</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

