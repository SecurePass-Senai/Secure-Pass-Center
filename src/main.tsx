import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
// import App from './App.tsx'
import './index.css'
import Cadastro from './pages/Cadastro'
import IdFacial from './pages/IdFacial'
// import Acoes from './pages/Acoes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/* <App /> */}
    {/* <Acoes /> */}
    {/* <Cadastro /> */}
    <IdFacial/> 
  </React.StrictMode>,
)
