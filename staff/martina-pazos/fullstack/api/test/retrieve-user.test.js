const req = {
    method: 'GET',
    headers: {
        Authorization: 'Beader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTgwMTQwN2EwMmE3Y2RkZjIyNzY5ZTQiLCJpYXQiOjE3MDI4OTI2NDgsImV4cCI6MTcwMjkyODY0OH0.gdhFxgt00jNrjxpuzPcnVN0V36acAqHSz9_vZt3SLQw',
    },
}

fetch('http://localhost:4000/users', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(body => console.log(res.status, body))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))