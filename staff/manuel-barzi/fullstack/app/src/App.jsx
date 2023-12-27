import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Feedback from './library/Feedback'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Hello from './components/Hello'

import logic from './logic'
import { CredentialsError, JWTError, SystemError } from './logic/errors'

export default function App() {
  console.log('App')

  const [feedback, setFeedback] = useState(null)
  const navigate = useNavigate()

  function handleRegisterShow() {
    navigate('/register')
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
      setFeedback('Session expired, please login again')
    } else if (error instanceof CredentialsError) {
      setFeedback('Wrong credentials, try again')
    } else if (error instanceof SystemError) {
      setFeedback('Something went wrong. Please, try again later')
    }
    else setFeedback(error.message)
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