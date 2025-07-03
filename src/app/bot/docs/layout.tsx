'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Cpu, User, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  {
    name: 'Overview',
    href: '/bot/docs/overview',
    icon: BookOpen,
    description: 'What the bot does'
  },
  {
    name: 'Technical Details',
    href: '/bot/docs/how-it-works',
    icon: Cpu,
    description: 'How the system works'
  },
  {
    name: 'User Manual',
    href: '/bot/docs/user-guide',
    icon: User,
    description: 'Operating instructions'
  },
  {
    name: 'Access Process',
    href: '/bot/docs/getting-access',
    icon: Key,
    description: 'How to get access'
  }
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-black border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/bot" className="flex items-center space-x-4">
              <img src="/zirodelta-logo.png" alt="ZiroDelta" className="w-8 h-8" />
              <span className="text-xl font-light tracking-wide">ZiroDelta Bot Documentation</span>
            </Link>
            
            <Button asChild variant="ghost" className="text-slate-400 hover:text-white">
              <Link href="/bot">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Bot
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* Sidebar */}
        <div className="fixed left-0 top-20 bottom-0 w-80 bg-slate-950 border-r border-slate-800 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-lg font-medium text-white mb-2">Documentation</h2>
              <p className="text-sm text-slate-400">
                Complete technical documentation for ZiroDelta trading bot
              </p>
            </div>

            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      group flex items-start space-x-3 p-4 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-slate-800 text-white border border-slate-700' 
                        : 'hover:bg-slate-900 text-slate-300 hover:text-white'
                      }
                    `}
                  >
                    <div className={`
                      flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center
                      ${isActive 
                        ? 'bg-slate-700 border-slate-600' 
                        : 'bg-slate-900 border-slate-800'
                      }
                    `}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </nav>

            {/* Navigation Progress */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="text-xs text-slate-500 mb-3">Reading Progress</div>
              <div className="space-y-2">
                {navigation.map((item, index) => {
                  const currentIndex = navigation.findIndex(nav => nav.href === pathname)
                  const isCompleted = currentIndex > index
                  const isActive = pathname === item.href
                  
                  return (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div className={`
                        w-2 h-2 rounded-full
                        ${isActive 
                          ? 'bg-white' 
                          : isCompleted 
                            ? 'bg-slate-600' 
                            : 'bg-slate-800'
                        }
                      `} />
                      <div className={`text-xs ${isActive ? 'text-white' : 'text-slate-600'}`}>
                        {item.name}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-80 flex-1">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 