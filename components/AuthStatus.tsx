'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export function AuthStatus() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [supabase])

  if (loading) {
    return null
  }

  if (!user) {
    return (
      <div className="flex gap-3 items-center">
        <Link
          href="/auth/login"
          className="text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          Login
        </Link>
        <Link
          href="/auth/sign-up"
          className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    )
  }

  return (
    <button
      onClick={async () => {
        await supabase.auth.signOut()
        window.location.reload()
      }}
      className="text-sm font-medium text-white/70 hover:text-white transition-colors"
    >
      Logout
    </button>
  )
}
