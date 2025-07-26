'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'
import { NavBar } from '@/components/ui/nav-bar'
import { useTheme } from '@/lib/theme-provider'

const Pillar = ({
  num,
  title,
  description,
  isDark,
  index,
}: {
  num: number
  title: string
  description: string
  isDark: boolean
  index: number
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  // More controlled opacity and position animations
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    [0, 1, 1, 0]
  )
  
  const y = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    [50, 0, 0, -50]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  )

  return (
    <div ref={ref} className={`h-screen flex items-center justify-center relative`}>
      <motion.div
        style={{ opacity, y, scale }}
        className="text-center px-6 max-w-2xl"
      >
        <motion.div 
          className="w-20 h-20 rounded-full border-2 border-brand-emerald/40 flex items-center justify-center mx-auto mb-8 bg-brand-emerald/5"
          whileHover={{ scale: 1.1, borderColor: 'rgb(16 185 129)' }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-3xl font-bold text-brand-emerald">{num}</span>
        </motion.div>
        
        <h3 className="text-4xl md:text-5xl font-accent mb-6 text-slate-800 dark:text-white">
          {title}
        </h3>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
        
        {/* Subtle progress indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index 
                  ? 'bg-brand-emerald scale-125' 
                  : 'bg-brand-emerald/20'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function FlywheelPage() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({ 
    target: heroRef,
    offset: ['start start', 'end start']
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
      description: 'Strategic partnerships generate revenue streams that fuel development and systematic token buybacks, creating sustainable growth.',
    },
    {
      num: 2,
      title: 'Merch Flywheel',
      description: 'Exclusive merchandise rewards for token holders who participate in burn mechanisms, strengthening community engagement.',
    },
    {
      num: 3,
      title: 'Protocol Revenue',
      description: 'Transaction fees are systematically allocated to ZDLT buybacks and burns, reducing supply and enhancing token value.',
    },
    {
      num: 4,
      title: 'Ecosystem Growth',
      description: 'Expanding user adoption drives higher transaction volume, amplifying the effects of all revenue pillars exponentially.',
    },
  ]

  return (
    <main className="min-h-screen text-foreground">
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
                    Four interconnected pillars that create sustainable value and growth in a perpetual cycle of innovation.
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
                        : 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)'
                    }}
                  />
                  
                  <motion.div 
                    style={{ rotate: wheelRotate }}
                    className="relative z-10"
                  >
                    {isDark ? (
                      <img src="/coin-wheel-white.svg" alt="Flywheel" className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] opacity-60 drop-shadow-2xl" />
                    ) : (
                      <img src="/coin-wheel-green.svg" alt="Flywheel" className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] opacity-50 drop-shadow-2xl" />
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

      {/* Pillars Section - Clean sequential layout */}
      <section className="bg-white dark:bg-gray-900">
        {pillars.map((pillar, index) => (
          <Pillar 
            key={index} 
            {...pillar} 
            isDark={isDark} 
            index={index}
          />
        ))}
      </section>

      {/* Final Section */}
      <section className="py-24 md:py-32 px-6 text-center bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
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
              <img src="/flower-white.svg" alt="Virtuous Cycle" className="w-16 h-16 opacity-70" />
            )}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-accent text-slate-900 dark:text-white mb-6">
            A Virtuous Cycle of Value
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            This self-perpetuating loop ensures that as ZiroDelta grows, the value returned to our community and
            token holders grows with it. Participation doesn't just grant access; it fuels the entire engine.
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
