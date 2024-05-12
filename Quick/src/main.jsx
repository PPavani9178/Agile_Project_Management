import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('app')).render(
  <ChakraProvider>
    <Router>
    <App />
  </Router>
  </ChakraProvider>
    
)
