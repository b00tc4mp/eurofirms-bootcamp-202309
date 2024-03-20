const req = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU5YTY0MDczMTE3YzZkNDQ3ZmFhZTAiLCJpYXQiOjE3MTA5MDYzNDQsImV4cCI6MTcxMzQ5ODM0NH0.6JMvXBE-iG9PCZSYNo3q9szU23jkfwOh9mth9UM4OsA',
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        quantity: 2
    })

}

fetch('http://localhost:8080/products/forUser/65e551173f7f7003d4fc8fc2/quantity', req)
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