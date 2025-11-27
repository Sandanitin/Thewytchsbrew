import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BookingProvider } from './context/BookingContext'
import Home from './pages/Home'

function App() {
  return (
    <BookingProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BookingProvider>
  )
}

export default App