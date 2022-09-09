import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from './pages'
function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 h-screen">
        {/* Navbar */}
        <Navbar />
        {/* main */}
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/search/:q' element={<SearchFeed />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/video/:id' element={<VideoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
