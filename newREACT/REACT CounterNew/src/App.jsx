import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center><Header/></center>
      <Counter/>
      <Footer/>
    </>
  )
}

export default App
