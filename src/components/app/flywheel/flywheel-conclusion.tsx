'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from '@/lib/theme-provider'

export function FlywheelConclusion() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
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
          This self-perpetuating loop ensures that as ZiroDelta grows, the value returned to our community and token
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
  )
}
