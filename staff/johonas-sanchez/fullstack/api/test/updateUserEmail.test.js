const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N…wNzh9.23P4JJz3AJzWbBM1sYuhmfugVxnJo4bmJ_YQhx39UOM'
    },
    body: JSON.stringify({ password: '456456456', email: 'ga2@yo.com', newEmail: 'ga3@yo.com', repeatNewEmail: 'ga3@yo.com' })
}

fetch('http://localhost:4000/users/email', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status,'updated email')
    })
    .catch(error => console.error(error))