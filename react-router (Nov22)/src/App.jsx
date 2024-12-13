import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Games from './components/Games.jsx'
import Game from './components/Game.jsx'
import NotFound from './components/NotFound.jsx'

import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <h1>This is my react page</h1>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/games">Games</Link></li>
          
        </ul>
      </nav>
      
{/* Routes for our application */}
        <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
          <Route path= "/games" >
            <Route index element = {<Games />} />
            <Route path = ":gameId" element = {<Game />} />
            </Route> 
        <Route path= "*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App