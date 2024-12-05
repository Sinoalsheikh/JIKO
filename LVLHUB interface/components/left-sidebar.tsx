import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function LeftSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(true)
  const [isExploreOpen, setIsExploreOpen] = useState(true)

  const shortcuts = [
    { name: "Recent Project A", icon: "📁" },
    { name: "Workflow X", icon: "🔄" },
    { name: "Task List", icon: "📝" },
  ]

  const exploreLinks = [
    { name: "News Feed", icon: "📰" },
    { name: "Messaging", icon: "💬" },
    { name: "Marketplace", icon: "🛒" },
    { name: "Watch", icon: "📺" },
    { name: "Groups", icon: "👥" },
  ]

  return (
    <aside
      className={`bg-gray-100 w-64 fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Link href="/profile" className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
            <img
              src="/placeholder.svg?height=30&width=30"
              alt="User profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold">John Doe</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <Collapsible open={isShortcutsOpen} onOpenChange={setIsShortcutsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex justify-between items-center w-full mb-2">
              Shortcuts
              {isShortcutsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="space-y-2">
              {shortcuts.map((shortcut) => (
                <li key={shortcut.name}>
                  <Link
                    href="#"
                    className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded"
                  >
                    <span>{shortcut.icon}</span>
                    <span>{shortcut.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={isExploreOpen} onOpenChange={setIsExploreOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex justify-between items-center w-full mt-4 mb-2">
              Explore
              {isExploreOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href="#"
                    className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </aside>
  )
}

