const req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 656ddc296fc21579c1675d6e'
    },
    body: JSON.stringify({ image: 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', imageDescription: 'bat image 1', text: 'hello iron 1 fetch' })
}

fetch('http://localhost:4000/posts', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status, 'created')
    })
    .catch(error => console.error(error))