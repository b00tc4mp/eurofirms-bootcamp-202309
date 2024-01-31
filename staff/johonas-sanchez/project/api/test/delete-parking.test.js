const req = {
    method: "DELETE",
    headers: {
       Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQ5MDQ5MjN9.0cfACovG_F4SvwlO2H6EDX5MV891SIZ-z6OIqig2gkE",
    },
 }
 
 fetch("http://localhost:4000/parkings/659eba96ae7cb83921688298", req)
    .then((res) => {
       if (!res.ok) {
          res.json()
             .then((body) => console.error(body))
             .catch((error) => console.error(error))
 
          return
       }
 
       console.log(res.status, "parking deleted")
    })
    .catch((error) => console.error(error))