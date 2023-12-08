const req = {
    method: 'POST',
    Headers: {
        'Content-Type': 'aplication/json'
        authorization: //'(justo antes del id , poner bearer(para indicar que la autorizacion esta en jsonwebtoken) (añadir mis id'

    },

    body: JSON.stringify({ image: 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', imageDescription: 'minion happy', text: 'Feliz Navidad' })
}

fetch('htttp://localhost:4000/posts', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error.message))

            return

        }
        console.log('create post')
    })
    .catch(error => console.error(error))
