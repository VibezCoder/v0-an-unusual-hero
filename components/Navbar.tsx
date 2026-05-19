'use client'

import Link from 'next/link'
import { AuthStatus } from './AuthStatus'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg text-zinc-50 hover:text-indigo-400 transition-colors">
          Lucent
        </Link>
        <AuthStatus />
      </div>
    </nav>
  )
}
