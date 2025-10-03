import { Shield, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast HMR',
    desc: 'Instant feedback while you code with Vite Hot Module Replacement.'
  },
  {
    icon: Shield,
    title: 'Safe Sandbox',
    desc: 'Isolated backend and frontend with CORS enabled for smooth API calls.'
  },
  {
    icon: Sparkles,
    title: 'Beautiful UI',
    desc: 'Tailwind CSS and modern components for clean, elegant interfaces.'
  }
]

export default function Features() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl">
        <h3 className="text-xl font-semibold mb-6">What you get</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-medium mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
