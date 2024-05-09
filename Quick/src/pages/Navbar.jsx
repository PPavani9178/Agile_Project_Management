import React from 'react'
import { Routes, Route, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div class="border-b border-b-lime-600 border-t border-t-lime-600 border-l border-l-lime-600 border-r border-r-lime-600">
        
      <div class="flex gap-10  font-sans p-2 ml-80">
        
       
      <Link to="/">Home</Link>
      <Link to="/workshop">Workshops</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/newBoard">Board</Link>
      {/* <Link to="/signup">signup</Link> */}
      <Link to="/signup">Signup</Link>
      <Link to="/about">About</Link>
      
    </div>
    </div>
  )
}

export default Navbar