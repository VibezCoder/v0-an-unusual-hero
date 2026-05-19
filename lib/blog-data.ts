export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  category: string
  author: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'whats-new-v8-1',
    title: "What's new in V8.1?",
    date: 'May 2024',
    excerpt: 'V8.1 has a consistent and familiar aesthetic in the spirit of V7. Discover the latest improvements in HD mode, standard resolution, and powerful community features.',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asSgPXlAgDSIP6ewGb8Cg2Ncq4xEf0.png',
    category: 'Release',
    author: 'Midjourney Team',
    content: `## V8.1 Alpha Release

Thanks for testing our V8.0 model over the last month! Today we're releasing our next version of V8 – V8.1

### What's new in V8.1?

**V8.1 has a consistent and familiar aesthetic in the spirit of V7.** Moodboards and srefs are now super stable and will be everything you love.

**HD mode is now 3x faster and 3x cheaper.** It's so cheap we're making it default for V8.1

**Standard resolution is now 50% faster and 25% cheaper.** Standard resolution in V8.1 at full quality is as fast as V7 draft mode! It's great for exploring and iterating *fast*. We've also added a button called "Run as HD" which will rerun any SD job as HD.

### Community Favorite Features Return

We've also brought back some community favorite features:

- Image prompts and even image weights are now available in V8.1
- New Prompt Shortener, which will kick in anytime you go over the prompt length limits
- Updated Describe that gives longer more detailed prompts and matches the prompting style of V8

### Important Note

Our V8 series of models are still only available on alpha.midjourney.com and are in an early testing phase. Things will change! Perhaps without notice! But good stuff is on the way.

It is likely that we will decommission our V8.0 model after V8.1 has been out for a few weeks. If you find something the old model did better than the new one please let us know in #ideas-and-features

### What's next?

We're going to try to give a quick shot for some V8 upscalers and then we're moving onto our V8 edit, inpainting, and outpainting model upgrades.

Have fun everyone! And thank you for being a part of our community ❤️`
  },
  {
    id: '2',
    slug: 'future-of-ai-image-generation',
    title: "The Future of AI Image Generation: What's Coming Next",
    date: 'May 2024',
    excerpt: 'Explore the exciting innovations on the horizon for AI-powered image generation and how the community is shaping the future of creative tools.',
    coverImage: '/blog-future-ai.png',
    category: 'Innovation',
    author: 'Midjourney Team',
    content: `## The Future of AI Image Generation

The landscape of creative technology is evolving at an unprecedented pace. As we look ahead, several exciting developments are reshaping how creators interact with AI-powered tools.

### Community-Driven Innovation

One of the most powerful aspects of modern AI tools is how they respond to community feedback. Your ideas, experiments, and creative pushes directly influence the roadmap. Whether it's new features, improved rendering techniques, or entirely new capabilities, the community's voice drives innovation.

### Enhanced Creative Control

The next generation of AI image generation tools will offer unprecedented levels of creative control. We're seeing rapid improvements in:

- Fine-grained parameter adjustment for more predictable outputs
- Better integration with existing creative workflows
- Improved consistency across multiple generations
- Advanced style transfer and aesthetic control

### Performance and Accessibility

Speed and cost are critical factors in making creative tools accessible to everyone. The industry continues to optimize:

- Faster generation times without sacrificing quality
- More affordable pricing tiers for diverse use cases
- Better optimization for different hardware setups
- Streamlined workflows for rapid ideation

### The Role of Consistency

One of the most requested features is consistency. Creators want to maintain visual coherence across projects, and the technology is rapidly advancing to deliver exactly that. Whether it's maintaining character consistency in narratives or brand consistency in marketing materials, the future looks promising.

### Beyond Image Generation

The convergence of different AI capabilities is creating entirely new possibilities:

- Text-to-video generation becoming more sophisticated
- Real-time editing and refinement
- Integration with 3D modeling and animation tools
- Cross-media creative workflows

### The Creator Economy

As these tools become more powerful and accessible, they're enabling a new wave of creators. From independent artists to small studios, AI-powered image generation is democratizing creative production in ways previously unimaginable.

### Looking Forward

The future of AI image generation isn't just about better algorithms or faster hardware. It's about creating tools that amplify human creativity, respect artistic vision, and empower creators of all skill levels to bring their imagination to life.

The journey has just begun, and the best is yet to come. Stay creative, stay curious, and keep pushing the boundaries of what's possible.`
  }
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) {
    throw new Error(`Blog post with slug "${slug}" not found`)
  }
  return post
}

export function getPostSlugs(): string[] {
  return blogPosts.map(post => post.slug)
}
