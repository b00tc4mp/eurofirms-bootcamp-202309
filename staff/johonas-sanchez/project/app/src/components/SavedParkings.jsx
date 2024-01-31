import { useState, useEffect } from "react"

import { Routes, Route, useNavigate, useParams } from "react-router-dom"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import logic from "../logic"

import { ParkingDetail, SelectedMarkerOptions } from "../components"

function SavedParkings(props) {
   console.log("SavedParkings")

   const [parkings, setParkings] = useState([])
   const [selectedMarker, setSelectedMarker] = useState(null)
   const [showComments, setShowComments] = useState(null)

   const navigate = useNavigate()

   const params = useParams()
   const { parkingId } = params

  function refreshSavedParkings() {
      logic
      .retrieveSavedParkings()
      .then((parkings) => {
         setSelectedMarker(parkingId)
         setParkings(parkings)
      })
      .catch((error) => {
         props.onError(error)
      })
   }

   useEffect(() => {
      refreshSavedParkings()
   }, [props])

   function handleCommentsClick(event) {
      event.preventDefault()

      setShowComments(!showComments)
   }

   const greenIcon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
   })

   const defaultIcon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
   })


   function handleMarkerClick(parkingId) {
      navigate(`/saved/${parkingId}`)
      console.log(parkingId)
   }

   function handleMarkerUnClick() {
      setSelectedMarker(false)
      setShowComments(false)
   }

   function handleParkingSaveToggle() {
      refreshSavedParkings()
      navigate("/saved")
   }

   function handleParkingConfirmToggle() {
      refreshSavedParkings()
   }

   return (
      <div>
         <h1>Saved Parkings</h1>
         <MapContainer center={[40.03116, -6.08845]} zoom={15} scrollWheelZoom={true} style={{ width: 550, height: 300 }}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {parkings.map((parking) => (
               <Marker
               icon={parking.id === selectedMarker ? greenIcon : defaultIcon}
               key={parking.id}
               position={[parking.location.coordinates[0], parking.location.coordinates[1]]}
               eventHandlers={{
                  click: (e) => {
                     handleMarkerClick(parking.id)
                  },
                  mouseover: (e) => {
                     if (e.target && e.target.setIcon) {
                        e.target.setIcon(greenIcon)
                     }
                  },
                  mouseout: (e) => {
                     if (e.target && e.target.setIcon && parking.id !== selectedMarker) {
                        e.target.setIcon(defaultIcon)
                     }
                  },
               }}
            ></Marker>
            ))}
         </MapContainer>
         <div className="mt-8">
               {selectedMarker && (
                  <SelectedMarkerOptions
                     selectedMarker={selectedMarker}
                     onMarkerUnClick={handleMarkerUnClick}
                     onDetailClick={handleCommentsClick}
                     parkings={parkings}
                     onError={props.onError}
                     onParkingSaveToggled={handleParkingSaveToggle}
                     onParkingConfirmToggled={handleParkingConfirmToggle}
                     showComments={showComments}
                  />
               )}
            </div>

            {showComments && <ParkingDetail parkingId={selectedMarker} onError={props.onError} />}
      </div>
   )
}

export default SavedParkings
