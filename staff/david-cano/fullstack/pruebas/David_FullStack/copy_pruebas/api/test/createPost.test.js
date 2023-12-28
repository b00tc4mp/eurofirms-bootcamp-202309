const req = {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y",
   },
   body: JSON.stringify({
      image: "https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg",
      imageDescription: "bat image 1",
      text: "hello iron 1 fetch",
   }),
}

fetch("http://localhost:4000/posts", req)
   .then((res) => {
      if (!res.ok) {
         res.json()
            .then((body) => console.error(body))
            .catch((error) => console.error(error))

         return
      }

      console.log(res.status, "created")
   })
   .catch((error) => console.error(error))
