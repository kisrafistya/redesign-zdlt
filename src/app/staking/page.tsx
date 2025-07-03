'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Wallet, TrendingUp, Users, Clock, DollarSign, PiggyBank, Award, Plus, Minus, ExternalLink, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useState } from 'react'

export default function StakingApp() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [stakeAmount, setStakeAmount] = useState('')
  const [unstakeAmount, setUnstakeAmount] = useState('')
  const [activeTab, setActiveTab] = useState('stake')

  // Mock user data
  const userPosition = {
    stakedAmount: "12,450",
    currentTier: "Gold",
    pendingRewards: "847.32",
    totalEarned: "3,247.89",
    apr: "51.4%",
    nextDistribution: "2 days"
  }

  const platformStats = {
    totalStaked: "$0",
    totalStakers: "0",
    avgAPR: "51.4%",
    totalDistributed: "$0"
  }

  const stakingTiers = [
    { name: "Bronze", min: "1,000", apr: "12%", current: false },
    { name: "Silver", min: "5,000", apr: "18%", current: false },
    { name: "Gold", min: "10,000", apr: "25%", current: true },
    { name: "Diamond", min: "50,000", apr: "35%", current: false }
  ]

  const recentRewards = [
    { date: "Dec 22", amount: "43.21", source: "Bot Auction Share" },
    { date: "Dec 15", amount: "78.45", source: "Prop Trading Share" },
    { date: "Dec 8", amount: "34.67", source: "Bot Subscription Share" },
    { date: "Dec 1", amount: "91.23", source: "Bot Auction Share" }
  ]

  const rewardSources = [
    {
      title: "Bot Auction Revenue",
      share: "20%",
      description: "A 20% portion of all monthly auction proceeds is distributed to stakers."
    },
    {
      title: "Bot Subscription Fees",
      share: "20%",
      description: "Stakers receive 20% of the revenue from monthly bot subscription fees."
    },
    {
      title: "Proprietary Trading",
      share: "50%",
      description: "Our internal trading desk shares 50% of its net profits with stakers."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
              <span className="text-2xl font-extralight tracking-wide">ZiroDelta</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              {!walletConnected ? (
                <Button 
                  onClick={() => setWalletConnected(true)}
                  className="bg-teal-400 hover:bg-teal-500 text-black font-light transition-all duration-300"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <div className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-sm font-light">0x...4f2a</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {!walletConnected ? (
        /* Wallet Connection Required */
        <section className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-teal-400/10 border border-teal-400/30 rounded-lg flex items-center justify-center mx-auto mb-8">
                <Wallet className="w-10 h-10 text-teal-400" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight">
                Connect Your Wallet
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 font-light leading-relaxed">
                Connect your wallet to start staking ZDLT and earning revenue from the platform.
              </p>
              
              <Button 
                onClick={() => setWalletConnected(true)}
                size="lg" 
                className="bg-teal-400 hover:bg-teal-500 text-black font-light px-8 py-4 text-lg transition-all duration-300"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
              
              <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-light text-teal-400 mb-2">{platformStats.totalStaked}</div>
                  <div className="text-sm text-slate-400 font-light">Total Staked</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-2">{platformStats.avgAPR}</div>
                  <div className="text-sm text-slate-400 font-light">Average APR</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-teal-400 mb-2">{platformStats.totalDistributed}</div>
                  <div className="text-sm text-slate-400 font-light">Total Distributed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        /* Main Staking App */
        <section className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header with Stats */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extralight mb-2">Staking Dashboard</h1>
                  <p className="text-slate-400 font-light">Manage your ZDLT stake and track rewards</p>
                </div>
                <div className="flex items-center space-x-8 mt-4 lg:mt-0">
                  <div className="text-center">
                    <div className="text-2xl font-light text-teal-400">{userPosition.pendingRewards}</div>
                    <div className="text-xs text-slate-400 font-light">Pending Rewards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-white">{userPosition.apr}</div>
                    <div className="text-xs text-slate-400 font-light">Current APR</div>
                  </div>
                  <Button className="bg-teal-400 hover:bg-teal-500 text-black font-light px-6 py-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Claim Rewards
                  </Button>
                </div>
              </div>
              
              {/* User Position Summary */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-light text-teal-400 mb-1">{userPosition.stakedAmount}</div>
                  <div className="text-sm text-slate-400 font-light">ZDLT Staked</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="text-2xl font-light text-white">{userPosition.currentTier}</div>
                    <div className="group relative">
                      <Info className="w-4 h-4 text-slate-400 cursor-help" />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 bg-slate-800 border border-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <div className="text-xs text-white font-light mb-2">Gold Tier Benefits:</div>
                        <div className="text-xs text-slate-400 font-light">• 25% APR</div>
                        <div className="text-xs text-slate-400 font-light">• Min: 10,000 ZDLT</div>
                        <div className="text-xs text-slate-400 font-light">• Next: Diamond (50,000 ZDLT)</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 font-light">Current Tier</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-teal-400 mb-1">{userPosition.totalEarned}</div>
                  <div className="text-sm text-slate-400 font-light">Total Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white mb-1">{userPosition.nextDistribution}</div>
                  <div className="text-sm text-slate-400 font-light">Next Distribution</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:items-start">
              
              {/* Left Column - Staking Interface */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Staking Interface */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
                      <button
                        onClick={() => setActiveTab('stake')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-light transition-all duration-200 ${
                          activeTab === 'stake' 
                            ? 'bg-teal-400 text-black' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Stake
                      </button>
                      <button
                        onClick={() => setActiveTab('unstake')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-light transition-all duration-200 ${
                          activeTab === 'unstake' 
                            ? 'bg-teal-400 text-black' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Unstake
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeTab === 'stake' ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-light text-slate-400 mb-2">Amount to Stake</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={stakeAmount}
                              onChange={(e) => setStakeAmount(e.target.value)}
                              placeholder="0.00"
                              className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white font-light focus:border-teal-400 focus:outline-none"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                              ZDLT
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-slate-400 font-light">
                            Available: 25,340.56 ZDLT
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setStakeAmount('2500')}>
                            25%
                          </Button>
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setStakeAmount('5000')}>
                            50%
                          </Button>
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setStakeAmount('7500')}>
                            75%
                          </Button>
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setStakeAmount('10000')}>
                            MAX
                          </Button>
                        </div>
                        
                        <Button className="w-full bg-teal-400 hover:bg-teal-500 text-black font-light py-3">
                          <Plus className="w-4 h-4 mr-2" />
                          Stake ZDLT
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-light text-slate-400 mb-2">Amount to Unstake</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={unstakeAmount}
                              onChange={(e) => setUnstakeAmount(e.target.value)}
                              placeholder="0.00"
                              className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white font-light focus:border-teal-400 focus:outline-none"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                              ZDLT
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-slate-400 font-light">
                            Staked: {userPosition.stakedAmount} ZDLT
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setUnstakeAmount('3112')}>
                            25%
                          </Button>
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setUnstakeAmount('6225')}>
                            50%
                          </Button>
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setUnstakeAmount('9337')}>
                            75%
                          </Button>
                          <Button variant="ghost" size="sm" className="border border-teal-400/30 text-teal-400 hover:bg-teal-400/10" onClick={() => setUnstakeAmount('12450')}>
                            MAX
                          </Button>
                        </div>
                        
                        <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                          <p className="text-amber-400 text-sm font-light">
                            Unstaking has a 7-day cooldown period. You'll continue earning rewards during this time.
                          </p>
                        </div>
                        
                        <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white font-light py-3">
                          <Minus className="w-4 h-4 mr-2" />
                          Unstake ZDLT
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Recent Rewards - Horizontal Layout */}
                <div>
                  <h3 className="text-sm font-light text-slate-400 mb-3">Recent Rewards</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {recentRewards.map((reward, index) => (
                      <div key={index} className="flex items-center p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                        <div className="w-6 h-6 bg-teal-400/10 border border-teal-400/30 rounded flex items-center justify-center mr-3">
                          <DollarSign className="w-3 h-3 text-teal-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-teal-400 font-light text-sm">+{reward.amount}</div>
                          <div className="text-xs text-slate-400">{reward.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column - Performance Chart */}
              <div className="space-y-6">
                
                {/* Stake Performance Chart */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Your Stake Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Performance Summary */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-light text-teal-400 mb-1">+$2,847</div>
                        <div className="text-xs text-slate-400 font-light">Total Profit</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-teal-400 mb-1">+18.3%</div>
                        <div className="text-xs text-slate-400 font-light">Total Return</div>
                      </div>
                    </div>

                    {/* Simple Performance Chart */}
                    <div className="relative h-40 bg-slate-800/30 rounded-lg p-4">
                      <div className="absolute top-2 left-4 text-xs text-slate-400">Equity Value</div>
                      <div className="absolute top-2 right-4 text-xs text-teal-400">$18,347</div>
                      
                      {/* Simple line chart visualization */}
                      <svg className="w-full h-full" viewBox="0 0 300 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05"/>
                          </linearGradient>
                        </defs>
                        
                        {/* Chart line */}
                        <polyline
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="2"
                          points="20,80 60,75 100,70 140,65 180,55 220,50 260,45 280,40"
                        />
                        
                        {/* Fill area */}
                        <polygon
                          fill="url(#gradient)"
                          points="20,80 60,75 100,70 140,65 180,55 220,50 260,45 280,40 280,85 20,85"
                        />
                        
                        {/* Data points */}
                        <circle cx="280" cy="40" r="3" fill="#14b8a6" />
                      </svg>
                    </div>

                    {/* Time Period Selector */}
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-teal-400/20 text-teal-400 rounded text-xs font-light">7D</button>
                      <button className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded text-xs font-light hover:bg-slate-700/50">30D</button>
                      <button className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded text-xs font-light hover:bg-slate-700/50">90D</button>
                      <button className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded text-xs font-light hover:bg-slate-700/50">1Y</button>
                    </div>

                    {/* Recent Performance Metrics */}
                    <div className="space-y-3 pt-3 border-t border-slate-800">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-slate-400">7D Return</span>
                        <span className="text-sm font-light text-teal-400">+2.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-slate-400">30D Return</span>
                        <span className="text-sm font-light text-teal-400">+8.1%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-slate-400">Best Day</span>
                        <span className="text-sm font-light text-teal-400">+$127</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-slate-400">Avg Daily</span>
                        <span className="text-sm font-light text-teal-400">+$23</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>



              </div>
            </div>


          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 font-light">
            &copy; 2024 ZiroDelta. <span className="text-teal-400">Your success is our success.</span>
          </p>
        </div>
      </footer>
    </main>
  )
} 