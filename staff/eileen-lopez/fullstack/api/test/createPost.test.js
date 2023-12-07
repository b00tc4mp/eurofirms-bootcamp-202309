const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer 6565d569fd874b98654ee32f', 'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: 'https://pbs.twimg.com/media/F-JxDcxWsAA546f?format=jpg&name=small', imageDescription: 'glitched image', text: 'A broken picture' })
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