import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import { CreateNewProduct } from './components'

import logic from './logic'
import { CredentialsError, JWTError, SystemError } from './logic/errors'

import Feedback from './library/Feedback'

function App() {
  console.log('App')

  const [feedback, setFeedback] = useState(null)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  function handleHomeShow() {
    navigate('/')
    setFeedback(null)
  }

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
            navigate ('/')
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

//   function handleCreateNewProduct() {
//     navigate('/new-product')
//     setFeedback(null)
//   }

// //   function handleNewProductSubmit() {
// //     navigate("/")
// //     setTimestamp(Date.now())
// // }

// function handleNewProductCancelClick() {
//     navigate("/dashboard")
// }

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

        <Route path='/cart/*' element={<Cart onLogout={handleHomeShow}  onError={handleError}/>} />

        <Route path='/dashboard/*' element={<Dashboard onLogout={handleHomeShow} onError={handleError} />} />

        <Route path='/new-product' element={<CreateNewProduct onError={handleError} />} />

      </Routes>

      {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
  )
}

export default App
