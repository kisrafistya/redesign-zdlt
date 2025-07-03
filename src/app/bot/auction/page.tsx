'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Wallet, Clock, TrendingUp, Users, Crown, DollarSign, Gavel, Award, Timer, ExternalLink, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useState } from 'react'

export default function AuctionPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [bidAmount, setBidAmount] = useState('')
  const [selectedSlot, setSelectedSlot] = useState(1)

  // Mock auction data
  const auctionInfo = {
    isLive: true,
    phase: "Active Bidding",
    endTime: "January 10, 2025 23:59 UTC",
    timeRemaining: "2 days 14 hours 23 minutes",
    totalBidders: 23,
    totalBids: 67,
    minBid: "500",
    bidIncrement: "50"
  }

  const auctionSlots = [
    { id: 1, currentBid: "$750", bidder: "0x...4f2a", bids: 12, status: "leading", timeLeft: "2d 14h" },
    { id: 2, currentBid: "$690", bidder: "0x...8b1c", bids: 8, status: "active", timeLeft: "2d 14h" },
    { id: 3, currentBid: "$645", bidder: "0x...2e9d", bids: 6, status: "active", timeLeft: "2d 14h" },
    { id: 4, currentBid: "$580", bidder: "0x...7a3f", bids: 4, status: "active", timeLeft: "2d 14h" },
    { id: 5, currentBid: "$520", bidder: "0x...9c6e", bids: 3, status: "active", timeLeft: "2d 14h" }
  ]

  const bidHistory = [
    { slot: 1, amount: "$750", bidder: "0x...4f2a", time: "2 min ago", type: "outbid" },
    { slot: 2, amount: "$690", bidder: "0x...8b1c", time: "5 min ago", type: "new" },
    { slot: 1, amount: "$720", bidder: "0x...9x2a", time: "8 min ago", type: "outbid" },
    { slot: 3, amount: "$645", bidder: "0x...2e9d", time: "12 min ago", type: "new" },
    { slot: 1, amount: "$700", bidder: "0x...5y7b", time: "15 min ago", type: "outbid" },
    { slot: 4, amount: "$580", bidder: "0x...7a3f", time: "18 min ago", type: "new" }
  ]

  const auctionRules = [
    "Auction runs monthly from 7th-10th, 96 hours total",
    "5 exclusive slots available each month",
    "Minimum bid $500 ZDLT equivalent",
    "Bid increments of $50 minimum",
    "Winners receive access codes within 24 hours",
    "20% of bid revenue is distributed to ZDLT stakers"
  ]

  const selectedSlotData = auctionSlots.find(slot => slot.id === selectedSlot)

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
              <Button asChild variant="ghost" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <Link href="/bot">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Bot
                </Link>
              </Button>
              
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
                <Gavel className="w-10 h-10 text-teal-400" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight">
                Elite Bot Auction
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 font-light leading-relaxed">
                Connect your wallet to participate in the monthly auction for exclusive trading bot access.
              </p>
              
              <Button 
                onClick={() => setWalletConnected(true)}
                size="lg" 
                className="bg-teal-400 hover:bg-teal-500 text-black font-light px-8 py-4 text-lg transition-all duration-300 mb-12"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
              
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-teal-400 mb-2">5</div>
                  <div className="text-sm text-slate-400 font-light">Slots Available</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-2">2d 14h 23m</div>
                  <div className="text-sm text-slate-400 font-light">Time Remaining</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        /* Main Auction Interface */
        <section className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extralight mb-2">Elite Bot Auction</h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-light">LIVE AUCTION</span>
                    </div>
                    <div className="text-slate-400 font-light">Ends {auctionInfo.endTime}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-slate-400 mb-2">Authentication Required</div>
                  <Button variant="ghost" className="border border-slate-600 text-slate-300 hover:bg-slate-800/50 text-sm">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Connect X Account
                  </Button>
                </div>
              </div>
            </div>

            {/* Countdown Timer & User Stats */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center space-x-4 md:space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-light text-teal-400">2</div>
                        <div className="text-xs text-slate-400 font-light tracking-wider">Days</div>
                      </div>
                      <div className="text-slate-600 text-2xl font-thin">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-teal-400">14</div>
                        <div className="text-xs text-slate-400 font-light tracking-wider">Hours</div>
                      </div>
                      <div className="text-slate-600 text-2xl font-thin">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-teal-400">23</div>
                        <div className="text-xs text-slate-400 font-light tracking-wider">Mins</div>
                      </div>
                      <div className="text-slate-600 text-2xl font-thin">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-teal-400">45</div>
                        <div className="text-xs text-slate-400 font-light tracking-wider">Secs</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="bg-slate-900/50 border-slate-800 h-full">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Your Highest Bid</span>
                        <span className="text-white font-light text-sm">$750</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Your Rank</span>
                        <span className="text-white font-light text-sm">#1</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">ZDLT Balance</span>
                        <span className="text-white font-light text-sm">1,250 ZDLT</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left Column - Auction Slots */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Auction Slots */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">5 Elite Slots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {auctionSlots.map((slot, index) => (
                        <motion.div
                          key={slot.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                            selectedSlot === slot.id 
                              ? 'bg-teal-400/10 border-teal-400/30' 
                              : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50'
                          } ${slot.status === 'leading' ? 'ring-1 ring-yellow-400/30' : ''}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-10 h-10 border rounded-lg flex items-center justify-center ${
                                slot.status === 'leading' 
                                  ? 'bg-yellow-400/10 border-yellow-400/30' 
                                  : 'bg-slate-700/50 border-slate-600'
                              }`}>
                                {slot.status === 'leading' ? (
                                  <Crown className="w-5 h-5 text-yellow-400" />
                                ) : (
                                  <span className="text-slate-400 font-light">#{slot.id}</span>
                                )}
                              </div>
                              <div>
                                <div className="font-light text-white">
                                  Slot #{slot.id}
                                  {slot.status === 'leading' && (
                                    <span className="ml-2 px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">LEADING</span>
                                  )}
                                </div>
                                <div className="text-sm text-slate-400">{slot.bids} bids • {slot.bidder}</div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-xl font-light text-teal-400">{slot.currentBid}</div>
                              <div className="text-sm text-slate-400">Current bid</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Right Column - Bidding & Stats */}
              <div className="lg:col-span-1 space-y-6">

                {/* Place Bid */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Place Bid</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {selectedSlotData && (
                      <div className="p-4 bg-slate-800/30 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-teal-400/10 border border-teal-400/30 rounded-lg flex items-center justify-center">
                              <span className="text-teal-400 text-sm font-light">#{selectedSlotData.id}</span>
                            </div>
                            <div>
                              <div className="font-light">Slot #{selectedSlotData.id}</div>
                              <div className="text-sm text-slate-400">{selectedSlotData.bids} total bids</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-light text-teal-400">{selectedSlotData.currentBid}</div>
                            <div className="text-sm text-slate-400">Current high bid</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-light text-slate-400 mb-2">Your Bid Amount</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          placeholder={`Minimum: $${auctionInfo.minBid}`}
                          className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white font-light focus:border-teal-400 focus:outline-none"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                          ZDLT
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm text-slate-400 font-light">
                        <span>Available: 25,340.56 ZDLT</span>
                        <span>Min increment: $50</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-800/70" 
                        onClick={() => setBidAmount((parseFloat(selectedSlotData?.currentBid.replace('$', '') || '0') + 50).toString())}
                      >
                        Min Bid
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-800/70" 
                        onClick={() => setBidAmount((parseFloat(selectedSlotData?.currentBid.replace('$', '') || '0') + 100).toString())}
                      >
                        +$100
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-800/70" 
                        onClick={() => setBidAmount((parseFloat(selectedSlotData?.currentBid.replace('$', '') || '0') + 200).toString())}
                      >
                        +$200
                      </Button>
                    </div>
                    
                    <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5" />
                        <div className="text-amber-400 text-sm">
                          <p className="font-light mb-1">Non-refundable bid</p>
                          <p className="text-xs text-amber-400/80">20% of bid value is distributed to stakers; 80% funds platform growth. Bid carefully.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-teal-400/20 hover:bg-teal-400/30 border border-teal-400/50 text-teal-400 font-light py-3 text-lg">
                      <Gavel className="w-5 h-5 mr-2" />
                      Place Bid on Slot #{selectedSlot}
                    </Button>
                  </CardContent>
                </Card>
                
              </div>
            </div>

            {/* Recent Bids - Full Width */}
            <Card className="bg-slate-900/50 border-slate-800 mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-light">Recent Bids</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {bidHistory.map((bid, index) => (
                    <div key={index} className="flex flex-col p-3 bg-slate-800/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-light ${bid.type === 'outbid' ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
                          #{bid.slot}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-400 font-light">{bid.time}</p>
                          <p className={`text-xs font-light ${bid.type === 'outbid' ? 'text-red-400' : 'text-green-400'}`}>
                            {bid.type === 'outbid' ? 'Outbid' : 'New Bid'}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-200 font-normal text-lg">{bid.amount}</p>
                        <p className="text-xs text-slate-500 font-light">{bid.bidder}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="text-teal-400 p-0 h-auto mt-4 font-light text-sm">View all history</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 font-light">
            &copy; 2024 ZiroDelta. <span className="text-teal-400">Elite access through intelligent scarcity.</span>
          </p>
        </div>
      </footer>
    </main>
  )
} 