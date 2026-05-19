'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { BlogPost } from "@/lib/markdown.server"

interface BlogPostDetailProps {
  post: BlogPost
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  // Split content by double newlines for paragraphs and process markdown headings
  const sections = post.content.split(/\n\n+/)

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
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{post.date}</p>
            <span className="text-xs bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded border border-indigo-600/30">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">{post.title}</h1>
          <p className="text-lg text-zinc-400">By {post.author}</p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 md:mb-12 border border-zinc-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Excerpt */}
        <p className="text-xl text-zinc-300 mb-8 md:mb-12 italic border-l-4 border-indigo-600 pl-4">
          {post.excerpt}
        </p>

        {/* Content */}
        <div className="mb-8 md:mb-12 space-y-6">
          {sections.map((section, idx) => {
            // Check if section is a heading
            if (section.startsWith('##')) {
              const title = section.replace(/^#+\s*/, '').trim()
              return (
                <h2 key={idx} className="text-2xl font-bold text-zinc-50 mt-8 pt-4">
                  {title}
                </h2>
              )
            }
            
            // Check if it's a list
            if (section.includes('- ')) {
              const items = section.split('\n').filter(line => line.trim().startsWith('-'))
              return (
                <ul key={idx} className="space-y-2 ml-4">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-zinc-300 flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item.replace(/^-\s*/, '').trim()}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            
            // Regular paragraph
            if (section.trim()) {
              return (
                <p key={idx} className="text-base md:text-lg text-zinc-300 leading-relaxed">
                  {section.trim()}
                </p>
              )
            }
          })}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600/10 to-indigo-600/5 border border-indigo-600/30 rounded-lg p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-300 mb-2 font-semibold">Continue exploring Midjourney updates</p>
              <p className="text-zinc-400 text-sm">Stay tuned for more insights and developments in AI image generation</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors flex-shrink-0"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
