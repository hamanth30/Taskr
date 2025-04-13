import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import './App.css'
import Completed from './components/Completed'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'

function App() {
  const [completedTasks, setCompletedTasks] = useState([]); // State for completed tasks

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home setCompletedTasks={setCompletedTasks} />} />
    //     <Route path="/completed" element={<Completed completedTasks={completedTasks} />} />
    //   </Routes>
    // </Router>

    <Login/>
  );
}

export default App;