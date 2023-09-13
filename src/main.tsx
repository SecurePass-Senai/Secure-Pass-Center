import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
// import App from './App.tsx'
import './index.css'
import Cadastro from './pages/Cadastro'
<<<<<<< HEAD
import IdFacial from './pages/IdFacial'
=======
>>>>>>> 19b1ce4c43c146e28c42ee4a306791dfef21dff2
import Acoes from './pages/Acoes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/* <App /> */}
    {<Acoes />}
    {/* <Cadastro /> */}
    {/* <IdFacial/>  */}
  </React.StrictMode>,
)
