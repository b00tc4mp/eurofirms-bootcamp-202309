const req = {
    method: 'DELETE',
    heather: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNjFjM2U5NDBlMjM0NGFhN2JmMDQiLCJpYXQiOjE3MDI5MDY1NTUsImV4cCI6MTcwMjk0MjU1NX0.C0cSO38rN4_E5WllSWujE9xEJNhZIcmju6Me3p_LEgI'
    }
}

fetch('http://localhost:4000/posts/6571b5754fba0c76963acd33', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status)
    })
    .catch(error => console.error(error))