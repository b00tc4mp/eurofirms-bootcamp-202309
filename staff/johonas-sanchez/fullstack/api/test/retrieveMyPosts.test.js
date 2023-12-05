const req = {
    method: "GET",
    headers: {
       Authorization: "Bearer 656ddc296fc21579c1675d6e",
    },
 }
 
 fetch("http://localhost:4000/posts/user", req)
    .then(res => {
       if (!res.ok) {
          res.json()
             .then((body) => console.error(body))
             .catch((error) => console.error(error))
 
          return
       }
 
       res.json()
          .then((posts) => console.log(posts))
          .catch((error) => console.error(error))
    })
    .catch((error) => console.error(error))