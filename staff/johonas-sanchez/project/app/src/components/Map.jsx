import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import { ParkingDetail, SavedParkings, SelectedMarkerOptions, UserProfile } from "../components"

function Map(props) {
   console.log("Map")

   const [parkings, setParkings] = useState([])
   const [selectedMarker, setSelectedMarker] = useState(null)
   const [showDetails, setShowDetails] = useState(null)
   const [lat, setLat] = useState(-6.087581)
   const [long, setLong] = useState(40.030403)
   const [dist, setDist] = useState(1000)

   const navigate = useNavigate()

   const params = useParams()
   const { parkingId } = params

   //    const long = 40.030403
   //    const lat = -6.087581
   //    const dist = 1000

   useEffect(() => {
      if (parkingId) {
         logic
            .retrieveParking(parkingId)
            .then((parking) => {
               const long = parking.location.coordinates[0]
               const lat = parking.location.coordinates[1]

               logic
                  .retrieveParkingsByGeo(lat, long, dist)
                  .then((parkingsData) => {
                     setSelectedMarker(parkingId)
                     setLat(lat)
                     setLong(long)
                     setParkings(parkingsData)
                  })
                  .catch((error) => {
                     props.onError(error)
                  })
            })
            .catch((error) => {
               props.onError(error)
            })
      } else {
         logic
            .retrieveParkingsByGeo(lat, long, dist)
            .then((parkingsData) => {
               setParkings(parkingsData)
               setSelectedMarker(null)
            })
            .catch((error) => {
               props.onError(error)
            })
      }
   }, [props])

   function handleDetailClick(event) {
      event.preventDefault()

      // navigate(`/parking-detail/${selectedMarker}`)
      setShowDetails(true)
   }

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
      // setSelectedMarker(parkingId)
      navigate(`/parkings/${parkingId}`)
      console.log(parkingId)
   }

   function handleMarkerUnClick() {
      setSelectedMarker(false)
   }

   return (
      <Container align="center">
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
               <SelectedMarkerOptions
                  selectedMarker={selectedMarker}
                  handleMarkerUnClick={handleMarkerUnClick}
                  handleDetailClick={handleDetailClick}
                  parkings={parkings}
                //   user={user}
               />
            )}

            {showDetails && <ParkingDetail parkingId={selectedMarker} onError={props.onError} />}
         </div>

         <Routes>
            <Route path="/parking-detail/:parkingId" element={<ParkingDetail onError={props.onError} />} />
         </Routes>
      </Container>
   )
}

export default Map
