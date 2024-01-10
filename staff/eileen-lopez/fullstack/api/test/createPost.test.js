const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: 'https://pbs.twimg.com/media/F-cMaSSW4AAmF1K?format=jpg&name=large', imageDescription: 'an orange and blue drawing of a girl', text: 'My new drawing' })
}

fetch('http://localhost:4000/posts', req)
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