import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Sidebar } from './components'
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from './pages'




function App() {
  const [query, setQuery] = useState('')

  return (
    <BrowserRouter>
      <div className="bg-slate-800 text-white h-screen">
        {/* ========== layout ======== */}
        {/* --- Sidebar --- */}
        <Sidebar setQuery={setQuery} query={query} />
        {/* --- Navbar --- */}
        {/* --- main --- */}
        <main className='md:pl-60 lg:pl-72 xl:pl-80 h-full'>
          <Navbar />
          <div className="container mx-auto main rounded-xl h-full">
            <Routes>
              <Route path='/' element={<Feed query={query} />} />
              <Route path='/search/:q' element={<SearchFeed />} />
              <Route path='/channel/:id' element={<ChannelDetail />} />
              <Route path='/video/:id' element={<VideoDetail />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
