const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '
    },
    body: JSON.stringify({ password: '123456789', newPassword: '456456456', repeatNewPassword: '456456456' })
}

fetch('http://localhost:4000/users/password', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'updated password')
    })
    .catch(error => console.error(error))