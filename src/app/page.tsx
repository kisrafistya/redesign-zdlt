'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NavBar } from '@/components/ui/nav-bar'
import Link from 'next/link'
import { useRef } from 'react'
import { useTheme } from '@/lib/theme-provider'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <main className="min-h-screen text-foreground">
      <NavBar />

      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden"
      >
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner/bg-light.png"
            alt="Background Light"
            className="inset-0 w-full h-full scale-75 object-cover dark:hidden rounded-xl"
          />
          <img
            src="/banner/bg-dark.png"
            alt="Background Dark"
            className="inset-0 w-full h-full scale-75 object-cover hidden dark:block rounded-xl"
          />
        </div>
        <div className="absolute inset-0 bg-background/5 dark:bg-background/5 z-[1]" />

        <motion.div className="absolute inset-0 z-[2]" style={{ y, opacity }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-4">
              <span className="inline-block px-4 bg-primary/10 rounded-full text-light dark:text-brand-emerald text-sm font-light tracking-wide">
                The Future of Conditional Finance
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extralight leading-tight">
              {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
              <span className="block font-accent text-mono-black dark:text-brand-emerald">Intelligence Meets</span>
              <span className="block font-accent text-mono-black dark:text-brand-emerald">Innovation</span>
            </h1>

            <p className="text-xl md:text-xl text-white dark:text-brand-teal max-w-3xl mx-auto font-light leading-relaxed mb-36">
              Revolutionary DeFi protocol for everyone.
              <br />
              Exclusive trading access for the elite.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="group bg-brand-emerald">
                <Link href="/protocol">
                  <span>Explore Protocol</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform dark:text-white" />
                </Link>
              </Button>

              <Button
                asChild
                variant={isDark ? 'default' : 'outline'}
                size="lg"
                className={`${isDark ? 'bg-black' : 'bg-transparent'}`}
              >
                <Link href="/bot">
                  <span>Elite Access</span>
                  <ArrowRight className="ml-2 w-4 h-4 dark:text-white" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-y border-border/30 features-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-light mb-4">Conditional Finance</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Trade perpetual funding rate tokens (PFRT) and negative funding rate tokens (NFRT) with unprecedented
                  flexibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-light mb-4">Elite Trading Bot</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Access our proprietary trading bot through exclusive auctions and maximize your trading potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-light mb-4">Staking Rewards</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Stake ZDLT tokens to earn a share of protocol revenue and unlock enhanced trading capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <Link href="/" className="flex items-center space-x-4">
                <div>
                  <img src="/zirolight.svg" alt="ZiroDelta" className="w-32 h-32 dark:hidden" />
                  <img src="/zirodark.svg" alt="ZiroDelta" className="w-32 h-32 hidden dark:block" />
                </div>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/zirodelta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300 font-light"
              >
                X
              </a>
              <span className="text-brand-teal dark:text-white">|</span>
              <a
                href="https://discord.gg/YHW275Vpn3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300 font-light"
              >
                Discord
              </a>
              <span className="text-brand-teal dark:text-white">|</span>
              <a
                href="https://t.me/zirodelta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300 font-light"
              >
                Telegram
              </a>
            </div>

            {/* Solana Token */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-brand-emerald dark:text-white font-light">Contract Address:</span>
              <div className="flex items-center space-x-2 border border-border/50 dark:border-brand-teal rounded-lg px-3 py-1">
                <code className="text-xs text-brand-emerald dark:text-white font-mono">
                  4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf')
                    // Optional: Add toast notification here
                  }}
                  className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300 text-xs"
                  title="Copy contract address"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30 text-center text-brand-emerald dark:text-white font-light">
            <p>&copy; 2024 ZiroDelta. Intelligence meets innovation.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
