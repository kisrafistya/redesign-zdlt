'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface Pillar {
  num: number
  title: string
  description: string
}

const PILLARS: Pillar[] = [
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

function PillarCard({ num, title, description }: Pillar) {
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

function ProgressDot({
  i,
  scrollYProgress,
  pillarsLength,
}: {
  i: number
  scrollYProgress: any
  pillarsLength: number
}) {
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

export function FlywheelPillars() {
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
          {PILLARS.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          style={{ opacity: dotsOpacity }}
          className="flex justify-center mt-12 space-x-2 fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        >
          {PILLARS.map((_, i) => (
            <ProgressDot key={i} i={i} scrollYProgress={scrollYProgress} pillarsLength={PILLARS.length} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
