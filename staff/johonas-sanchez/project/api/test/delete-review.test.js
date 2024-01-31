const req = {
    method: "DELETE",
    headers: {
       Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQ4MDA2NzV9.vY74DpSJqCCa5JrujpzwWt1DRiHGkIqMs2lscy__yvU",
    },
 }
 
 fetch("http://localhost:4000/reviews/659eb148310c34fc5756430b", req)
    .then((res) => {
       if (!res.ok) {
          res.json()
             .then((body) => console.error(body))
             .catch((error) => console.error(error))
 
          return
       }
 
       console.log(res.status, "review deleted")
    })
    .catch((error) => console.error(error))