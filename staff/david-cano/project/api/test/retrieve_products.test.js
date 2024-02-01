const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWJiZGY0ODExNzI2NzQwYjhhNTFmZjgiLCJpYXQiOjE3MDY4MTEyNTAsImV4cCI6MTcwOTQwMzI1MH0.OXyUjSzFyPtz9KpMkDegrO5k4NiiMHTxouaSFDKUY-4',
    },
}

fetch('http://localhost:8080/products', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(products => console.log(res.status, products))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))