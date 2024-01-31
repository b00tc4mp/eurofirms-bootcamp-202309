const req = {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQzODY4MzR9.trl0VRnqMmo-bbwSoSwwrvrTCB3Y5He0GkgNUKmUtfo",
   },
   body: JSON.stringify({
      lat: 40.032425,
      long: -6.085502,
   }),
}

fetch("http://localhost:4000/parkings", req)
   .then((res) => {
      if (!res.ok) {
         res.json()
            .then((body) => console.error(body))
            .catch((error) => console.error(error))

         return
      }

      console.log(res.status, "created")
   })
   .catch((error) => console.error(error))
