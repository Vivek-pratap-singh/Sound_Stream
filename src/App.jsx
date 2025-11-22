import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import { assets } from './assets/assets'  // ✅ Import your assets file

const App = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${assets.bg})` }}>
      <div className="h-[90vh] flex">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
