const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZmNDU0NTk3NmJjODBlNTFmNzI4MjEiLCJpYXQiOjE3MDI1NjM2MTB9.sc4HVERAqLe2ApJlp0lutAqkrVMvI9_EcIyzwvZpsIM'
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