'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Settings, 
  Users, 
  DollarSign, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw,
  Edit,
  Trash2,
  Plus,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  Shield,
  Calendar,
  TrendingUp,
  Activity,
  Filter,
  Search,
  RefreshCw,
  Ban,
  Crown,
  Gavel,
  Home,
  BarChart3,
  Database,
  UserCheck,
  ArrowLeft,
  Archive,
  CalendarDays
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function AuctionAdminPage() {
  const [activeTab, setActiveTab] = useState('auctions')
  const [selectedAuction, setSelectedAuction] = useState<string | null>(null)
  const [selectedBids, setSelectedBids] = useState<string[]>([])
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock auction data
  const auctions = [
    {
      id: 'AUC-2025-01',
      name: 'January 2025 Elite Access',
      status: 'live',
      startTime: '2025-01-07 00:00 UTC',
      endTime: '2025-01-10 23:59 UTC',
      totalSlots: 5,
      minBid: 500,
      bidIncrement: 50,
      totalRevenue: 12450,
      totalBidders: 89,
      totalBids: 234,
      phase: 'Active Bidding'
    },
    {
      id: 'AUC-2024-12',
      name: 'December 2024 Elite Access',
      status: 'completed',
      startTime: '2024-12-07 00:00 UTC',
      endTime: '2024-12-10 23:59 UTC',
      totalSlots: 5,
      minBid: 450,
      bidIncrement: 50,
      totalRevenue: 8930,
      totalBidders: 67,
      totalBids: 189,
      phase: 'Completed'
    },
    {
      id: 'AUC-2025-02',
      name: 'February 2025 Elite Access',
      status: 'scheduled',
      startTime: '2025-02-07 00:00 UTC',
      endTime: '2025-02-10 23:59 UTC',
      totalSlots: 5,
      minBid: 550,
      bidIncrement: 50,
      totalRevenue: 0,
      totalBidders: 0,
      totalBids: 0,
      phase: 'Scheduled'
    }
  ]

  const auctionSlots = [
    { 
      id: 1, 
      auctionId: 'AUC-2025-01',
      currentBid: 1250, 
      bidder: '0x742d35Cc6C...4f2a', 
      bids: 23, 
      status: 'leading',
      lastBidTime: '2 min ago',
      bidHistory: 15
    },
    { 
      id: 2, 
      auctionId: 'AUC-2025-01',
      currentBid: 890, 
      bidder: '0x8b1c9F2A...8b1c', 
      bids: 18, 
      status: 'active',
      lastBidTime: '5 min ago',
      bidHistory: 12
    },
    { 
      id: 3, 
      auctionId: 'AUC-2025-01',
      currentBid: 745, 
      bidder: '0x2e9d7B3C...2e9d', 
      bids: 14, 
      status: 'active',
      lastBidTime: '12 min ago',
      bidHistory: 8
    },
    { 
      id: 4, 
      auctionId: 'AUC-2025-01',
      currentBid: 680, 
      bidder: '0x7a3f8E1D...7a3f', 
      bids: 11, 
      status: 'active',
      lastBidTime: '18 min ago',
      bidHistory: 6
    },
    { 
      id: 5, 
      auctionId: 'AUC-2025-01',
      currentBid: 620, 
      bidder: '0x9c6e4A2B...9c6e', 
      bids: 8, 
      status: 'active',
      lastBidTime: '25 min ago',
      bidHistory: 4
    }
  ]

  const allBids = [
    { id: '1', auctionId: 'AUC-2025-01', slot: 1, amount: 1250, bidder: '0x742d35Cc6C...4f2a', time: '2 min ago', status: 'leading' },
    { id: '2', auctionId: 'AUC-2025-01', slot: 2, amount: 890, bidder: '0x8b1c9F2A...8b1c', time: '5 min ago', status: 'active' },
    { id: '3', auctionId: 'AUC-2025-01', slot: 1, amount: 1200, bidder: '0x9x2a5B8C...9x2a', time: '8 min ago', status: 'outbid' },
    { id: '4', auctionId: 'AUC-2025-01', slot: 3, amount: 745, bidder: '0x2e9d7B3C...2e9d', time: '12 min ago', status: 'active' },
    { id: '5', auctionId: 'AUC-2025-01', slot: 1, amount: 1150, bidder: '0x5y7b9D4E...5y7b', time: '15 min ago', status: 'outbid' },
  ]

  const currentAuction = auctions.find(a => a.id === selectedAuction) || auctions.find(a => a.status === 'live')
  const currentSlots = auctionSlots.filter(slot => slot.auctionId === (selectedAuction || 'AUC-2025-01'))
  const currentBids = allBids.filter(bid => bid.auctionId === (selectedAuction || 'AUC-2025-01'))

  const handleAuctionControl = (action: string) => {
    console.log(`Auction ${action} triggered for ${selectedAuction}`)
  }

  const handleBidAction = (bidId: string, action: string) => {
    console.log(`Bid ${bidId} ${action}`)
  }

  const handleBulkAction = (action: string) => {
    console.log(`Bulk ${action} for bids:`, selectedBids)
  }

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, description: 'Overview & Stats' },
    { id: 'auctions', label: 'Auctions', icon: Calendar, description: 'Manage All Auctions' },
    { id: 'users', label: 'Users', icon: Users, description: 'User Management' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, description: 'Reports & Charts' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-teal-400/10 text-teal-400 border-teal-400/30'
      case 'completed': return 'bg-slate-600/30 text-slate-300 border-slate-600'
      case 'scheduled': return 'bg-slate-700/30 text-slate-400 border-slate-700'
      default: return 'bg-slate-600/30 text-slate-300 border-slate-600'
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-slate-800/30">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-4">
                <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-10 h-10" />
                <span className="text-2xl font-extralight tracking-wide">ZiroDelta</span>
              </Link>
              <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg">
                <Shield className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm font-light">Admin Panel</span>
              </div>
              {selectedAuction && (
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setSelectedAuction(null)}
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-teal-400"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Auctions
                  </Button>
                  <div className="text-sm text-slate-400">
                    Managing: <span className="text-white">{currentAuction?.name}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-400 font-light text-sm">LIVE AUCTION</span>
              </div>
              <Button variant="ghost" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button asChild variant="ghost" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <Link href="/bot/auction">
                  <Eye className="w-4 h-4 mr-2" />
                  View Live
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 flex">
        {/* Sidebar */}
        <div className="w-64 fixed left-0 top-20 h-full bg-slate-900/50 border-r border-slate-800/30 overflow-y-auto">
          <div className="p-4">
            <div className="space-y-2">
              {sidebarItems.map(item => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id)
                      if (item.id !== 'auctions') setSelectedAuction(null)
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === item.id 
                        ? 'bg-teal-400/10 text-teal-400 border border-teal-400/30' 
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-light">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.description}</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-6">
          
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extralight mb-2">Dashboard</h1>
                  <p className="text-slate-400">System overview and key metrics</p>
                </div>
              </div>

              {/* System Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm font-light">Total Auctions</p>
                        <p className="text-xl font-light text-white">{auctions.length}</p>
                      </div>
                      <Calendar className="w-6 h-6 text-teal-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm font-light">Live Auctions</p>
                        <p className="text-xl font-light text-white">{auctions.filter(a => a.status === 'live').length}</p>
                      </div>
                      <Activity className="w-6 h-6 text-teal-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm font-light">Total Revenue</p>
                        <p className="text-xl font-light text-white">${auctions.reduce((sum, a) => sum + a.totalRevenue, 0).toLocaleString()}</p>
                      </div>
                      <DollarSign className="w-6 h-6 text-teal-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm font-light">Total Users</p>
                        <p className="text-xl font-light text-white">156</p>
                      </div>
                      <Users className="w-6 h-6 text-teal-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Auctions */}
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-light">Recent Auctions</CardTitle>
                    <Button 
                      onClick={() => setActiveTab('auctions')}
                      variant="ghost" 
                      className="text-teal-400 hover:text-teal-300"
                    >
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auctions.slice(0, 3).map((auction) => (
                      <div key={auction.id} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-white font-light">{auction.name}</span>
                              <Badge className={getStatusColor(auction.status)}>
                                {auction.status.toUpperCase()}
                              </Badge>
                            </div>
                            <div className="text-sm text-slate-400">
                              {auction.totalBidders} bidders • ${auction.totalRevenue.toLocaleString()} revenue
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-400">{auction.endTime}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Auction Management */}
          {activeTab === 'auctions' && !selectedAuction && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extralight mb-2">Auction Management</h1>
                  <p className="text-slate-400">Manage all auctions and their lifecycle</p>
                </div>
                <Button className="bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 border border-teal-400/50">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Auction
                </Button>
              </div>

              {/* Auction Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-light text-teal-400">Live Auctions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {auctions.filter(a => a.status === 'live').map((auction) => (
                        <div key={auction.id} className="p-3 bg-teal-400/5 border border-teal-400/20 rounded-lg cursor-pointer hover:bg-teal-400/10 transition-colors"
                             onClick={() => setSelectedAuction(auction.id)}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-light text-sm">{auction.name}</div>
                              <div className="text-xs text-slate-400">{auction.totalBidders} bidders</div>
                            </div>
                            <div className="text-right">
                              <div className="text-teal-400 font-light">${auction.totalRevenue.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-light">Scheduled Auctions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {auctions.filter(a => a.status === 'scheduled').map((auction) => (
                        <div key={auction.id} className="p-3 bg-slate-800/30 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition-colors"
                             onClick={() => setSelectedAuction(auction.id)}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-light text-sm">{auction.name}</div>
                              <div className="text-xs text-slate-400">Starts {auction.startTime}</div>
                            </div>
                            <div className="text-right">
                              <CalendarDays className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-light">Past Auctions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {auctions.filter(a => a.status === 'completed').map((auction) => (
                        <div key={auction.id} className="p-3 bg-slate-800/30 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition-colors"
                             onClick={() => setSelectedAuction(auction.id)}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-light text-sm">{auction.name}</div>
                              <div className="text-xs text-slate-400">{auction.totalBidders} bidders</div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-300 font-light text-sm">${auction.totalRevenue.toLocaleString()}</div>
                              <Archive className="w-3 h-3 text-slate-500" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* All Auctions Table */}
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg font-light">All Auctions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auctions.map((auction) => (
                      <div key={auction.id} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800/50 transition-colors"
                           onClick={() => setSelectedAuction(auction.id)}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-slate-700/50 border border-slate-600 rounded-lg flex items-center justify-center">
                              <Calendar className="w-6 h-6 text-slate-400" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-light">{auction.name}</span>
                                <Badge className={getStatusColor(auction.status)}>
                                  {auction.status.toUpperCase()}
                                </Badge>
                              </div>
                              <div className="text-sm text-slate-400">
                                {auction.startTime} - {auction.endTime}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="text-lg font-light text-white">{auction.totalSlots}</div>
                              <div className="text-xs text-slate-400">Slots</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-light text-white">{auction.totalBidders}</div>
                              <div className="text-xs text-slate-400">Bidders</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-light text-teal-400">${auction.totalRevenue.toLocaleString()}</div>
                              <div className="text-xs text-slate-400">Revenue</div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Selected Auction Management */}
          {activeTab === 'auctions' && selectedAuction && currentAuction && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extralight mb-2">{currentAuction.name}</h1>
                  <p className="text-slate-400">Manage auction settings, slots, and bids</p>
                </div>
                <div className="flex space-x-3">
                  {currentAuction.status === 'live' && (
                    <>
                      <Button className="bg-slate-800/50 hover:bg-slate-800/70 text-slate-300 border border-slate-700">
                        <Pause className="w-4 h-4 mr-2" />
                        Pause Auction
                      </Button>
                      <Button className="bg-slate-800/50 hover:bg-slate-800/70 text-slate-300 border border-slate-700">
                        <XCircle className="w-4 h-4 mr-2" />
                        End Early
                      </Button>
                    </>
                  )}
                  {currentAuction.status === 'scheduled' && (
                    <Button className="bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 border border-teal-400/50">
                      <Play className="w-4 h-4 mr-2" />
                      Start Auction
                    </Button>
                  )}
                </div>
              </div>

              {/* Auction Info */}
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-light">Auction Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <Badge className={getStatusColor(currentAuction.status)}>
                        {currentAuction.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Phase:</span>
                      <span className="font-light">{currentAuction.phase}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Slots:</span>
                      <span className="font-light">{currentAuction.totalSlots}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Min Bid:</span>
                      <span className="font-light">${currentAuction.minBid}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-light">Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Bidders:</span>
                      <span className="font-light">{currentAuction.totalBidders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Bids:</span>
                      <span className="font-light">{currentAuction.totalBids}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Revenue:</span>
                      <span className="font-light text-teal-400">${currentAuction.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Avg Bid:</span>
                      <span className="font-light">${currentAuction.totalBids > 0 ? Math.round(currentAuction.totalRevenue / currentAuction.totalBids) : 0}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-light">Timeline</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Start:</span>
                      <span className="font-light text-sm">{currentAuction.startTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">End:</span>
                      <span className="font-light text-sm">{currentAuction.endTime}</span>
                    </div>
                    {currentAuction.status === 'live' && (
                      <div className="flex justify-between">
                        <span className="text-slate-400">Remaining:</span>
                        <span className="font-light text-teal-400">2d 14h 23m</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Auction Slots */}
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-light">Auction Slots ({currentSlots.length})</CardTitle>
                    <Button className="bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 border border-teal-400/50">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Slot
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {currentSlots.map((slot) => (
                      <div key={slot.id} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 border rounded-lg flex items-center justify-center ${
                              slot.status === 'leading' 
                                ? 'bg-teal-400/10 border-teal-400/30' 
                                : 'bg-slate-700/50 border-slate-600'
                            }`}>
                              {slot.status === 'leading' ? (
                                <Crown className="w-6 h-6 text-teal-400" />
                              ) : (
                                <span className="text-slate-400 font-light">#{slot.id}</span>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-light text-lg">Slot #{slot.id}</span>
                                {slot.status === 'leading' && (
                                  <Badge className="bg-teal-400/10 text-teal-400 border-teal-400/30">LEADING</Badge>
                                )}
                              </div>
                              <div className="text-sm text-slate-400">
                                {slot.bids} bids • {slot.bidder} • {slot.lastBidTime}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-6">
                            <div className="text-right">
                              <div className="text-2xl font-light text-teal-400">${slot.currentBid}</div>
                              <div className="text-sm text-slate-400">Current bid</div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Bids for this Auction */}
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg font-light">Recent Bids ({currentBids.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {currentBids.slice(0, 5).map((bid) => (
                      <div key={bid.id} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-light">Slot #{bid.slot}</span>
                                <Badge className={`${
                                  bid.status === 'leading' ? 'bg-teal-400/10 text-teal-400 border-teal-400/30' :
                                  bid.status === 'active' ? 'bg-slate-600/30 text-slate-300 border-slate-600' :
                                  'bg-slate-700/30 text-slate-400 border-slate-700'
                                }`}>
                                  {bid.status.toUpperCase()}
                                </Badge>
                              </div>
                              <div className="text-sm text-slate-400">
                                {bid.bidder} • {bid.time}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-6">
                            <div className="text-right">
                              <div className="text-xl font-light text-teal-400">${bid.amount}</div>
                              <div className="text-sm text-slate-400">Bid amount</div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-teal-400">
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Users Management */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extralight mb-2">User Management</h1>
                  <p className="text-slate-400">Manage all users across all auctions</p>
                </div>
              </div>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg font-light">All Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-500 font-light">User management interface</p>
                    <p className="text-slate-600 text-sm">Coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Analytics */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extralight mb-2">Analytics</h1>
                  <p className="text-slate-400">Performance metrics across all auctions</p>
                </div>
                <Button className="bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 border border-teal-400/50">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg font-light">System Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-500 font-light">Analytics dashboard</p>
                    <p className="text-slate-600 text-sm">Charts and reports coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 