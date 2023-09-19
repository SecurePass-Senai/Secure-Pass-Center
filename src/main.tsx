import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Header from './components/Header'

// import Botoes from './components/Botoes'

// import App from './App.tsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    
      <Routes>
        
        
       
    
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>,
)
