import { useState } from 'react'

import Feedback from './library/Feedback'

import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'

import logoutUser from './logic/logoutUser'

import { JWTError } from './utils/errors'

function App() {

  const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
  const [feedback, setFeedback] = useState(null)

  function handleRegisterShow() {
    setView('register')
    setFeedback(null)
  }

  function handleLoginShow() {
    setView('login')
    setFeedback(null)
  }

  function handleHomeShow() {
    setView('home')
    setFeedback(null)
  }

  function handleError(error) {
    if (error instanceof JWTError) {
      logoutUser()

      setView('login')
      setFeedback('Session expired, please login again')
    } else setFeedback(error.message)
  }

  function handleAcceptFeedback() {
    setFeedback(null)
  }

  return <>
    {view === 'login' ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} onError={handleError} /> : null}

    {view === 'register' ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} onError={handleError} /> : null}

    {view === 'home' ? <Home onLogout={handleLoginShow} onError={handleError} /> : null}

    {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
  </>
}

export default App