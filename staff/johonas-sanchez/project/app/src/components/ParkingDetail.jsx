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
   const userId = logic.getLoggedInUserId()
   const isManager = logic.isUserManager()
   const isRegular = logic.isUserRegular()

   function refreshReviews() {
      logic
         .retrieveReviews(parkingId)
         .then((reviews) => {
            setReviews(reviews)
         })
         .catch((error) => {
            props.onError(error)
         })
   }

   useEffect(() => {
      if (parkingId) {
         refreshReviews()
      }
   }, [parkingId])

   function handleDeleteReviewClick(reviewId) {
      // Utilizar window.confirm para mostrar un mensaje de confirmación
      const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta revisión?")

      if (confirmDelete) {
         logic
            .deleteReview(reviewId)
            .then(() => {
               refreshReviews()
            })
            .catch((error) => {
               props.onError(error)
            })
      }
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
            reviews.reverse().map((review) => (
               <div key={review.id} className="border-solid border border-black p-3 mb-6">
                  <p>
                     Author: <strong>{review.author.name}</strong>
                  </p>
                  <p>
                     Valuation: <strong>{review.valuation}</strong>
                  </p>
                  <p>Comentario: {review.comment}</p>
                  <div className="flex items-center justify-center mt-2">
                     {isManager && (
                        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteReviewClick(review.id)}>
                           Eliminar Comentario (Manager)
                        </button>
                     )}
                     {isRegular && review.author.id === userId && (
                        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteReviewClick(review.id)}>
                           Eliminar Comentario (Regular)
                        </button>
                     )}
                  </div>
               </div>
            ))
         ) : (
            <p>Parking sin comentarios</p>
         )}
      </div>
   )
}

export default ParkingDetail
