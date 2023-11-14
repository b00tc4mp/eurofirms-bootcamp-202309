import React from "react";
import Logo from "./components/Logo"
import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";

function App() {
  console.log('App')

  const viewState = React.useState('login')
  // const viewState = React.useState('home')
  const view = viewState[0]
  const setView = viewState[1]

  function handleRegisterShow() {
      setView('register')
  }

  function handleLoginShow() {
      setView('login')
  }

  function handleHomeShow() {
      setView('home')
  }

  return <>
      <Logo />

      {view === 'login' ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} /> : null}

      {view === 'register' ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

      {view === 'home' ? <Home onLogout={handleLoginShow} /> : null}
      {/* {view === 'home' ? <div><h1>Hola Mundo</h1></div>: null} */}
  </>
}

export default App;