const req = {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWJiYmRiNTYxMzIyOGJiMTFmYjk2MTciLCJpYXQiOjE3MDY4MDI2ODYsImV4cCI6MTcwOTM5NDY4Nn0.3dkcM5MreBooFk1V8JujDCO5fUpcGXbCOnn_wTvNKmU'
    }
}

fetch('http://localhost:8080/products/65bbd1c886cc22b811ce3c49', req)
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