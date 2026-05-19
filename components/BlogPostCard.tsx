'use client'

import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group cursor-pointer h-full">
        <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-zinc-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{post.date}</p>
            <span className="text-xs bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded border border-indigo-600/30">
              {post.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-zinc-50 group-hover:text-indigo-400 transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-2">{post.excerpt}</p>
          <p className="text-xs text-zinc-500 pt-2">By {post.author}</p>
        </div>
      </div>
    </Link>
  )
}
