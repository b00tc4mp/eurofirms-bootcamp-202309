const req = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNWNlOGY1ZDcyOThlYmFhYzNjNjciLCJpYXQiOjE3MDI2NTk1MTUsImV4cCI6MTcwMjY5NTUxNX0.8oObLPIYQuWQFghKImDDMHwk8g_593CZ3R-tEvKrQ-4'
    }
}

fetch('http://localhost:4000/posts/657c7df1cdfb31642f9ffeaf/saves', req)
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