import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Header from './components/Header'

// import Botoes from './components/Botoes'

// import App from './App.tsx'
import './index.css'
import Cadastro from './pages/Cadastro'
import EntradaIdFacial from './pages/EntradaIdFacial'
import Acoes from './pages/Acoes'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    
      <Routes>
        
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='entrada' element={<EntradaIdFacial/>}/>
        <Route path='logs' element={<Acoes/>}/>
    
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>,
)
