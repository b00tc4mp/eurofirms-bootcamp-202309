import React from "react"
import { Link } from "../library"

function SelectedMarkerOptions({ selectedMarker, handleMarkerUnClick, handleDetailClick, parkings, user }) {
   const parking = parkings.find((parking) => parking.id === selectedMarker)

   return (
      <div>
         <div className="my-4">
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleMarkerUnClick()}>
               Eliminar seleccion
            </button>
         </div>
         <div className="border-solid border border-black p-3">
            {parking?.saved ? (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza guardada</p>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">UnSave Plaza</button>
               </div>
            ) : (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza no guardada</p>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Save Plaza</button>
               </div>
            )}

            {/* {selectedMarker && parking?.confirmations.includes(user.id) ? (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza confirmada por ti</p>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Desconfirmar Plaza</button>
               </div>
            ) : (
               <div className="flex items-center mb-4">
                  <p className="font-bold mr-4">Plaza no confirmada por ti</p>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Confirmar Plaza</button>
               </div>
            )} */}

            {/* <div className="flex items-center justify-start mb-4">
               {user.role === "Manager" && <button className="bg-blue-500 text-white px-2 py-1 rounded">Eliminar Parking</button>}

               {user.role === "User" && parking && parking.locator.id === user.id && parking.confirmations.length === 0 && (
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Eliminar Parking</button>
               )}
            </div> */}

            <div className="flex items-center mb-4">
               <Link className="hover:text-blue-700" onClick={handleDetailClick}>
                  Ver detalle
               </Link>
            </div>
         </div>
      </div>
   )
}

export default SelectedMarkerOptions
