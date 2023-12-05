const req = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer 656f4545976bc80e51f72821'
    }
}

fetch('http://localhost:4000/posts/656f52f6e011d77eee335eb7/likes', req)
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