import { useState, useEffect } from "react"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function Home(props) {
   console.log("Home")

   const [name, setName] = useState(null)
   const [parkings, setParkings] = useState([])

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
            <span aria-label="User name">
               Hola <strong>{name}</strong>
            </span>
            <Button onClick={handleLogoutClick}>Logout</Button>
         </header>

         <div className="">
            <h1>
               <strong>Home</strong>
            </h1>
            <h2>
               <strong>Lista de Parkings:</strong>
            </h2>
            <ul>
               {parkings.map((parking) => (
                  <li key={parking.id}>
                     <p>Ubicación: {`${parking.location.coordinates[1]}, ${parking.location.coordinates[0]}`}</p>
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <MapContainer center={[41.38879, 2.15899]} zoom={13} scrollWheelZoom={false} style={{ width: 400, height: 200 }}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[41.38879, 2.15899]}>
                  <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
               </Marker>
               <Marker position={[41.38879, 2.16899]}>
                  <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
               </Marker>
            </MapContainer>
         </div>
      </Container>
   )
}

export default Home
