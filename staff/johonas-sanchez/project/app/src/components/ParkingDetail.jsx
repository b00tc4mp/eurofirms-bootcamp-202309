import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { Button, Link, Container } from "../library"

import logic from "../logic"

function ParkingDetail(props) {
   console.log("Parking Detail")


   const navigate = useNavigate()
   
   const { parkingId } = useParams()
   // const [parkingData, setParkingData] = useState(null)

   // useEffect(() => {
   //    logic
   //       .retrieveParking(parkingId)
   //       .then((data) => {
   //          setParkingData(data)
   //       })
   //       .catch((error) => {
   //          props.onError(error)
   //       })
   // }, [parkingId,props])

   function handleReturnClick() {
      navigate("/")
   }

   return (
      <div className="text-center">
         <Link className="text-blue-700 hover:underline" onClick={handleReturnClick}>
            &lt; Volver
         </Link>
         <h1 className="mt-4">Parking Detail</h1> 
            <p>
               Parking ID: <strong>{parkingId}</strong>
            </p>
      </div>
   )
}

export default ParkingDetail
