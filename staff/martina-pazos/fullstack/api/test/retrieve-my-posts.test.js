const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNWNlOGY1ZDcyOThlYmFhYzNjNjciLCJpYXQiOjE3MDI5MDkwNjksImV4cCI6MTcwMjk0NTA2OX0.-VGYmkr7vvLiqAyAKdBdU31ZUbWYvOT0lZEMWUxtu3A',
    },
}

fetch('http://localhost:4000/posts/user', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(posts => console.log(res.status, posts))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
