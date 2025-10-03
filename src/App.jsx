import Header from './components/Header'
import HelloSpanishCard from './components/HelloSpanishCard'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-gray-800 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <HelloSpanishCard />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
