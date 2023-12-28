import { useState } from 'react'

import Feedback from './library/Feedback'

import Login from "./views/Login"
import Register from "./views/Register"
import Home from "./views/Home"

import logoutUser from './logic/logoutUser'

import { JWTError } from './utils/errors'

function App() {
    console.log('App')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState(null)

    function handleShowRegister() {
        setView('register')
        setFeedback(null)
    }

    function handleShowLogin() {
        setView('login')
        setFeedback(null)
    }

    function handleShowHome() {
        setView('home')
        setFeedback(null)
    }

    function handleError(error) {
        if (error instanceof JWTError) {
            logoutUser()

            setView('login')
            setFeedback('SESSION EXPIRED!!!; please "LOGIN" again')
        }else setFeedback(error.message)
    }

    function handleAcceptFeedback() {
        setFeedback(null)
    }


    return <>
        {view === 'login' ? <Login onSuccess={handleShowHome} onRegisterClick={handleShowRegister} onError={handleError} /> : null}

        {view === 'register' ? <Register onSuccess={handleShowLogin} onLoginClick={handleShowLogin} onError={handleError} /> : null}

        {view === 'home' ? <Home onLogout={handleShowLogin} onError={handleError} /> : null}

        {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
}

export default App