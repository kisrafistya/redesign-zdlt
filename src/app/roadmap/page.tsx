'use client'

import { CheckCircle } from 'lucide-react'
import { NavBar } from '@/components/ui/nav-bar'
import { useTheme } from '@/lib/theme-provider'

const roadmapData = {
  '2025': {
    Q3: [
      {
        title: 'Full Brand-Aligned Web Redesign',
        description:
          'Launch the complete redesign reflecting the new Zirodelta brand identity across all web properties.',
        status: 'in-progress',
      },
      {
        title: 'Broker Partnership Integration',
        description: 'Integrate with tier-1 perpetual exchanges/brokers to secure low-latency order execution.',
        status: 'planned',
      },
      {
        title: 'Infrastructure Scale-Up (1k Users)',
        description:
          'Upgrade backend architecture to handle 1 000 concurrent bot users; migrate to institutional-grade infra.',
        status: 'planned',
      },
      {
        title: 'Public Beta (Open Enrollment)',
        description: 'Open beta to the public, gathering performance & UX feedback while monitoring on-chain metrics.',
        status: 'planned',
      },
      {
        title: '10-Bot Redundancy Rollout',
        description: 'Deploy 10 independent strategy replicas as hot-swap backups for zero-downtime trading.',
        status: 'planned',
      },
      {
        title: 'Referral Programme v1',
        description: 'Introduce tier-weighted referral links with on-chain attribution & rewards.',
        status: 'planned',
      },
      {
        title: 'PnL Flex Cards & Leaderboard',
        description: 'Allow users to generate shareable performance cards and view global leaderboards.',
        status: 'planned',
      },
      {
        title: 'Merch Flywheel Launch',
        description:
          'Kick off the premium merchandise store with ZDLT-exclusive items to fuel community engagement and brand visibility.',
        status: 'planned',
      },
      {
        title: 'Security & Performance Stress-Test',
        description: 'Run external penetration tests and load-test the trading engine under peak conditions.',
        status: 'planned',
      },
    ],
    Q4: [
      {
        title: 'Zirodelta Protocol – Architecture Draft',
        description: 'Finalize smart-contract architecture for Conditional Funding Rate Tokens (PFRT/NFRT).',
        status: 'planned',
      },
      {
        title: 'Oracle Framework PoC',
        description: 'Implement multi-source oracle prototype feeding funding-rate data to devnet.',
        status: 'planned',
      },
      {
        title: 'PFRT/NFRT Devnet Deployment',
        description: 'Deploy first iteration of PFRT/NFRT contracts to Solana devnet with basic mint/redeem flows.',
        status: 'planned',
      },
      {
        title: 'Protocol Security Audit',
        description:
          'Commission third-party audit focusing on conditional token logic & oracle manipulation resistance.',
        status: 'planned',
      },
      {
        title: 'Mainnet Readiness & Liquidity Plan',
        description: 'Design liquidity-mining & incentive programme for mainnet launch in 2026.',
        status: 'planned',
      },
    ],
  },
  '2026': {
    Q1: [
      {
        title: 'Mainnet Launch – PFRT/NFRT',
        description: 'Deploy audited contracts to Solana mainnet with liquidity incentives and dashboard analytics.',
        status: 'planned',
      },
      {
        title: 'Merch Flywheel Expansion',
        description:
          'Iterate on merch collections, introduce limited drops and integrate on-chain rewards sourced from merch revenue.',
        status: 'planned',
      },
      {
        title: 'Mass-Market Marketing Campaign',
        description: 'Execute influencer & content strategy to onboard the next 10 000 users.',
        status: 'planned',
      },
    ],
    Q2: [
      {
        title: 'Advanced Analytics & Mobile App',
        description: 'Ship cross-platform mobile app and granular funding-rate analytics dashboard.',
        status: 'planned',
      },
      {
        title: 'Multi-Chain Expansion',
        description: 'Evaluate and integrate additional high-performance chains for cross-chain PFRT/NFRT.',
        status: 'planned',
      },
      {
        title: 'Institutional Onboarding',
        description: 'Partner with funds & exchanges to provide white-label access to Zirodelta strategies.',
        status: 'planned',
      },
    ],
  },
}

export default function RoadmapPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
        <div className="w-full max-w-7xl mx-auto z-10">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h1
              className="text-6xl md:text-5xl font-bold text-brand-emerald dark:text-white mb-6"
              // style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Roadmap
            </h1>
            <p
              className="text-lg sm:text-xl text-brand-emerald dark:text-white mb-6 max-w-2xl mx-auto leading-relaxed"
              // style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our journey to revolutionize decentralized finance
              <br /> where intelligence meets innovation.
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Q3 2025 Card */}
            <div className="relative">
              {/* Q3 SVG as the container */}
              <img src={isDark ? '/q3-substract-dark.png' : '/q3-substract.svg'} alt="" className="w-full h-auto" />

              {/* Arrow Icon - Much bigger with more space */}
              <div className="absolute top-8 right-8 z-10">
                <img src="/Right-arrow-bit.svg" alt="" className="w-16 h-16" />
              </div>

              {/* Content overlaid on the SVG */}
              <div className="absolute inset-0 p-12 text-white dark:text-white z-10 flex flex-col justify-start">
                <div className="space-y-6 mt-20">
                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Brand-aligned web redesign reflecting new Zirodelta identity across all properties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Broker partnerships & infrastructure scale-up for 1,000 concurrent users.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Public beta launch with 10-bot redundancy system and performance monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Referral programme, PnL flex cards, and comprehensive security stress-testing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Merch flywheel launch with ZDLT-exclusive premium merchandise store.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Q4 2025 Card */}
            <div className="relative">
              {/* Q4 PNG as the container */}
              <img src={isDark ? '/q4-substract-dark.png' : '/q4-Subtract.png'} alt="" className="w-full h-auto" />

              {/* Arrow Icon - Much bigger with more space */}
              <div className="absolute top-8 right-8 z-10">
                <img src="/Right-arrow-bit.svg" alt="" className="w-16 h-16" />
              </div>

              {/* Content overlaid on the PNG */}
              <div className="absolute inset-0 p-12 text-white dark:text-white z-10 flex flex-col justify-start">
                <div className="space-y-6 mt-20">
                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Zirodelta Protocol architecture finalization for PFRT/NFRT conditional tokens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Multi-source oracle framework PoC with funding-rate data integration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        PFRT/NFRT devnet deployment with basic mint/redeem functionality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Protocol security audit focusing on conditional token logic & oracle security.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <img src="/star-green.svg" alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white dark:text-white text-base font-medium leading-relaxed">
                        Mainnet readiness preparation with liquidity-mining incentive design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2026 Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-brand-emerald dark:text-white text-center mb-12">2026 & Beyond</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(roadmapData['2026']).map(([quarter, items]) => (
                <div
                  key={quarter}
                  className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-emerald/20"
                >
                  <h3 className="text-xl font-semibold text-brand-emerald dark:text-white mb-4">{quarter} 2026</h3>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brand-emerald dark:bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-brand-emerald dark:text-white">{item.title}</h4>
                          <p className="text-brand-emerald/80 dark:text-white/70 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pt-8 border-t border-border/30 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
        </div>
      </div>
    </main>
  )
}
