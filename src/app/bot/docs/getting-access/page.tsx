'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GettingAccessPage() {
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
          Access Requirements and Procedures
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Comprehensive guide to obtaining access to ZiroDelta's exclusive trading system with limited monthly availability.
        </p>
      </motion.div>

      {/* System Requirements */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          System Access Requirements
        </h2>
        
        <div className="bg-slate-900 rounded border border-slate-800 p-8 mb-8">
          <h3 className="text-xl font-medium text-white mb-6">Dual Authentication System</h3>
          <div className="flex items-center justify-center space-x-6 text-lg mb-6">
            <span className="text-white">Special Access Code</span>
            <span className="text-slate-500">+</span>
            <span className="text-white">$100 ZDLT Payment</span>
            <span className="text-slate-500">=</span>
            <span className="text-white">30-Day Access</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Special Invitation Code</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Obtained through monthly auctions</li>
              <li>• Single-use authentication token</li>
              <li>• 30-day expiration from issuance</li>
              <li>• Non-transferable and non-refundable</li>
            </ul>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Payment Requirements</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• $100 USD equivalent in ZDLT tokens</li>
              <li>• Additional SOL for transaction fees</li>
              <li>• Payment processed on Solana blockchain</li>
              <li>• Must complete within 5 minutes of code entry</li>
            </ul>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Platform Requirements</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Active Telegram account</li>
              <li>• Exchange accounts (Bybit, KuCoin)</li>
              <li>• API key generation capabilities</li>
              <li>• Minimum $50 ZDLT for position sizing</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Monthly Auction System */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Monthly Auction Process
        </h2>

        <div className="border border-slate-800 rounded p-8 bg-slate-900 mb-8">
          <h3 className="text-xl font-medium text-white mb-6">Access Code Distribution</h3>
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-700 rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Auction Schedule</span>
                <span className="text-slate-300 font-mono">7th - 10th of each month</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Available Slots</span>
                <span className="text-slate-300 font-mono">5 per month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Platform</span>
                <span className="text-slate-300 font-mono">zirodelta.com/auction</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-slate-800 rounded p-8 bg-slate-900">
          <h3 className="text-xl font-medium text-white mb-4">Limited Availability Rationale</h3>
          <p className="text-slate-300 mb-4">
            The 5-slot monthly limit implements controlled scaling to maintain service quality and system stability.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="text-slate-300 space-y-2">
              <li>• Enhanced user support quality</li>
              <li>• System performance optimization</li>
              <li>• Operational efficiency maintenance</li>
            </ul>
            <ul className="text-slate-300 space-y-2">
              <li>• Risk management protocols</li>
              <li>• Market capacity considerations</li>
              <li>• Gradual expansion planning</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Code Expiration Policies */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Code Expiration and Policy
        </h2>

        <div className="border border-red-500/20 bg-red-500/5 rounded p-8 mb-8">
          <h3 className="text-xl font-medium text-white mb-6">
            Critical Expiration Notice
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <h4 className="text-white font-medium mb-2">Time Limitation</h4>
                <p className="text-slate-300 text-sm">
                  Access codes expire exactly 30 days from issuance date. No extensions or renewals available.
                </p>
              </div>
              
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <h4 className="text-white font-medium mb-2">Irrevocable Expiration</h4>
                <p className="text-slate-300 text-sm">
                  Expired codes become permanently invalid. Recovery or reactivation is not possible under any circumstances.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <h4 className="text-white font-medium mb-2">Replacement Process</h4>
                <p className="text-slate-300 text-sm">
                  New access requires winning subsequent monthly auctions. Previous auction wins do not guarantee future access.
                </p>
              </div>
              
              <div className="bg-slate-950 border border-slate-700 rounded p-4">
                <h4 className="text-white font-medium mb-2">Risk Mitigation</h4>
                <p className="text-slate-300 text-sm">
                  Use access codes immediately upon receipt. Set calendar reminders for the first week after winning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Access Procedure */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Step-by-Step Access Procedure
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">Step 1: System Initialization</h3>
            <p className="text-slate-300 mb-2">Send /start command to the ZiroDelta bot via Telegram.</p>
            <div className="bg-slate-950 border border-slate-700 rounded p-3">
              <code className="text-sm text-slate-300">Command: /start</code>
            </div>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">Step 2: Access Code Entry</h3>
            <p className="text-slate-300 mb-2">Input your unique auction-won access code when prompted.</p>
            <div className="bg-slate-950 border border-slate-700 rounded p-3">
              <code className="text-sm text-slate-300">Format: ZDLT-XXXX-XXXX-XXXX</code>
            </div>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">Step 3: Payment Execution</h3>
            <p className="text-slate-300 mb-2">Transfer $100 worth of ZDLT to the provided wallet address within 5 minutes.</p>
            <div className="bg-slate-950 border border-slate-700 rounded p-3">
              <code className="text-sm text-slate-300">Time Limit: 5 minutes from code validation</code>
            </div>
          </div>
          
          <div className="border-l-4 border-slate-600 pl-6 py-4 bg-slate-900 rounded-r">
            <h3 className="font-medium text-white text-lg mb-2">Step 4: Access Confirmation</h3>
            <p className="text-slate-300 mb-2">System grants 30-day access and activates trading capabilities.</p>
            <div className="bg-slate-950 border border-slate-700 rounded p-3">
              <code className="text-sm text-slate-300">Status: Access granted for 30 days</code>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timing Requirements */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Timing Requirements and Constraints
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-3">Process Duration</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Total completion time</span>
                  <span className="text-white font-mono">30 minutes maximum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Payment window</span>
                  <span className="text-white font-mono">5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Code validation</span>
                  <span className="text-white font-mono">Instant</span>
                </div>
              </div>
            </div>
            
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-3">Timeout Consequences</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Code released for others to use</li>
                <li>• No refund for incomplete transactions</li>
                <li>• Must wait for next auction cycle</li>
                <li>• Process restart available via /start</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-3">Recovery Options</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Restart process anytime with /start</li>
                <li>• Same code valid for multiple attempts</li>
                <li>• Support available for technical issues</li>
                <li>• Payment methods remain consistent</li>
              </ul>
            </div>
            
            <div className="border border-slate-800 rounded p-6 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-3">Preparation Requirements</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• ZDLT tokens ready in wallet</li>
                <li>• Sufficient SOL for transaction fees</li>
                <li>• Stable internet connection</li>
                <li>• Telegram notifications enabled</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Auction Strategy */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Auction Preparation and Strategy
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Pre-Auction Preparation</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Calendar marking: 7th-10th monthly</li>
                <li>• Bidding budget allocation</li>
                <li>• ZDLT acquisition for post-win payment</li>
                <li>• Community monitoring for announcements</li>
              </ul>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Competitive Considerations</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Only 5 winners per month</li>
                <li>• Bid competitively but responsibly</li>
                <li>• Consider ROI versus bid amounts</li>
                <li>• Historical bid analysis recommended</li>
              </ul>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Post-Win Actions</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Immediate code utilization</li>
                <li>• Payment preparation within first week</li>
                <li>• System setup and testing</li>
                <li>• Exchange account preparation</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Risk Management</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Set maximum bid limits</li>
                <li>• Consider opportunity costs</li>
                <li>• Account for 30-day code expiration</li>
                <li>• Plan for potential auction losses</li>
              </ul>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Success Optimization</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Early auction participation</li>
                <li>• Strategic bid timing</li>
                <li>• Community engagement for insights</li>
                <li>• Backup plan for unsuccessful bids</li>
              </ul>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Next Auction Preparation</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Monthly renewal planning</li>
                <li>• Budget allocation for renewals</li>
                <li>• Performance analysis from previous cycles</li>
                <li>• Strategic improvements implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Support Information */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Support and Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Community & Support</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">X (Twitter)</span>
                <a href="https://x.com/zirodelta" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-mono">@zirodelta</a>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Discord</span>
                <a href="https://discord.gg/YHW275Vpn3" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-mono">Join Server</a>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Telegram</span>
                <a href="https://t.me/zirodelta" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-mono">@zirodelta</a>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 rounded p-6 bg-slate-900">
            <h3 className="text-lg font-medium text-white mb-4">Auction Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Platform</span>
                <span className="text-white font-mono">zirodelta.com/auction</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Monthly Slots</span>
                <span className="text-white">5 exclusive</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-300">Schedule</span>
                <span className="text-white">7th-10th monthly</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Security Reminders */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-slate-600 pl-4">
          Security and Compliance Requirements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Code Security</h3>
              <p className="text-slate-300 text-sm">
                Never share access codes with third parties. Codes are non-transferable and tied to specific accounts.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">API Key Protection</h3>
              <p className="text-slate-300 text-sm">
                Maintain strict security protocols for exchange API keys. Use IP restrictions and read-only permissions where possible.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Financial Risk Management</h3>
              <p className="text-slate-300 text-sm">
                Never trade with funds required for essential expenses. Implement appropriate risk management strategies.
              </p>
            </div>
            
            <div className="border border-slate-800 rounded p-4 bg-slate-900">
              <h3 className="text-lg font-medium text-white mb-2">Expiration Monitoring</h3>
              <p className="text-slate-300 text-sm">
                Set multiple calendar reminders for code expiration. Plan access utilization within the first week of winning.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.footer 
        className="border-t border-slate-800 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="flex justify-between items-center">
          <Button asChild variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
            <Link href="/bot/docs/user-guide">
              ← User Manual
            </Link>
          </Button>
          <div className="text-center">
            <p className="text-slate-400 text-sm">Ready to participate in the auction system?</p>
          </div>
          <Button asChild variant="ghost" className="border border-teal-400/50 text-teal-400 hover:bg-teal-400/10">
            <Link href="/bot/auction">
              Live Auction →
            </Link>
          </Button>
        </div>
      </motion.footer>
    </div>
  )
} 