import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

import logic from "../logic"

import { Button, Link, Container } from "../library"

import { ParkingDetail, SavedParkings, SelectedMarkerOptions, UserProfile } from "../components"

function Map({ onError }) {
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

   function refreshParkings() {
      if (parkingId) {
         logic
            .retrieveParking(parkingId)
            .then((parking) => {
               const long = parking.location.coordinates[0]
               const lat = parking.location.coordinates[1]

               logic
                  .retrieveParkingsByGeo(lat, long, dist)
                  .then((parkings) => {
                     setSelectedMarker(parkingId)
                     setLat(lat)
                     setLong(long)
                     setParkings(parkings)
                  })
                  .catch((error) => {
                     onError(error)
                  })
            })
            .catch((error) => {
               onError(error)
            })
      } else {
         logic
            .retrieveParkingsByGeo(lat, long, dist)
            .then((parkings) => {
               setParkings(parkings)
               setSelectedMarker(null)
            })
            .catch((error) => {
               onError(error)
            })
      }
   }

   useEffect(() => {
      refreshParkings()
   }, [parkingId])

   function handleDetailClick(event) {
      event.preventDefault()

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
      navigate(`/parkings/${parkingId}`)
      console.log(parkingId)
   }

   function handleMarkerUnClick() {
      setSelectedMarker(false)
      setShowDetails(false)
   }

   function handleParkingSaveToggle() {
      refreshParkings()
   }

   function handleParkingConfirmToggle() {
      refreshParkings()
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
                  ></Marker>
               ))}
            </MapContainer>
            {selectedMarker && (
               <SelectedMarkerOptions
                  selectedMarker={selectedMarker}
                  onMarkerUnClick={handleMarkerUnClick}
                  onDetailClick={handleDetailClick}
                  parkings={parkings}
                  onError={onError}
                  onParkingSaveToggled={handleParkingSaveToggle}
                  onParkingConfirmToggled={handleParkingConfirmToggle}
               />
            )}

            {showDetails && <ParkingDetail parkingId={selectedMarker} onError={onError} />}
         </div>
      </Container>
   )
}

export default Map
