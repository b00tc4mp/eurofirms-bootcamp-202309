import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { Button, Link, Container } from "../library"

import logic from "../logic"

import NewReview from "./NewReview"

function ParkingDetail(props) {
   console.log("Parking Detail")

   const navigate = useNavigate()

   const { parkingId } = useParams()
   const [parking, setParking] = useState(null)
   const [reviews, setReviews] = useState(null)
   const [showNewReviews, setShowNewReviews] = useState(null)

   function refreshReviews() {
      // logic
      //    .retrieveParking(parkingId)
      //    .then((data) => {
      //       setParking(data)
            logic
               .retrieveReviews(parkingId)
               .then((reviews) => {
                  setReviews(reviews)
               })
               .catch((error) => {
                  props.onError(error)
               })
         // })
         // .catch((error) => {
         //    props.onError(error)
         // })
   }

   useEffect(() => {
      refreshReviews()
   }, [parkingId])

   // function handleReturnClick() {
   //    navigate("/")
   // }

   function handleDeleteReviewClick(reviewId) {
      logic
         .deleteReview(reviewId)
         .then(() => {
            refreshReviews()
         })
         .catch((error) => {
            props.onError(error)
         })
   }

   function handleNewReviewClick() {
      setShowNewReviews(true)
   }

   function handleNewReviewCancelClick() {
      setShowNewReviews(false)
   }

   function handleNewReviewSubmit() {
      refreshReviews()
      setShowNewReviews(false)
   }

   return (
      <div className="text-center mt-8">
         <div>
            <h2 className="font-bold mt-4">Comentarios</h2>
            <button className="mb-3" title="New review" aria-label="New review (+)" onClick={handleNewReviewClick}>
               +
            </button>
            {reviews && reviews.length > 0 && (
               <div className="my-4">
                  <p>
                     La media de las valuaciones es:{" "}
                     <strong>{(reviews.reduce((sum, review) => sum + review.valuation, 0) / reviews.length).toFixed(1)}</strong>
                  </p>
               </div>
            )}
            {showNewReviews && (
               <NewReview onNewReviewSubmit={handleNewReviewSubmit} onNewReviewCancelClick={handleNewReviewCancelClick} parkingId={parkingId} />
            )}
         </div>

         {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
               <div key={review.id} className="border-solid border border-black p-3 mb-6">
                  <p>
                     Author: <strong>{review.author.name}</strong>
                  </p>
                  <p>
                     Valuation: <strong>{review.valuation}</strong>
                  </p>
                  <p>Comentario: {review.comment}</p>
                  <button onClick={() => handleDeleteReviewClick(review.id)} className="bg-blue-500 text-white px-2 py-1 rounded mt-3">
                     Eliminar review
                  </button>
               </div>
            ))
         ) : (
            <p>Parking sin comentarios</p>
         )}
      </div>
   )
}

export default ParkingDetail
