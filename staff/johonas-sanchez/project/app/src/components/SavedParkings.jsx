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

   // function refreshParkings() {
   //    try {
   //       logic.retrieveSavedParkings((error, parkings) => {
   //          if (error) {
   //             props.onError(error)

   //             return
   //          }

   //          setParkings(parkings)
   //       })
   //    } catch (error) {
   //       props.onError(error)
   //    }
   // }

   // function handlePostLikeToggled() {
   //    refreshPosts()
   // }

   // function handlePostSaveToggled() {
   //    refreshPosts()
   // }

   // function handlePostDeleted() {
   //    refreshPosts()
   // }

   function handleCommentsClick(event) {
      event.preventDefault()

      setShowComments(!showComments)
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
