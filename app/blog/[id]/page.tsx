import { redirect } from 'next/navigation'
import { BlogPostDetail } from '@/components/BlogPostDetail'
import { getPostBySlug, getPostSlugs } from '@/lib/blog-data'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    id: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const post = getPostBySlug(id)
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

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const post = getPostBySlug(id)
    return <BlogPostDetail post={post} />
  } catch (error) {
    console.error('[v0] Error loading blog post:', error)
    redirect('/blog')
  }
}
