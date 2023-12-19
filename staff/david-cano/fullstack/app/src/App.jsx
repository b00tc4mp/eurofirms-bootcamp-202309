import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Feedback from './library/Feedback'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Hello from './components/Hello'

import logic from './logic'
import { JWTError } from './logic/errors'

export default function App() {
    console.log('App')

    const [feedback, setFeedback] = useState(null)
    const navigate = useNavigate()

    function handleShowRegister() {
        navigate('/register')
        setFeedback(null)
    }

    function handleShowLogin() {
        navigate('/login')
        setFeedback(null)
    }

    function handleShowHome() {
        navigate('/')
        setFeedback(null)
    }

    function handleError(error) {
        if (error instanceof JWTError) {
            logic.logoutUser()

            navigate('/login')
            setFeedback('SESSION IS EXPIRED!!!; please "LOGIN" again')
        } else setFeedback(error.message)
    }

    function handleAcceptFeedback() {
        setFeedback(null)
    }


    return <>
        <Routes>
            <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onSuccess={handleShowHome} onRegisterClick={handleShowRegister} onError={handleError} />} />

            <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onSuccess={handleShowLogin} onLoginClick={handleShowLogin} onError={handleError} />} />

            <Route path="/*" element={logic.isUserLoggedIn() ? <Home onLogout={handleShowLogin} onError={handleError} /> : <Navigate to="/login" />} />

            <Route path="/hello/:name" element={<Hello />} />
        </Routes>

        {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
}
