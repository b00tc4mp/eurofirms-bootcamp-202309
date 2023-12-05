const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 656ddc296fc21579c1675d6e'
    },
    body: JSON.stringify({ password: '123123123', email: 'ga2@yo.com', newEmail: 'ga@yo.com', repeatNewEmail: 'ga2@yo.com' })
}

fetch('http://localhost:4000/users/email', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log('updated email')
    })
    .catch(error => console.error(error))