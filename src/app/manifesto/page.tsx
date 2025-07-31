import { NavBar } from '@/components/ui/nav-bar'
import { Footer } from '@/components/ui/footer'
import { ManifestoHero } from '@/components/app/manifesto/manifesto-hero'
import { ManifestoContent } from '@/components/app/manifesto/manifesto-content'
import { ManifestoFooter } from '@/components/app/manifesto/manifesto-footer'

export default function ManifestoPage() {
  return (
    <main className="min-h-screen text-foreground">
      <NavBar />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/banner/bg-light.png"
            alt="Background Light"
            className="inset-0 w-full h-full scale-90 object-cover dark:hidden rounded-xl"
          />
          <img
            src="/banner/bg-dark.png"
            alt="Background Dark"
            className="inset-0 w-full h-full scale-90 object-cover hidden dark:block rounded-xl"
          />
        </div>
        <div className="absolute inset-0 bg-background/5 dark:bg-background/5 z-[1]" />

        <div className="w-full max-w-4xl mx-auto z-10">
          <ManifestoHero />
          <ManifestoContent />
          <ManifestoFooter />
        </div>
      </div>
      <Footer />
    </main>
  )
}
