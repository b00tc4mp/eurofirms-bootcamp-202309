const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZmNDU0NTk3NmJjODBlNTFmNzI4MjEiLCJpYXQiOjE3MDI1NjM2MTB9.sc4HVERAqLe2ApJlp0lutAqkrVMvI9_EcIyzwvZpsIM',
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