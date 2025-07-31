'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { useTheme } from '@/lib/theme-provider'

export function FlywheelHero() {
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

  return (
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
                className="space-y-8 pt-36 md:pt-0"
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
  )
}
