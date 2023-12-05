const req = {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/jason'
    },
    body: JSON.stringify({ email: 'caba@llo.com', password: '123456789' })
}

fetch('http://localhost:4000/users/auth', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error.message))

            return
        }

        res.json()
            .then(body => console.log('user authenticated', body))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))