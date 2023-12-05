const req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'caballo', email: 'caba@yo.com', password: '123456789' })
}

fetch('http://localhost:4000/users', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log('user registered')
    })
    .catch(error => console.error(error))