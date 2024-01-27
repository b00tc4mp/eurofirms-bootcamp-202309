const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer (token admin?))',
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