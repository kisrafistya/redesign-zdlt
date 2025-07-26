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
                Funding-Rate Intelligence, Solana Speed
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extralight leading-tight">
              {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
              <span className="block font-accent text-mono-black dark:text-brand-emerald">Intelligence Meets</span>
              <span className="block font-accent text-mono-black dark:text-brand-emerald">Innovation</span>
            </h1>

            <p className="text-xl md:text-xl text-white dark:text-brand-teal max-w-3xl mx-auto font-light leading-relaxed mb-36">
              Harvest funding-rate chaos into community-owned yield.
              <br />
              Market-neutral. Oracle-driven. Transparent on Solana.
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
                  <span>Access Bot</span>
                  <ArrowRight className="ml-2 w-4 h-4 dark:text-white" />
                </Link>
              </Button>

              <Button
                asChild
                variant={isDark ? 'default' : 'outline'}
                size="lg"
                className={`${isDark ? 'bg-black' : 'bg-transparent'}`}
              >
                <Link href="/merch">
                  <span>Shop Merch</span>
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
          {/* Community Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-col items-center">
              <img
                src="/zdltpeeps.svg"
                alt="ZiroDelta Community"
                className="w-40 h-auto shadow-brand-emerald/10 dark:shadow-brand-emerald/20"
              />
              <div className="border-b-2 border-brand-emerald w-72"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight font-accent text-brand-emerald dark:text-white text-center">
              Join the community harvesting
              <br />
              <span>the rate, sharing the wealth</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-full"
            >
              <Card className="bg-teal-700 dark:bg-teal-800 text-white h-full flex flex-col rounded-2xl border-0 overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/10 rounded-xl mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">Protocol</h3>
                  <p className="text-teal-100 mb-6 text-sm">Funding-Rate Intelligence</p>

                  <p className="text-white/90 mb-8 flex-grow">
                    Solana-native smart contracts capture billions in funding fees via oracle-driven automation and conditional tokenization.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span>PFRT/NFRT sentiment tokens</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span>Market-neutral yield generation</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span>Transparent on-chain execution</span>
                    </div>
                  </div>

                  <button className="w-full bg-white text-teal-700 py-3 px-6 rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center justify-between">
                    <span>Explore Protocol</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <Card className="bg-gray-100 dark:bg-gray-200 text-gray-900 h-full flex flex-col rounded-2xl border-0 overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gray-300 rounded-xl mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 text-teal-700">Trading Bot</h3>
                  <p className="text-gray-600 mb-6 text-sm">Tier-Based Access</p>

                  <p className="text-gray-700 mb-8 flex-grow">
                    AI-powered arbitrage bot executes funding-rate strategies across exchanges. Access scales with your ZDLT holdings.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                      <span>Automated 8-hour rebalancing</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                      <span>Multi-exchange arbitrage</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                      <span>Profit sharing to community</span>
                    </div>
                  </div>

                  <button className="w-full bg-teal-700 text-white py-3 px-6 rounded-xl font-medium hover:bg-teal-800 transition-colors flex items-center justify-between">
                    <span>Access Bot</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}  
              className="h-full"
            >
              <Card className="bg-teal-700 dark:bg-teal-800 text-white h-full flex flex-col rounded-2xl border-0 overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/10 rounded-xl mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">Community</h3>
                  <p className="text-teal-100 mb-6 text-sm">Merchandise & More</p>

                  <p className="text-white/90 mb-8 flex-grow">
                    Show your support for funding-rate intelligence with exclusive ZiroDelta merchandise and community perks.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span>Exclusive branded merchandise</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span>Community recognition rewards</span>
                    </div>
                    <div className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span>Early access to new features</span>
                    </div>
                  </div>

                  <button className="w-full bg-white text-teal-700 py-3 px-6 rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center justify-between">
                    <span>Shop Merch</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
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
