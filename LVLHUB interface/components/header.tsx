import { useState } from "react"
import Link from "next/link"
import { Bell, Home, MessageSquare, Search, Settings, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Header({ onMobileMenuToggle }: { onMobileMenuToggle: () => void }) {
  const [searchQuery, setSearchQuery] = useState("")

  const navIcons = [
    { icon: Home, label: "Home" },
    { icon: User, label: "Admin" },
    { icon: Bell, label: "HR" },
    { icon: MessageSquare, label: "Sales" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center flex-1">
        <Link href="/" className="mr-4">
          <img src="/logo.svg" alt="LVLHub Logo" className="w-12 h-12" />
        </Link>
        <div className="relative w-full max-w-xl">
          <Input
            type="search"
            placeholder="Search LVLHub Business Suite"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-4 mx-4">
        <TooltipProvider>
          {navIcons.map(({ icon: Icon, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
      <div className="flex items-center space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Messages</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
          <img
            src="/placeholder.svg?height=30&width=30"
            alt="User profile"
            className="w-8 h-8 rounded-full"
          />
        </Button>
        <Button className="md:hidden" onClick={onMobileMenuToggle}>
          Menu
        </Button>
      </div>
    </header>
  )
}

