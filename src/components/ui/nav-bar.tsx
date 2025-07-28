'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Target, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { APP_CONFIG, NAVIGATION_LINKS } from '@/lib/constants'

type NavLink = {
  href: string
  label: string
}

const mainLinks = NAVIGATION_LINKS

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-border/30 dark:bg-gradient-to-b from-black via-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-4 rounded-lg hover:bg-white/5 dark:hover:bg-black/20 transition-colors"
          >
            <div className="drop-shadow-sm drop-shadow-white/75 dark:drop-shadow-[0_4px_8px_rgba(255,255,255,0.25)]">
              <OptimizedImage
                src="/zirolight.svg"
                alt={APP_CONFIG.name}
                width={200}
                height={100}
                className="dark:hidden w-32 h-20"
              />
              <OptimizedImage
                src="/zirodark.svg"
                alt={APP_CONFIG.name}
                width={200}
                height={100}
                className="hidden dark:block w-32 h-20"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center border dark:border-0 bg-[#F4F4F4] dark:bg-transparent rounded-lg p-2 space-x-8 absolute left-1/2 transform -translate-x-1/2 not-dark:shadow-sm">
            {mainLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 ${
                    isActive
                      ? 'text-brand-emerald dark:text-white font-semibold not-dark:drop-shadow-sm'
                      : 'dark:text-brand-pastel/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center not-dark:bg-white/25 backdrop-blur-2xl rounded-md space-x-4 drop-shadow-sm dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]">
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
