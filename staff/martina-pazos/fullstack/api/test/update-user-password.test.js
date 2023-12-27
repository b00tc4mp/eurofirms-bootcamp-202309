const req = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNWNlOGY1ZDcyOThlYmFhYzNjNjciLCJpYXQiOjE3MDI5MzgyNTgsImV4cCI6MTcwMjk3NDI1OH0.nFByX_z8lhmli3Dn_VRaiSb-J0anKPXg05b-HZ3iN5A'
    },
    body: JSON.stringify({ password: "123123123", newPassword: "456456456", repeatNewPassword: "456456456" }),
}

fetch("http://localhost:4000/users/password", req)
    .then((res) => {
        if (!res.ok) {
            res.json()
                .then((body) => console.error(body))
                .catch((error) => console.error(error))

            return
        }

        console.log(res.status, "updated password")
    })
    .catch((error) => console.error(error))