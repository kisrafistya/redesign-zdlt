'use client'

import { motion } from 'framer-motion'
import { Wallet, ShoppingBag, Clock, CheckCircle, Flame, Gift, Shirt, Star, AlertCircle, ExternalLink, Zap, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

interface MerchTier {
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

interface UserActivity {
  walletAddress: string
  freshBuyAmount: number
  burnAmount: number
  lastFreshBuy: Date
  hasBurned: boolean
}

export default function MerchPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null)
  const [selectedMerch, setSelectedMerch] = useState<string | null>(null)
  const [shippingAddress, setShippingAddress] = useState('')
  const [claimStep, setClaimStep] = useState<'connect' | 'verify' | 'select' | 'address' | 'confirm' | 'success'>('connect')

  const merchTiers: MerchTier[] = [
    {
      id: 'hoodie',
      name: 'ZiroDelta Elite Hoodie',
      icon: Shirt,
      freshBuyAmount: 2000,
      burnAmount: 200,
      description: 'Premium black hoodie with exclusive ZiroDelta branding and limited edition holographic details',
      image: '/merch/hoodie.jpg',
      available: 50,
      claimed: 12,
      tier: 'legendary'
    },
    {
      id: 'tee',
      name: 'Delta Festival Tee',
      icon: Shirt,
      freshBuyAmount: 1500,
      burnAmount: 150,
      description: 'Limited edition festival t-shirt with glow-in-the-dark ZiroDelta logo',
      image: '/merch/tee.jpg',
      available: 100,
      claimed: 34,
      tier: 'epic'
    },
    {
      id: 'snapback',
      name: 'Crypto Snapback Cap',
      icon: Star,
      freshBuyAmount: 1000,
      burnAmount: 100,
      description: 'Embroidered snapback with metallic ZiroDelta logo and premium construction',
      image: '/merch/cap.jpg',
      available: 75,
      claimed: 21,
      tier: 'epic'
    },
    {
      id: 'bracelet',
      name: 'Diamond Hands Bracelet',
      icon: Star,
      freshBuyAmount: 800,
      burnAmount: 80,
      description: 'Titanium bracelet with laser-etched ZiroDelta insignia for true believers',
      image: '/merch/bracelet.jpg',
      available: 200,
      claimed: 67,
      tier: 'rare'
    },
    {
      id: 'tote',
      name: 'Festival Tote Bag',
      icon: ShoppingBag,
      freshBuyAmount: 600,
      burnAmount: 60,
      description: 'Eco-friendly tote made from recycled materials with embossed ZiroDelta branding',
      image: '/merch/bag.jpg',
      available: 150,
      claimed: 45,
      tier: 'rare'
    },
    {
      id: 'stickers',
      name: 'Holographic Sticker Pack',
      icon: Star,
      freshBuyAmount: 300,
      burnAmount: 30,
      description: 'Complete holographic sticker collection featuring ZiroDelta iconography',
      image: '/merch/stickers.jpg',
      available: 500,
      claimed: 142,
      tier: 'common'
    }
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'legendary': return 'from-yellow-400 to-orange-500'
      case 'epic': return 'from-purple-400 to-pink-500'
      case 'rare': return 'from-blue-400 to-cyan-500'
      case 'common': return 'from-gray-400 to-slate-500'
      default: return 'from-teal-400 to-cyan-500'
    }
  }

  const getTierBorder = (tier: string) => {
    switch (tier) {
      case 'legendary': return 'border-yellow-400/30'
      case 'epic': return 'border-purple-400/30'
      case 'rare': return 'border-blue-400/30'
      case 'common': return 'border-gray-400/30'
      default: return 'border-teal-400/30'
    }
  }

  // Mock wallet connection
  const connectWallet = async () => {
    setWalletConnected(true)
    setClaimStep('verify')
    
    setTimeout(() => {
      setUserActivity({
        walletAddress: '0x742...3d9f',
        freshBuyAmount: 2500,
        burnAmount: 0,
        lastFreshBuy: new Date(Date.now() - 30 * 60 * 1000),
        hasBurned: false
      })
      setClaimStep('select')
    }, 2000)
  }

  const burnTokens = async (amount: number) => {
    if (userActivity) {
      setUserActivity({
        ...userActivity,
        burnAmount: amount,
        hasBurned: true
      })
    }
  }

  const getEligibleMerch = () => {
    if (!userActivity) return []
    
    return merchTiers.filter(tier => 
      userActivity.freshBuyAmount >= tier.freshBuyAmount &&
      userActivity.burnAmount >= tier.burnAmount
    )
  }

  const selectMerch = (merchId: string) => {
    setSelectedMerch(merchId)
    setClaimStep('address')
  }

  const submitClaim = () => {
    setClaimStep('success')
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-8 h-8" />
              <span className="text-xl font-light tracking-wide">ZiroDelta</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="/manifesto" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Manifesto</a>
              <a href="/flywheel" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Flywheel</a>
              <a href="/roadmap" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Roadmap</a>
              <span className="text-teal-400 font-medium px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/20">Merch</span>
              <Button asChild variant="ghost" className="bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 border border-teal-400/30 transition-all duration-300">
                <Link href="/staking">Funding Rates</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 border border-teal-400/20 rounded-full text-teal-400 text-sm font-light tracking-wide mb-8">
              <Flame className="w-4 h-4" />
              Burn to Earn • Exclusive Festival Merch
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
              Prove Your
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Commitment
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Fresh buy ZDLT tokens, burn them to show commitment, and unlock exclusive festival merchandise that money can't buy.
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Elite Members Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-teal-400" />
                <span>Limited Edition</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-teal-400" />
                <span>Proof of Burn</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Burned', value: '$1.2M+', icon: Flame },
              { label: 'Items Claimed', value: '321', icon: Gift },
              { label: 'Elite Members', value: '89', icon: Star },
              { label: 'Limited Stock', value: '1,075', icon: ShoppingBag }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                <div className="text-xl font-light text-white">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Showcase */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">
              Exclusive Collection
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-6" />
            <p className="text-slate-400 max-w-xl mx-auto">
              Each item represents your commitment to the ZiroDelta ecosystem. The more you burn, the more exclusive your rewards become.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`bg-slate-900/40 backdrop-blur-sm border-slate-800/50 hover:${getTierBorder(tier.tier)} transition-all duration-500 h-full relative overflow-hidden`}>
                  {/* Tier Badge */}
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTierColor(tier.tier)} text-black`}>
                    {tier.tier.toUpperCase()}
                  </div>

                  {/* Availability Indicator */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-3 h-3 rounded-full ${tier.available - tier.claimed > 10 ? 'bg-green-400' : tier.available - tier.claimed > 0 ? 'bg-yellow-400' : 'bg-red-400'} animate-pulse`} />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${getTierColor(tier.tier)} bg-opacity-10`}>
                        <tier.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Stock</div>
                        <div className="text-sm font-medium text-white">{tier.available - tier.claimed}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors">
                      {tier.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{tier.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg">
                        <span className="text-xs text-slate-400">Fresh Buy</span>
                        <span className="text-sm font-medium text-white">${tier.freshBuyAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-teal-400/10 to-transparent rounded-lg border border-teal-400/20">
                        <span className="text-xs text-slate-400">Burn Required</span>
                        <span className="text-sm font-medium text-teal-400">${tier.burnAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-slate-800/50 rounded-full h-2 mb-2">
                        <div 
                          className={`bg-gradient-to-r ${getTierColor(tier.tier)} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${(tier.claimed / tier.available) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>{tier.claimed} claimed</span>
                        <span>{Math.round((tier.claimed / tier.available) * 100)}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Claim Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/60 backdrop-blur-md border border-slate-800/50 relative overflow-hidden">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5" />
            
            <CardContent className="p-8 relative z-10">
              {claimStep === 'connect' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <Wallet className="w-10 h-10 text-teal-400" />
                      <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 animate-ping" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-light text-white mb-4">Ready to Claim?</h3>
                  <p className="text-slate-400 font-light mb-8 max-w-md mx-auto">
                    Connect your wallet to verify your commitment and unlock exclusive merchandise
                  </p>
                  <Button 
                    onClick={connectWallet}
                    className="bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Wallet className="w-5 h-5 mr-2" />
                    Connect Wallet
                  </Button>
                </motion.div>
              )}

              {claimStep === 'verify' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <Clock className="w-16 h-16 text-teal-400 mx-auto mb-4 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-teal-400/30 rounded-full animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">Scanning Blockchain</h3>
                  <p className="text-slate-400 font-light">
                    Verifying your recent transactions and burn activity...
                  </p>
                  <div className="flex justify-center mt-6">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {claimStep === 'select' && userActivity && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-white mb-6 text-center">Your Commitment Score</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Fresh Buy Amount</span>
                          <Wallet className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="text-2xl font-light text-white">${userActivity.freshBuyAmount.toLocaleString()}</div>
                        <div className="text-xs text-green-400 mt-1">✓ Verified within 1 hour</div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Burned Amount</span>
                          <Flame className="w-4 h-4 text-teal-400" />
                        </div>
                        <div className="text-2xl font-light text-teal-400">${userActivity.burnAmount.toLocaleString()}</div>
                        {!userActivity.hasBurned && <div className="text-xs text-orange-400 mt-1">⚠ Burn required to claim</div>}
                      </div>
                    </div>

                    {!userActivity.hasBurned && (
                      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 mb-8">
                        <div className="flex items-center text-orange-400 mb-4">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          <span className="font-medium">Burn Tokens to Unlock Merch</span>
                        </div>
                        <p className="text-orange-300 text-sm mb-6">
                          Prove your commitment by burning tokens. Each amount unlocks different merchandise tiers.
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                          {[200, 150, 100, 80, 60, 30].map(amount => (
                            <Button
                              key={amount}
                              size="sm"
                              onClick={() => burnTokens(amount)}
                              className="bg-gradient-to-r from-orange-400/20 to-red-400/20 hover:from-orange-400/30 hover:to-red-400/30 border border-orange-400/30 text-orange-400 text-xs py-2"
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {userActivity.hasBurned && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="text-xl font-light text-white mb-6 text-center">🎉 Unlocked Merchandise</h4>
                      <div className="space-y-4">
                        {getEligibleMerch().map(merch => (
                          <motion.div
                            key={merch.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-slate-700/50 rounded-xl p-4 cursor-pointer hover:border-teal-400/50 transition-all duration-300 transform hover:scale-[1.02]"
                            onClick={() => selectMerch(merch.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${getTierColor(merch.tier)} bg-opacity-20 mr-4`}>
                                  <merch.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="text-white font-medium">{merch.name}</div>
                                  <div className="text-sm text-slate-400">{merch.description.substring(0, 50)}...</div>
                                </div>
                              </div>
                              <CheckCircle className="w-6 h-6 text-teal-400" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {claimStep === 'address' && selectedMerch && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-light text-white mb-8 text-center">Almost There!</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-teal-400/10 to-cyan-400/10 border border-teal-400/30 rounded-xl p-4">
                      <div className="flex items-center">
                        {merchTiers.find(m => m.id === selectedMerch)?.icon && (
                          <div className="p-2 bg-teal-400/20 rounded-lg mr-4">
                            {React.createElement(merchTiers.find(m => m.id === selectedMerch)?.icon || Star, { className: "w-5 h-5 text-teal-400" })}
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-white">{merchTiers.find(m => m.id === selectedMerch)?.name}</div>
                          <div className="text-sm text-teal-400">Selected for claiming</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">Shipping Address</label>
                      <textarea 
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder-slate-500 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                        rows={4}
                        placeholder="Enter your complete shipping address including postal code..."
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                      />
                    </div>

                    <Button 
                      onClick={submitClaim}
                      disabled={!shippingAddress}
                      className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-black font-medium py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Gift className="w-5 h-5 mr-2" />
                      Confirm & Claim Merchandise
                    </Button>
                  </div>
                </motion.div>
              )}

              {claimStep === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <CheckCircle className="w-20 h-20 text-teal-400 mx-auto mb-4" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-teal-400/30 rounded-full animate-ping" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-light text-white mb-4">Claim Successful! 🎉</h3>
                  <p className="text-slate-400 font-light mb-8 max-w-md mx-auto">
                    Your exclusive merchandise is on its way! You'll receive tracking information within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-slate-800/30 rounded-xl p-4 text-left max-w-sm mx-auto">
                      <div className="text-sm text-slate-400 mb-2">Estimated Delivery</div>
                      <div className="text-white font-medium">7-14 business days</div>
                    </div>
                    <Button 
                      onClick={() => window.location.reload()}
                      variant="outline"
                      className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10 rounded-full px-6"
                    >
                      Claim Another Item
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/30 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © 2025 ZiroDelta. Exclusive merchandise for committed holders only.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/manifesto" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                Manifesto
              </Link>
              <Link href="/protocol" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                Protocol
              </Link>
              <Link href="/bot" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                Elite Bot
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 