import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Wokshops from './Wokshops';
import Solutions from './Solutions';
import Home from './Home';

const Navbar = () => {
  return (
    <div >
        
      <div class="flex gap-4 ">
        
        
      <Link to="/">Home</Link>
      <Link to="/workshop">Workshops</Link>
      <Link to="/solutions">Solutions</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Wokshops/>} />
        <Route path="/solutions" element={<Solutions/>} />
        
      </Routes>
    </div>
    </div>
  )
}

export default Navbar