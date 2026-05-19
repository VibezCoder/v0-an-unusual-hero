import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/30 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-zinc-50 mb-4">Lucent</h3>
            <p className="text-sm text-zinc-400">
              A unified platform illuminating the latest innovations in AI-powered creative generation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-50 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-50 mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://discord.gg/midjourney" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://twitter.com/midjourney" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-50 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; 2026 Lucent. All rights reserved. Built with Next.js, Tailwind, and v0.</p>
        </div>
      </div>
    </footer>
  )
}
