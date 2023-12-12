const req = {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer 656f33e2a1fe3c5429828ff0',
    },
}

fetch('http://localhost:4000/posts/657718eaa788313056865666', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'deleted')

    })
    .catch(error => console.error(error))