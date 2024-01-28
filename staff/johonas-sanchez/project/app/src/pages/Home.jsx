import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import { ParkingDetail, SavedParkings, SelectedMarkerOptions, UserProfile, Map } from "../components"

function Home(props) {
   console.log("Home")

   const [name, setName] = useState(null)
   const [parkings, setParkings] = useState([])
   const [selectedMarker, setSelectedMarker] = useState(null)
   const [showDetails, setShowDetails] = useState(null)
   const [user, setUser] = useState(null)

   const navigate = useNavigate()

   const long = 40.030403
   const lat = -6.087581
   const dist = 1000

   useEffect(() => {
      logic
         .retrieveUser()
         .then((user) => {
            setName(user.name)
            setUser(user)
            logic
               .retrieveParkingsByGeo(lat, long, dist)
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
   }, [])

   function handleSavedClick(event) {
      event.preventDefault()

      navigate("/saved")
   }

   function handleDetailClick(event) {
      event.preventDefault()

      // navigate(`/parking-detail/${selectedMarker}`)
      setShowDetails(true)
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

   //    function handleHomeClick(event) {
   //       event.preventDefault()

   //       navigate("/")
   //    }

   // const iconClicked = new L.Icon({
   //    iconUrl: "/red-marker.svg",
   //    iconRetinaUrl: "/red-marker.svg",
   //    iconAnchor: null,
   //    popupAnchor: null,
   //    shadowUrl: null,
   //    shadowSize: null,
   //    shadowAnchor: null,
   //    iconSize: new L.Point(60, 75),
   //    className: "leaflet-div-icon-no-border",
   // })

   // const defaultIcon = new L.Icon({
   //    iconUrl: "/blue-marker.png",
   //    iconRetinaUrl: "/blue-marker.png",
   //    iconAnchor: null,
   //    popupAnchor: null,
   //    shadowUrl: null,
   //    shadowSize: null,
   //    shadowAnchor: null,
   //    iconSize: new L.Point(30, 45),
   //    className: "leaflet-div-icon-no-border",
   // })

   // function handleMarkerClick(parkingId) {
   //    // setSelectedMarker(parkingId)
   //    navigate(`/parkings/${parkingId}`)
   // }

   // function handleMarkerUnClick() {
   //    setSelectedMarker(false)
   // }

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

         <div className="">
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
