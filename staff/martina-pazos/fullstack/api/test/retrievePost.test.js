const req = {
    method: 'GET',
    headers: {
        // bearer se utiliza un jsonwebtoken, (es un id) despues usaremos el jsonwebtoken
        Authorization: 'Bearer 656f33e2a1fe3c5429828ff0',
    },
}

fetch('http://localhost:4000/posts/657718eaa788313056865666', red)
    .then((res) => {
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
