export interface BlogPost {
  id: string
  title: string
  subtitle: string
  date: string
  content: string
  image: string
  highlights: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "v8-1-alpha",
    title: "V8.1 Alpha",
    subtitle: "What's new in V8.1?",
    date: "May 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asSgPXlAgDSIP6ewGb8Cg2Ncq4xEf0.png",
    content: `V8.1 has a consistent and familiar aesthetic in the spirit of V7. Moodboards and srefs are now super stable and will be everything you love.

HD mode is now 3x faster and 3x cheaper. It's so cheap we're making it default for V8.1.

Standard resolution is now 50% faster and 25% cheaper. Standard resolution in V8.1 at full quality is as fast as V7 draft mode! It's great for exploring and iterating *fast*. We've also added a button called "Run as HD" which will rerun any SD job as HD.

We've also brought back some community favorite features:

Image prompts and even image weights are now available in V8.1. New Prompt Shortener, which will kick in anytime you go over the prompt length limits. Updated Describe that gives longer more detailed prompts and matches the prompting style of V8.

Please Note: Our V8 series of models are still only available on alpha.midjourney.com and are in an early testing phase. Things will change! Perhaps without notice! But good stuff is on the way.

It is likely that we will decommission our V8.0 model after V8.1 has been out for a few weeks. If you find something the old model did better than the new one please let us know in #ideas-and-features.

What's next? We're going to try to give a quick shot for some V8 upscalers and then we're moving onto our V8 edit, inpainting, and outpainting model upgrades.

Have fun everyone! And thank you for being a part of our community!`,
    highlights: [
      "Consistent aesthetic in the spirit of V7",
      "Moodboards and srefs now super stable",
      "HD mode 3x faster and 3x cheaper",
      "Standard resolution 50% faster and 25% cheaper",
      "Image prompts and weights now available",
      "New Prompt Shortener for overlong prompts",
      "Updated Describe with longer prompts",
    ],
  },
  {
    id: "midjourney-innovations",
    title: "The Future of AI Image Generation",
    subtitle: "Exploring Midjourney's Latest Innovations",
    date: "April 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asSgPXlAgDSIP6ewGb8Cg2Ncq4xEf0.png",
    content: `The landscape of AI-powered image generation is rapidly evolving, and Midjourney continues to lead the charge. With each new release, we see groundbreaking improvements that push the boundaries of what's possible.

The shift from V7 to V8 represents a fundamental leap in quality and capability. What once required multiple iterations and careful prompt engineering now happens with remarkable speed and consistency.

Performance improvements aren't just about being faster—they're about democratizing access to powerful creative tools. When rendering becomes affordable, when iterations become instant, the barrier between imagination and creation crumbles.

The community has been instrumental in shaping these developments. Your feedback, your experiments, your creative applications of these tools have driven innovation forward. The features you requested, the limitations you identified, and the possibilities you imagined have all influenced the roadmap.

Looking ahead, the focus on upscalers, editing, inpainting, and outpainting demonstrates a commitment to comprehensive creative control. These aren't just technical improvements—they're pathways to new forms of creative expression.

Whether you're a designer, artist, marketer, or creator of any kind, these tools are becoming increasingly essential. The integration with platforms like v0 shows how AI image generation is becoming part of the broader creative ecosystem.

The future isn't about replacing human creativity—it's about amplifying it, accelerating it, and making it more accessible to everyone.`,
    highlights: [
      "V8 represents a fundamental leap in quality",
      "Performance improvements democratize access",
      "Community feedback drives innovation",
      "Comprehensive creative control coming",
      "Integration with creative ecosystems",
      "Making AI tools more accessible",
      "Amplifying human creativity",
    ],
  },
]
