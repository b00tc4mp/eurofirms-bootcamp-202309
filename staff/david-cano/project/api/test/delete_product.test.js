const req = {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer (token admin))'
    }
}

fetch('http://localhost:8080/products/id product?', req)
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