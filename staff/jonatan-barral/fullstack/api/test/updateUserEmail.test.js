const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 6564c1912ba786cec95c7f3f'
    },
    body: JSON.stringify({ password: '123456789', newEmail: 'supermario@land.com', repeatNewEmail: 'supermario@land.com' })
}

fetch('http://localhost:4000/users/email', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'updated email')
    })
    .catch(error => console.error(error))