"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { LeftSidebar } from "@/components/left-sidebar"
import { MainContent } from "@/components/main-content"
import { RightSidebar } from "@/components/right-sidebar"
import { Footer } from "@/components/footer"

export function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <div className="flex-1 flex flex-col md:flex-row">
        <LeftSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <MainContent />
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  )
}

