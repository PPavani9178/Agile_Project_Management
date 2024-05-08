import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('app')).render(
    <Router>
    <App />
  </Router>
)
