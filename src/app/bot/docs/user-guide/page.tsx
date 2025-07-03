'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function UserGuidePage() {
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
          User Manual
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Operational procedures, daily usage instructions, and configuration guidelines for the trading system.
        </p>
      </motion.div>

      {/* Position Sizing */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Dynamic Position Sizing
        </h2>
        
        <div className="bg-slate-900 rounded border border-slate-800 p-8 mb-8">
          <h3 className="text-xl font-medium text-white mb-4">Calculation Formula</h3>
          <div className="text-center bg-slate-950 border border-slate-700 rounded p-6 mb-4">
            <div className="text-2xl font-mono text-white mb-2">
              ZDLT Holdings Value × 10 = Maximum Position Size
            </div>
            <p className="text-slate-400 text-sm">
              Example: 100 ZDLT @ $1.50 each = $150 × 10 = $1,500 maximum trade size
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Position Size Examples</h3>
            <div className="space-y-3">
              {[
                { holding: "$50 ZDLT Holdings", result: "$500 maximum position" },
                { holding: "$100 ZDLT Holdings", result: "$1,000 maximum position" },
                { holding: "$500 ZDLT Holdings", result: "$5,000 maximum position" },
                { holding: "$1,000 ZDLT Holdings", result: "$10,000 maximum position" }
              ].map((example, index) => (
                <div key={index} className="bg-slate-950 border border-slate-700 rounded p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{example.holding}</span>
                    <span className="text-white font-mono">{example.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Safety Parameters</h3>
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <ul className="text-slate-300 space-y-3">
                <li>• Minimum requirement: $50 ZDLT value</li>
                <li>• Maximum position cap: $10,000</li>
                <li>• Position size validation every 5 minutes</li>
                <li>• Trading suspended if insufficient ZDLT</li>
                <li>• Limits increase automatically with ZDLT price</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Daily Operations */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Daily Operations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">System Startup</h3>
            <div className="space-y-3">
              <div className="bg-slate-950 border border-slate-700 rounded p-3">
                <code className="text-sm text-slate-300">
                  1. Send: /start<br/>
                  2. Click: "Start Agent"<br/>
                  3. System begins operations<br/>
                  4. Monitor with: /status
                </code>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Status Monitoring</h3>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300 mb-3">Status command returns:</p>
              <ul className="text-slate-300 space-y-1">
                <li>• Agent operational status</li>
                <li>• Current account balances</li>
                <li>• ZDLT-based trading limits</li>
                <li>• Daily performance metrics</li>
                <li>• Active position details</li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Command Reference</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <code className="text-white">/start</code>
                <span className="text-slate-400">Initialize system</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <code className="text-white">/stop</code>
                <span className="text-slate-400">Halt operations</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <code className="text-white">/status</code>
                <span className="text-slate-400">View current state</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <code className="text-white">/menu</code>
                <span className="text-slate-400">Access functions</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Log Interpretation */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Log Message Interpretation
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h4 className="font-medium text-white text-lg mb-2">"Scanning Markets"</h4>
            <p className="text-slate-300">System is analyzing funding rates across all monitored trading pairs.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h4 className="font-medium text-white text-lg mb-2">"Found profitable opportunity"</h4>
            <p className="text-slate-300">Arbitrage opportunity identified and validated for execution.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h4 className="font-medium text-white text-lg mb-2">"Expected daily profit: 0.15%"</h4>
            <p className="text-slate-300">Projected daily return based on current funding rates and position sizes.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h4 className="font-medium text-white text-lg mb-2">"Take Profit triggered"</h4>
            <p className="text-slate-300">Position closed automatically upon reaching profit threshold.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h4 className="font-medium text-white text-lg mb-2">"Stop Loss triggered"</h4>
            <p className="text-slate-300">Position closed automatically due to loss threshold breach.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h4 className="font-medium text-white text-lg mb-2">"No suitable arbitrage found"</h4>
            <p className="text-slate-300">Current market conditions do not meet profitability criteria.</p>
          </div>
        </div>
      </motion.section>

      {/* Configuration Parameters */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Configuration Parameters
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-white">TRADE_SIZE</h3>
                <span className="text-sm text-slate-400 font-mono">$100 default</span>
              </div>
              <p className="text-slate-300 text-sm">
                Base position size for trades. Higher values increase profit potential but also risk exposure.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-white">STOP_LOSS</h3>
                <span className="text-sm text-slate-400 font-mono">15% default</span>
              </div>
              <p className="text-slate-300 text-sm">
                Loss threshold for automatic position closure. Lower values reduce risk tolerance.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-white">TAKE_PROFIT</h3>
                <span className="text-sm text-slate-400 font-mono">15% default</span>
              </div>
              <p className="text-slate-300 text-sm">
                Profit threshold for automatic position closure. Lower values secure gains earlier.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-white">MIN_PROFIT_THRESHOLD</h3>
                <span className="text-sm text-slate-400 font-mono">$0.10 default</span>
              </div>
              <p className="text-slate-300 text-sm">
                Minimum expected profit required to execute trades. Higher values reduce trade frequency.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Frequently Asked Questions */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">What happens after 30 days?</h3>
            <p className="text-slate-300">
              Access expires and requires renewal. Payment of $100 worth of ZDLT is required to continue operations.
            </p>
          </div>
          
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">How do I increase trading limits?</h3>
            <p className="text-slate-300">
              Acquire additional ZDLT tokens. System automatically recalculates limits every 5 minutes based on current holdings.
            </p>
          </div>
          
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">What if ZDLT price increases?</h3>
            <p className="text-slate-300">
              Trading limits increase proportionally with ZDLT value. Price appreciation directly enhances position size capacity.
            </p>
          </div>
          
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">Is my capital secure?</h3>
            <p className="text-slate-300">
              You maintain full control of exchange accounts. System operates with trading permissions only, no withdrawal access.
            </p>
          </div>
          
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-3">What are the risk factors?</h3>
            <p className="text-slate-300">
              All trading involves capital risk. Use professional risk management strategies and never exceed your loss tolerance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Operational Best Practices */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Operational Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Conservative Approach</h3>
              <p className="text-slate-300 text-sm">
                Begin with smaller position sizes to evaluate system performance and risk characteristics.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Regular Monitoring</h3>
              <p className="text-slate-300 text-sm">
                Check system status daily but avoid excessive micromanagement that may interfere with operations.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Profit Reinvestment</h3>
              <p className="text-slate-300 text-sm">
                Consider acquiring additional ZDLT with profits to increase position limits and compound returns.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">ZDLT Reserve Maintenance</h3>
              <p className="text-slate-300 text-sm">
                Maintain ZDLT holdings above minimum requirements to ensure uninterrupted operations.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Continuous Operation</h3>
              <p className="text-slate-300 text-sm">
                Allow system to run consistently for optimal performance and compound profit accumulation.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Community Engagement</h3>
              <p className="text-slate-300 text-sm">
                Participate in user communities for operational insights, market updates, and system enhancements.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Support */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Technical Support
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Community & Support</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex justify-between">
                <span>X (Twitter)</span>
                <a href="https://x.com/zirodelta" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-mono">@zirodelta</a>
              </div>
              <div className="flex justify-between">
                <span>Discord</span>
                <a href="https://discord.gg/YHW275Vpn3" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-mono">Join Server</a>
              </div>
              <div className="flex justify-between">
                <span>Telegram</span>
                <a href="https://t.me/zirodelta" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-mono">@zirodelta</a>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Troubleshooting</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• System unresponsive: Execute /start command</li>
              <li>• Verify exchange API connections are active</li>
              <li>• Confirm ZDLT balance meets minimum requirements</li>
              <li>• Contact support for persistent issues</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.footer 
        className="border-t border-slate-800 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <div className="flex justify-between items-center">
          <Button asChild variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
            <Link href="/bot/docs/how-it-works">
              ← Technical Details
            </Link>
          </Button>
          <div className="text-center">
            <p className="text-slate-400 text-sm">Continue to access procedures and requirements.</p>
          </div>
          <Button asChild variant="ghost" className="border border-teal-400/50 text-teal-400 hover:bg-teal-400/10">
            <Link href="/bot/docs/getting-access">
              Access Process →
            </Link>
          </Button>
        </div>
      </motion.footer>
    </div>
  )
} 