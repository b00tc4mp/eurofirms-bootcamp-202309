import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import {  SavedParkings, UserProfile, Map } from "../components"

function Home(props) {
   console.log("Home")

   const [name, setName] = useState(null)
   const [parkings, setParkings] = useState([])
   const [user, setUser] = useState(null)

   const navigate = useNavigate()

   // const long = 40.030403
   // const lat = -6.087581
   // const dist = 1000

   useEffect(() => {
      logic
         .retrieveUser()
         .then((user) => {
            setName(user.name)
            setUser(user)
   //          logic
   //             .retrieveParkingsByGeo(lat, long, dist)
   //             .then((parkings) => {
   //                setParkings(parkings)
   //             })
   //             .catch((error) => {
   //                props.onError(error)
   //             })
         })
         .catch((error) => {
            props.onError(error)
         })
   }, [])

   function handleSavedClick(event) {
      event.preventDefault()

      navigate("/saved")
   }

   function handleHomeClick(event) {
      event.preventDefault()

      navigate("/")
   }

   function handleUserClick(event) {
      event.preventDefault()

      navigate("/user-profile")
   }

   function handleLogoutClick() {
      logic.logoutUser()

      props.onLogout()
   }

   return (
      <Container align="center">
         <header className="flex justify-between items-center w-full mt-0 mb-5 bg-[ghostwhite] px-4 py-2" aria-label="Header">
            <Link className="p-0" onClick={handleHomeClick}>
               Inicio
            </Link>
            <Link className="p-0" onClick={handleSavedClick}>
               Saved
            </Link>
            <span aria-label="User name">
               Hola{" "}
               <Link onClick={handleUserClick}>
                  <strong>{name}</strong>
               </Link>
            </span>
            <Button onClick={handleLogoutClick}>Logout</Button>
         </header>

         <Routes>
            <Route
               path="/"
               element={
                  <Map onError={props.onError}/>
               }
            />

            <Route
               path="/parkings/:parkingId/*"
               element={
                  <Map onError={props.onError}/>
               }
            />

            <Route path="/saved" element={<SavedParkings onError={props.onError} />} />

            <Route
               path="/saved/:parkingId/*"
               element={
                  <SavedParkings onError={props.onError}/>
               }
            />

            <Route path="/user-profile/*" element={<UserProfile onError={props.onError} />} />
         </Routes>
      </Container>
   )
}

export default Home
