import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Acoes from './pages/Acoes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Acoes />
  </React.StrictMode>,
)
