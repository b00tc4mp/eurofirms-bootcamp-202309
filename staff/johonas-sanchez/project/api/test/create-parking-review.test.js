const req = {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQ4MDA2NzV9.vY74DpSJqCCa5JrujpzwWt1DRiHGkIqMs2lscy__yvU",
   },
   body: JSON.stringify({
      comment: "Plaza pequeña",
      valuation: 6,
   }),
}

fetch("http://localhost:4000/659e61c3b1aee9e66a5e40a5/reviews", req)
   .then((res) => {
      if (!res.ok) {
         res.json()
            .then((body) => console.error(body))
            .catch((error) => console.error(error))

         return
      }

      console.log(res.status, "create parking review")
   })
   .catch((error) => console.error(error))
