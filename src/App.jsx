import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import './App.css'
import Completed from './components/Completed'

function App() {
  const [count, setCount] = useState(0)

  return (
       <Home/>
      //<Completed/>
  )
}

export default App
