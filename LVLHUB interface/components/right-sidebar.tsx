import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from 'lucide-react'

export function RightSidebar() {
  const [isContactsOpen, setIsContactsOpen] = useState(true)
  const [isProjectsOpen, setIsProjectsOpen] = useState(true)

  const contacts = [
    { name: "Alice Johnson", status: "online" },
    { name: "Bob Smith", status: "offline" },
    { name: "Charlie Brown", status: "online" },
  ]

  const projects = [
    { name: "Q4 Marketing Campaign", date: "2023-12-15" },
    { name: "New Product Launch", date: "2024-01-10" },
    { name: "Annual Team Building", date: "2024-02-28" },
  ]

  return (
    <aside className="hidden lg:block w-64 p-4 bg-gray-50 overflow-y-auto">
      <Collapsible open={isContactsOpen} onOpenChange=setIsContactsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex justify-between items-center w-full mb-2">
            Contacts and Collaboration
            {isContactsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="space-y-2">
            {contacts.map((contact) => (
              <li key={contact.name} className="flex items-center justify-between">
                <span>{contact.name}</span>
                <span className={`w-2 h-2 rounded-full ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isProjectsOpen} onOpenChange={setIsProjectsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex justify-between items-center w-full mt-4 mb-2">
            Recent Projects & Events
            {isProjectsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.name}>
                <p className="font-semibold">{project.name}</p>
                <p className="text-sm text-gray-500">{project.date}</p>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upgrade to Pro</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Unlock advanced features and boost your productivity!</p>
          <Button className="w-full">Learn More</Button>
        </CardContent>
      </Card>
    </aside>
  )
}

