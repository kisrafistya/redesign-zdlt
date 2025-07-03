'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useRef } from 'react'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

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
              <Button asChild variant="ghost" className="bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 border border-teal-400/30 transition-all duration-300 px-4 py-2 text-sm">
                <Link href="/staking">
                  Staking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-teal-400/10 border border-teal-400/20 rounded-full text-teal-400 text-sm font-light tracking-wide">
                The Future of Conditional Finance
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight">
              <span className="block">Intelligence</span>
              <span className="block text-teal-400">Meets Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Revolutionary DeFi protocol for everyone. 
              <br />
              Exclusive trading access for the elite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-teal-400 hover:bg-teal-500 text-black font-medium px-8 py-4 text-lg transition-all duration-300">
                <Link href="/protocol">
                  Explore Protocol
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-transparent border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-4 text-lg transition-all duration-300">
                <Link href="/bot">
                  Elite Access
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </motion.div>
      </section>

      {/* Two Paths Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight mb-6">
              Two Paths. One Vision.
            </h2>
            <div className="w-24 h-px bg-teal-400 mx-auto mb-8" />
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Democratic innovation meets exclusive excellence
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Protocol Path */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/30 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-500 h-full">
                <CardContent className="p-12">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 border border-teal-400/30 rounded-2xl flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-teal-400 rounded-lg" />
                    </div>
                    <h3 className="text-3xl font-light text-teal-400 mb-2">Protocol</h3>
                    <p className="text-slate-500 font-light">Open Access</p>
                  </div>
                  
                  <h4 className="text-2xl font-light mb-6">Democratizing Finance</h4>
                  <p className="text-slate-300 mb-8 font-light leading-relaxed text-lg">
                    Revolutionary PFRT/NFRT tokens democratize sophisticated DeFi strategies. 
                    Trade market sentiment with no liquidation risk.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <span className="text-slate-400 font-light">Conditional funding rate tokens</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <span className="text-slate-400 font-light">Universal access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <span className="text-slate-400 font-light">Zero liquidation risk</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 border border-teal-400/30 transition-all duration-300">
                    <Link href="/protocol">
                      Access Protocol
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Bot Path */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/30 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-500 h-full">
                <CardContent className="p-12">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600/20 to-slate-500/20 border border-slate-600/30 rounded-2xl flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-slate-400 rounded-lg" />
                    </div>
                    <h3 className="text-3xl font-light text-slate-300 mb-2">Elite Bot</h3>
                    <p className="text-slate-500 font-light">5 Slots Monthly</p>
                  </div>
                  
                  <h4 className="text-2xl font-light mb-6">Exclusive Excellence</h4>
                  <p className="text-slate-300 mb-8 font-light leading-relaxed text-lg">
                    Professional arbitrage trading with intelligent scarcity. 
                    Elite access creates sustainable value.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full" />
                      <span className="text-slate-400 font-light">Advanced arbitrage strategies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full" />
                      <span className="text-slate-400 font-light">10x ZDLT multiplier</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full" />
                      <span className="text-slate-400 font-light">Monthly auctions</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-slate-600/10 hover:bg-slate-600/20 text-slate-300 border border-slate-600/30 transition-all duration-300">
                    <Link href="/bot">
                      Join Elite
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-5xl font-extralight text-teal-400 mb-3">5</div>
              <div className="text-slate-400 font-light tracking-wide">Elite Slots</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extralight text-teal-400 mb-3">∞</div>
              <div className="text-slate-400 font-light tracking-wide">Protocol Access</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extralight text-teal-400 mb-3">10x</div>
              <div className="text-slate-400 font-light tracking-wide">ZDLT Power</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extralight text-teal-400 mb-3">100%</div>
              <div className="text-slate-400 font-light tracking-wide">Revenue Share</div>
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
              {/* Social Media Links */}
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
              
              {/* Solana Token */}
              <div className="flex items-center space-x-2 bg-slate-900/30 border border-slate-800/50 rounded-lg px-4 py-2">
                <span className="text-xs text-slate-500 font-light">Contract Address:</span>
                <code className="text-xs text-teal-400 font-mono">4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf</code>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('4PX31xRA1BaAyb2Js45ZKYp92VGWGp47yWeVs5CGVKbf');
                    // Optional: Add toast notification here
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
            <p>&copy; 2024 ZiroDelta. Intelligence meets innovation.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
