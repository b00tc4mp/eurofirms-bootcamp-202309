const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer 65718eca788313056865666',
    },
}

fetch('http://localhost:4000/posts/mine', req)
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
