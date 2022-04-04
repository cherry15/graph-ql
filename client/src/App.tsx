import React from 'react'
import './App.css'
import Tracks from './pages/tracks'
import Track from './pages/track'
import { Routes, Route } from 'react-router-dom'
// import TrackItem from './components/tracks/track-item'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tracks />} />
        <Route path="/track/:trackId" element={<Track />} />
        {/* <Route path="card" element={<TrackItem />} />  */}
      </Routes>
    </div>
  )
}

export default App
