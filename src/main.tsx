import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
// import App from './App.tsx'
import './index.css'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'
// import Acoes from './pages/Acoes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/* <App /> */}
    {/* <Acoes /> */}
    <Perfil/>
    <Cadastro />
  </React.StrictMode>,
)
