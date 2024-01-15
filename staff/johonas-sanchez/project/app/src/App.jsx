import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"

import logic from "./logic"
import { CredentialsError, JWTError, SystemError } from "./logic/errors"

function App() {
   const navigate = useNavigate()

   function handleRegisterShow() {
      navigate("/register")
   }

   function handleLoginShow() {
      navigate("/login")
   }

   function handleHomeShow() {
      navigate("/")
   }

   function handleError(error) {
      if (error instanceof JWTError) {
         logic.logoutUser()

         navigate("/login")
         setFeedback("Session expired, please login again")
      } else if (error instanceof CredentialsError) {
         setFeedback("Wrong credentials, try again")
      } else if (error instanceof SystemError) {
         setFeedback("Something went wrong. Please, try again later")
      } else setFeedback(error.message)
   }

   return (
      <>
         {/* <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
      </Routes> */}
         <Routes>
            <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onSuccess={handleHomeShow} onError={handleError}/>} />

            <Route
               path="/register"
               element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} onError={handleError}/>}
            />

            <Route path="/*" element={logic.isUserLoggedIn() ? <Home onLogout={handleLoginShow} onError={handleError}/> : <Navigate to="/login" />} />
         </Routes>
      </>
   )
}

export default App
