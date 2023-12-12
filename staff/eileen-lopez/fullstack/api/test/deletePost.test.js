const req = {
    method:'DELETE',
    headers: {
        Authorization: 'Bearer 6565d569fd874b98654ee32f',
    },
}

fetch('https://localhost:4000/posts/6565d5c37b007c99782d1323', req)
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