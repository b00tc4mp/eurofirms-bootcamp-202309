import { useState, useEffect } from "react"

import logic from "../logic"

import { Button, Link, Container } from "../library"

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
      <Container align="center">
         <header className="flex justify-between items-center w-full mt-0 mb-5 bg-[ghostwhite] px-4 py-2" aria-label="Header">
            <span aria-label="User name">Hola <strong>{name}</strong></span>
            <Button onClick={handleLogoutClick}>Logout</Button>
         </header>

         <div className="">
            <h1>Home</h1>
         </div>
      </Container>
   )
}

export default Home
