const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer (token admin)',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'movil 2', image: 'https://images.unsplash.comphoto-1567581935884-3349723552caw=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww.jpg', description: 'descripción del móvil', price: '345 €', quantity: '5' })
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