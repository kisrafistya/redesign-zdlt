'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, BarChart3, RefreshCw, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FundingRateTerminal() {
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Generate ONLY USDT pairs with stable deterministic data - NO RANDOM MATH!
  const generateTradingPairs = () => {
    // All tokens that will have USDT pairs - comprehensive list
    const allTokens: string[] = [
      'BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'SOL', 'DOGE', 'TRX', 'TON', 'AVAX',
      'SHIB', 'DOT', 'MATIC', 'LTC', 'BCH', 'UNI', 'LINK', 'ATOM', 'XMR', 'ETC',
      'ICP', 'FIL', 'APT', 'ARB', 'OP', 'IMX', 'NEAR', 'VET', 'GRT', 'SAND',
      'MANA', 'ALGO', 'FLOW', 'XTZ', 'EGLD', 'AAVE', 'SNX', 'MKR', 'COMP', 'CRV',
      'SUSHI', 'YFI', 'BAL', 'REN', 'KNC', 'ZRX', 'BAT', 'ENJ', 'STORJ', 'BAND',
      'KAVA', 'COTI', 'CTSI', 'DENT', 'HOT', 'OMG', 'ZIL', 'ICX', 'IOST', 'SC',
      'WAN', 'FTM', 'ONE', 'THETA', 'TFUEL', 'RUNE', 'OCEAN', 'SRM', 'RAY', 'COPE',
      'STEP', 'MEDIA', 'ROPE', 'TULIP', 'SLIM', 'STAR', 'PORT', 'MNGO', 'FIDA', 'KIN',
      'MAPS', 'OXY', 'LIKE', 'DXL', 'PRISM', 'NINJA', 'SONAR', 'SLRS', 'PHCR', 'TOKE',
      'INJ', 'GMT', 'APE', 'LDO', 'RPL', 'MASK', 'ENS', 'ILV', 'GALA', 'CHZ',
      'AXS', 'MBOX', 'TLM', 'SLP', 'PYR', 'SUPER', 'UFO', 'VOXEL', 'HIGH', 'NFTX',
      'ALICE', 'BETA', 'RARE', 'LOKA', 'PROS', 'BICO', 'FLUX', 'REQ', 'MDT', 'DF',
      'EPS', 'AUTO', 'TKO', 'PUNDIX', 'NKN', 'CHESS', 'SPS', 'C98', 'CLV', 'QNT',
      'FARM', 'TRU', 'ACH', 'POLY', 'SHPING', 'PERL', 'DEXE', 'ERN', 'KLAYTN', 'MOVR',
      'RAD', 'LAZIO', 'SANTOS', 'NMR', 'REI', 'FOOTBALL', 'ALPINE', 'CITY', 'BAR', 'PSG',
      'JUV', 'ATM', 'ASR', 'OG', 'PEPE', 'FLOKI', 'BONK', 'WIF', 'MEW', 'POPCAT',
      'NEIRO', 'GOAT', 'PNUT', 'BRETT', 'TURBO', 'MOG', 'BOOK', 'MOODENG', 'PONKE', 'MOTHER',
      'DADDY', 'SIGMA', 'BILLY', 'MANEKI', 'NOT', 'DOGS', 'HMSTR', 'CATI', 'BLUM', 'X',
      'MAJOR', 'EIGEN', 'GRASS', 'SCR', 'LUMIA', 'CETUS', 'KAIA', 'USUAL', 'VANA', 'VELODROME'
    ]

    const pairs: Array<{
      pair: string
      kucoin: number
      bybit: number
      openInterestKucoin: number
      openInterestBybit: number
      volume24h: number
      priceChange24h: number
      spread?: number
    }> = []
    
    // Create ONLY USDT pairs with deterministic data based on token index
    for (let i = 0; i < allTokens.length; i++) {
      const token: string = allTokens[i]
      
      // Deterministic values based on token index - NO RANDOM!
      const indexFactor = (i + 1) / allTokens.length
      const cycleFactor = Math.sin(i * 0.5) * 0.5 + 0.5
      const altCycleFactor = Math.cos(i * 0.3) * 0.5 + 0.5
      
      // Stable funding rates based on token position
      const kucoinRate = (indexFactor - 0.5) * 0.04 + cycleFactor * 0.02 - 0.01
      const bybitRate = (indexFactor - 0.5) * 0.04 + altCycleFactor * 0.02 - 0.005
      
      pairs.push({
        pair: `${token}/USDT`,
        kucoin: kucoinRate,
        bybit: bybitRate,
        openInterestKucoin: 1000000000 + indexFactor * 4000000000,
        openInterestBybit: 800000000 + cycleFactor * 3500000000,
        volume24h: 50000000 + indexFactor * 500000000,
        priceChange24h: (indexFactor - 0.5) * 15 + Math.sin(i * 0.7) * 5
      })
    }
    
    // Calculate spreads and sort by spread value (color sorting)
    const pairsWithSpread = pairs.map(rate => ({
      ...rate,
      spread: rate.kucoin - rate.bybit
    }))
    
    // Sort by spread value for color consistency
    return pairsWithSpread.sort((a, b) => a.spread - b.spread)
  }

  // Mock real-time funding rate data with proper pairs
  const [fundingRates, setFundingRates] = useState(() => generateTradingPairs())

  // Historical data for charts (24h history) - Stable deterministic patterns NO RANDOM!
  const [chartData] = useState(() => {
    const hours = Array.from({length: 24}, (_, i) => i)
    return hours.map(hour => {
      // Deterministic funding rate patterns:
      // - Based on realistic 8-hour funding cycles
      // - Stable oscillating patterns
      // - No random math, consistent results
      
      const timeOfDay = hour % 8 // 8-hour funding cycles
      const marketSentiment = 0.65 // 65% bullish market (positive rates more common)
      
      // Base rates with deterministic patterns
      const kucoinBase = 0.0001 + Math.sin(hour / 3) * 0.0002 // Oscillating around 0.01%
      const bybitBase = 0.00008 + Math.cos(hour / 4) * 0.00015 // Slightly different pattern
      
      // Add funding cycle effects (every 8 hours)
      const cycleEffect = Math.sin(timeOfDay * Math.PI / 4) * 0.00005
      
      // Add market sentiment bias
      const sentimentBias = marketSentiment > 0.5 ? 0.00003 : -0.00003
      
      // Deterministic micro-variations based on hour
      const kucoinMicroVar = Math.sin(hour * 1.3) * 0.00001
      const bybitMicroVar = Math.cos(hour * 1.7) * 0.00001
      
      const kucoinRate = kucoinBase + cycleEffect + sentimentBias + kucoinMicroVar
      const bybitRate = bybitBase + cycleEffect * 0.8 + sentimentBias + bybitMicroVar
      
      return {
        time: `${hour.toString().padStart(2, '0')}:00`,
        kucoinAvg: Math.max(-0.0005, Math.min(0.0008, kucoinRate)), // Cap between -0.05% and +0.08%
        bybitAvg: Math.max(-0.0005, Math.min(0.0008, bybitRate)),
        spread: Math.abs(kucoinRate - bybitRate),
        volume: 50000000 + hour * 2000000 + Math.sin(hour * 0.5) * 30000000 // Deterministic volume
      }
    })
  })

  // Simulate real-time updates with stable patterns - NO RANDOM!
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
      setFundingRates(prev => prev.map((rate, index) => {
        // Deterministic micro-changes based on index and time
        const timeFactor = Date.now() / 100000
        const microChange = Math.sin(timeFactor + index * 0.1) * 0.0002
        const altMicroChange = Math.cos(timeFactor + index * 0.15) * 0.0002
        
        return {
          ...rate,
          kucoin: rate.kucoin + microChange,
          bybit: rate.bybit + altMicroChange,
        }
      }).map(rate => ({
        ...rate,
        spread: rate.kucoin - rate.bybit
      })))
    }, 5000) // Update every 5 seconds for demo

    return () => clearInterval(interval)
  }, [])

  const formatRate = (rate: number) => {
    const sign = rate >= 0 ? '+' : ''
    return `${sign}${(rate * 100).toFixed(3)}%`
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000000) return `$${(amount / 1000000000).toFixed(1)}B`
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(0)}M`
    return `$${amount.toLocaleString()}`
  }

  // Helper function to format UTC time
  const formatUTCTime = (date: Date) => {
    return date.toUTCString().split(' ')[4] // Extract HH:MM:SS from UTC string
  }

  // Filter for USDT pairs only
  const usdtPairs = fundingRates.filter(rate => rate.pair.endsWith('/USDT'))

  const totalOI = fundingRates.reduce((sum, rate) => sum + rate.openInterestKucoin + rate.openInterestBybit, 0)
  const arbitrageOps = fundingRates.filter(rate => Math.abs(rate.spread) > 0.005).length
  const avgSpread = fundingRates.reduce((sum, rate) => sum + Math.abs(rate.spread), 0) / fundingRates.length

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-8 h-8" />
              <span className="text-xl font-light tracking-wide">ZiroDelta Terminal</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400">LIVE</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400">{formatUTCTime(lastUpdate)} UTC</span>
              </div>
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <RefreshCw className="w-3 h-3 mr-1" />
                Refresh
                </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-16 relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Main Hero Title */}
              <motion.h1 
                className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Funding Rate
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  Terminal
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Real-time arbitrage opportunities across exchanges. Monitor funding rate spreads, 
                analyze market sentiment, and capitalize on cross-exchange inefficiencies.
              </motion.p>
              
              {/* Key Features */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm uppercase tracking-wide">Live Data</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm uppercase tracking-wide">Multi-Exchange</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm uppercase tracking-wide">USDT Pairs</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm uppercase tracking-wide">Arbitrage Ready</span>
                </div>
              </motion.div>
              
              {/* Status Indicator */}
              <motion.div 
                className="inline-flex items-center space-x-3 bg-gray-900/50 border border-gray-700 rounded-full px-6 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-medium text-white">System Online</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">{fundingRates.length} Active Pairs</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="text-2xl font-mono font-light text-white">{fundingRates.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Active Pairs</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="text-2xl font-mono font-light text-white">{arbitrageOps}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Arbitrage Ops</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="text-2xl font-mono font-light text-white">{formatCurrency(totalOI)}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Total OI</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-4">
                <div className="text-2xl font-mono font-light text-white">{formatRate(avgSpread)}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Avg Spread</div>
              </CardContent>
            </Card>
              </div>
              
          <div className="grid grid-cols-3 gap-6">
            
            {/* Main Chart Area */}
            <div className="col-span-2 space-y-6">
              
              {/* Enhanced Funding Rate Trends Chart */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-300 uppercase tracking-wide">Funding Rate Trends (24H)</CardTitle>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-400">KuCoin</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-400">Bybit</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                                    <div className="h-80 relative p-6">
                    <svg className="w-full h-full" viewBox="0 0 1000 320">
                      {/* Definitions for gradients and filters */}
                      <defs>
                        <linearGradient id="kucoinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: "rgb(59, 130, 246)", stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: "rgb(59, 130, 246)", stopOpacity: 0.05}} />
                        </linearGradient>
                        <linearGradient id="bybitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: "rgb(168, 85, 247)", stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: "rgb(168, 85, 247)", stopOpacity: 0.05}} />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Enhanced grid lines */}
                      {Array.from({length: 7}).map((_, i) => (
                        <g key={`horizontal-${i}`}>
                          <line 
                            x1="100" 
                            y1={50 + i * 35} 
                            x2="880" 
                            y2={50 + i * 35} 
                            stroke={i === 3 ? "rgb(75, 85, 99)" : "rgb(55, 65, 81)"} 
                            strokeWidth={i === 3 ? "1" : "0.5"}
                            strokeDasharray={i === 3 ? "none" : "2,2"}
                          />
                          {/* Y-axis labels */}
                          <text 
                            x="85" 
                            y={55 + i * 35} 
                            fill="rgb(156, 163, 175)" 
                            fontSize="11" 
                            textAnchor="end"
                            fontFamily="monospace"
                          >
                            {(0.08 - i * 0.027).toFixed(3)}%
                          </text>
                        </g>
                      ))}
                      
                      {/* Vertical grid lines */}
                      {Array.from({length: 13}).map((_, i) => (
                        <line 
                          key={`vertical-${i}`}
                          x1={100 + i * 60} 
                          y1="50" 
                          x2={100 + i * 60} 
                          y2="260" 
                          stroke="rgb(55, 65, 81)" 
                          strokeWidth="0.5"
                          strokeDasharray="2,2"
                        />
                      ))}
                      
                      {/* KuCoin area fill */}
                      <path
                        d={`M 100,155 ${chartData.map((d, i) => 
                          `L ${100 + i * 32},${155 - d.kucoinAvg * 30000}`
                        ).join(' ')} L ${100 + (chartData.length - 1) * 32},155 Z`}
                        fill="url(#kucoinGradient)"
                      />
                      
                      {/* Bybit area fill */}
                      <path
                        d={`M 100,155 ${chartData.map((d, i) => 
                          `L ${100 + i * 32},${155 - d.bybitAvg * 30000}`
                        ).join(' ')} L ${100 + (chartData.length - 1) * 32},155 Z`}
                        fill="url(#bybitGradient)"
                      />
                      
                      {/* KuCoin line with glow effect */}
                      <polyline
                        fill="none"
                        stroke="rgb(59, 130, 246)"
                        strokeWidth="3"
                        filter="url(#glow)"
                        points={chartData.map((d, i) => 
                          `${100 + i * 32},${155 - d.kucoinAvg * 30000}`
                        ).join(' ')}
                      />
                      
                      {/* Bybit line with glow effect */}
                      <polyline
                        fill="none"
                        stroke="rgb(168, 85, 247)"
                        strokeWidth="3"
                        filter="url(#glow)"
                        points={chartData.map((d, i) => 
                          `${100 + i * 32},${155 - d.bybitAvg * 30000}`
                        ).join(' ')}
                      />
                      
                      {/* Data points for KuCoin */}
                      {chartData.map((d, i) => (
                        <circle
                          key={`kucoin-point-${i}`}
                          cx={100 + i * 32}
                          cy={155 - d.kucoinAvg * 30000}
                          r="2.5"
                          fill="rgb(59, 130, 246)"
                          stroke="white"
                          strokeWidth="1"
                          className="opacity-0 hover:opacity-100 transition-opacity"
                        />
                      ))}
                      
                      {/* Data points for Bybit */}
                      {chartData.map((d, i) => (
                        <circle
                          key={`bybit-point-${i}`}
                          cx={100 + i * 32}
                          cy={155 - d.bybitAvg * 30000}
                          r="2.5"
                          fill="rgb(168, 85, 247)"
                          stroke="white"
                          strokeWidth="1"
                          className="opacity-0 hover:opacity-100 transition-opacity"
                        />
                      ))}
                      
                      {/* Enhanced time labels */}
                      {chartData.filter((_, i) => i % 3 === 0).map((d, i) => (
                        <g key={`time-label-${i}`}>
                          <line 
                            x1={100 + i * 96} 
                            y1="260" 
                            x2={100 + i * 96} 
                            y2="265" 
                            stroke="rgb(156, 163, 175)" 
                            strokeWidth="1"
                          />
                          <text 
                            x={100 + i * 96} 
                            y={280} 
                            fill="rgb(156, 163, 175)" 
                            fontSize="11" 
                            textAnchor="middle"
                            fontFamily="monospace"
                          >
                            {d.time}
                          </text>
                        </g>
                      ))}
                      
                      {/* Chart border */}
                      <rect 
                        x="100" 
                        y="50" 
                        width="780" 
                        height="210" 
                        fill="none" 
                        stroke="rgb(75, 85, 99)" 
                        strokeWidth="1"
                      />
                      
                      {/* Current values display */}
                      <g className="current-values">
                        <rect x="700" y="60" width="170" height="60" fill="rgba(0,0,0,0.8)" rx="6" stroke="rgb(75, 85, 99)" strokeWidth="1"/>
                        <text x="710" y="80" fill="rgb(156, 163, 175)" fontSize="10" fontFamily="monospace">Current Rates:</text>
                        <text x="710" y="95" fill="rgb(59, 130, 246)" fontSize="12" fontFamily="monospace">
                          KuCoin: {formatRate(chartData[chartData.length - 1]?.kucoinAvg || 0)}
                        </text>
                        <text x="710" y="110" fill="rgb(168, 85, 247)" fontSize="12" fontFamily="monospace">
                          Bybit: {formatRate(chartData[chartData.length - 1]?.bybitAvg || 0)}
                        </text>
                      </g>
                      
                      {/* Axis labels */}
                      <text x="490" y="305" fill="rgb(156, 163, 175)" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Time (24H)</text>
                      <text x="25" y="155" fill="rgb(156, 163, 175)" fontSize="11" textAnchor="middle" transform="rotate(-90, 25, 155)" fontFamily="sans-serif">Funding Rate (%)</text>
                    </svg>
                  </div>
                </CardContent>
              </Card>

              {/* USDT Pairs Spread Analysis */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-gray-300 uppercase tracking-wide">USDT Pairs Spread Analysis ({usdtPairs.length} Pairs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-10 gap-3 max-h-96 overflow-y-auto">
                    {usdtPairs.slice(0, 100).map((rate, index) => {
                      const intensity = Math.min(Math.abs(rate.spread) * 30, 0.9) + 0.1
                      const isPositive = rate.spread > 0
                      const color = isPositive ? 
                        `rgba(34, 197, 94, ${intensity})` : 
                        `rgba(239, 68, 68, ${intensity})`
                      
                      return (
                        <div 
                          key={rate.pair}
                          className="aspect-square rounded-lg border border-gray-700 flex flex-col items-center justify-center relative group cursor-pointer p-2"
                          style={{ backgroundColor: color }}
                        >
                  <div className="text-center">
                            <div className="text-xs font-semibold text-white mb-1 drop-shadow-lg">
                              {rate.pair.split('/')[0]}
                  </div>
                            <div className="text-xs font-mono font-bold text-white drop-shadow-lg">
                              {formatRate(rate.spread)}
                </div>
              </div>
              
                          {/* Improved Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-900 border border-gray-600 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap shadow-xl">
                            <div className="font-medium text-white mb-2">{rate.pair}</div>
                            <div className="space-y-1 text-gray-300">
                              <div>KuCoin: <span className={rate.kucoin > 0 ? 'text-green-400' : 'text-red-400'}>{formatRate(rate.kucoin)}</span></div>
                              <div>Bybit: <span className={rate.bybit > 0 ? 'text-green-400' : 'text-red-400'}>{formatRate(rate.bybit)}</span></div>
                              <div>Spread: <span className={rate.spread > 0 ? 'text-green-400' : 'text-red-400'}>{formatRate(rate.spread)}</span></div>
                              <div className="text-xs text-gray-400 pt-1">Vol: {formatCurrency(rate.volume24h)}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded"></div>
                        <span>Negative Spread (Bybit Higher)</span>
                </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span>Positive Spread (KuCoin Higher)</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">Showing top 100 USDT pairs</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              
              {/* Top Opportunities */}
              <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                  <CardTitle className="text-sm font-medium text-gray-300 uppercase tracking-wide flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Top Opportunities
                  </CardTitle>
                  </CardHeader>
                <CardContent className="space-y-3">
                  {fundingRates
                    .sort((a, b) => Math.abs(b.spread) - Math.abs(a.spread))
                    .slice(0, 5)
                    .map((rate, index) => (
                      <div key={rate.pair} className="flex items-center justify-between p-3 bg-gray-800 border border-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gray-600 rounded text-xs flex items-center justify-center font-mono text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{rate.pair}</div>
                            <div className="text-xs text-gray-400">{formatCurrency(rate.volume24h)} vol</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-mono font-bold ${rate.spread > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatRate(rate.spread)}
                          </div>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>



              {/* Real-time Data Feed */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-gray-300 uppercase tracking-wide">Live Data Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-xs font-mono">
                    {fundingRates.slice(0, 3).map((rate, index) => (
                      <div key={rate.pair} className="flex justify-between items-center py-1 border-b border-gray-800 last:border-b-0">
                        <span className="text-gray-300">{rate.pair}</span>
                        <div className="flex items-center space-x-2">
                          <span className={rate.kucoin > 0 ? 'text-green-400' : 'text-red-400'}>
                            {formatRate(rate.kucoin)}
                          </span>
                          <span className="text-gray-600">|</span>
                          <span className={rate.bybit > 0 ? 'text-green-400' : 'text-red-400'}>
                            {formatRate(rate.bybit)}
                          </span>
                      </div>
                      </div>
                    ))}
                    </div>
                  </CardContent>
                </Card>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 