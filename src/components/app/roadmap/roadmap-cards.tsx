'use client'

import { useTheme } from '@/lib/theme-provider'

interface RoadmapItem {
  icon: string
  text: string
}

interface RoadmapCardProps {
  title: string
  backgroundImage: string
  backgroundImageDark: string
  items: RoadmapItem[]
}

function RoadmapCard({ backgroundImage, backgroundImageDark, items }: RoadmapCardProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="relative">
      <img src={isDark ? backgroundImageDark : backgroundImage} alt="" className="w-full h-auto" />

      {/* Arrow Icon - Responsive sizing */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
        <img src="/Right-arrow-bit.svg" alt="" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
      </div>

      {/* Content overlaid */}
      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12 text-white dark:text-white z-10 flex flex-col justify-start">
        <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-12 sm:mt-16 md:mt-20">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
              <img src={item.icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white dark:text-white text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function RoadmapCards() {
  const q3Items: RoadmapItem[] = [
    {
      icon: '/star-green.svg',
      text: 'Brand-aligned web redesign reflecting new ZiroDelta identity across all properties.',
    },
    {
      icon: '/star-green.svg',
      text: 'Broker partnerships & infrastructure scale-up for 1,000 concurrent users.',
    },
    {
      icon: '/star-green.svg',
      text: 'Public beta launch with 10-bot redundancy system and performance monitoring.',
    },
    {
      icon: '/star-green.svg',
      text: 'Referral programme, PnL flex cards, and comprehensive security stress-testing.',
    },
    {
      icon: '/star-green.svg',
      text: 'Merch flywheel launch with ZDLT-exclusive premium merchandise store.',
    },
  ]

  const q4Items: RoadmapItem[] = [
    {
      icon: '/star-green.svg',
      text: 'ZiroDelta Protocol architecture finalization for PFRT/NFRT conditional tokens.',
    },
    {
      icon: '/star-green.svg',
      text: 'Multi-source oracle framework PoC with funding-rate data integration.',
    },
    {
      icon: '/star-green.svg',
      text: 'PFRT/NFRT devnet deployment with basic mint/redeem functionality.',
    },
    {
      icon: '/star-green.svg',
      text: 'Protocol security audit focusing on conditional token logic & oracle security.',
    },
    {
      icon: '/star-green.svg',
      text: 'Mainnet readiness preparation with liquidity-mining incentive design.',
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* Q3 2025 Card */}
      <RoadmapCard
        title="Q3 2025"
        backgroundImage="/q3-substract.svg"
        backgroundImageDark="/q3-substract-dark.png"
        items={q3Items}
      />

      {/* Q4 2025 Card */}
      <RoadmapCard
        title="Q4 2025"
        backgroundImage="/q4-Subtract.png"
        backgroundImageDark="/q4-substract-dark.png"
        items={q4Items}
      />
    </div>
  )
}
