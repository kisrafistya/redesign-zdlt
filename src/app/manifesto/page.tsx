'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NavBar } from '@/components/ui/nav-bar'
import { useTheme } from '@/lib/theme-provider'
import { Footer } from '@/components/ui/footer'

export default function ManifestoPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className="min-h-screen text-foreground">
      <NavBar />

      {/* Content */}
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
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl text-white dark:text-brand-emerald font-semibold tracking-wide">
                THE ZIRODELTA
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent text-white dark:text-brand-emerald leading-tight">
                MANIFESTO
              </h1>
            </div>

            <div className="w-16 sm:w-24 h-px bg-white dark:bg-brand-emerald mx-auto mt-6 sm:mt-8" />
          </div>

          {/* Manifesto Text */}
          <div className="space-y-8 sm:space-y-12 max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8 sm:space-y-12"
            >
              <p className="text-base sm:text-lg md:text-xl font-sans text-white dark:text-slate-700 leading-relaxed sm:leading-loose px-2 sm:px-4 lg:px-8">
                We reject <span className="font-medium">idle capital</span> and{' '}
                <span className="font-medium">opaque custody</span>.<br />
                We harness{' '}
                <span className="font-semibold text-white/90 dark:text-slate-800">funding-rate turbulence</span>—<br />
                the <em className="font-medium">heartbeat of perpetual futures</em>—<br />
                and convert it into <span className="font-semibold">communal prosperity</span>.
              </p>

              <p className="text-base sm:text-lg md:text-xl font-sans text-white dark:text-slate-700 leading-relaxed sm:leading-loose px-2 sm:px-4 lg:px-8">
                We believe <span className="font-medium">knowledge is capital</span>,<br />
                <span className="font-medium">code is law</span>, and{' '}
                <span className="font-medium">transparency is obligation</span>.<br />
                Every <span className="font-semibold">oracle update</span> is a public ledger;
                <br />
                every <span className="font-semibold">profit cycle</span>, a shared victory.
              </p>

              <p className="text-base sm:text-lg md:text-xl font-sans text-white dark:text-slate-700 leading-relaxed sm:leading-loose px-2 sm:px-4 lg:px-8">
                We build on <span className="font-semibold text-white/90 dark:text-slate-800">Solana</span> because{' '}
                <em>milliseconds matter</em>.<br />
                We <span className="font-medium">automate</span> because sleep is overrated.
                <br />
                We <span className="font-medium">tokenize sentiment</span> so risk becomes optional,
                <br />
                not existential.
              </p>

              <p className="text-base sm:text-lg md:text-xl font-sans text-white dark:text-slate-700 leading-relaxed sm:leading-loose px-2 sm:px-4 lg:px-8">
                We reward <span className="font-semibold">stake</span>, not <em>status</em>;<br />
                <span className="font-semibold">contribution</span>, not <em>connections</em>.<br />
                <span className="font-medium">Abundance scales</span> with participation—
                <br />
                <em>tier by tier</em>, <em>block by block</em>.
              </p>

              <p className="text-base sm:text-lg md:text-xl font-sans text-white dark:text-slate-700 leading-relaxed sm:leading-loose px-2 sm:px-4 lg:px-8">
                We stand <span className="font-semibold">market-neutral</span> against manipulation,
                <br />
                armed with <span className="font-medium text-white/90 dark:text-slate-800">AI</span>,{' '}
                <span className="font-medium">audited math</span> and{' '}
                <span className="font-medium">collective intent</span>.<br />
                <span className="font-semibold">Volatility</span> is our fuel;{' '}
                <span className="font-semibold">community</span> our engine.
              </p>

              <div className="pt-6 sm:pt-8">
                <p className="text-lg sm:text-xl md:text-2xl font-accent text-white dark:text-brand-emerald mb-4 sm:mb-6 px-2 sm:px-4 lg:px-8 tracking-wide">
                  <span className="font-light">Intelligence</span> <span className="font-semibold">meets</span>{' '}
                  <span className="font-light">Innovation</span>.<br />
                  <span className="font-light">Yield</span> <span className="font-semibold">meets</span>{' '}
                  <span className="font-light">Integrity</span>.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-accent font-medium text-white dark:text-brand-emerald px-2 sm:px-4 lg:px-8 tracking-wide">
                  Welcome to <span className="font-bold">ZiroDelta</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center py-6 sm:py-8"
            >
              <div className="w-24 sm:w-32 h-px dark:bg-brand-emerald/50 bg-white mx-auto mb-6 sm:mb-8" />
              {isDark ? (
                <img
                  src="/flower-green.svg"
                  alt="ZiroDelta Community"
                  className="w-28 sm:w-32 md:w-36 h-auto mx-auto"
                />
              ) : (
                <img
                  src="/flower-white.svg"
                  alt="ZiroDelta Community"
                  className="w-28 sm:w-32 md:w-36 h-auto mx-auto"
                />
              )}
            </motion.div>
          </div>

          {/* Footer */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
