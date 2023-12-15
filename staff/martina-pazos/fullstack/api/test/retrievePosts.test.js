const req = {
    method: 'GET',
    headers: {
        // bearer se utiliza un jsonwebtoken, (es un id) despues usaremos el jsonwebtoken
        Authorization: 'Bearer 65718eaa788313056865666',
    },
}

fetch('http://localhost:4000/posts', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }
        res.json()
            .then(posts => console.log(res.status, posts))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
