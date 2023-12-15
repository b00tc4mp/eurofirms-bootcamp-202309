const req = {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer 657b33bcfcda74595a33322b'
    }
}

fetch('http://localhost:4000/posts/657718eaa788313056865666', req)
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