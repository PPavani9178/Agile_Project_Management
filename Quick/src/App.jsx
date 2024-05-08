import React from 'react'
import './index.css'
import Navbar from './pages/Navbar'
import { Link } from 'react-router-dom'
// import signup from './pages/signup'
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div>
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    
      <Navbar />
      
    
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex">
      <div >
      <h2 className="text-3xl font-bold text-slate-50 mt-52 ml-16">Quick Project Managementbrings all your tasks, teammates, and tools together</h2>
      <div className="text-1xl font-bold text-slate-50 mt-6 ml-32">
      <Link to="/pages/signup">
      <button style={{color:"purple",border:"2px solid white",padding:"3px",borderRadius:"10px"}}>Signup</button>
      </Link>
      </div>
      </div>
      {/* style={{width:"50%"}} */}
      <div >
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1440&fm=webp" alt="" />
      </div>
      
    </div>
    </div>
  )
}

export default App