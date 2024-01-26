import React from "react"
import { Link } from "../library"
import logic from "../logic"

function SelectedMarkerOptions({
   selectedMarker,
   onDetailClick,
   parkings,
   onParkingSaveToggled,
   onParkingConfirmToggled,
   showComments,
   onError,
}) {
   const parking = parkings.find((parking) => parking.id === selectedMarker)
   const userId = logic.getLoggedInUserId()
   const isManager = logic.isUserManager()
   const isRegular = logic.isUserRegular()

   function handleParkingSaveToggled() {
      try {
         logic
            .toggleSaveParking(parking.id)
            .then(() => {
               onParkingSaveToggled()
            })
            .catch((error) => {
               props.onError(error)
            })
      } catch (error) {
         onError(error)
      }
   }

   function handleParkingConfirmToggled() {
      try {
         logic
            .toggleConfirmParking(parking.id)
            .then(() => {
               onParkingConfirmToggled()
            })
            .catch((error) => {
               props.onError(error)
            })
      } catch (error) {
         onError(error)
      }
   }

   return (
      <div>
         {/* <div className="my-4">
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={onMarkerUnClick}>
               Eliminar seleccion
            </button>
         </div> */}
         <div className="border-solid border border-black p-3">
            {parking?.saved ? (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza guardada</p>
                  <button onClick={handleParkingSaveToggled} className="bg-blue-500 text-white px-2 py-1 rounded">
                     Desmarcar Plaza
                  </button>
               </div>
            ) : (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza no guardada</p>
                  <button onClick={handleParkingSaveToggled} className="bg-blue-500 text-white px-2 py-1 rounded">
                     Marcar Plaza
                  </button>
               </div>
            )}

            <div className="mb-4">
               {parking && (
                  <div>
                     <p>
                        Plaza confirmada por: <strong>{parking.confirmations.length} usuarios</strong>
                     </p>
                  </div>
               )}
            </div>

            {selectedMarker && parking?.confirmations.includes(userId) ? (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza confirmada por ti</p>
                  <button onClick={handleParkingConfirmToggled} className="bg-blue-500 text-white px-2 py-1 rounded">
                     Desconfirmar Plaza
                  </button>
               </div>
            ) : (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza no confirmada por ti</p>
                  <button onClick={handleParkingConfirmToggled} className="bg-blue-500 text-white px-2 py-1 rounded">
                     Confirmar Plaza
                  </button>
               </div>
            )}

            <div className="flex items-center justify-start mb-4">
               {isManager && <button className="bg-blue-500 text-white px-2 py-1 rounded">Eliminar Parking (Manager)</button>}
               {isRegular && parking.locator.id === userId && parking.confirmations.length === 0 && (
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Eliminar Parking (Regular)</button>
               )}
            </div>

            <div className="flex items-center mb-4">
               <Link className="hover:text-blue-700" onClick={onDetailClick}>
                  {showComments ? "Ocultar comentarios" : "Ver comentarios"}
               </Link>
            </div>
         </div>
      </div>
   )
}

export default SelectedMarkerOptions
