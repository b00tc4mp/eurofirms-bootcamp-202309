import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import SavedParkings from "../components/savedParkings"

function Home(props) {
   console.log("Home")

   const [name, setName] = useState(null)
   const [parkings, setParkings] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      logic
         .retrieveUser()
         .then((user) => {
            setName(user.name)
            // Llamar a retrieveParkings y actualizar el estado parkings
            logic
               .retrieveParkings()
               .then((parkingsData) => {
                  setParkings(parkingsData)
               })
               .catch((error) => {
                  props.onError(error)
               })
         })
         .catch((error) => {
            props.onError(error)
         })
   }, [props])

   function handleSavedClick(event) {
      event.preventDefault()

      navigate("/saved")
   }

   function handleHomeClick(event) {
      event.preventDefault()

      navigate("/")
   }

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
            <Link className="p-0" onClick={handleHomeClick}>
               Inicio
            </Link>
            <Link className="p-0" onClick={handleSavedClick}>
               Saved
            </Link>
            <span aria-label="User name">
               Hola <strong>{name}</strong>
            </span>
            <Button onClick={handleLogoutClick}>Logout</Button>
         </header>

         <div className="">
            <h1>
               <strong>Home</strong>
            </h1>
            {/* <h2>
               <strong>Lista de Parkings:</strong>
            </h2>
            <ul>
               {parkings.map((parking) => (
                  <li key={parking.id}>
                     <p>Ubicación: {`${parking.location.coordinates[1]}, ${parking.location.coordinates[0]}`}</p>
                  </li>
               ))}
            </ul> */}
         </div>
         <Routes>

            <Route path="/" element={
               <div>
            <MapContainer center={[40.03116, -6.08845]} zoom={13} scrollWheelZoom={true} style={{ width: 400, height: 200 }}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {parkings.map((parking) => (
                  <Marker key={parking.id} position={[parking.location.coordinates[0], parking.location.coordinates[1]]}>
                     <Popup>Ubicación: {`${parking.location.coordinates[0]}, ${parking.location.coordinates[1]}`}</Popup>
                  </Marker>
               ))}
            </MapContainer>
         </div>
            } />

            
            <Route path="/saved" element={<SavedParkings />} />

            {/* <Route path="/user-profile/*" element={<UserProfile  onError={props.onError} />} /> */}


         </Routes>
         
      </Container>
   )
}

export default Home
