const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 656ddc296fc21579c1675d6e'
    },
    body: JSON.stringify({ password: '123123123', newPassword: '456456456', repeatNewPassword: '456456456' })
}

fetch('http://localhost:4000/users/password', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log('updated password')
    })
    .catch(error => console.error(error))