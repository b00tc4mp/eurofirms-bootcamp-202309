const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 6565d569fd874b98654ee32f'

    },
    body: JSON.stringify({ password: '123123123', newEmail: 'john@doe.com', repeatNewEmail: 'john@doe.com' })

}

fetch('https://localhost:4000/users/email', req)
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