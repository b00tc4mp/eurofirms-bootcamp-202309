const req = {
   method: "GET",
   headers: {
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NWFlN2M3YmQ4YTcwNTM1ODIwMDlmNGYiLCJyb2xlIjoicmVndWxhciJ9LCJpYXQiOjE3MDU5MzU1Nzd9.0CWNZP2-VztFhhcntYg0zrU0cEYRJWsWKp9xr0tFCmw",
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
         const userId = new ObjectId(user.userId)
         console.log(res.status, userId)
   })
         .catch((error) => console.error(error))
   })
   .catch((error) => console.error(error))
