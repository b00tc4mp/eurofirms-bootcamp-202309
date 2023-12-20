const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZmNDU0NTk3NmJjODBlNTFmNzI4MjEiLCJpYXQiOjE3MDI1NjM2MTB9.sc4HVERAqLe2ApJlp0lutAqkrVMvI9_EcIyzwvZpsIM'
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