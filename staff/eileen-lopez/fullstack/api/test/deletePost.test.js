const req = {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer '
    }
}

fetch('http://localhost:4000/posts/', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status)
    })
    .catch(error => console.error(error))