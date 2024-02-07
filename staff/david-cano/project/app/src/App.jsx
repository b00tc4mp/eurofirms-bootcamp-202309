import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import { useState,useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Feedback from './library/Feedback'
import logic from './logic'
import { CredentialsError, JWTError, SystemError } from './logic/errors'

function App() {
  console.log('App')

  const [feedback, setFeedback] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const navigate = useNavigate()

useEffect (() => {
  try {
    logic.retrieveUser((error, user) => {
      if (error){
        handleError()
        return
      }
      setUserRole(user.role)
    })
  } catch (error) {
    console.error()
  }
}, [])

  function handleRegisterShow() {
    navigate('/register')
    setFeedback(null)
  }

  function handleCartShow() {
    navigate('/cart')
    setFeedback(null)
  }

  function handleLoginShow() {
    navigate('/login')
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

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/login" /> : <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} onError={handleError} />} />

        <Route path="/login" element={logic.isUserLoggedIn() &&
          user.role.includes("admin")? <Navigate to="/dashboard" /> : <Login onSuccess={handleCartShow} onRegisterClick={handleRegisterShow} onError={handleError} />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
  )
}

export default App
