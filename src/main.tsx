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
import Perfil from './pages/Perfil'
import IdFacial from './pages/IdFacial'
import IdFacialAprovado from './pages/IdFacialAprovado'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    
      <Routes>
        <Route path='idfacial' element={<IdFacial/>}/>
        <Route path='idfacialaprovado' element={<IdFacialAprovado/>}/>
        <Route path='/' element={<EntradaIdFacial/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='logs' element={<Acoes/>}/>
        <Route path='perfil/:id' element={<Perfil/>}/>
    
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>,
)
