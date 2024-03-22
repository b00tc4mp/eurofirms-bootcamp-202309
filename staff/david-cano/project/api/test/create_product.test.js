const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWJiZGY0ODExNzI2NzQwYjhhNTFmZjgiLCJpYXQiOjE3MDY4MTEyNTAsImV4cCI6MTcwOTQwMzI1MH0.OXyUjSzFyPtz9KpMkDegrO5k4NiiMHTxouaSFDKUY-4',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'movil 0', img: 'https://i.blogs.es/422d7f/xiaomi-mi-mix-fold-6/1366_2000.jpg', description: 'descripción del móvil', price: '425 €', quantity: 2 })
}

fetch('http://localhost:8080/products', req)
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