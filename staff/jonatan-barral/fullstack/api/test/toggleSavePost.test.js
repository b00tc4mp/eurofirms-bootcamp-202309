const req = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZmNDU0NTk3NmJjODBlNTFmNzI4MjEiLCJpYXQiOjE3MDI1NjM2MTB9.sc4HVERAqLe2ApJlp0lutAqkrVMvI9_EcIyzwvZpsIM'
    }
}

fetch('http://localhost:4000/posts/656f52f1e011d77eee335eb4/saves', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status)
    })
    .catch(error => console.error(error))