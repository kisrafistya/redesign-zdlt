'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HowItWorksPage() {
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
          Technical Implementation
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Detailed technical specifications and operational procedures for the arbitrage trading system.
        </p>
      </motion.div>

      {/* Market Coverage */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Market Coverage and Requirements
        </h2>
        
        <div className="bg-slate-900 rounded border border-slate-800 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Asset Selection Criteria</h3>
              <ul className="text-slate-300 space-y-3">
                <li>• Available on both Bybit and KuCoin exchanges</li>
                <li>• Minimum daily trading volume of $1M USD</li>
                <li>• Active funding rate markets</li>
                <li>• Sufficient order book depth</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Current Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Monitored Trading Pairs</span>
                  <span className="text-white font-mono">389</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Exchanges Integrated</span>
                  <span className="text-white font-mono">2</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Scan Frequency</span>
                  <span className="text-white font-mono">5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Opportunity Discovery */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Opportunity Discovery Process
        </h2>
        
        <div className="space-y-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">
              Stage 1: Funding Rate Analysis
            </h3>
            <div className="space-y-3">
              <p className="text-slate-300">
                System queries funding rates for all monitored pairs every 5 minutes.
              </p>
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <code className="text-sm text-slate-300">
                  for pair in monitored_pairs:<br/>
                  &nbsp;&nbsp;bybit_rate = get_funding_rate(bybit, pair)<br/>
                  &nbsp;&nbsp;kucoin_rate = get_funding_rate(kucoin, pair)<br/>
                  &nbsp;&nbsp;calculate_arbitrage_potential(bybit_rate, kucoin_rate)
                </code>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">
              Stage 2: Profitability Ranking
            </h3>
            <div className="space-y-3">
              <p className="text-slate-300">
                Opportunities are ranked by expected daily return considering payment frequency.
              </p>
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <code className="text-sm text-slate-300">
                  daily_return = funding_rate * payments_per_day<br/>
                  adjusted_return = daily_return - transaction_costs<br/>
                  rank_by_profitability(adjusted_return)
                </code>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">
              Stage 3: Risk Assessment
            </h3>
            <div className="space-y-3">
              <p className="text-slate-300">
                Final validation checks before trade execution.
              </p>
              <ul className="text-slate-300 space-y-2">
                <li>• Price deviation between exchanges &lt; 2%</li>
                <li>• Order book depth sufficient for trade size</li>
                <li>• Funding rates realistic (not anomalous)</li>
                <li>• Account balance sufficient for margin requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Execution Criteria */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Trade Execution Criteria
        </h2>
        
        <div className="bg-slate-900 rounded border border-slate-800 p-8">
          <p className="text-lg text-slate-300 mb-6">
            A trade is executed only when all conditions are simultaneously satisfied:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-slate-700 rounded p-4 bg-slate-950">
                <h4 className="text-white font-medium mb-2">Minimum Profitability</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• New trades: Expected return ≥ $0.10</li>
                  <li>• Position switches: Expected return ≥ $1.00</li>
                  <li>• Daily return ≥ 0.1%</li>
                </ul>
              </div>
              
              <div className="border border-slate-700 rounded p-4 bg-slate-950">
                <h4 className="text-white font-medium mb-2">Risk Controls</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Price spread between exchanges ≤ 2%</li>
                  <li>• Order book depth ≥ 5x trade size</li>
                  <li>• Account equity ≥ 150% of margin requirement</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-slate-700 rounded p-4 bg-slate-950">
                <h4 className="text-white font-medium mb-2">Opportunity Comparison</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• New opportunity ≥ 150% better than current</li>
                  <li>• Transaction costs factored into comparison</li>
                  <li>• Time since last trade ≥ minimum holding period</li>
                </ul>
              </div>
              
              <div className="border border-slate-700 rounded p-4 bg-slate-950">
                <h4 className="text-white font-medium mb-2">Timing Requirements</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Minimum position hold time: 2 hours</li>
                  <li>• Maximum position age: 48 hours</li>
                  <li>• No trades within 30 minutes of funding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Safety Mechanisms */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Risk Management and Safety Mechanisms
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Automated Stop Loss</h3>
            <div className="space-y-3">
              <p className="text-slate-300">Triggers when position losses exceed predefined thresholds.</p>
              <div className="bg-slate-950 border border-slate-700 rounded p-3">
                <div className="text-sm font-mono text-slate-300">
                  if unrealized_pnl &lt; -$15.00:<br/>
                  &nbsp;&nbsp;close_all_positions()<br/>
                  &nbsp;&nbsp;log_stop_loss_event()
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Automated Take Profit</h3>
            <div className="space-y-3">
              <p className="text-slate-300">Secures profits when gains exceed target thresholds.</p>
              <div className="bg-slate-950 border border-slate-700 rounded p-3">
                <div className="text-sm font-mono text-slate-300">
                  if unrealized_pnl &gt; $15.00:<br/>
                  &nbsp;&nbsp;close_all_positions()<br/>
                  &nbsp;&nbsp;lock_in_profits()
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Funding Rate Monitoring</h3>
            <div className="space-y-3">
              <p className="text-slate-300">Continuous monitoring of funding rate changes.</p>
              <div className="bg-slate-950 border border-slate-700 rounded p-3">
                <div className="text-sm font-mono text-slate-300">
                  if funding_rate_changed_against_position:<br/>
                  &nbsp;&nbsp;evaluate_position_viability()<br/>
                  &nbsp;&nbsp;close_if_unprofitable()
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Position Size Limits</h3>
            <div className="space-y-3">
              <p className="text-slate-300">Dynamic position sizing based on ZDLT holdings.</p>
              <div className="bg-slate-950 border border-slate-700 rounded p-3">
                <div className="text-sm font-mono text-slate-300">
                  max_position = zdlt_value * 10<br/>
                  if position_size &gt; max_position:<br/>
                  &nbsp;&nbsp;reject_trade()
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trade Execution Flow */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Trade Execution Workflow
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">1. Market Discovery</h3>
            <p className="text-slate-300">System scans all 389 pairs, calculates potential returns, ranks opportunities by profitability.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">2. Opportunity Evaluation</h3>
            <p className="text-slate-300">Selected opportunity undergoes safety validation, risk assessment, and profitability confirmation.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">3. Position Opening</h3>
            <p className="text-slate-300">Simultaneous order placement on both exchanges - long position on one, short on the other.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">4. Active Monitoring</h3>
            <p className="text-slate-300">Continuous P&L tracking, funding rate monitoring, and market condition assessment.</p>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">5. Position Closure</h3>
            <p className="text-slate-300">Automatic closure based on profit targets, stop losses, or market condition changes.</p>
          </div>
        </div>
      </motion.section>

      {/* Trading Frequency */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Operational Frequency and Patterns
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">High Activity Periods</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• New opportunities detected every 15-30 minutes</li>
              <li>• Average position duration: 4-24 hours</li>
              <li>• Funding payments collected every 8 hours</li>
              <li>• Active during high volatility periods</li>
            </ul>
          </div>
          
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Low Activity Periods</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• May remain idle for several hours</li>
              <li>• Waits for profitable market conditions</li>
              <li>• Maintains existing positions if beneficial</li>
              <li>• Preserves capital during poor conditions</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.footer 
        className="border-t border-slate-800 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="flex justify-between items-center">
          <Button asChild variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
            <Link href="/bot/docs/overview">
              ← System Overview
            </Link>
          </Button>
          <div className="text-center">
            <p className="text-slate-400 text-sm">Continue to operational procedures and daily usage.</p>
          </div>
          <Button asChild variant="ghost" className="border border-teal-400/50 text-teal-400 hover:bg-teal-400/10">
            <Link href="/bot/docs/user-guide">
              User Manual →
            </Link>
          </Button>
        </div>
      </motion.footer>
    </div>
  )
} 