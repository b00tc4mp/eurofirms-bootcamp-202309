const req = {
   method: "GET",
   headers: {
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y",
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
