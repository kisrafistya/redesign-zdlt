"use client";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DocsPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/bot/docs/overview')
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg mx-auto mb-4 animate-pulse" />
        <p className="text-slate-400 font-light">Redirecting to documentation...</p>
      </div>
    </div>
  )
} 