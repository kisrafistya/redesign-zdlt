// Common types used across the application

export interface NavigationLink {
  href: string
  label: string
  description?: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: string
}

export interface BotStats {
  value: string
  label: string
  description?: string
}

export interface EliteMember {
  rank: number
  name: string
  profit: string
  badge: string
}

export interface AuctionSlot {
  id: number
  currentBid: string
  bidder: string
  bids: number
  status: 'leading' | 'active' | 'inactive'
  timeLeft: string
}

export interface BidHistory {
  slot: number
  amount: string
  bidder: string
  time: string
  type: 'new' | 'outbid'
}

export interface MerchTier {
  id: string
  name: string
  icon: any
  freshBuyAmount: number
  burnAmount: number
  description: string
  image: string
  available: number
  claimed: number
  tier: 'legendary' | 'epic' | 'rare' | 'common'
}

export interface UserActivity {
  walletAddress: string
  freshBuyAmount: number
  burnAmount: number
  lastFreshBuy: Date
  hasBurned: boolean
}

export interface FundingRateAsset {
  symbol: string
  rate: string
  trend: 'up' | 'down'
  epochEnd: string
  pfrtsupply: string
  nfrtsupply: string
  price: string
}

export interface UserPosition {
  asset: string
  type: 'PFRT' | 'NFRT'
  amount: string
  value: string
  pnl: string
}

export interface Settlement {
  asset: string
  epoch: string
  winner: 'PFRT' | 'NFRT'
  rate: string
  date: string
}

export interface RoadmapItem {
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface RoadmapQuarter {
  quarter: string
  year: string
  items: RoadmapItem[]
}

export interface ProtocolStats {
  totalValueLocked: string
  totalVolume24h: string
  activeEpochs: string
  totalSettled: string
}

export interface PerformanceTarget {
  daily: string
  annual: string
}

export interface ThemeContextType {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
    }
  }
}

// Common component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animated?: boolean
  delay?: number
}

// API Response types (for future use)
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number
  limit: number
  total: number
  totalPages: number
}

// Form types
export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NewsletterForm {
  email: string
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: any
}
