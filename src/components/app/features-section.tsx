'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useTheme } from '@/lib/theme-provider'
import { motion } from 'framer-motion'

export function FeaturesSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
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
            {isDark ? (
              <img
                src="/zdltpeeps-white.svg"
                alt="ZiroDelta Community"
                className="w-36 h-auto shadow-brand-emerald/10 dark:shadow-brand-emerald/20"
              />
            ) : (
              <img
                src="/zdltpeeps.svg"
                alt="ZiroDelta Community"
                className="w-36 h-auto shadow-brand-emerald/10 dark:shadow-brand-emerald/20"
              />
            )}
            <div className="border-b-2 border-brand-emerald dark:border-white w-72"></div>
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
            <Card className="bg-brand-emerald dark:bg-brand-teal/40 text-white h-full flex flex-col rounded-2xl border-0 overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-20 h-20 bg-white/10 rounded-xl mb-6 flex items-center justify-center p-4">
                  <img src="/features/protocol.svg" alt="protocol" className="w-32 h-32 " />
                </div>

                <h3 className="text-2xl font-semibold mb-2">Protocol</h3>
                <p className="text-teal-100 mb-6 text-sm">Funding-Rate Intelligence</p>

                <p className="text-white/90 mb-8 flex-grow">
                  Solana-native smart contracts capture billions in funding fees via oracle-driven automation and
                  conditional tokenization.
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
                <div className="w-20 h-20 bg-gray-300 rounded-xl mb-6 flex items-center justify-center p-4">
                  <img src="/features/bot.svg" alt="bot" className="w-32 h-32 " />
                </div>

                <h3 className="text-2xl font-semibold mb-2 text-brand-emerald">Trading Bot</h3>
                <p className="text-gray-600 mb-6 text-sm">Tier-Based Access</p>

                <p className="text-gray-700 mb-8 flex-grow">
                  AI-powered arbitrage bot executes funding-rate strategies across exchanges. Access scales with your
                  ZDLT holdings.
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
            <Card className="bg-brand-emerald dark:bg-brand-teal/40 text-white h-full flex flex-col rounded-2xl border-0 overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-20 h-20 bg-white/10 rounded-xl mb-6 flex items-center justify-center p-4">
                  <img src="/features/merch.svg" alt="merch" className="w-32 h-32 " />
                </div>

                <h3 className="text-2xl font-semibold mb-2">Community</h3>
                <p className="text-teal-100 mb-6 text-sm">Merchandise & More</p>

                <p className="text-white/90 mb-8 flex-grow">
                  Show your support for funding-rate intelligence with exclusive ZiroDelta merchandise and community
                  perks.
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
  )
}
