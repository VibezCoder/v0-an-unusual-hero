import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { BlogPostDetail } from '@/components/BlogPostDetail'
import { getPostBySlug, getPostSlugs } from '@/lib/blog-data'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    id: slug,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const post = getPostBySlug(params.id)
    return {
      title: `${post.title} | Midjourney Blog | Lucent`,
      description: post.excerpt,
    }
  } catch {
    return {
      title: 'Blog Post | Lucent',
    }
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  try {
    const post = getPostBySlug(params.id)
    return <BlogPostDetail post={post} />
  } catch {
    redirect('/blog')
  }
}
