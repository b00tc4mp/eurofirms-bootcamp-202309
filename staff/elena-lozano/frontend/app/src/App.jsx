//Esto importa el Login.jsx
import Login from "./views/Login"
import Register from "./views/Register"
import Home from "./views/Home"
import Logo from "./components/Logo"
import React from "react"


function App() {
  console.log("App")

  const viewState = React.useState("login")
  const view = viewState[0]
  const setView = viewState[1]

  function handleRegisterShow() {
    setView("register")
  }

  function handleLoginShow() {
    setView("login")
  }

  function handleHomeShow() {
    setView("home")
  }

  //Comentar el Logo  con {/*... */} para que no de por saco
  return <>
    <Logo />

    {view === "login" ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} /> : null}

    {view === "register" ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

    {view === "home" ? <Home onLogout={handleLoginShow} /> : null}
  </>
}
//Hace que este archivo sea exportable 
export default App
