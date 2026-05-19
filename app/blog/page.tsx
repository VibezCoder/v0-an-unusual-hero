import Link from 'next/link'
import { BlogPostCard } from '@/components/BlogPostCard'
import { getAllPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'Midjourney Blog | Lucent',
  description: 'Discover the latest news, updates, and insights about Midjourney and AI image generation.',
}

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-50">Midjourney Blog</h1>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
            >
              Home
            </Link>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Discover the latest news, updates, and insights about Midjourney and AI image generation.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 py-8 md:py-12 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center text-zinc-500 text-sm">
          <p>Explore the latest insights and innovations in AI-powered creative generation.</p>
        </div>
      </div>
    </div>
  )
}
