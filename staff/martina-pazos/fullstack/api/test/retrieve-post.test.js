const req = {
    method: "GET",
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNWNlOGY1ZDcyOThlYmFhYzNjNjciLCJpYXQiOjE3MDI5MzgyNTgsImV4cCI6MTcwMjk3NDI1OH0.nFByX_z8lhmli3Dn_VRaiSb-J0anKPXg05b-HZ3iN5A'
    },
}

fetch("http://localhost:4000/posts", req)
    .then((res) => {
        if (!res.ok) {
            res.json()
                .then((body) => console.error(body))
                .catch((error) => console.error(error))

            return
        }

        res.json()
            .then((posts) => console.log(res.status, posts))
            .catch((error) => console.error(error))
    })
    .catch((error) => console.error(error))