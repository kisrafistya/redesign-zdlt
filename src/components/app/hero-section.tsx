'use client'

import { useTheme } from '@/lib/theme-provider'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden mt-8 md:mt-0"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/bg-light.png"
          alt="Background Light"
          className="inset-0 w-full h-full scale-90 md:scale-75 object-cover dark:hidden rounded-xl"
        />
        <img
          src="/banner/bg-dark.png"
          alt="Background Dark"
          className="inset-0 w-full h-full scale-90 md:scale-75 object-cover hidden dark:block rounded-xl"
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
            <span className="inline-block px-4 bg-transparent md:bg-primary/10 rounded-full text-light  dark:text-brand-emerald text-sm tracking-wide font-semibold">
              Funding-Rate Intelligence, Solana Speed
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extralight leading-tight">
            <span className="block font-accent text-mono-black dark:text-brand-emerald">Intelligence Meets</span>
            <span className="block font-accent text-mono-black dark:text-brand-emerald">Innovation</span>
          </h1>

          <p className="text-md md:text-xl text-white dark:text-brand-teal max-w-3xl mx-auto font-light leading-relaxed dark:bg-white/5 dark:rounded-lg dark:p-4 dark:backdrop-blur-sm">
            Harvest funding-rate chaos into community-owned yield.
            <br />
            Market-neutral. Oracle-driven. Transparent on Solana.
          </p>

          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
          </div> */}
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
  )
}
