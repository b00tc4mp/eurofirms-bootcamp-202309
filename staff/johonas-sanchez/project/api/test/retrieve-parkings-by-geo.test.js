const req = {
    method: "GET",
    headers: {
       Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQ4MDA2NzV9.vY74DpSJqCCa5JrujpzwWt1DRiHGkIqMs2lscy__yvU",
    },
 }
 
 fetch("http://localhost:4000/parkings/geo?lat=40.02952&long=-6.085075&dist=1000", req)
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
 