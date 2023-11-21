import React from 'react'
import ReactDOM from 'react-dom/client'
//Importa el App.jsx
import App from './App.jsx'
import './index.css'

//Esto permite importar el sessionUserId, que es una variable global y la metemos en un window, que es el contexto global del navegador
window.sesionUserId = null

//"pinta" el App.jsx en el "root" del html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
