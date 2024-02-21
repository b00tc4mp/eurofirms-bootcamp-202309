import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Feedback from './library/Feedback'
import logic from './logic'
import { CredentialsError, JWTError, SystemError } from './logic/errors'

function App() {
  console.log('App')

  const [feedback, setFeedback] = useState(null)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  function handleRegisterShow() {
    navigate('/register')
    setFeedback(null)
  }

  function handleLoginSuccess() {
    try {
      logic.retrieveUser((error, user) => {
          if (error instanceof SystemError) {
            new SystemError(error.message)
          }

          if (user.role === 'admin') {
            navigate ('/dashboard')
          }else{
            navigate ('/cart')
          }

          setUser(user)
      })
  } catch (error) {
    new SystemError(error.message)
  }

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
        <Route path='/' element={<Home onError={handleError} />} />

        <Route path="/register" element={ <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} onError={handleError} />} />

        <Route path="/login" element={ <Login onSuccess={handleLoginSuccess} onRegisterClick={handleRegisterShow} onError={handleError} />} />

        <Route path='/cart/*' element={<Cart onError={handleError}/>} />

        <Route path='/dashboard' element={<Dashboard onError={handleError} />} />

      </Routes>

      {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
  )
}

export default App
