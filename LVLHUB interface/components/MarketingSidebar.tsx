"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart2, FileText, Users, Target, Share2, PieChart, Zap, UserPlus, TrendingUp, Settings, ChevronLeft } from 'lucide-react'

const marketingModules = [
  { name: "Overview", icon: BarChart2, href: "/marketing" },
  { name: "Content Creation", icon: FileText, href: "/marketing/content-creation" },
  { name: "Affiliate Marketing", icon: Users, href: "/marketing/affiliate-marketing" },
  { name: "Lead Generation", icon: Target, href: "/marketing/lead-generation" },
  { name: "Referral Program", icon: Share2, href: "/marketing/referral-program" },
  { name: "Analytics & Reporting", icon: PieChart, href: "/marketing/analytics-reporting" },
  { name: "Automation", icon: Zap, href: "/marketing/automation" },
  { name: "Team Collaboration", icon: UserPlus, href: "/marketing/team-collaboration" },
  { name: "Scalability", icon: TrendingUp, href: "/marketing/scalability" },
]

export function MarketingSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const pathname = usePathname()
  const activeModuleFromPathname = marketingModules.find(module => pathname === module.href)?.name || null;

  useEffect(() => {
    setActiveModule(activeModuleFromPathname);
  }, [activeModuleFromPathname]);

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-[280px] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out z-30 bg-[#1A1A1A] border-r border-[#333333] md:translate-x-0`}
    >
      <ScrollArea className="h-full pt-4">
        <nav className="px-2 py-2 space-y-4">
          <div className="flex items-center space-x-3 px-4 py-3 mb-2">
            <Link href="/" className="flex items-center justify-center">
              <ChevronLeft className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
            </Link>
            <div className="flex items-center justify-center flex-1">
              <BarChart2 className="h-6 w-6 text-white mr-2" />
              <span className="text-xl font-extrabold text-white">
                Marketing Hub
              </span>
            </div>
          </div>
          <div className="space-y-1">
            {marketingModules.map((module) => (
              <Link 
                key={module.name} 
                href={module.href} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-[#CCCCCC] transition-colors duration-200
                  ${activeModule === module.name ? 'bg-[#333333]/50' : 'bg-transparent hover:bg-[#333333]/30'}`}
                onClick={() => setActiveModule(module.name)}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4D4D4D]/50 backdrop-blur-sm">
                  <module.icon className="h-5 w-5 text-gray-300" />
                </div>
                <span className="text-[15px] font-medium flex-1">{module.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </ScrollArea>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1A1A1A] border-t border-[#333333]">
        <Link 
          href="#" 
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-[#CCCCCC] bg-transparent hover:bg-[#333333]/30 transition-colors duration-200"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4D4D4D]/50 backdrop-blur-sm">
            <Settings className="h-5 w-5 text-gray-300" />
          </div>
          <span className="text-[15px] font-medium flex-1">Settings</span>
        </Link>
      </div>
    </aside>
  )
}

