const req = {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNWNlOGY1ZDcyOThlYmFhYzNjNjciLCJpYXQiOjE3MDI5MDkwNjksImV4cCI6MTcwMjk0NTA2OX0.-VGYmkr7vvLiqAyAKdBdU31ZUbWYvOT0lZEMWUxtu3A',
    },
    body: JSON.stringify({ password: '123123123', email: 'candy@candy.com', newEmail: 'candy2@candy.com', repeatNewEmail: 'candy2@candy.com' }),
}

fetch('http://localhost:4000/users/email', req)
    .then((res) => {
        if (!res.ok) {
            res.json()
                .then((body) => console.error(body))
                .catch((error) => console.error(error))

            return
        }

        console.log(res.status, 'updated email')
    })
    .catch((error) => console.error(error))