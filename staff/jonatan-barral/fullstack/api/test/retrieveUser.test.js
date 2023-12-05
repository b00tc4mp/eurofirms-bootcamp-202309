const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer 6564c1912ba786cec95c7f3f',
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