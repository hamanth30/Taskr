import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import './App.css'
import Completed from './components/Completed'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [completedTasks, setCompletedTasks] = useState([]);
   
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/completed" element={<Completed completedTasks={completedTasks} />} />
    </Routes>
  </Router>
  )
}

export default App
