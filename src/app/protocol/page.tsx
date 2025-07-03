'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Wallet, TrendingUp, TrendingDown, Clock, ArrowUpDown, DollarSign, Zap, BarChart3, Timer, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useState } from 'react'

export default function ProtocolApp() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [activeTab, setActiveTab] = useState('mint')
  const [selectedAsset, setSelectedAsset] = useState('BTC')
  const [mintAmount, setMintAmount] = useState('')
  const [swapFrom, setSwapFrom] = useState('PFRT')
  const [swapAmount, setSwapAmount] = useState('')

  // Mock protocol data
  const protocolStats = {
    totalValueLocked: "$4.2M",
    totalVolume24h: "$890K",
    activeEpochs: "12",
    totalSettled: "247"
  }

  const fundingRateAssets = [
    { 
      symbol: "BTC", 
      rate: "0.0245%", 
      trend: "up", 
      epochEnd: "2h 14m",
      pfrtsupply: "245,780",
      nfrtsupply: "245,780",
      price: "$42,350"
    },
    { 
      symbol: "ETH", 
      rate: "-0.0089%", 
      trend: "down", 
      epochEnd: "2h 14m",
      pfrtsupply: "189,430",
      nfrtsupply: "189,430",
      price: "$2,890"
    },
    { 
      symbol: "SOL", 
      rate: "0.0167%", 
      trend: "up", 
      epochEnd: "2h 14m",
      pfrtsupply: "87,650",
      nfrtsupply: "87,650",
      price: "$95.40"
    },
    { 
      symbol: "AVAX", 
      rate: "-0.0034%", 
      trend: "down", 
      epochEnd: "2h 14m",
      pfrtsupply: "45,230",
      nfrtsupply: "45,230",
      price: "$35.20"
    }
  ]

  const userPositions = [
    { asset: "BTC", type: "PFRT", amount: "1,250", value: "1,287.50", pnl: "+3.00%" },
    { asset: "ETH", type: "NFRT", amount: "890", value: "934.50", pnl: "+5.00%" },
    { asset: "SOL", type: "PFRT", amount: "450", value: "441.75", pnl: "-1.83%" }
  ]

  const recentSettlements = [
    { asset: "BTC", epoch: "247", winner: "PFRT", rate: "0.0312%", date: "Dec 22" },
    { asset: "ETH", epoch: "246", winner: "NFRT", rate: "-0.0145%", date: "Dec 22" },
    { asset: "SOL", epoch: "245", winner: "PFRT", rate: "0.0089%", date: "Dec 22" },
    { asset: "AVAX", epoch: "244", winner: "NFRT", rate: "-0.0067%", date: "Dec 21" }
  ]

  const selectedAssetData = fundingRateAssets.find(asset => asset.symbol === selectedAsset)

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
                <Wallet className="w-10 h-10 text-teal-400" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight">
                ZiroDelta Protocol
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 font-light leading-relaxed">
                Connect your wallet to access Conditional Funding Rate Tokens (PFRT/NFRT) and enter the Multiverse Finance ecosystem.
              </p>
              
              <Button 
                onClick={() => setWalletConnected(true)}
                size="lg" 
                className="bg-teal-400 hover:bg-teal-500 text-black font-light px-8 py-4 text-lg transition-all duration-300 mb-12"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-light text-teal-400 mb-2">{protocolStats.totalValueLocked}</div>
                  <div className="text-sm text-slate-400 font-light">Total Value Locked</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-2">{protocolStats.totalVolume24h}</div>
                  <div className="text-sm text-slate-400 font-light">24h Volume</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-teal-400 mb-2">{protocolStats.activeEpochs}</div>
                  <div className="text-sm text-slate-400 font-light">Active Epochs</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-2">{protocolStats.totalSettled}</div>
                  <div className="text-sm text-slate-400 font-light">Total Settled</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        /* Main Protocol App */
        <section className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extralight mb-2">Protocol Dashboard</h1>
              <p className="text-slate-400 font-light">Conditional Funding Rate Tokens • Multiverse Finance</p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left Column - Trading Interface */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Funding Rates Overview */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Live Funding Rates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {fundingRateAssets.map((asset, index) => (
                        <div 
                          key={index}
                          onClick={() => setSelectedAsset(asset.symbol)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                            selectedAsset === asset.symbol 
                              ? 'bg-teal-400/10 border-teal-400/30' 
                              : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-light text-white">{asset.symbol}</span>
                            {asset.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4 text-green-400" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-400" />
                            )}
                          </div>
                          <div className={`text-lg font-light mb-1 ${asset.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                            {asset.rate}
                          </div>
                          <div className="text-xs text-slate-400 font-light">
                            Ends in {asset.epochEnd}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Trading Interface */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
                      <button
                        onClick={() => setActiveTab('mint')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-light transition-all duration-200 ${
                          activeTab === 'mint' 
                            ? 'bg-teal-400 text-black' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Mint Pairs
                      </button>
                      <button
                        onClick={() => setActiveTab('swap')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-light transition-all duration-200 ${
                          activeTab === 'swap' 
                            ? 'bg-teal-400 text-black' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Swap
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Selected Asset Info */}
                    {selectedAssetData && (
                      <div className="p-4 bg-slate-800/30 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-teal-400/10 border border-teal-400/30 rounded-lg flex items-center justify-center">
                              <span className="text-teal-400 text-sm font-light">{selectedAssetData.symbol}</span>
                            </div>
                            <div>
                              <div className="font-light">{selectedAssetData.symbol} Epoch</div>
                              <div className="text-sm text-slate-400">Ends in {selectedAssetData.epochEnd}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-light ${selectedAssetData.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                              {selectedAssetData.rate}
                            </div>
                            <div className="text-sm text-slate-400">Current Rate</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                            <div className="text-sm text-green-400 mb-1">PFRT Supply</div>
                            <div className="font-light">{selectedAssetData.pfrtsupply}</div>
                          </div>
                          <div className="text-center p-3 bg-red-400/10 border border-red-400/30 rounded-lg">
                            <div className="text-sm text-red-400 mb-1">NFRT Supply</div>
                            <div className="font-light">{selectedAssetData.nfrtsupply}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'mint' ? (
                      /* Mint Interface */
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-light text-slate-400 mb-2">Amount to Mint (ZDLT)</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={mintAmount}
                              onChange={(e) => setMintAmount(e.target.value)}
                              placeholder="0.00"
                              className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white font-light focus:border-teal-400 focus:outline-none"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                              ZDLT
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-slate-400 font-light">
                            Available: 15,670.23 ZDLT
                          </div>
                        </div>
                        
                        <div className="p-4 bg-teal-400/5 border border-teal-400/20 rounded-lg">
                          <div className="text-center mb-3">
                            <div className="text-sm text-teal-400 mb-2">You will receive:</div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center">
                                <div className="text-lg font-light text-green-400">{mintAmount || '0'} PFRT-{selectedAsset}</div>
                                <div className="text-xs text-slate-400">Positive Funding Rate</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-light text-red-400">{mintAmount || '0'} NFRT-{selectedAsset}</div>
                                <div className="text-xs text-slate-400">Negative Funding Rate</div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-center text-slate-400">
                            Equal amounts of both tokens are minted. Value is conserved across outcomes.
                          </div>
                        </div>
                        
                        <Button className="w-full bg-teal-400 hover:bg-teal-500 text-black font-light py-3">
                          <Zap className="w-4 h-4 mr-2" />
                          Mint PFRT/NFRT Pair
                        </Button>
                      </div>
                    ) : (
                      /* Swap Interface */
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-light text-slate-400 mb-2">From</label>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setSwapFrom('PFRT')}
                              className={`flex-1 p-3 rounded-lg border text-sm font-light transition-all duration-200 ${
                                swapFrom === 'PFRT' 
                                  ? 'bg-green-400/10 border-green-400/30 text-green-400' 
                                  : 'bg-slate-800/30 border-slate-700 text-slate-400'
                              }`}
                            >
                              PFRT-{selectedAsset}
                            </button>
                            <button
                              onClick={() => setSwapFrom('NFRT')}
                              className={`flex-1 p-3 rounded-lg border text-sm font-light transition-all duration-200 ${
                                swapFrom === 'NFRT' 
                                  ? 'bg-red-400/10 border-red-400/30 text-red-400' 
                                  : 'bg-slate-800/30 border-slate-700 text-slate-400'
                              }`}
                            >
                              NFRT-{selectedAsset}
                            </button>
                          </div>
                          
                          <div className="relative mt-3">
                            <input
                              type="number"
                              value={swapAmount}
                              onChange={(e) => setSwapAmount(e.target.value)}
                              placeholder="0.00"
                              className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white font-light focus:border-teal-400 focus:outline-none"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                              {swapFrom}-{selectedAsset}
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-slate-400 font-light">
                            Balance: 1,250 {swapFrom}-{selectedAsset}
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-700 hover:bg-slate-800/50"
                            onClick={() => setSwapFrom(swapFrom === 'PFRT' ? 'NFRT' : 'PFRT')}
                          >
                            <ArrowUpDown className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-light text-slate-400 mb-2">To</label>
                          <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-light">{swapAmount || '0'}</span>
                              <span className="text-sm text-slate-400">
                                {swapFrom === 'PFRT' ? 'NFRT' : 'PFRT'}-{selectedAsset}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-teal-400 hover:bg-teal-500 text-black font-light py-3">
                          <ArrowUpDown className="w-4 h-4 mr-2" />
                          Swap Tokens
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* User Positions */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Your Positions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {userPositions.map((position, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 border rounded-lg flex items-center justify-center ${
                              position.type === 'PFRT' 
                                ? 'bg-green-400/10 border-green-400/30' 
                                : 'bg-red-400/10 border-red-400/30'
                            }`}>
                              <span className={`text-sm font-light ${
                                position.type === 'PFRT' ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {position.asset}
                              </span>
                            </div>
                            <div>
                              <div className="font-light">{position.type}-{position.asset}</div>
                              <div className="text-sm text-slate-400">{position.amount} tokens</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-light">${position.value}</div>
                            <div className={`text-sm ${position.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                              {position.pnl}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Stats & Info */}
              <div className="space-y-6">
                
                {/* Protocol Stats */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Protocol Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-light text-teal-400 mb-1">{protocolStats.totalValueLocked}</div>
                      <div className="text-sm text-slate-400 font-light">Total Value Locked</div>
                    </div>
                    <Separator className="bg-slate-800" />
                    <div className="text-center">
                      <div className="text-2xl font-light text-white mb-1">{protocolStats.totalVolume24h}</div>
                      <div className="text-sm text-slate-400 font-light">24h Volume</div>
                    </div>
                    <Separator className="bg-slate-800" />
                    <div className="text-center">
                      <div className="text-2xl font-light text-teal-400 mb-1">{protocolStats.activeEpochs}</div>
                      <div className="text-sm text-slate-400 font-light">Active Epochs</div>
                    </div>
                    <Separator className="bg-slate-800" />
                    <div className="text-center">
                      <div className="text-2xl font-light text-white mb-1">{protocolStats.totalSettled}</div>
                      <div className="text-sm text-slate-400 font-light">Total Settled</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Protocol Fee Allocation */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Fee Allocation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-slate-400 font-light">Protocol fees are utilized to create a sustainable ecosystem.</p>
                    <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-teal-400/10 border border-teal-400/30 rounded-lg flex items-center justify-center mt-0.5">
                        <span className="text-teal-400 font-medium">50%</span>
                      </div>
                      <div>
                        <div className="font-light text-white">ZDLT Buybacks</div>
                        <div className="text-xs text-slate-400 font-light leading-relaxed">To create deflationary pressure and add value back to the token.</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-teal-400/10 border border-teal-400/30 rounded-lg flex items-center justify-center mt-0.5">
                        <span className="text-teal-400 font-medium">50%</span>
                      </div>
                      <div>
                        <div className="font-light text-white">Operations Fund</div>
                        <div className="text-xs text-slate-400 font-light leading-relaxed">To ensure long-term development, security, and platform growth.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* How It Works */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Multiverse Finance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-400/10 border border-teal-400/30 rounded flex items-center justify-center mt-0.5">
                          <span className="text-xs text-teal-400">1</span>
                        </div>
                        <div>
                          <div className="font-light text-white">Mint Pairs</div>
                          <div className="text-slate-400 font-light leading-relaxed">Use ZDLT to mint equal amounts of PFRT and NFRT tokens for any asset.</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-400/10 border border-teal-400/30 rounded flex items-center justify-center mt-0.5">
                          <span className="text-xs text-teal-400">2</span>
                        </div>
                        <div>
                          <div className="font-light text-white">Trade Sentiment</div>
                          <div className="text-slate-400 font-light leading-relaxed">Swap between PFRT and NFRT based on your funding rate predictions.</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-400/10 border border-teal-400/30 rounded flex items-center justify-center mt-0.5">
                          <span className="text-xs text-teal-400">3</span>
                        </div>
                        <div>
                          <div className="font-light text-white">Epoch Settlement</div>
                          <div className="text-slate-400 font-light leading-relaxed">At epoch end, winning tokens gain value while losing tokens approach zero.</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Settlements */}
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Recent Settlements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentSettlements.map((settlement, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 border rounded flex items-center justify-center text-xs ${
                              settlement.winner === 'PFRT' 
                                ? 'bg-green-400/10 border-green-400/30 text-green-400' 
                                : 'bg-red-400/10 border-red-400/30 text-red-400'
                            }`}>
                              {settlement.asset}
                            </div>
                            <div>
                              <div className="text-sm font-light">{settlement.winner} Winner</div>
                              <div className="text-xs text-slate-400">Epoch {settlement.epoch}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-sm font-light ${
                              settlement.rate.startsWith('-') ? 'text-red-400' : 'text-green-400'
                            }`}>
                              {settlement.rate}
                            </div>
                            <div className="text-xs text-slate-400">{settlement.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 font-light">
            &copy; 2024 ZiroDelta. <span className="text-teal-400">Multiverse Finance for everyone.</span>
          </p>
        </div>
      </footer>
    </main>
  )
} 