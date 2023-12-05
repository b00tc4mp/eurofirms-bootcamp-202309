const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer 6564c1912ba786cec95c7f3f',
    },
}

fetch('http://localhost:4000/posts/6564c1cb62684fff5d0bd23a', req)
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
