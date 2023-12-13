const req = {
    method: 'DELETE',
    headers: {
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N…wNzh9.23P4JJz3AJzWbBM1sYuhmfugVxnJo4bmJ_YQhx39UOM',
    },
 }
 
 fetch('http://localhost:4000/posts/656dee156fc21579c1675e0b', req)
    .then(res => {
       if (!res.ok) {
          res.json()
             .then(body => console.error(body))
             .catch(error => console.error(error))
 
          return
       }

       console.log(res.status, 'deleted')
    })
    .catch(error => console.error(error))