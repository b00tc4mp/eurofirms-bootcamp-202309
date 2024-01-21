import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import { ParkingDetail, SavedParkings, UserProfile } from "../components"

function Home(props) {
   console.log("Home")

   const [name, setName] = useState(null)
   const [parkings, setParkings] = useState([])
   const [selectedMarker, setSelectedMarker] = useState(null)
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
            // Llamar a retrieveParkings y actualizar el estado parkings
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
   }, [props])

   function handleSavedClick(event) {
      event.preventDefault()

      navigate("/saved")
   }

   function handleDetailClick(event) {
      event.preventDefault()

      navigate(`/parking-detail/${selectedMarker}`)
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

   const iconClicked = new L.Icon({
      iconUrl: "/red-marker.svg",
      iconRetinaUrl: "/red-marker.svg",
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(60, 75),
      className: "leaflet-div-icon-no-border",
   })

   const defaultIcon = new L.Icon({
      iconUrl: "/blue-marker.png",
      iconRetinaUrl: "/blue-marker.png",
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(30, 45),
      className: "leaflet-div-icon-no-border",
   })

   function handleMarkerClick(parkingId) {
      setSelectedMarker(parkingId)
   }

   function handleMarkerUnClick() {
      setSelectedMarker(false)
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
                  <div className="mb-8">
                     <MapContainer center={[40.03116, -6.08845]} zoom={15} scrollWheelZoom={true} style={{ width: 550, height: 300 }}>
                        <TileLayer
                           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {parkings.map((parking) => (
                           <Marker
                              icon={parking.id === selectedMarker ? iconClicked : defaultIcon}
                              key={parking.id}
                              position={[parking.location.coordinates[0], parking.location.coordinates[1]]}
                              eventHandlers={{
                                 click: (e) => {
                                    handleMarkerClick(parking.id)
                                 },
                              }}
                           >
                              {/* <Popup>
                                 Ubicación: {`${parking.location.coordinates[0]}, ${parking.location.coordinates[1]}`} {parking.locator.name}
                              </Popup> */}
                           </Marker>
                        ))}
                     </MapContainer>
                     {selectedMarker && (
                        <div>
                           <div className="my-4">
                              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleMarkerUnClick()}>
                                 Eliminar seleccion
                              </button>
                           </div>
                           <div className="border-solid border border-black p-3">
                              {parkings.find((parking) => parking.id === selectedMarker)?.saved ? (
                                 <div className="flex items-center mb-4">
                                    <p className="font-bold mr-4">Plaza guardada</p>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">UnSave Plaza</button>
                                 </div>
                              ) : (
                                 <div className="flex items-center mb-4">
                                    <p className="font-bold mr-4">Plaza no guardada</p>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Save Plaza</button>
                                 </div>
                              )}

                              {selectedMarker && parkings.find((parking) => parking.id === selectedMarker)?.confirmations.includes(user.id) ? (
                                 <div className="flex items-center mb-4">
                                    <p className="font-bold mr-4">Plaza confirmada por ti</p>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Desconfirmar Plaza</button>
                                 </div>
                              ) : (
                                 <div className="flex items-center mb-4">
                                    <p className="font-bold mr-4">Plaza no confirmada por ti</p>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Confirmar Plaza</button>
                                 </div>
                              )}

                              <div className="flex items-center justify-start mb-4">
                                 {user.role === "Manager" && <button className="bg-blue-500 text-white px-2 py-1 rounded">EliminarParking</button>}

                                 {user.role === "User" &&
                                    parkings.find(
                                       (parking) =>
                                          parking.id === selectedMarker && parking.locator.id === user.id && parking.confirmations.length === 0
                                    ) !== undefined && <button className="bg-blue-500 text-white px-2 py-1 rounded">EliminarParking</button>}
                              </div>

                              <div className="flex items-center mb-4">
                                 <Link className="hover:text-blue-700" onClick={handleDetailClick}>Ver detalle</Link>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               }
            />

            <Route path="/parking-detail/:parkingId" element={<ParkingDetail onError={props.onError} />} />

            <Route path="/saved" element={<SavedParkings onError={props.onError} />} />

            <Route path="/user-profile/*" element={<UserProfile onError={props.onError} />} />
         </Routes>
      </Container>
   )
}

export default Home
