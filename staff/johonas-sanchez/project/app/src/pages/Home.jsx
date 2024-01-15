import logic from '../logic'
import { Routes, Route, useNavigate } from "react-router-dom"

function Home(props) {
   console.log("Home")
   const navigate = useNavigate()

   function handleLogoutClick() {
      logic.logoutUser()

      props.onLogout()

   }

//    function handleHomeClick(event) {
//       event.preventDefault()

//       navigate("/")
//    }

   return (
      <>
         <h1>Home</h1>
         <button onClick={handleLogoutClick}>Logout</button>
      </>
   )
}

export default Home
