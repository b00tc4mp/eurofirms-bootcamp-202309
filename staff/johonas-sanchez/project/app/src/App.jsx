import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"

import logic from "./logic"

function App() {

  function handleRegisterShow() {
    navigate("/register")
 }

  function handleLoginShow() {
    navigate("/login")
 }

 function handleHomeShow() {
    navigate("/")
 }

  return (
    <>
    {/* <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
      </Routes> */}
               <Routes>
            <Route
               path="/login"
               element={
                  logic.isUserLoggedIn() ? (
                     <Navigate to="/" />
                  ) : (
                     <Login onSuccess={handleHomeShow}  />
                  )
               }
            />

            <Route
               path="/register"
               element={
                  logic.isUserLoggedIn() ? (
                     <Navigate to="/" />
                  ) : (
                     <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} />
                  )
               }
            />

            <Route
               path="/*"
               element={logic.isUserLoggedIn() ? <Home onLogout={handleLoginShow} /> : <Navigate to="/login" />}
            />


         </Routes>
    </>
  )
}

export default App
