const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer 657b33bcfcda74595a33322b',
        'Content-Type': 'aplication/json'
    },
    //justo antes del id , poner bearer(para indicar que la autorizacion esta en jsonwebtoken) 


    body: JSON.stringify({ image: 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', imageDescription: 'minion happy', text: 'hello minion' })
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
