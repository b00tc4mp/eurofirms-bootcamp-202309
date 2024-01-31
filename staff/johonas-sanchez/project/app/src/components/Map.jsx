import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet"
import L from "leaflet"

import logic from "../logic"

import { Container } from "../library"

import { ParkingDetail, SelectedMarkerOptions } from "../components"

function Map({ onError }) {
   console.log("Map")

   const [parkings, setParkings] = useState([])
   const [selectedMarker, setSelectedMarker] = useState(null)
   const [showComments, setShowComments] = useState(null)
   const [lat, setLat] = useState(-6.087581)
   const [long, setLong] = useState(40.030403)
   const [dist, setDist] = useState(500)
   const [enableParkingPositioner, setEnableParkingPositioner] = useState(false)

   const navigate = useNavigate()

   const params = useParams()
   const { parkingId } = params

   function refreshParkings() {
      if (parkingId) {
         logic
            .retrieveParking(parkingId)
            .then((parking) => {
               const long = parking.location.coordinates[0]
               const lat = parking.location.coordinates[1]

               logic
                  .retrieveParkingsByGeo(lat, long, dist)
                  .then((parkings) => {
                     setSelectedMarker(parkingId)
                     setLat(lat)
                     setLong(long)
                     setParkings(parkings)
                  })
                  .catch((error) => {
                     onError(error)
                  })
            })
            .catch((error) => {
               onError(error)
            })
      } else {
         logic
            .retrieveParkingsByGeo(lat, long, dist)
            .then((parkings) => {
               setParkings(parkings)
               setSelectedMarker(null)
               setShowComments(null)
            })
            .catch((error) => {
               onError(error)
            })
      }
   }

   useEffect(() => {
      refreshParkings()
   }, [parkingId, dist])

   function handleCommentsClick(event) {
      event.preventDefault()

      setShowComments(!showComments)
   }

   // const iconClicked = new L.Icon({
   //    iconUrl: "/red-marker.svg",
   //    iconRetinaUrl: "/red-marker.svg",
   //    iconAnchor: null,
   //    popupAnchor: null,
   //    shadowUrl: null,
   //    shadowSize: null,
   //    shadowAnchor: null,
   //    iconSize: new L.Point(60, 75),
   //    className: "leaflet-div-icon-no-border",
   // })

   // const defaultIcon = new L.Icon({
   //    iconUrl: "/blue-marker.png",
   //    iconRetinaUrl: "/blue-marker.png",
   //    iconAnchor: null,
   //    popupAnchor: null,
   //    shadowUrl: null,
   //    shadowSize: null,
   //    shadowAnchor: null,
   //    iconSize: new L.Point(30, 45),
   //    className: "leaflet-div-icon-no-border",
   // })

   const redIcon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
   })

   const defaultIcon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
   })

   function handleMarkerClick(parkingId) {
      navigate(`/parkings/${parkingId}`)
      console.log(parkingId)
   }

   function handleMarkerUnClick() {
      setSelectedMarker(false)
      setShowComments(false)
   }

   function handleParkingSaveToggle() {
      refreshParkings()
   }

   function handleParkingConfirmToggle() {
      refreshParkings()
   }

   function handleDeleteParking() {
      refreshParkings()
   }

   function MapPosition() {
      const map = useMapEvents({
         click(e) {
            const lat = e.latlng.lat
            const long = e.latlng.lng

            const confirmacionUsuario = window.confirm("¿Quieres crear un nuevo estacionamiento en esta ubicación?")

            if (confirmacionUsuario) {
               logic
                  .createParking(long, lat)
                  .then(() => {
                     refreshParkings()
                  })
                  .catch((error) => {
                     onError(error)
                  })
            }
         },
      })
      return null
   }

   const handleCheckboxChange = () => {
      setEnableParkingPositioner(!enableParkingPositioner) // Cambia el estado contrario al actual
   }

   function DragMap({ isDraggable }) {
      const map = useMap()
      isDraggable ? map.dragging.enable() : map.dragging.disable()
   }

   const handleDistChange = (event) => {
      const newDist = parseInt(event.target.value, 10)
      setDist(newDist)
   }

   return (
      <Container align="center">
         <div className="mb-8 font-bold">
            <div className="mb-3">
               Distancia de búsqueda de plazas
               <select className="ml-2 font-normal" value={dist} onChange={handleDistChange}>
                  <option value={100}>100 m</option>
                  <option value={200}>200 m</option>
                  <option value={300}>300 m</option>
                  <option value={400}>400 m</option>
                  <option value={500}>500 m</option>
                  <option value={1000}>1000 m</option>
               </select>
            </div>
            <input className="mb-5" type="checkbox" checked={enableParkingPositioner} onChange={handleCheckboxChange} />
            <label className="ml-2">Habilitar Posicionar Plaza</label>

            <MapContainer center={[40.03116, -6.08845]} zoom={15} scrollWheelZoom={true} style={{ width: 550, height: 300 }}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {parkings.map((parking) => (
                  <Marker
                     icon={parking.id === selectedMarker ? redIcon : defaultIcon}
                     key={parking.id}
                     position={[parking.location.coordinates[0], parking.location.coordinates[1]]}
                     eventHandlers={{
                        click: (e) => {
                           handleMarkerClick(parking.id)
                        },
                     }}
                  ></Marker>
               ))}
               {enableParkingPositioner && <MapPosition />}
               <DragMap isDraggable={!enableParkingPositioner} />
            </MapContainer>

            <div className="mt-8">
               {selectedMarker && (
                  <SelectedMarkerOptions
                     selectedMarker={selectedMarker}
                     onMarkerUnClick={handleMarkerUnClick}
                     onDetailClick={handleCommentsClick}
                     parkings={parkings}
                     onError={onError}
                     onParkingSaveToggled={handleParkingSaveToggle}
                     onParkingConfirmToggled={handleParkingConfirmToggle}
                     onDeleteParking={handleDeleteParking}
                     showComments={showComments}
                  />
               )}
            </div>

            {showComments && <ParkingDetail parkingId={selectedMarker} onError={onError} />}
         </div>
      </Container>
   )
}

export default Map
