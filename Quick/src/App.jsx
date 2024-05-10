import React from 'react';
import './index.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wokshops from './pages/Wokshops';
import Solutions from './pages/Solutions';
import Home from './pages/Home';
import Board from './components/Board';
import Signup from './pages/Signup';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Wokshops />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/newBoard" element={<Board />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center md:flex-row">
        <div className="text-center md:text-left md:mr-8 mt-8 md:mt-4 ml-4 md:ml-0">
          <h2 className="text-3xl font-bold text-slate-50">Quick Project Management brings all your tasks, teammates, and tools together</h2>
          <div className="text-1xl font-bold text-slate-50 mt-2">
            {/* Content */}
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1440&fm=webp" alt="" className="w-full md:w-auto" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center">ABOUT</h1>
      <About />
      <Footer />
    </div>
  );
}

export default App;
