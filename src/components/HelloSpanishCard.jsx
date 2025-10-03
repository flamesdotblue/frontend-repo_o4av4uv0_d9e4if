import { useEffect, useState, useCallback } from 'react'
import { Globe, RefreshCw } from 'lucide-react'

export default function HelloSpanishCard() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const callApi = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const base = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '')
      const url = `${base}/api/sayhelloinspanish`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setMessage(data.message || JSON.stringify(data))
    } catch (e) {
      setError(e.message || 'Something went wrong')
      setMessage('')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    callApi()
  }, [callApi])

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-sky-500 text-white flex items-center justify-center">
              <Globe className="h-5 w-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold">Say Hello in Spanish (API)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            This card calls the backend endpoint at <code className="text-gray-900">/api/sayhelloinspanish</code> and displays the response.
          </p>

          <div className="rounded-lg border bg-gray-50 p-4 text-sm">
            {loading && <p className="text-gray-500">Calling API...</p>}
            {!loading && error && (
              <p className="text-red-600">Error: {error}</p>
            )}
            {!loading && !error && message && (
              <p className="text-emerald-700 font-medium">{message}</p>
            )}
          </div>

          <div className="mt-6">
            <button
              onClick={callApi}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <RefreshCw className="h-4 w-4" />
              Call API Again
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
