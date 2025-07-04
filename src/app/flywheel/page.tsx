'use client'

import { Button } from '@/components/ui/button'
import { motion, useTime, useTransform } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Users, Coins, Activity } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function FlywheelNode({ stream, index, setHoveredSection, hoveredSection }: any) {
  const time = useTime()
  const initialAngle = index * 72
  // Slower rotation (30 seconds per orbit)
  const rotate = useTransform(time, [0, 90000], [initialAngle, initialAngle + 360], { clamp: false })

  // Smaller radius
  const x = useTransform(rotate, (v) => `${260 * Math.cos(v * Math.PI / 180)}px`)
  const y = useTransform(rotate, (v) => `${260 * Math.sin(v * Math.PI / 180)}px`)

  const { icon: Icon, color, percentage, title, description } = stream

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ 
        left: '50%', 
        top: '50%',
        x: x, 
        y: y,
        translateX: '-50%',
        translateY: '-50%'
      }}
      onMouseEnter={() => setHoveredSection(index)}
      onMouseLeave={() => setHoveredSection(null)}
    >
      <motion.div
        className={`relative bg-black/95 backdrop-blur-sm border-2 rounded-2xl p-2 w-[130px] transition-all duration-300 ${
          hoveredSection === index 
            ? 'border-teal-400/60 shadow-2xl shadow-teal-400/20' 
            : 'border-slate-700/50'
        }`}
        whileHover={{ 
          scale: 1.2, 
          y: -20,
          boxShadow: "0 25px 50px rgba(56, 178, 172, 0.4)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Icon */}
        <div className={`w-7 h-7 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-1 mx-auto`}>
          <Icon className="w-4 h-4 text-black" />
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="text-base font-light text-teal-400 mb-1">{percentage}</div>
          <div className="text-[11px] font-medium text-white mb-1">{title}</div>
          <div className="text-[9px] text-slate-400 font-light leading-tight">{description}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Flywheel() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const revenueStreams = [
    { 
      title: "Auction Revenue", 
      percentage: "20%", 
      icon: Zap,
      description: "To ZDLT Stakers",
      color: "from-yellow-400 to-orange-400"
    },
    { 
      title: "Bot Subscriptions", 
      percentage: "20%", 
      icon: TrendingUp,
      description: "Monthly bot access fees",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      title: "ZDLT Demand", 
      percentage: "10x", 
      icon: Users,
      description: "Trading power multiplier",
      color: "from-purple-400 to-pink-400"
    },
    { 
      title: "Prop Trading", 
      percentage: "50%", 
      icon: Activity,
      description: "Arbitrage profit sharing",
      color: "from-green-400 to-emerald-400"
    },
    { 
      title: "Protocol Fees", 
      percentage: "50%", 
      icon: Coins,
      description: "For ZDLT Buybacks",
      color: "from-teal-400 to-cyan-400"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
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
              <span className="text-teal-400 font-medium">Flywheel</span>
              <a href="/roadmap" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Roadmap</a>
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
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight">
              Economic
              <span className="block text-teal-400">Flywheel</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              A self-reinforcing revenue ecosystem where every stream strengthens the others
            </p>
          </motion.div>

          {/* Interactive Flywheel Visualization */}
          <div className="relative flex items-center justify-center min-h-[800px]">
            
            {/* Background Effects */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-gradient-to-br from-teal-400/10 via-transparent to-cyan-400/10 rounded-full blur-3xl"
              />
            </div>

            {/* Outer Ring with Orbital Dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[600px] h-[600px] border border-teal-400/20 rounded-full"
            >
              {/* Orbital Dots */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-teal-400/40 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-300px)`
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Static container for orbiting nodes */}
            <div className="absolute w-full h-full">
              {isClient && revenueStreams.map((stream, index) => (
                <FlywheelNode 
                  key={index} 
                  stream={stream} 
                  index={index} 
                  setHoveredSection={setHoveredSection}
                  hoveredSection={hoveredSection}
                />
              ))}
            </div>

            {/* Central Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="relative z-30"
            >
              <motion.div
                className="w-28 h-28 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 border-2 border-teal-400/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(56, 178, 172, 0.3)",
                    "0 0 40px rgba(56, 178, 172, 0.6)",
                    "0 0 20px rgba(56, 178, 172, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-lg font-light text-teal-400 mb-1"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(56, 178, 172, 0.5)",
                        "0 0 20px rgba(56, 178, 172, 0.8)",
                        "0 0 10px rgba(56, 178, 172, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ZDLT
                  </motion.div>
                  <div className="text-[11px] text-slate-300 font-light">Stakers</div>
                  <div className="text-[9px] text-teal-400 mt-1 font-light">Revenue Hub</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Multiple Pulse Rings */}
            {[1, 1.5, 2].map((scale, i) => (
              <motion.div
                key={i}
                className="absolute w-28 h-28 border border-teal-400/10 rounded-full"
                animate={{
                  scale: [scale, scale * 4, scale],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Energy Flow Lines */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[400px] h-[400px] opacity-15"
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-20 bg-gradient-to-b from-teal-400 to-transparent"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-200px)`
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flow Explanation */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-950/50 to-black">
        <div className="max-w-5xl mx-auto">
          
          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-extralight text-center mb-16">Revenue Flow</h2>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Bot Auction Revenue",
                  desc: "20% of all monthly auction proceeds are distributed to ZDLT stakers. The remaining 80% is allocated to the development wallet to fund growth.",
                  flow: "Auctions → 20% to Stakers, 80% to Dev Wallet"
                },
                {
                  number: "02", 
                  title: "Bot Subscription Fees",
                  desc: "A 20% share of all bot subscription revenue is channeled to stakers, providing a consistent income stream from the platform's core service.",
                  flow: "Bot subscriptions → 20% to stakers"
                },
                {
                  number: "03",
                  title: "ZDLT Buying Pressure", 
                  desc: "Bot users must hold ZDLT to determine their trading power (size = ZDLT holdings × 10), creating constant organic demand for the token.",
                  flow: "Trade size calculation → ZDLT buying pressure"
                },
                {
                  number: "04",
                  title: "Prop Firm Operations",
                  desc: "ZiroDelta leverages staked ZDLT as collateral for its internal arbitrage strategies, sharing 50% of the generated profits with stakers.",
                  flow: "Staked ZDLT as collateral → 50% profit share"
                },
                {
                  number: "05",
                  title: "Protocol Transaction Fees",
                  desc: "Protocol fees are split evenly: 50% is used to systematically buy back and burn ZDLT, and 50% is reserved for operational costs.",
                  flow: "Protocol Fees → 50% Buyback, 50% Operations"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-8 gap-y-4"
                >
                  <div className="flex items-center">
                    <div className="text-5xl font-extralight text-teal-400/50 select-none w-16 text-center">
                      {item.number}
                    </div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-teal-400/30 to-transparent mx-4"/>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-light text-white mb-3">{item.title}</h3>
                    <p className="text-base text-slate-300 mb-4 font-light leading-relaxed">{item.desc}</p>
                    <div className="text-sm font-mono text-teal-400/80 bg-slate-900/50 self-start px-3 py-1 rounded">
                      {item.flow}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Economic Logic */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-extralight text-center mb-16">The Logic of Growth</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
              {[
                'More Revenue', 
                'Higher Yields', 
                'Increased Demand',
                'Stronger Token',
                'Sustainable Growth'
              ].map((text, i, arr) => (
                <motion.div 
                  key={text}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-lg md:text-xl font-light text-slate-200 bg-slate-900/60 border border-slate-700/50 rounded-lg px-4 py-2">
                    {text}
                  </span>
                  
                  {i < arr.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.3 + 0.2 }}
                      viewport={{ once: true }}
                      className="mx-4"
                    >
                      <ArrowRight className="w-6 h-6 text-teal-400/70" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extralight mb-8">Join the Flywheel</h2>
            <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Stake ZDLT and become part of the revenue distribution system
            </p>
            
            <Link href="/staking" className="inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-black font-medium px-12 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              Start Staking
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-4 mb-8 md:mb-0">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
              <span className="text-2xl font-light tracking-wide">ZiroDelta</span>
            </Link>
            
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