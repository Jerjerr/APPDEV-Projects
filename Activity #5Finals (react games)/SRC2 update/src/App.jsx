import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Games from './components/Games.jsx'
import Game from './components/Game.jsx'
import Navbar from './components/Navbar.jsx'
import NotFound from './components/NotFound.jsx'

import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <br/ ><br/ ><br/ >
    <br/ ><br/ ><br/ >

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