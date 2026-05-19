'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export function AuthStatus() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()
        setUser(user)
      } catch (err) {
        console.error('[v0] AuthStatus error:', err)
        setError('Failed to load auth status')
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [])

  if (loading) {
    return null
  }

  if (error) {
    return null
  }

  if (!user) {
    return (
      <div className="flex gap-2">
        <Link
          href="/auth/login"
          className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Login
        </Link>
        <Link
          href="/auth/sign-up"
          className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
        >
          Sign Up
        </Link>
      </div>
    )
  }

  return (
    <div className="flex gap-4">
      <Link
        href="/blog"
        className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        Blog
      </Link>
      <button
        onClick={async () => {
          await supabase.auth.signOut()
          window.location.reload()
        }}
        className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        Logout
      </button>
    </div>
  )
}
