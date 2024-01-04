const req = {
   method: "GET",
   headers: {
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQzODY4MzR9.trl0VRnqMmo-bbwSoSwwrvrTCB3Y5He0GkgNUKmUtfo",
   },
}

fetch("http://localhost:4000/users", req)
   .then((res) => {
      if (!res.ok) {
         res.json()
            .then((body) => console.error(body))
            .catch((error) => console.error(error))

         return
      }

      res.json()
         .then((user) => console.log(res.status, user))
         .catch((error) => console.error(error))
   })
   .catch((error) => console.error(error))
