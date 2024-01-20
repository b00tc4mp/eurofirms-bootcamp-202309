import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { Button, Link, Container } from "../library"

import logic from "../logic"

function ParkingDetail(props) {
   console.log("Parking Detail")

   const navigate = useNavigate();

   const [parkings, setParkings] = useState([])

   // useEffect(() => {
   //    logic
   //       .retrieveSavedParkings()
   //       .then((parkingsData) => {
   //          setParkings(parkingsData)
   //       })
   //       .catch((error) => {
   //          props.onError(error)
   //       })
   // }, [props])

   function handleReturnClick() {
      navigate("/")
   }

   return (
      <div className="text-center">
         <Link className="text-blue-700 hover:underline" onClick={handleReturnClick}>
            &lt; Volver
         </Link>
         <h1 className="mt-4">Parking Detail</h1> 
      </div>
   )
}

export default ParkingDetail
