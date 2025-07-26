'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Target, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'

type NavLink = {
  href: string
  label: string
}

const mainLinks: NavLink[] = [
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/flywheel', label: 'Flywheel' },
  { href: '/roadmap', label: 'Roadmap' },
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-border/30 dark:bg-gradient-to-b from-black via-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div>
              <img src="/zirolight.svg" alt="ZiroDelta" className="w-32 h-24 dark:hidden" />
              <img src="/zirodark.svg" alt="ZiroDelta" className="w-32 h-24 hidden dark:block" />
            </div>
          </Link>

          <div className="hidden md:flex items-center border dark:border-0 bg-[#F4F4F4] dark:bg-transparent rounded-lg p-2 space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {mainLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 ${
                    isActive ? 'text-primary font-medium' : 'dark:text-brand-pastel hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* disabled temporarily dont delete this! */}
            {/* <Button
              variant="default"
              className="bg-brand-emerald hover:bg-brand-emerald/80 text-white border-brand-emerald/50 hover:border-brand-emerald transition-all duration-300"
            >
              Connect Wallet
              <div className="relative">
                <Circle className="ml-2 h-4 w-4" />
                <Circle className="h-4 w-4 absolute -left-0 top-0" />
              </div>
            </Button> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
