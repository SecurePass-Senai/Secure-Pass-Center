import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'

// import Botoes from './components/Botoes'

// import App from './App.tsx'
import './index.css'
import Cadastro from './pages/Cadastro'
// import Acoes from './pages/Acoes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/* <App /> */}

    {/* <Acoes /> */}
    <Cadastro />

    {/* <Botoes /> */}

  </React.StrictMode>,
)
