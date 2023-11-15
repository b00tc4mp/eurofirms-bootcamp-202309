import Login from "./views/Login"
import React from "react"
import Logo from "./components/Logo"
import Register from "./views/Register"
import Home from "./views/Home"

function App() {
    const viewState = React.useState('login')
    const view = viewState[0]
    const setView = viewState[1]

    function handleShowRegister() {
        setView('register')
    }

    function handleShowLogin() {
        setView('login')
    }

    function handleShowHome() {
        setView('home')
    }

    return <>
        {<Logo />}

        {view === 'login' ? <Login  onSuccess={handleShowHome} onRegisterClick={handleShowRegister} /> : null}

        {view === 'register' ? <Register onSuccess={handleShowLogin}  onLoginClick = {handleShowLogin}/> : null}

        {view === 'home' ? <Home onLogout={handleShowLogin} /> : null}
    </>
}

export default App