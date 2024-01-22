const req = {
    method: "GET",
    headers: {
       Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWE3YWEwMzIyODJhZTc0NTAyYmM1ZjYiLCJpYXQiOjE3MDU4Mjg1NTJ9.Ks8hKgiICqalPICs7HfsDl9e7fZeIbgDBVX0voE2aKI",
    },
 }
 
 fetch("http://localhost:4000/reviews/65a7aa032282ae74502bc601", req)
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
 