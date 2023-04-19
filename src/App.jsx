import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/navbar'
import { MoviePane } from './components/MoviePane'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <Navbar/>
    <MoviePane/>
    </>
  )
}

export default App
