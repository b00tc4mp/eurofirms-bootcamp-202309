import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Feedback from './library/Feedback'

import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'

import logoutUser from './logic/logoutUser'
import isUserLoggedIn from './logic/isUserLoggedIn'

import { JWTError } from './utils/errors'

function App() {
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
      logoutUser()

      navigate('/login')
      setFeedback('Session expired, please login again')
    } else setFeedback(error.message)
  }

  function handleAcceptFeedback() {
    setFeedback(null)
  }

  return <>
    <Routes>
      <Route path="/login" element={isUserLoggedIn() ? <Navigate to="/" /> : <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} onError={handleError} />} />
      <Route path="/register" element={isUserLoggedIn() ? <Navigate to="/" /> : <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} onError={handleError} />} />
      <Route path="/" element={isUserLoggedIn() ? <Home onLogout={handleLoginShow} onError={handleError} /> : <Navigate to="/login" />} />
    </Routes>

    {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
  </>
}

export default App