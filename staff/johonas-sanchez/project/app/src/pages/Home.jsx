import { useState, useEffect } from "react"

import logic from "../logic"

function Home(props) {
   console.log("Home")

   const [name, setName] = useState(null)

   useEffect(() => {
      logic
         .retrieveUser()
         .then((user) => {
            setName(user.name)
         })
         .catch((error) => {
            props.onError(error)
         })
   }, [props])

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
         <div className="">
            <h1>Home</h1>
            <span aria-label="User name">Hola {name}</span>
         </div>

         <button onClick={handleLogoutClick}>Logout</button>
      </>
   )
}

export default Home
