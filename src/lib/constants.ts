// App Configuration
export const APP_CONFIG = {
  name: 'Zirodelta',
  tagline: 'Intelligence meets innovation',
  description: 'Revolutionary DeFi protocol for everyone. Exclusive trading bot for the elite.',
  url: 'https://zirodelta.com',
  contractAddress: '4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf',
} as const

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://x.com/zirodelta',
  discord: 'https://discord.gg/YHW275Vpn3',
  telegram: 'https://t.me/zirodelta',
  website: 'https://www.zirodelta.com',
} as const

// Navigation Links
export const NAVIGATION_LINKS = [
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/flywheel', label: 'Flywheel' },
  { href: '/roadmap', label: 'Roadmap' },
] as const

// Bot Configuration
export const BOT_CONFIG = {
  eliteSlots: 5,
  pairsMonitored: 389,
  averageDailyProfit: '0.15%',
  averageHoldTime: '4-24h',
  uptime: '99.9%',
  minBid: 500,
  bidIncrement: 50,
} as const

// Theme Colors
export const THEME_COLORS = {
  brandEmerald: '#006663',
  brandTeal: '#009b88',
  brandPastel: '#72b7b1',
} as const

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  entrance: 1.0,
} as const

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Protocol Stats
export const PROTOCOL_STATS = {
  totalValueLocked: '$4.2M',
  totalVolume24h: '$890K',
  activeEpochs: '12',
  totalSettled: '247',
} as const

// Auction Rules
export const AUCTION_RULES = [
  'Auction runs monthly from 7th-10th, 96 hours total',
  '5 exclusive slots available each month',
  'Minimum bid $500 ZDLT equivalent',
  'Bid increments of $50 minimum',
  'Winners receive access codes within 24 hours',
  '20% of bid revenue is distributed to ZDLT stakers',
] as const

// Performance Targets
export const PERFORMANCE_TARGETS = {
  conservative: {
    daily: '0.1%',
    annual: '~36%',
  },
  target: {
    daily: '0.3%',
    annual: '~180%',
  },
  optimal: {
    daily: '0.5%',
    annual: '~500%',
  },
} as const

// Roadmap Data
export const ROADMAP_DATA = {
  '2025': {
    Q3: [
      {
        title: 'Full Brand-Aligned Web Redesign',
        description:
          'Launch the complete redesign reflecting the new ZiroDelta brand identity across all web properties.',
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
        title: 'ZiroDelta Protocol – Architecture Draft',
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
        description: 'Partner with funds & exchanges to provide white-label access to ZiroDelta strategies.',
        status: 'planned',
      },
    ],
  },
} as const
