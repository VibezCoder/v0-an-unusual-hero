'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { BlogPostDetail } from '@/components/BlogPostDetail'
import { blogPosts } from '@/lib/blog-posts'
import type { BlogPost } from '@/lib/blog-posts'

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuthAndLoadPost = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) {
          router.push('/auth/login')
          return
        }
        
        setUser(user)

        // Find the post
        const foundPost = blogPosts.find(p => p.id === params.id)
        if (!foundPost) {
          router.push('/blog')
          return
        }

        setPost(foundPost)
      } catch (error) {
        console.error('Auth error:', error)
        router.push('/auth/login')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      checkAuthAndLoadPost()
    }
  }, [params.id, router, supabase.auth])

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-zinc-400">Loading...</div>
      </div>
    )
  }

  if (!user || !post) {
    return null
  }

  return <BlogPostDetail post={post} />
}
