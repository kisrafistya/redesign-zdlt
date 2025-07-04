'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Calendar, ChevronLeft, ChevronRight, Filter, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useState } from 'react'

export default function Roadmap() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 6, 1)) // July 2025
  const [viewMode, setViewMode] = useState<'month' | 'quarter'>('month')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // ZiroDelta Real Development Roadmap - Based on Actual Timeline
  const dailyTasks = [
    // PHASE 1: WEBAPP REDESIGN (July 2025 - Current)
    { 
      id: 1, 
      title: "Webapp UI/UX Redesign", 
      description: "Complete modern interface overhaul", 
      date: "2025-07-05", 
      status: "in-progress", 
      priority: "critical", 
      assignee: "Frontend Dev", 
      duration: "5 days", 
      type: "design",
      expected: "Modern, responsive interface with improved user experience",
      achievement: "Increase user engagement by 40% and reduce bounce rate"
    },
     { 
       id: 2, 
       title: "Component Library Setup", 
       description: "Build reusable UI components", 
       date: "2025-07-08", 
       status: "planned", 
       priority: "high", 
       assignee: "Frontend Dev", 
       duration: "3 days", 
       type: "development",
       expected: "Reusable component library with consistent styling",
       achievement: "Reduce development time by 50% for future features"
     },
     { 
       id: 3, 
       title: "Mobile Responsive Design", 
       description: "Ensure mobile compatibility", 
       date: "2025-07-11", 
       status: "planned", 
       priority: "medium", 
       assignee: "Frontend Dev", 
       duration: "2 days", 
       type: "development",
       expected: "Fully responsive design across all devices",
       achievement: "Support 80% of users who access via mobile"
     },
     { 
       id: 4, 
       title: "Performance Optimization", 
       description: "Optimize loading times and animations", 
       date: "2025-07-13", 
       status: "planned", 
       priority: "medium", 
       assignee: "Frontend Dev", 
       duration: "2 days", 
       type: "optimization",
       expected: "Sub-2 second loading times and smooth animations",
       achievement: "Improve user retention by 25%"
     },

     // PHASE 2: BOT API & LEADERBOARD (July-August 2025)
     { 
       id: 5, 
       title: "Bot Trading API Development", 
       description: "Build API endpoints for bot data", 
       date: "2025-07-15", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "4 days", 
       type: "development",
       expected: "RESTful API with real-time trading data endpoints",
       achievement: "Enable live bot performance tracking for users"
     },
     { 
       id: 6, 
       title: "Real-time Data Pipeline", 
       description: "Stream live trading performance data", 
       date: "2025-07-19", 
       status: "planned", 
       priority: "high", 
       assignee: "Backend Dev", 
       duration: "3 days", 
       type: "infrastructure",
       expected: "WebSocket-based real-time data streaming with 99.9% uptime",
       achievement: "Provide instant bot performance updates to users"
     },
     { 
       id: 7, 
       title: "Leaderboard Integration", 
       description: "Connect bot performance to leaderboard", 
       date: "2025-07-22", 
       status: "planned", 
       priority: "high", 
       assignee: "Frontend Dev", 
       duration: "3 days", 
       type: "development",
       expected: "Dynamic leaderboard showing top performers with live updates",
       achievement: "Increase user engagement through competitive elements"
     },
     { 
       id: 8, 
       title: "Analytics Dashboard", 
       description: "Build comprehensive trading analytics", 
       date: "2025-07-25", 
       status: "planned", 
       priority: "medium", 
       assignee: "Frontend Dev", 
       duration: "4 days", 
       type: "development",
       expected: "Interactive charts showing profit/loss, win rates, and performance metrics",
       achievement: "Help users make informed decisions about bot access auctions"
     },
     { 
       id: 9, 
       title: "Team Retreat - Bali", 
       description: "Team building and strategic planning", 
       date: "2025-07-29", 
       status: "planned", 
       priority: "low", 
       assignee: "Full Team", 
       duration: "5 days", 
       type: "team",
       expected: "Strategic roadmap alignment and team bonding activities",
       achievement: "Improve team collaboration and define Q4 priorities"
     },

         // PHASE 3: PUBLIC BETA & AUCTION (August 2025)
     { 
       id: 10, 
       title: "Beta Testing Infrastructure", 
       description: "Set up beta testing environment", 
       date: "2025-08-03", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "2 days", 
       type: "infrastructure",
       expected: "Isolated testing environment with monitoring and logging",
       achievement: "Enable safe testing without affecting production systems"
     },
     { 
       id: 11, 
       title: "Auction System Development", 
       description: "Build monthly slot auction mechanism", 
       date: "2025-08-05", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "5 days", 
       type: "development",
       expected: "Automated auction system with bidding, escrow, and winner selection",
       achievement: "Create sustainable revenue through exclusive bot access"
     },
     { 
       id: 12, 
       title: "Beta User Onboarding", 
       description: "Create beta user registration flow", 
       date: "2025-08-10", 
       status: "planned", 
       priority: "high", 
       assignee: "Frontend Dev", 
       duration: "2 days", 
       type: "development",
       expected: "Streamlined registration with KYC and wallet connection",
       achievement: "Onboard 100 quality beta users smoothly"
     },
     { 
       id: 13, 
       title: "Public Beta Launch", 
       description: "Launch public beta with 100 users", 
       date: "2025-08-12", 
       status: "planned", 
       priority: "critical", 
       assignee: "Product Manager", 
       duration: "1 day", 
       type: "launch",
       expected: "Successful beta launch with 100 active users testing the platform",
       achievement: "Validate product-market fit and gather real user feedback"
     },
     { 
       id: 14, 
       title: "First Auction Launch", 
       description: "Launch first 5-slot monthly auction", 
       date: "2025-08-15", 
       status: "planned", 
       priority: "critical", 
       assignee: "Product Manager", 
       duration: "1 day", 
       type: "launch",
       expected: "Successfully conduct first auction with competitive bidding",
       achievement: "Generate first revenue and prove the scarcity model works"
     },
     { 
       id: 15, 
       title: "Community Feedback Collection", 
       description: "Gather beta user feedback", 
       date: "2025-08-16", 
       status: "planned", 
       priority: "medium", 
       assignee: "Product Manager", 
       duration: "7 days", 
       type: "community",
       expected: "Comprehensive feedback from 80+ beta users via surveys and interviews",
       achievement: "Identify key improvements needed before mainnet launch"
     },
     { 
       id: 16, 
       title: "KOL Partnership Outreach", 
       description: "Connect with crypto influencers", 
       date: "2025-08-20", 
       status: "planned", 
       priority: "medium", 
       assignee: "CEO", 
       duration: "3 days", 
       type: "marketing",
       expected: "Partnerships with 5+ crypto KOLs with 10K+ followers each",
       achievement: "Increase brand awareness and drive organic user growth"
     },
     { 
       id: 50, 
       title: "$500K Market Cap Target", 
       description: "Growth milestone with increased marketing", 
       date: "2025-08-25", 
       status: "planned", 
       priority: "medium", 
       assignee: "CEO", 
       duration: "1 day", 
       type: "milestone",
       expected: "Reach $500K market capitalization through organic growth",
       achievement: "Trigger first major buyback program and community rewards"
     },

         // PHASE 4: BUG FIXES & OPTIMIZATION (August-September 2025)
     { 
       id: 17, 
       title: "Critical Bug Fixes", 
       description: "Fix issues found in beta testing", 
       date: "2025-08-23", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "5 days", 
       type: "bugfix",
       expected: "Resolve all critical and high-priority bugs identified in beta",
       achievement: "Achieve 99%+ platform stability before mainnet launch"
     },
     { 
       id: 18, 
       title: "Auction Algorithm Optimization", 
       description: "Improve bidding mechanism efficiency", 
       date: "2025-08-28", 
       status: "planned", 
       priority: "high", 
       assignee: "Quant Trader", 
       duration: "3 days", 
       type: "optimization",
       expected: "Optimized auction algorithm with anti-manipulation measures",
       achievement: "Ensure fair bidding and maximize auction revenue"
     },
     { 
       id: 19, 
       title: "Security Audit", 
       description: "External security assessment", 
       date: "2025-08-31", 
       status: "planned", 
       priority: "critical", 
       assignee: "External Auditor", 
       duration: "5 days", 
       type: "security",
       expected: "Comprehensive security audit report with recommendations",
       achievement: "Identify and fix all security vulnerabilities before launch"
     },
     { 
       id: 20, 
       title: "Load Testing", 
       description: "Test system under high user load", 
       date: "2025-09-05", 
       status: "planned", 
       priority: "high", 
       assignee: "Backend Dev", 
       duration: "2 days", 
       type: "testing",
       expected: "System handles 1000+ concurrent users without performance degradation",
       achievement: "Ensure platform scalability for rapid user growth"
     },

         // PHASE 5: STAKING MECHANISM (September-October 2025)
     { 
       id: 21, 
       title: "Staking Smart Contract Dev", 
       description: "Build ZDLT staking contracts", 
       date: "2025-09-07", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "7 days", 
       type: "development",
       expected: "Secure staking contracts with flexible lock periods and rewards",
       achievement: "Enable ZDLT holders to earn from all platform revenue streams"
     },
     { 
       id: 22, 
       title: "Wintermute Partnership Meeting", 
       description: "CEO meeting for OTC partnership", 
       date: "2025-09-10", 
       status: "planned", 
       priority: "high", 
       assignee: "CEO", 
       duration: "1 day", 
       type: "partnership",
       expected: "Signed partnership agreement with Wintermute for OTC services",
       achievement: "Secure institutional-grade liquidity and trading infrastructure"
     },
     { 
       id: 23, 
       title: "Revenue Sharing Algorithm", 
       description: "Build automated reward distribution", 
       date: "2025-09-14", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "4 days", 
       type: "development",
       expected: "Automated system distributing 100% auction revenue to stakers",
       achievement: "Create passive income stream for ZDLT holders"
     },
     { 
       id: 24, 
       title: "Staking UI Development", 
       description: "Build user-friendly staking interface", 
       date: "2025-09-18", 
       status: "planned", 
       priority: "high", 
       assignee: "Frontend Dev", 
       duration: "3 days", 
       type: "development",
       expected: "Intuitive staking interface with real-time rewards tracking",
       achievement: "Make staking accessible to non-technical users"
     },
     { 
       id: 25, 
       title: "Token Economics Review", 
       description: "Finalize tokenomics with advisors", 
       date: "2025-09-21", 
       status: "planned", 
       priority: "medium", 
       assignee: "Researcher", 
       duration: "2 days", 
       type: "tokenomics",
       expected: "Optimized tokenomics model validated by economic advisors",
       achievement: "Ensure sustainable long-term token value appreciation"
     },
     { 
       id: 26, 
       title: "Market Maker Partnerships", 
       description: "Secure liquidity partnerships", 
       date: "2025-09-23", 
       status: "planned", 
       priority: "high", 
       assignee: "CEO", 
       duration: "3 days", 
       type: "partnership",
       expected: "Partnerships with 2+ market makers for ZDLT liquidity",
       achievement: "Ensure deep liquidity and stable token price"
     },
     { 
       id: 27, 
       title: "Staking Beta Testing", 
       description: "Internal testing of staking mechanism", 
       date: "2025-09-26", 
       status: "planned", 
       priority: "high", 
       assignee: "Product Manager", 
       duration: "3 days", 
       type: "testing",
       expected: "Comprehensive testing of staking, rewards, and withdrawal flows",
       achievement: "Ensure flawless staking experience for mainnet launch"
     },
     { 
       id: 28, 
       title: "First Buyback Program", 
       description: "Execute token buyback at $500K mcap", 
       date: "2025-09-29", 
       status: "planned", 
       priority: "medium", 
       assignee: "CEO", 
       duration: "1 day", 
       type: "tokenomics",
       expected: "Execute 5% token buyback from treasury funds",
       achievement: "Demonstrate commitment to token value and reward holders"
     },

         // PHASE 6: SOLANA PROTOCOL (October-December 2025)
     { 
       id: 29, 
       title: "Solana Development Setup", 
       description: "Set up Solana development environment", 
       date: "2025-10-01", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "2 days", 
       type: "infrastructure",
       expected: "Complete Solana development environment with testing framework",
       achievement: "Enable development of PFRT/NFRT conditional tokens"
     },
     { 
       id: 30, 
       title: "PFRT/NFRT Contract Design", 
       description: "Design conditional funding rate tokens", 
       date: "2025-10-03", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "7 days", 
       type: "development",
       expected: "Smart contracts for conditional funding rate token pairs",
       achievement: "Create revolutionary DeFi primitive for funding rate exposure"
     },
     { 
       id: 31, 
       title: "Oracle Integration", 
       description: "Build funding rate oracle system", 
       date: "2025-10-10", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "5 days", 
       type: "infrastructure",
       expected: "Reliable oracle system aggregating funding rates from multiple exchanges",
       achievement: "Ensure accurate and tamper-proof funding rate data"
     },
     { 
       id: 32, 
       title: "Solana Validator Partnership", 
       description: "Partner with Solana validators", 
       date: "2025-10-15", 
       status: "planned", 
       priority: "medium", 
       assignee: "CEO", 
       duration: "3 days", 
       type: "partnership",
       expected: "Strategic partnerships with top Solana validators",
       achievement: "Ensure protocol reliability and network support"
     },
     { 
       id: 33, 
       title: "DEX Integration Research", 
       description: "Research Raydium/Orca integration", 
       date: "2025-10-18", 
       status: "planned", 
       priority: "medium", 
       assignee: "Researcher", 
       duration: "4 days", 
       type: "research",
       expected: "Technical integration plan for major Solana DEXes",
       achievement: "Enable PFRT/NFRT trading on established platforms"
     },
     { 
       id: 34, 
       title: "Protocol Testnet Deploy", 
       description: "Deploy PFRT/NFRT on Solana devnet", 
       date: "2025-10-22", 
       status: "planned", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "3 days", 
       type: "deployment",
       expected: "Successful testnet deployment with full functionality",
       achievement: "Validate protocol mechanics before mainnet launch"
     },
     { 
       id: 35, 
       title: "Institutional Outreach", 
       description: "Reach out to hedge funds and VCs", 
       date: "2025-10-25", 
       status: "planned", 
       priority: "high", 
       assignee: "CEO", 
       duration: "5 days", 
       type: "business",
       expected: "Meetings with 10+ institutional investors and hedge funds",
       achievement: "Secure strategic partnerships and potential funding"
     },
     { 
       id: 36, 
       title: "Community Governance Launch", 
       description: "Launch ZDLT holder governance", 
       date: "2025-10-30", 
       status: "planned", 
       priority: "medium", 
       assignee: "Product Manager", 
       duration: "2 days", 
       type: "governance",
       expected: "Functional governance system with proposal and voting mechanisms",
       achievement: "Give ZDLT holders control over protocol direction"
     },
     { 
       id: 51, 
       title: "$1M Market Cap Celebration", 
       description: "Major milestone with community rewards", 
       date: "2025-10-15", 
       status: "planned", 
       priority: "medium", 
       assignee: "CEO", 
       duration: "1 day", 
       type: "milestone",
       expected: "Reach $1M market cap with community celebration event",
       achievement: "Major milestone proving project success and community growth"
     },

         // November-December 2025: Protocol Launch
     { 
       id: 37, 
       title: "Final Security Audit", 
       description: "Comprehensive protocol security audit", 
       date: "2025-11-01", 
       status: "planned", 
       priority: "critical", 
       assignee: "External Auditor", 
       duration: "10 days", 
       type: "security",
       expected: "Complete security audit with zero critical vulnerabilities",
       achievement: "Ensure maximum security for mainnet protocol launch"
     },
     { 
       id: 38, 
       title: "Mainnet Preparation", 
       description: "Final preparations for protocol launch", 
       date: "2025-11-11", 
       status: "planned", 
       priority: "critical", 
       assignee: "Full Team", 
       duration: "5 days", 
       type: "preparation",
       expected: "All systems tested and ready for mainnet deployment",
       achievement: "Flawless protocol launch with zero downtime"
     },
     { 
       id: 39, 
       title: "PFRT/NFRT Mainnet Launch", 
       description: "Launch conditional funding rate protocol", 
       date: "2025-11-16", 
       status: "planned", 
       priority: "critical", 
       assignee: "Product Manager", 
       duration: "1 day", 
       type: "launch",
       expected: "Successful mainnet launch of revolutionary PFRT/NFRT protocol",
       achievement: "Introduce world's first conditional funding rate tokens"
     },
     { 
       id: 40, 
       title: "Liquidity Mining Program", 
       description: "Launch protocol incentives", 
       date: "2025-11-18", 
       status: "planned", 
       priority: "high", 
       assignee: "Researcher", 
       duration: "2 days", 
       type: "tokenomics",
       expected: "Incentive program attracting $1M+ in initial liquidity",
       achievement: "Bootstrap protocol adoption and trading volume"
     },
     { 
       id: 41, 
       title: "Exchange Listings Campaign", 
       description: "Secure tier-1 exchange listings", 
       date: "2025-11-20", 
       status: "planned", 
       priority: "high", 
       assignee: "CEO", 
       duration: "7 days", 
       type: "business",
       expected: "ZDLT listed on 2+ tier-1 centralized exchanges",
       achievement: "Increase token accessibility and trading volume"
     },
     { 
       id: 42, 
       title: "Global Marketing Blitz", 
       description: "Worldwide protocol announcement", 
       date: "2025-11-27", 
       status: "planned", 
       priority: "medium", 
       assignee: "CEO", 
       duration: "3 days", 
       type: "marketing",
       expected: "Global media coverage and crypto community awareness",
       achievement: "Establish ZiroDelta as leader in conditional DeFi"
     },
     { 
       id: 43, 
       title: "Year-End Team Celebration", 
       description: "Team celebration in Dubai", 
       date: "2025-12-15", 
       status: "planned", 
       priority: "low", 
       assignee: "Full Team", 
       duration: "5 days", 
       type: "team",
       expected: "Team celebration and 2026 planning retreat in Dubai",
       achievement: "Reward team success and plan next year's expansion"
     },

         // Completed Foundation Work (June-July 2025)
     { 
       id: 44, 
       title: "Initial Webapp Development", 
       description: "Built basic platform structure", 
       date: "2025-06-01", 
       status: "completed", 
       priority: "critical", 
       assignee: "Frontend Dev", 
       duration: "15 days", 
       type: "development",
       expected: "Functional webapp with basic features and modern design",
       achievement: "Successfully launched initial platform for community"
     },
     { 
       id: 45, 
       title: "Trading Bot Algorithm", 
       description: "Developed core arbitrage algorithm", 
       date: "2025-06-16", 
       status: "completed", 
       priority: "critical", 
       assignee: "Quant Trader", 
       duration: "10 days", 
       type: "development",
       expected: "Profitable arbitrage algorithm with risk management",
       achievement: "Created the core technology that powers ZiroDelta's value"
     },
     { 
       id: 46, 
       title: "ZDLT Token Deploy & Launch", 
       description: "Deployed and launched ZDLT token", 
       date: "2025-06-26", 
       status: "completed", 
       priority: "critical", 
       assignee: "Backend Dev", 
       duration: "2 days", 
       type: "deployment",
       expected: "Successfully deployed ZDLT token contract on blockchain",
       achievement: "Launched native token enabling platform economy"
     },
     { 
       id: 47, 
       title: "Initial Token Distribution", 
       description: "Completed initial token distribution to community", 
       date: "2025-06-28", 
       status: "completed", 
       priority: "high", 
       assignee: "CEO", 
       duration: "1 day", 
       type: "tokenomics",
       expected: "Fair distribution of ZDLT tokens to early supporters",
       achievement: "Built initial token holder base and community ownership"
     },
     { 
       id: 48, 
       title: "Community Building", 
       description: "Built initial community to 500+ members", 
       date: "2025-07-01", 
       status: "completed", 
       priority: "medium", 
       assignee: "Product Manager", 
       duration: "3 days", 
       type: "community",
       expected: "Active community of 500+ engaged members",
       achievement: "Established strong foundation for organic growth"
     },
     { 
       id: 49, 
       title: "$300K Market Cap Milestone", 
       description: "Achieved $300K market capitalization", 
       date: "2025-07-04", 
       status: "completed", 
       priority: "high", 
       assignee: "CEO", 
       duration: "1 day", 
       type: "milestone",
       expected: "Reach $300K market cap through community support",
       achievement: "Validated market demand and project potential"
     },
  ]

  const getTasksForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return enhancedTasks.filter(task => {
      const taskDate = task.date
      const statusMatch = filterStatus === 'all' || task.status === filterStatus
      return taskDate === dateString && statusMatch
    })
  }

  const getCalendarDays = () => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const currentDate = new Date(startDate)
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return days
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setSelectedDate(newDate)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500'
      case 'in-progress': return 'bg-blue-500'
      case 'planned': return 'bg-slate-400'
      default: return 'bg-slate-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30'
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/30'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'low': return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'design': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'security': return 'bg-red-100 text-red-800 border-red-200'
      case 'testing': return 'bg-green-100 text-green-800 border-green-200'
      case 'research': return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      case 'marketing': return 'bg-pink-100 text-pink-800 border-pink-200'
      case 'legal': return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'infrastructure': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'launch': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      case 'deployment': return 'bg-cyan-100 text-cyan-800 border-cyan-200'
      case 'tokenomics': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'business': return 'bg-violet-100 text-violet-800 border-violet-200'
      case 'community': return 'bg-rose-100 text-rose-800 border-rose-200'
      case 'monitoring': return 'bg-teal-100 text-teal-800 border-teal-200'
      case 'optimization': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'governance': return 'bg-lime-100 text-lime-800 border-lime-200'
      case 'documentation': return 'bg-slate-100 text-slate-800 border-slate-200'
      case 'team': return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200'
      case 'partnership': return 'bg-sky-100 text-sky-800 border-sky-200'
      case 'bugfix': return 'bg-red-100 text-red-800 border-red-200'
      case 'preparation': return 'bg-zinc-100 text-zinc-800 border-zinc-200'
      case 'milestone': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === selectedDate.getMonth()
  }

  const openTaskModal = (task: any) => {
    setSelectedTask(task)
    setIsModalOpen(true)
  }

  const closeTaskModal = () => {
    setSelectedTask(null)
    setIsModalOpen(false)
  }

  // Add default expected and achievement values for tasks that don't have them
  const enhancedTasks = dailyTasks.map(task => ({
    ...task,
    expected: task.expected || "Complete the task according to specifications",
    achievement: task.achievement || "Contribute to overall project success and timeline"
  }))

  const calendarDays = getCalendarDays()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
              <span className="text-2xl font-light tracking-wide">ZiroDelta</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="/manifesto" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Manifesto</a>
              <a href="/flywheel" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Flywheel</a>
              <span className="text-teal-400 font-medium">Roadmap</span>
              <Button asChild variant="ghost" className="bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 border border-teal-400/30 transition-all duration-300 px-4 py-2 text-sm">
                <Link href="/staking">
                  Staking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-8 px-6 border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extralight mb-4">Development Calendar</h1>
              <p className="text-slate-400 font-light max-w-2xl">
                Daily task tracking with detailed timelines and team assignments
              </p>
            </div>
            
            {/* View Controls */}
            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <div className="flex bg-slate-900 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                    viewMode === 'month' ? 'bg-teal-400 text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setViewMode('quarter')}
                  className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                    viewMode === 'quarter' ? 'bg-teal-400 text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Quarter
                </button>
              </div>
              
              <select 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-400 focus:outline-none"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="planned">Planned</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Month Navigation */}
      <section className="py-6 px-6 bg-slate-950/30 border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="text-slate-400 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <h2 className="text-2xl font-light text-white">
              {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </h2>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="text-slate-400 hover:text-white"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedDate.getMonth()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {weekDays.map((day) => (
                <div key={day} className="p-3 text-center text-sm font-medium text-slate-400 border-b border-slate-800/30">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const tasksForDate = getTasksForDate(date)
                const isCurrentMonthDate = isCurrentMonth(date)
                const isTodayDate = isToday(date)
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    className={`min-h-[120px] p-2 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 ${
                      !isCurrentMonthDate ? 'opacity-30' : ''
                    } ${isTodayDate ? 'border-teal-400/50 bg-teal-400/5' : ''}`}
                  >
                    <div className={`text-sm font-light mb-2 ${
                      isTodayDate ? 'text-teal-400 font-medium' : 
                      isCurrentMonthDate ? 'text-white' : 'text-slate-500'
                    }`}>
                      {date.getDate()}
                    </div>
                    
                    <div className="space-y-1">
                      {tasksForDate.slice(0, 2).map((task) => (
                        <div
                          key={task.id}
                          className="group cursor-pointer"
                          title={`${task.title} - ${task.assignee}`}
                          onClick={() => openTaskModal(task)}
                        >
                          <div className={`text-xs p-1 rounded border transition-all duration-300 group-hover:scale-105 ${
                            task.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                            task.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            'bg-slate-600/20 text-slate-400 border-slate-600/30'
                          }`}>
                            <div className="font-medium truncate">{task.title}</div>
                            <div className="text-xs opacity-75">{task.assignee}</div>
                          </div>
                        </div>
                      ))}
                      
                      {tasksForDate.length > 2 && (
                        <div className="text-xs text-slate-400 p-1">
                          +{tasksForDate.length - 2} more
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Task Details Modal */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-light text-white mb-2">{selectedTask.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <span>{new Date(selectedTask.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <Badge className={`${getPriorityColor(selectedTask.priority)} border text-xs`}>
                    {selectedTask.priority}
                  </Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeTaskModal}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Description</h3>
                <p className="text-slate-300 leading-relaxed">{selectedTask.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">What's Expected</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedTask.expected}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Achievement Goal</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedTask.achievement}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-700">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Assignee</span>
                  <span className="text-sm text-white font-medium">{selectedTask.assignee}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Duration</span>
                  <span className="text-sm text-white font-medium">{selectedTask.duration}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Type</span>
                  <Badge className={`${getTypeColor(selectedTask.type)} text-xs`}>
                    {selectedTask.type}
                  </Badge>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Status</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${selectedTask.status === 'completed' ? 'border-green-500 text-green-400' :
                      selectedTask.status === 'in-progress' ? 'border-yellow-500 text-yellow-400' :
                      'border-zinc-500 text-zinc-400'}`}
                  >
                    {selectedTask.status}
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Summary Stats */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extralight mb-12">Development Progress</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extralight text-emerald-400 mb-3">
                  {dailyTasks.filter(t => t.status === 'completed').length}
                </div>
                <div className="text-slate-400 font-light">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-blue-400 mb-3">
                  {dailyTasks.filter(t => t.status === 'in-progress').length}
                </div>
                <div className="text-slate-400 font-light">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-slate-400 mb-3">
                  {dailyTasks.filter(t => t.status === 'planned').length}
                </div>
                <div className="text-slate-400 font-light">Planned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-teal-400 mb-3">
                  {Math.round((dailyTasks.filter(t => t.status === 'completed').length / dailyTasks.length) * 100)}%
                </div>
                <div className="text-slate-400 font-light">Complete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
              <span className="text-2xl font-light tracking-wide">ZiroDelta</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-6">
                <a 
                  href="https://x.com/zirodelta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-light"
                >
                  X
                </a>
                <a 
                  href="https://discord.gg/YHW275Vpn3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-light"
                >
                  Discord
                </a>
                <a 
                  href="https://t.me/zirodelta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-light"
                >
                  Telegram
                </a>
              </div>
              
              <div className="flex items-center space-x-2 bg-slate-900/30 border border-slate-800/50 rounded-lg px-4 py-2">
                <span className="text-xs text-slate-500 font-light">Contract Address:</span>
                <code className="text-xs text-teal-400 font-mono">4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf</code>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf');
                  }}
                  className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-xs"
                  title="Copy contract address"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800/30 text-center text-slate-500 font-light">
            <p>&copy; 2024 ZiroDelta. Building the future of conditional finance.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 