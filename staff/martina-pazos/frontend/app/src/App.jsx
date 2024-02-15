import React from "react"
import Login from "./view/Login"
import Register from "./view/Register"
import Home from "./view/Home"


function App() {
  console.log('App')


  const viewState = React.useState('login')
  const view = viewState[0] // Obtiene la vista actual del estado.
  const setView = viewState[1] // Obtiene la función para cambiar la vista.



  //opción para cambiar la vista a Register 
  function handleRegisterShow() {
    setView('register')
  }

  // Función para cambiar la vista a 'login'.
  function handleLoginShow() {
    setView('login')
  }

  // Función para cambiar la vista a 'home'.
  function handleHomeShow() {
    setView('home')
  }

  // Renderiza el contenido principal de la aplicación.
  return <>
    {view === 'login' ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} /> : null}

    {view === 'register' ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

    {view === 'home' ? <Home onLogout={handleLoginShow} /> : null}
  </>
}

export default App



