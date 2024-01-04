const req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Antonio Carmona', email: 'antonio@carmona.com', password: '123123123', role: 'User' })
}

fetch('http://localhost:4000/users', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'user registered')
    })
    .catch(error => console.error(error))