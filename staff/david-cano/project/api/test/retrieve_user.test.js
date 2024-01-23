const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFmNGI4YWVkMGJmNjVmM2UzOTQ2YjEiLCJpYXQiOjE3MDU5ODcwNTEsImV4cCI6MTcwODU3OTA1MX0.6wCFG1KNk-6a3wGlksDuFl490GjMeWja5Lp3nLMHEmc',
    },
}

fetch('http://localhost:8080/users', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(body => console.log(res.status, body))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))