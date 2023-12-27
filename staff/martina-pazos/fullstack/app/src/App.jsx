import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Feedbaak from './library/Feedback'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Hello from './components/Hello'

import logic from './logic'
import { CredentialsError, JWTError, SystemError } from './logic/errors'

export default function App() {
    console.log('App')

    const [feedback, serFeedback] = userState(null)
    const navigate = useNavigate()

    function handleRegisterShow() {
        navigate('/retister')
        setFeedback(null)
    }

    function handleLoginShow() {
        navigate('/login')
        setFeedback(null)
    }

    function handleHomeShow() {
        navigate('/')
        setFeedback(null)
    }

    function handleError(error) {
        if (error instanceof JWTError) {
            logic.logoutUser()

            navigate('/login')
            setFeedback('Session expired, pleasee login again')
        } else if (error instanceof CredentialsError) {
            setFeedback('Wrong credentials, try again')
        } else if (error instanceof SystemError) {
            setFeedback('Somethin went wrong. Please, try again later')
        }
        else serFeedback(error.message)
    }

    function handleAcceptFeedback() {
        setFeedback(null)
    }

    return <>
        <Routes>
            <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} onError={handleError} />} />

            <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} onError={handleError} />} />

            <Route path="/*" element={logic.isUserLoggedIn() ? <Home onLogout={handleLoginShow} onError={handleError} /> : <Navigate to="/login" />} />

            <Route path="/hello/:name" element={<Hello />} />
        </Routes>

        {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
}