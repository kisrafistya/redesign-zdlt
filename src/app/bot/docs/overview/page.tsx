'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function OverviewPage() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Page Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-medium text-white mb-4 border-b border-slate-800 pb-4">
          System Overview
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          ZiroDelta Bot is an automated arbitrage trading system designed to profit from 
          price differences and funding rate opportunities across cryptocurrency exchanges.
        </p>
      </motion.div>

      {/* Core Function */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Primary Function
        </h2>
        
        <div className="bg-slate-900 rounded border border-slate-800 p-8">
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            The system operates by identifying and exploiting arbitrage opportunities between 
            Bybit and KuCoin exchanges. It simultaneously opens opposite positions to capture 
            price differences while minimizing directional market risk.
          </p>
          
          <div className="border border-slate-700 rounded p-6 bg-slate-950">
            <h3 className="text-lg font-medium text-white mb-4">Basic Operation</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Monitors 389 trading pairs across both exchanges</li>
              <li>• Identifies profitable funding rate combinations</li>
              <li>• Executes paired trades to capture spread differences</li>
              <li>• Collects funding payments every 8 hours</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Revenue Streams */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Revenue Generation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-xl font-medium text-white mb-4">Primary Revenue: Funding Payments</h3>
            <div className="space-y-3 text-slate-300">
              <p>Regular interest payments from exchanges every 8 hours.</p>
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <p className="text-sm font-mono">
                  Example: 0.1% funding rate × 3 payments/day = 0.3% daily return
                </p>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-xl font-medium text-white mb-4">Secondary Revenue: Price Arbitrage</h3>
            <div className="space-y-3 text-slate-300">
              <p>Immediate profit from price differences at trade execution.</p>
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <p className="text-sm font-mono">
                  BTC: $45,000 (Bybit) vs $45,050 (KuCoin) = $50 instant profit
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Advantages */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Strategic Advantages
        </h2>
        
        <div className="space-y-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">Market Neutral Risk Profile</h3>
            <p className="text-slate-300">
              Long and short positions offset each other, reducing exposure to overall 
              market direction. Profits are generated from spreads rather than price movements.
            </p>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">Consistent Income Stream</h3>
            <p className="text-slate-300">
              Funding payments occur every 8 hours regardless of market volatility, 
              providing regular income independent of price action.
            </p>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">Automated Execution</h3>
            <p className="text-slate-300">
              System operates continuously without manual intervention, scanning markets 
              and executing trades based on predefined parameters.
            </p>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">Built-in Risk Management</h3>
            <p className="text-slate-300">
              Multiple safety mechanisms including stop-loss triggers, position size limits, 
              and profitability thresholds prevent significant losses.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Performance Expectations */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Performance Targets
        </h2>
        
        <div className="border border-slate-800 rounded p-8 bg-slate-900">
          <div className="text-center mb-6">
            <div className="text-4xl font-medium text-white mb-2">0.1% - 0.5%</div>
            <div className="text-lg text-slate-400">Daily Return Target</div>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center text-sm">
              <div>
                <div className="text-white font-medium">Conservative</div>
                <div className="text-slate-400">0.1% daily</div>
                <div className="text-slate-500">~36% annual</div>
              </div>
              <div>
                <div className="text-white font-medium">Target</div>
                <div className="text-slate-400">0.3% daily</div>
                <div className="text-slate-500">~180% annual</div>
              </div>
              <div>
                <div className="text-white font-medium">Optimal</div>
                <div className="text-slate-400">0.5% daily</div>
                <div className="text-slate-500">~500% annual</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border border-slate-700 rounded p-4 bg-slate-950">
          <p className="text-slate-400 text-sm">
            <strong>Risk Disclaimer:</strong> Past performance does not guarantee future results. 
            All trading involves risk of loss. Performance targets are theoretical projections 
            based on historical market conditions.
          </p>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.footer 
        className="border-t border-slate-800 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-400 text-sm">Continue reading to understand the technical implementation.</p>
          </div>
          <Button asChild variant="ghost" className="border border-teal-400/50 text-teal-400 hover:bg-teal-400/10">
            <Link href="/bot/docs/how-it-works">
              Technical Details →
            </Link>
          </Button>
        </div>
      </motion.footer>
    </div>
  )
} 