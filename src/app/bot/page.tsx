'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Clock, Users, Trophy, Zap, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function BotPage() {
  const eliteMembers = [
    { rank: 1, name: "EliteTrader_01", profit: "+$12,450", badge: "👑" },
    { rank: 2, name: "AlphaArb_99", profit: "+$8,320", badge: "🥈" },
    { rank: 3, name: "DiamondHands", profit: "+$6,890", badge: "🥉" },
    { rank: 4, name: "CryptoWhale", profit: "+$5,120", badge: "⭐" },
    { rank: 5, name: "DeltaKing", profit: "+$4,680", badge: "⭐" }
  ]

  const botStats = [
    { value: "389+", label: "Pairs Monitored" },
    { value: "0.15%", label: "Avg Daily Profit" },
    { value: "4-24h", label: "Avg Hold Time" },
    { value: "99.9%", label: "Uptime" },
  ]
  
  const membershipFeatures = [
    { icon: Zap, title: "Dynamic Trade Sizing", description: "Your ZDLT holdings determine your maximum trade size (up to 10x)." },
    { icon: Trophy, title: "Advanced Arbitrage", description: "Access proprietary, market-neutral strategies that profit from funding rates." },
    { icon: Clock, title: "24/7 Automated Trading", description: "The algorithm works around the clock, executing trades at optimal times." },
    { icon: Users, title: "Exclusive Community", description: "Join a private channel with the other four elite members and the core team." },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
              <span className="text-2xl font-extralight tracking-wide">ZiroDelta</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" className="hidden md:flex text-slate-400 hover:text-teal-400">
                <Link href="/bot/docs/overview">Docs</Link>
              </Button>
               <Button asChild className="group bg-teal-400 hover:bg-teal-500 text-black font-light transition-all duration-300 rounded-full px-6">
                <Link href="/bot/auction">
                  <span>Join Auction</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-teal-400 text-sm font-light tracking-wide mb-6">
            Only 5 Slots Available Monthly
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight leading-tight text-slate-100">
            Elite Trading Bot
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mt-6">
            Automated funding rate arbitrage with a market-neutral strategy. Professional-grade performance, reserved for the top 5 bidders each month.
          </p>
        </motion.div>
      </section>

      {/* Dashboard Grid */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column: Strategy */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-teal-400 font-light text-2xl tracking-wide">Core Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 shrink-0 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-teal-400 font-light text-xl">1</div>
                  <div>
                    <h3 className="text-lg font-normal text-slate-100 mb-1">Scan & Identify</h3>
                    <p className="text-slate-400 font-light leading-relaxed">Continuously scans 389+ asset pairs on major exchanges to find profitable funding rate arbitrage opportunities.</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 shrink-0 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-teal-400 font-light text-xl">2</div>
                  <div>
                    <h3 className="text-lg font-normal text-slate-100 mb-1">Execute & Earn</h3>
                    <p className="text-slate-400 font-light leading-relaxed">Opens simultaneous long and short positions to collect funding payments while minimizing directional market risk.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 shrink-0 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-teal-400 font-light text-xl">3</div>
                  <div>
                    <h3 className="text-lg font-normal text-slate-100 mb-1">Manage & Protect</h3>
                    <p className="text-slate-400 font-light leading-relaxed">Employs automated stop-loss, take-profit, and rate monitoring to secure gains and protect capital 24/7.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right Column: Stats & Auction */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-teal-400 font-light text-xl tracking-wide">Live Bot Vitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {botStats.map(stat => (
                    <div key={stat.label} className="text-center p-3 bg-slate-800/40 rounded-lg">
                      <p className="text-2xl font-extralight text-teal-400">{stat.value}</p>
                      <p className="text-xs text-slate-400 font-light">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-teal-400 font-light text-xl tracking-wide">Current Auction</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-extralight text-slate-100">2d 14h 32m</p>
                <p className="text-sm text-slate-400 font-light mb-4">Remaining until next auction</p>
                <Button asChild className="w-full bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 border border-teal-400/20 font-light">
                  <Link href="/bot/auction">View Auction</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* Elite Leaderboard */}
      <section id="leaderboard" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">Elite Members</h2>
            <div className="w-16 h-px bg-teal-400 mx-auto mb-4" />
            <p className="text-lg text-slate-400 font-light">Current month's top performers</p>
          </motion.div>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-3">
                {eliteMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-sm font-light text-slate-300">
                        #{member.rank}
                      </div>
                      <span className="text-lg">{member.badge}</span>
                      <span className="text-slate-300 font-light">{member.name}</span>
                    </div>
                    <span className="text-teal-400 font-light">{member.profit}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Membership Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">Membership Features</h2>
            <div className="w-16 h-px bg-teal-400 mx-auto mb-4" />
            <p className="text-lg text-slate-400 font-light">Your advantage as one of the five.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {membershipFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5"
              >
                <div className="shrink-0 w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-teal-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-4xl font-extralight text-slate-100 mb-6">
            Become One of the Five
          </h2>
          <p className="text-lg text-slate-400 font-light mb-8">
            The next auction for the 5 exclusive bot slots is approaching. View the current bids and prepare to secure your place among the elite.
          </p>
          <Button asChild size="lg" className="group bg-teal-400 hover:bg-teal-500 text-black font-light transition-all duration-300 rounded-full px-8 py-6 text-base">
            <Link href="/bot/auction">
              <span>View Live Auction</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
} 