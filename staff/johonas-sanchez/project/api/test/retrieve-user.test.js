const req = {
   method: "GET",
   headers: {
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFlN2M3YmQ4YTcwNTM1ODIwMDlmNGUiLCJyb2xlIjoibWFuYWdlciIsImlhdCI6MTcwNTk5OTMyOX0.4aSP8u7f6NeGkPkIV4jj9Vf0LizlHz3UBWMz-ytyTRI",
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
         .then((user) => {// Convert userId to ObjectId
         const userId = new ObjectId(user.id)
         console.log(res.status, userId)
   })
         .catch((error) => console.error(error))
   })
   .catch((error) => console.error(error))
