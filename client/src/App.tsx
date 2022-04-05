import React from 'react'
import './App.css'
import Tracks from './pages/tracks'
import Track from './pages/track'
import { Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/track/:id" element={<Track />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
