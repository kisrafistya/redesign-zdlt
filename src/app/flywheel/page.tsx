'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'
import { NavBar } from '@/components/ui/nav-bar'
import { useTheme } from '@/lib/theme-provider'

const PillarCard = ({ num, title, description }: { num: number; title: string; description: string }) => {
  return (
    <div className="relative w-[90vw] md:w-[70vw] lg:w-[45vw] flex-shrink-0 p-8 sm:p-12 bg-brand-emerald dark:bg-brand-pastel/50 rounded-xl shadow-2xl overflow-hidden border border-brand-emerald/20">
      {/* Retro Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_80%)] opacity-30"></div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <span className="text-6xl font-accent font-bold text-white/80 dark:text-white/90">{`0${num}`}</span>
          <div className="w-20 h-px bg-white/20 mx-auto mt-4"></div>
        </div>

        <h3 className="text-4xl md:text-5xl font-accent mb-6 text-white dark:text-white">{title}</h3>

        <p className="text-lg md:text-xl text-white/80 dark:text-white/80 leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      </div>
    </div>
  )
}

const ProgressDot = ({
  i,
  scrollYProgress,
  pillarsLength,
}: {
  i: number
  scrollYProgress: any
  pillarsLength: number
}) => {
  const start = i / pillarsLength
  const end = (i + 1) / pillarsLength
  const scale = useTransform(scrollYProgress, [start, end], [1, 1.5], {
    clamp: true,
  })
  const color = useTransform(scrollYProgress, [start, end], ['rgb(16 185 129 / 0.2)', 'rgb(16 185 129)'], {
    clamp: true,
  })

  return <motion.div className="w-2 h-2 rounded-full" style={{ scale, backgroundColor: color }} />
}

const HorizontalScrollPillars = ({ pillars }: { pillars: any[] }) => {
  const horizontalRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['38%', '-30%'])
  const dotsOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  return (
    <section ref={horizontalRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          style={{ opacity: dotsOpacity }}
          className="flex justify-center mt-12 space-x-2 fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        >
          {pillars.map((_, i) => (
            <ProgressDot key={i} i={i} scrollYProgress={scrollYProgress} pillarsLength={pillars.length} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function FlywheelPage() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Smoother parallax for hero
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(heroProgress, [0, 0.5, 1], [1, 0.7, 0.3])

  // Controlled wheel rotation based on overall scroll
  const wheelRotate = useTransform(heroProgress, [0, 1], [0, 180])

  const pillars = [
    {
      num: 1,
      title: 'Bot Revenue',
      description:
        'Strategic partnerships generate revenue streams that fuel development and systematic token buybacks, creating sustainable growth.',
    },
    {
      num: 2,
      title: 'Merch Flywheel',
      description:
        'Exclusive merchandise rewards for token holders who participate in burn mechanisms, strengthening community engagement.',
    },
    {
      num: 3,
      title: 'Protocol Revenue',
      description:
        'Transaction fees are systematically allocated to ZDLT buybacks and burns, reducing supply and enhancing token value.',
    },
    {
      num: 4,
      title: 'Ecosystem Growth',
      description:
        'Expanding user adoption drives higher transaction volume, amplifying the effects of all revenue pillars exponentially.',
    },
  ]

  return (
    <main className="min-h-screen text-foreground relative">
      {/* Unified Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-background/5 dark:bg-background/5" />
      </div>

      <NavBar />

      {/* Hero Section - Fixed height to prevent layout issues */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Simplified background without particles */}
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-brand-emerald/10 via-white to-brand-emerald/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          </motion.div>
          <div className="absolute inset-0 bg-white/20 dark:bg-black/40 z-[1]" />

          {/* Split layout container */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                {/* Left side - Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-accent text-slate-900 dark:text-white leading-tight">
                      The Economic
                      <br />
                      <span className="text-brand-emerald">Flywheel</span>
                    </h1>
                  </div>

                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
                    Four interconnected pillars that create sustainable value and growth in a perpetual cycle of
                    innovation.
                  </p>

                  <div className="pt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <div className="w-12 h-px bg-brand-emerald"></div>
                      <span>Intelligence meets innovation</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right side - Enhanced coin wheel */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: -45 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                  className="flex justify-center lg:justify-end relative"
                >
                  {/* Spotlight effect for the wheel */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                    style={{
                      background: isDark
                        ? 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
                    }}
                  />

                  <motion.div style={{ rotate: wheelRotate }} className="relative z-10">
                    {isDark ? (
                      <img
                        src="/coin-wheel-white.svg"
                        alt="Flywheel"
                        className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] opacity-60 drop-shadow-2xl"
                      />
                    ) : (
                      <img
                        src="/coin-wheel-green.svg"
                        alt="Flywheel"
                        className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] opacity-50 drop-shadow-2xl"
                      />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Pillars Section - Horizontal Scroll */}
      <HorizontalScrollPillars pillars={pillars} />

      {/* Final Section */}
      <section className="py-24 md:py-32 px-6 text-center bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            {isDark ? (
              <img src="/flower-green.svg" alt="Virtuous Cycle" className="w-16 h-16 opacity-80" />
            ) : (
              <img src="/flower-green.svg" alt="Virtuous Cycle" className="w-16 h-16 opacity-70" />
            )}
          </div>

          <h2 className="text-3xl md:text-5xl font-accent text-slate-900 dark:text-white mb-6">
            A Virtuous Cycle of Value
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
            This self-perpetuating loop ensures that as Zirodelta grows, the value returned to our community and token
            holders grows with it. Participation doesn't just grant access; it fuels the entire engine.
          </p>

          <Button asChild size="lg" className="group bg-brand-emerald hover:bg-brand-emerald/90">
            <Link href="/protocol">
              <span>Explore the Protocol</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="py-16 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-brand-emerald dark:text-white font-light">Contract:</span>
              <div className="flex items-center space-x-2 border border-border/50 dark:border-brand-teal rounded-lg px-3 py-1">
                <code className="text-xs text-brand-emerald dark:text-white font-mono">
                  4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf')
                  }}
                  className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300 text-xs"
                  title="Copy full contract address"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="flex justify-center space-x-6 text-sm text-brand-teal dark:text-white font-light">
              <a href="https://www.zirodelta.com" className="hover:text-primary transition-colors">
                Website
              </a>
              <a href="https://t.me/zirodelta" className="hover:text-primary transition-colors">
                Telegram
              </a>
              <a href="https://x.com/zirodelta" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
