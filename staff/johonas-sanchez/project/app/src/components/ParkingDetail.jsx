import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { Button, Link, Container } from "../library"

import logic from "../logic"

function ParkingDetail(props) {
   console.log("Parking Detail")

   const navigate = useNavigate()

   const { parkingId } = useParams()
   const [parking, setParking] = useState(null)
   const [reviews, setReviews] = useState(null)

   useEffect(() => {
      logic
         .retrieveParking(parkingId)
         .then((data) => {
            setParking(data)
            logic
               .retrieveReviews(parkingId)
               .then((reviews) => {
                  setReviews(reviews)
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
            {parking && (
               <div>
                  <p className="mb-3">
                     Parking ID: <strong>{parkingId}</strong>
                  </p>
                  <p>
                     Parking confirmado por: <strong>{parking.confirmations.length} usuarios</strong>
                  </p>
               </div>
            )}
         </div>

         <h2 className="my-4">Reviews</h2>
         <div className="border-solid border border-black p-3">
            {reviews && reviews.length > 0 ? (
               reviews.map((review) => (
                  <div key={review.id} className="mb-3">
                     <p>
                        Author: <strong>{review.author.name}</strong>
                     </p>
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

         {reviews && reviews.length > 0 && (
            <div className="mt-4">
               <h3 className="my-4">Puntuación media del parking</h3>
               <p>
                  La media de las valuaciones es:{" "}
                  <strong>{(reviews.reduce((sum, review) => sum + review.valuation, 0) / reviews.length).toFixed(1)}</strong>
               </p>
            </div>
         )}
      </div>
   )
}

export default ParkingDetail
