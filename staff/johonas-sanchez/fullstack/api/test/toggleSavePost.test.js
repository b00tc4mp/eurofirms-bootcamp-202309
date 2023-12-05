const req = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer 656748b08dbd4d9b3e300c5a'
    }
}

fetch('http://localhost:4000/posts/656dee936fc21579c1675e0e/saved', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'post saved')
    })
    .catch(error => console.error(error))