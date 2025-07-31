import { NavBar } from '@/components/ui/nav-bar'
import { Footer } from '@/components/ui/footer'
import { FlywheelHero } from '@/components/app/flywheel/flywheel-hero'
import { FlywheelPillars } from '@/components/app/flywheel/flywheel-pillars'
import { FlywheelConclusion } from '@/components/app/flywheel/flywheel-conclusion'

export default function FlywheelPage() {
  return (
    <main className="min-h-screen text-foreground relative">
      {/* Unified Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-background/5 dark:bg-background/5" />
      </div>

      <NavBar />
      <FlywheelHero />
      <FlywheelPillars />
      <FlywheelConclusion />
      <Footer />
    </main>
  )
}
