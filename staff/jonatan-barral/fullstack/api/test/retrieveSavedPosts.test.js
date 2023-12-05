const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer 656748b08dbd4d9b3e300c5a',
    },
}

fetch('http://localhost:4000/posts/saved', req)
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
