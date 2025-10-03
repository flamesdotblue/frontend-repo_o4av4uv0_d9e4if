import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Vibe Coding Platform</h1>
            <p className="text-sm text-gray-500">Build fast. Preview instantly.</p>
          </div>
        </div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Powered by Vite
        </a>
      </div>
    </header>
  )
}
