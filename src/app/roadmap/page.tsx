import { NavBar } from '@/components/ui/nav-bar'
import { Footer } from '@/components/ui/footer'
import { RoadmapHero } from '@/components/app/roadmap/roadmap-hero'
import { RoadmapCards } from '@/components/app/roadmap/roadmap-cards'
import { RoadmapBeyond } from '@/components/app/roadmap/roadmap-beyond'

export default function RoadmapPage() {
  return (
    <main className="min-h-screen text-foreground">
      <NavBar />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
        <div className="w-full max-w-7xl mx-auto z-10">
          <RoadmapHero />
          <RoadmapCards />
          <RoadmapBeyond />
        </div>
      </div>
      <Footer />
    </main>
  )
}
