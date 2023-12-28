import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  )
}

export default App
