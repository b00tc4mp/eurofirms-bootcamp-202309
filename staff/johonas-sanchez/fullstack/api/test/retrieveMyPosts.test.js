const req = {
    method: 'GET',
    headers: {
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N…wNzh9.23P4JJz3AJzWbBM1sYuhmfugVxnJo4bmJ_YQhx39UOM',
    },
 }
 
 fetch('http://localhost:4000/posts/user', req)
    .then(res => {
       if (!res.ok) {
          res.json()
             .then(body => console.error(body))
             .catch(error => console.error(error))
 
          return
       }
 
       res.json()
          .then(posts => console.log(res.status, posts))
          .catch(error => console.error(error))
    })
    .catch(error => console.error(error))