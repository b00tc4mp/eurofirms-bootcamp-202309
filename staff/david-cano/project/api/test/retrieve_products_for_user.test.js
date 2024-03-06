const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU1NGNmYmZiYmJlYzAzMDNmYWM3ZGYiLCJpYXQiOjE3MDk3MjE0ODAsImV4cCI6MTcxMjMxMzQ4MH0.3LO85E_UewZP5tOEWOXagGI73b8fZP0CISBfyh2rCao',
    },
}

fetch('http://localhost:8080/products/user', req)
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