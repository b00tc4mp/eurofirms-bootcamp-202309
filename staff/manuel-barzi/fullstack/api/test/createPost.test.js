const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', imageDescription: 'minion image', text: 'hello minion' })
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