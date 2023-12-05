const req = {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer 656f4545976bc80e51f72821',
    },
}

fetch('http://localhost:4000/posts/6564c1cb62684fff5d0bd23a', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'deleted')
    })
    .catch(error => console.error(error))