'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-provider'

export function ManifestoFooter() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center py-6 sm:py-8"
    >
      <div className="w-24 sm:w-32 h-px dark:bg-brand-emerald/50 bg-white mx-auto mb-6 sm:mb-8" />
      {isDark ? (
        <img src="/flower-green.svg" alt="ZiroDelta Community" className="w-28 sm:w-32 md:w-36 h-auto mx-auto" />
      ) : (
        <img src="/flower-white.svg" alt="ZiroDelta Community" className="w-28 sm:w-32 md:w-36 h-auto mx-auto" />
      )}
    </motion.div>
  )
}
