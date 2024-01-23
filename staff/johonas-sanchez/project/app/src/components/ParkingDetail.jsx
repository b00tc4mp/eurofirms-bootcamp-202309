import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { Button, Link, Container } from "../library"

import logic from "../logic"

function ParkingDetail(props) {
   console.log("Parking Detail")

   const navigate = useNavigate()

   const { parkingId } = useParams()
   const [parkingData, setParkingData] = useState(null)
   const [reviewsData, setReviewsData] = useState(null)

   useEffect(() => {
      logic
         .retrieveParking(parkingId)
         .then((data) => {
            setParkingData(data)
            logic
               .retrieveReviews(parkingId)
               .then((reviewsData) => {
                  setReviewsData(reviewsData)
               })
               .catch((error) => {
                  props.onError(error)
               })
         })
         .catch((error) => {
            props.onError(error)
         })
   }, [parkingId, props])

   function handleReturnClick() {
      navigate("/")
   }

   return (
      <div className="text-center">
         <h1 className="my-4">Parking Detail</h1>
         <div className="border-solid border border-black p-3">
            {parkingData && (
               <div>
                  <p className="mb-3">
                     Parking ID: <strong>{parkingId}</strong>
                  </p>
                  <p>
                     Parking confirmado por: <strong>{parkingData.confirmations.length} usuarios</strong>
                  </p>
               </div>
            )}
         </div>

         <h2 className="my-4">Reviews</h2>
         <div className="border-solid border border-black p-3">
            {reviewsData && reviewsData.length > 0 ? (
               reviewsData.map((review) => (
                  <div key={review.id} className="mb-3">
                     <p>
                        Valuation: <strong>{review.valuation}</strong>
                     </p>
                     <p>Comentario: {review.comment}</p>
                  </div>
               ))
            ) : (
               <p>Parking sin comentarios</p>
            )}
         </div>

         {reviewsData && reviewsData.length > 0 && (
            <div className="mt-4">
               <h3 className="my-4">Puntuación media del parking</h3>
               <p>
                  La media de las valuaciones es:{" "}
                  <strong>{(reviewsData.reduce((sum, review) => sum + review.valuation, 0) / reviewsData.length).toFixed(1)}</strong>
               </p>
            </div>
         )}
      </div>
   )
}

export default ParkingDetail
