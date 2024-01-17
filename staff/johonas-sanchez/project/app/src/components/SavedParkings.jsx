import { useState, useEffect } from "react"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import logic from "../logic"

function SavedParkings(props) {
   console.log("SavedParkings")

   const [parkings, setParkings] = useState([])

   useEffect(() => {
      logic
         .retrieveSavedParkings()
         .then((parkingsData) => {
            setParkings(parkingsData)
         })
         .catch((error) => {
            props.onError(error)
         })
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

   return (
      <div>
         <h1>Saved Parkings</h1>
         <MapContainer center={[40.03116, -6.08845]} zoom={15} scrollWheelZoom={true} style={{ width: 550, height: 300 }}>
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
   )
}

export default SavedParkings
