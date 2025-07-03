'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ManifestoPage() {
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
            
            <Button asChild variant="ghost" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Manuscript */}
      <article className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <motion.div 
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Header */}
            <header className="text-center mb-12">
              <div className="w-24 h-px bg-teal-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-extralight tracking-wide mb-4">
                MANIFESTO
              </h1>
              <p className="text-lg text-teal-400 font-light tracking-wider">
                ZiroDelta Economics
              </p>
              <div className="w-24 h-px bg-teal-400 mx-auto mt-6" />
            </header>

            {/* Core Thesis */}
            <motion.section 
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <blockquote className="text-center text-2xl md:text-3xl font-light text-teal-400 mb-8 italic">
                "Scarcity Creates Sustainable Value"
              </blockquote>
              
              <div className="space-y-4 text-lg font-light leading-relaxed text-slate-300">
                <p>We reject the broken economics of infinite access and worthless tokens. We build an economy where scarcity drives value, community shares profits, and innovation thrives through constraint.</p>
                
                <p>ZiroDelta operates on two revolutionary principles:</p>
                
                <div className="pl-6 space-y-2">
                  <p><span className="text-teal-400">•</span> <strong>Exclusive Trading Bot:</strong> Only 5 monthly slots. Premium pricing. Shared revenue.</p>
                  <p><span className="text-teal-400">•</span> <strong>Open Protocol:</strong> Conditional funding rate tokens (PFRT/NFRT) democratize DeFi access.</p>
                </div>
              </div>
            </motion.section>

            {/* The Model */}
            <motion.section 
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-xl font-light text-teal-400 mb-4 tracking-wide">THE ECONOMIC MODEL</h2>
              
              <div className="space-y-4 text-base font-light leading-relaxed text-slate-300">
                <p>Our flywheel is simple but powerful:</p>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center space-x-3 text-sm">
                    <span className="text-teal-400">SCARCITY</span>
                    <span>→</span>
                    <span>PREMIUM</span>
                    <span>→</span>
                    <span>STAKING REWARDS</span>
                    <span>→</span>
                    <span className="text-teal-400">ZDLT DEMAND</span>
                    <span>→</span>
                    <span>∞</span>
                  </div>
                </div>
                
                <p>Every revenue stream flows to stakers. Every bot success increases token value. Every protocol innovation creates new opportunities.</p>
              </div>
            </motion.section>

            {/* Core Principles */}
            <motion.section 
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-xl font-light text-teal-400 mb-4 tracking-wide">CORE PRINCIPLES</h2>
              
              <div className="space-y-3 text-base font-light leading-relaxed text-slate-300">
                <div className="flex items-start space-x-3">
                  <span className="text-teal-400 mt-1">1.</span>
                  <div>
                    <strong>Intelligent Scarcity:</strong> Limited access creates genuine value for everyone.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-400 mt-1">2.</span>
                  <div>
                    <strong>Community Ownership:</strong> All revenue flows transparently to token holders.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-400 mt-1">3.</span>
                  <div>
                    <strong>Protocol Innovation:</strong> PFRT/NFRT tokens democratize funding rate strategies.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-400 mt-1">4.</span>
                  <div>
                    <strong>Sustainable Tokenomics:</strong> Multiple revenue streams, deflationary mechanisms.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-400 mt-1">5.</span>
                  <div>
                    <strong>Multiverse Finance:</strong> Two parallel financial realities, balanced outcomes.
                  </div>
                </div>
              </div>
            </motion.section>

            {/* The Revolution */}
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-xl font-light text-teal-400 mb-8 text-center tracking-wide">THE REVOLUTION</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 text-center font-light">
                
                <div className="space-y-3 border-t-2 border-slate-800 pt-5">
                  <p className="text-base text-slate-400 line-through">Infinite Access</p>
                  <p className="text-lg text-teal-400 font-normal">Intelligent Scarcity</p>
                </div>
                
                <div className="space-y-3 border-t-2 border-slate-800 pt-5">
                  <p className="text-base text-slate-400 line-through">Worthless Tokens</p>
                  <p className="text-lg text-teal-400 font-normal">Revenue-Sharing</p>
                </div>
                
                <div className="space-y-3 border-t-2 border-slate-800 pt-5">
                  <p className="text-base text-slate-400 line-through">Simple Yield Farming</p>
                  <p className="text-lg text-teal-400 font-normal">Conditional Tokens</p>
                </div>

              </div>
            </motion.section>

            {/* Final Statement */}
            <motion.footer 
              className="text-center border-t border-slate-700 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-teal-400 hover:bg-teal-500 text-black font-light px-8 py-3 tracking-wide transition-all duration-300">
                  <Link href="/">
                    JOIN THE REVOLUTION
                  </Link>
                </Button>
              </div>
            </motion.footer>

          </motion.div>
        </div>
      </article>
    </main>
  )
} 