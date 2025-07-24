'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
              <span className="text-2xl font-light tracking-wide">ZiroDelta</span>
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

      {/* Content */}
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-teal-400/10 border border-teal-400/20 rounded-full text-teal-400 text-sm font-light tracking-wide">
                The ZiroDelta Manifesto
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
              <span className="block">We Want To</span>
              <span className="block text-teal-400">Break DeFi</span>
            </h1>
            <p className="text-xl text-slate-400 font-light italic">
              "And we're going to do it"
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-16 max-w-3xl mx-auto"
          >
            
            <div className="text-center">
              <p className="text-xl font-light text-slate-300">
                Yep, you heard that right.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl font-light text-white">
                DeFi is broken. Worthless tokens. Infinite supply. Zero exclusivity.
              </p>
              <p className="text-lg text-slate-400 font-light">
                Everyone gets access to everything, so nothing has value.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-300 font-light">
                We built ZiroDelta so you never have to settle for mediocrity again.
              </p>
              <p className="text-lg text-slate-400 font-light">
                We see your portfolio. We know your pain.
              </p>
              <p className="text-lg text-slate-300 font-light">
                We're giving you the unfair advantage.
              </p>
              <p className="text-xl font-light text-teal-400">
                While others lose money — you'll already be winning.
              </p>
            </div>

            <div className="w-24 h-px bg-teal-400/50 mx-auto" />

            <div className="space-y-8">
              <p className="text-xl font-light text-white">
                And yes, the world will call it "cheating."
              </p>
              
              <div className="space-y-4 text-lg font-light text-slate-400">
                <p>But so was the internet.</p>
                <p>So was Bitcoin.</p>
                <p>So was every revolution that mattered.</p>
              </div>
              
              <div className="space-y-4 text-slate-300 font-light">
                <p>Every time someone builds something scarce, the masses cry "unfair."</p>
                <p>Then they adapt. Then they copy.</p>
                <p>And suddenly, it's the new standard.</p>
              </div>
              
              <p className="text-xl font-light text-teal-400">
                But this is different.
              </p>
            </div>

            <div className="w-24 h-px bg-teal-400/50 mx-auto" />

            <div className="space-y-8">
              <p className="text-xl font-light text-white">
                DeFi isn't just another casino —
                <br />
                It will redefine how money works.
              </p>
              
              <p className="text-lg text-slate-300 font-light">
                Why should you compete with millions for scraps
                <br />
                when you can be <span className="text-teal-400 font-medium">one of 5</span> who own the entire feast?
              </p>
              
              <p className="text-slate-400 font-light">
                The best traders, the smartest money, the biggest winners —
                <br />
                are now the ones who know how to get <span className="text-white font-medium">exclusive access.</span>
              </p>
            </div>

            <div className="w-24 h-px bg-teal-400/50 mx-auto" />

            <div className="space-y-8 text-center">
              <p className="text-xl font-light text-white">
                The future won't reward effort. It'll reward leverage.
              </p>
              
              <div className="space-y-4">
                <p className="text-2xl font-light text-teal-400">
                  So, start cheating.
                </p>
                <p className="text-lg text-slate-400 font-light">
                  Because when scarcity wins, no one loses.
                </p>
              </div>
            </div>

            <div className="space-y-8 text-center pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-teal-400 hover:bg-teal-500 text-black font-medium px-8 py-4 text-lg transition-all duration-300">
                  <Link href="/bot/auction">
                    Join Elite Access
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="bg-transparent border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-4 text-lg transition-all duration-300">
                  <Link href="/staking">
                    Funding Rate Terminal
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center space-x-8 text-sm text-slate-400 pt-4 font-light">
                <a href="https://zirodelta.com" className="hover:text-teal-400 transition-colors">Website</a>
                <a href="https://auction.zirodelta.com" className="hover:text-teal-400 transition-colors">Auctions</a>
                <a href="https://t.me/ZiroDeltaOfficial" className="hover:text-teal-400 transition-colors">Telegram</a>
              </div>
            </div>

          </motion.div>
        </div>
      </article>
    </main>
  )
} 