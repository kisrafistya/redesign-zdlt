// App Configuration
export const APP_CONFIG = {
  name: 'ZiroDelta',
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
