import { Dashboard } from "@/components/dashboard"
import { MarketingDashboard } from "@/components/MarketingDashboard"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Dashboard>
      <MarketingDashboard />
    </Dashboard>
  )
}

