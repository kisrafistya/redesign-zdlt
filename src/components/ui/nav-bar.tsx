'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { APP_CONFIG, NAVIGATION_LINKS } from '@/lib/constants'
import { mobileMenuBackdrop, mobileMenuItems, mobileMenuContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const mainLinks = NAVIGATION_LINKS

export function NavBar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 md:bg-transparent md:backdrop-blur-sm border-border/30',
          isMobileMenuOpen
            ? 'bg-white dark:bg-black'
            : 'sm:bg-white dark:bg-transparent dark:bg-gradient-to-b from-black via-black/50 to-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-4 rounded-lg hover:bg-white/5 dark:hover:bg-black/20 transition-colors p-1 sm:p-2"
              onClick={closeMobileMenu}
            >
              <div className="drop-shadow-sm drop-shadow-white/75 dark:drop-shadow-[0_4px_8px_rgba(255,255,255,0.25)]">
                <OptimizedImage
                  src="/zirolight.svg"
                  alt={APP_CONFIG.name}
                  width={120}
                  height={60}
                  className="dark:hidden w-20 h-12 sm:w-28 sm:h-16 md:w-32 md:h-20"
                />
                <OptimizedImage
                  src="/zirodark.svg"
                  alt={APP_CONFIG.name}
                  width={120}
                  height={60}
                  className="hidden dark:block w-20 h-12 sm:w-28 sm:h-16 md:w-32 md:h-20"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center border dark:border-0 bg-[#F4F4F4] dark:bg-transparent rounded-lg p-2 space-x-8 absolute left-1/2 transform -translate-x-1/2 shadow-sm dark:shadow-none">
              {mainLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm transition-colors duration-300 py-1 px-2 rounded-md',
                      isActive
                        ? 'text-brand-emerald dark:text-white font-semibold drop-shadow-sm'
                        : 'text-foreground/80 dark:text-brand-pastel/80 hover:text-brand-emerald dark:hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center not-dark:bg-white/25 backdrop-blur-2xl rounded-md space-x-4 drop-shadow-sm dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-white/10 dark:hover:bg-black/20 relative"
                aria-label="Toggle mobile menu"
              >
                <motion.div animate={isMobileMenuOpen ? 'open' : 'closed'} className="relative w-5 h-5">
                  <motion.div
                    variants={{
                      closed: { rotate: 0, opacity: 1 },
                      open: { rotate: 180, opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                  <motion.div
                    variants={{
                      closed: { rotate: -180, opacity: 0 },
                      open: { rotate: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <motion.div
              variants={mobileMenuBackdrop}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <div className="fixed top-16 sm:top-20 left-0 right-0 bg-white dark:bg-black shadow-lg dark:shadow-none">
              <motion.div
                variants={mobileMenuContainer}
                initial="closed"
                animate="open"
                exit="closed"
                className="px-4 py-6 space-y-4"
              >
                {mainLinks.map(link => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div key={link.href} variants={mobileMenuItems} transition={{ duration: 0.4 }}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          'block text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]',
                          isActive
                            ? 'text-brand-emerald dark:text-white bg-brand-emerald/10 dark:bg-white/10 font-semibold shadow-sm'
                            : 'text-brand-emerald dark:text-white hover:text-brand-emerald dark:hover:text-white hover:bg-brand-emerald/5 dark:hover:bg-white/5',
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
