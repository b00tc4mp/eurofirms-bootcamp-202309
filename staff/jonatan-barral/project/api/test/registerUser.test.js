const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Pepito Perez', userName: 'PPerez', password: '123123123', role: 'Secretaría' })
}

fetch('http://localhost:4000/users', req)
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