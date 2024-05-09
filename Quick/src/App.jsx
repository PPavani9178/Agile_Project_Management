import React from 'react'
import './index.css'
import Navbar from './pages/Navbar'
import { Link } from 'react-router-dom'

import { BrowserRouter as Router} from "react-router-dom";
import { Route,Routes} from 'react-router-dom';
import Wokshops from './pages/Wokshops';
import Solutions from './pages/Solutions';
import Home from './pages/Home';
import Board from './components/Board';
import Signup from './pages/Signup';
import About from './pages/About';


function App() {
  return (
    <div>
         {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <img src="./photos/logo.png" alt="" width="10%" height="10%"></img> */}
    <div>
    <Navbar />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Wokshops/>} />
        <Route path="/solutions" element={<Solutions/>} />
        <Route path="/newBoard" element={<Board/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    
    {/* <button onClick={<Signup/>} style={{border:"2px solid black"}}>Signup</button> */}
    </div>
      
      
    
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex">
      <div >
      <h2 className="text-3xl font-bold text-slate-50 mt-52 ml-16">Quick Project Managementbrings all your tasks, teammates, and tools together</h2>
      <div className="text-1xl font-bold text-slate-50 mt-6 ml-32">
      {/* <Link to="/pages/signup">
      <button style={{color:"purple",border:"2px solid white",padding:"3px",borderRadius:"10px"}}>Signup</button>
      </Link> */}
      {/* <Signup></Signup> */}
      {/* <Routes>
        <Route path="/pages/signup" element={signup}/>
      </Routes> */}
      </div>
      </div>
      {/* style={{width:"50%"}} */}
      <div >
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1440&fm=webp" alt="" />
      </div>
      {/* <Board/> */}
    </div>
    <h1 className="text-3xl font-bold text">
      ABOUT
    </h1>
    <About/>
    </div>
  )
}

export default App