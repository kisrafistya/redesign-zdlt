'use client'

import { Footer } from '@/components/ui/footer'
import { NavBar } from '@/components/ui/nav-bar'
import { HeroSection } from '@/components/app/hero-section'
import { FeaturesSection } from '@/components/app/features-section'

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
