'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { BlogPost } from "@/lib/blog-posts"

interface BlogPostDetailProps {
  post: BlogPost
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  const paragraphs = post.content.split('\n\n')

  return (
    <article className="min-h-screen bg-zinc-950 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-4">{post.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">{post.title}</h1>
          <p className="text-xl text-zinc-300">{post.subtitle}</p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 md:mb-12 border border-zinc-800">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-8 md:mb-12">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-base md:text-lg text-zinc-300 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="text-lg font-bold text-zinc-50 mb-4">Key Highlights</h2>
          <ul className="space-y-3">
            {post.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-zinc-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600/10 to-indigo-600/5 border border-indigo-600/30 rounded-lg p-6 md:p-8 text-center">
          <p className="text-zinc-300 mb-4">Ready to create with Midjourney and v0?</p>
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </article>
  )
}
