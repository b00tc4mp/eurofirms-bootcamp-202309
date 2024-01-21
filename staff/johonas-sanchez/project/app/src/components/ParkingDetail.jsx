import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { Button, Link, Container } from "../library"

import logic from "../logic"

function ParkingDetail(props) {
   console.log("Parking Detail")

   const navigate = useNavigate()
   
   const { parkingId } = useParams()
   const [parkingData, setParkingData] = useState(null)

   useEffect(() => {
      logic
         .retrieveParking(parkingId)
         .then((data) => {
            setParkingData(data)
         })
         .catch((error) => {
            props.onError(error)
         })
   }, [parkingId,props])

   function handleReturnClick() {
      navigate("/")
   }

   return (
      <div className="text-center">
         <Link className="text-blue-700 hover:underline" onClick={handleReturnClick}>
            &lt; Volver
         </Link>
         <h1 className="my-4">Parking Detail</h1> 
         <div className="border-solid border border-black p-3">
            <p className="mb-3">
               Parking ID: <strong>{parkingId}</strong>
            </p>
            <p>
               Parking confirmado por: <strong>{parkingData.confirmations.length} usuarios</strong>
            </p>
            </div>
      </div>
   )
}

export default ParkingDetail
