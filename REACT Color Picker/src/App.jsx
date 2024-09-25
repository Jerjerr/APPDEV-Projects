import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Footer from './Footer'
import ColorPicker from './ColorPicker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <ColorPicker/>
    <Footer/>
    </>
  )
}

export default App