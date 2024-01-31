const req = {
   method: "PATCH",
   headers: {
      "Content-Type": "application/json",
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y",
   },
   body: JSON.stringify({ password: "456456456", email: "ga2@yo.com", newEmail: "ga3@yo.com", repeatNewEmail: "ga3@yo.com" }),
}

fetch("http://localhost:4000/users/email", req)
   .then((res) => {
      if (!res.ok) {
         res.json()
            .then((body) => console.error(body))
            .catch((error) => console.error(error))

         return
      }

      console.log(res.status, "updated email")
   })
   .catch((error) => console.error(error))
